function sendMessageToCurrentTab(message) {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(tabs => {
        browser.tabs.sendMessage(tabs[0].id, message);
    });
}
const urlPattern = [
    // "*://*.xl720.com/tmp/tall.js*",
    "<all_urls>"
]
function redirect(requestDetails) {
    console.debug("Redirecting: " + requestDetails.url);
    return {
        redirectUrl: ""
    };
}
function listener(details) {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();

    filter.ondata = event => {
        let str = decoder.decode(event.data, {stream: true});
        // Just change any instance of Example in the HTTP response
        // to WebExtension Example.
        str = str.replace(/Example/g, 'WebExtension Example');
        filter.write(encoder.encode(str));
        filter.disconnect();
    }

    return {};
}
chrome.webRequest.onBeforeRequest.addListener(
    requestDetails => sendMessageToCurrentTab({requestDetails:requestDetails}),
    {urls: urlPattern},
    ["blocking"]
);

// 添加右键菜单
browser.contextMenus.create({
    id: "clean-page",
    title: "清理网页"
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    const message = {
        menuItemId: info.menuItemId
    }
    sendMessageToCurrentTab(message)
});

// 监听地址栏按钮点击事件
browser.pageAction.onClicked.addListener(function (message) {
    sendMessageToCurrentTab({
        pageAction: true
    })
});