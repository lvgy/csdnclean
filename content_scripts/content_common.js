// 处理来自background.js或者popup发送的消息
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.menuItemId === "clean-page") {
        clean();
    }

    if(!!message.requestDetails) {
        console.debug("sending request:" + message.requestDetails.url)
    }
});