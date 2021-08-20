function sendMessageToCurrentTab(message) {
    browser.tabs.query({
        active: true,
        currentWindow: true
    }).then(tabs => {
        browser.tabs.sendMessage(tabs[0].id, message);
    });
}
chrome.webRequest.onBeforeRequest.addListener(
    requestDetails => {
        sendMessageToCurrentTab({requestDetails:requestDetails});
        // console.debug("send request: " + requestDetails.url);
    },
    {urls: ["<all_urls>"]}
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