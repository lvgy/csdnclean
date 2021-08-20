// 向当前标签发送消息
function sendMessages(tab, message) {
    browser.tabs.sendMessage( tab[0].id, message )
        .then(response => {
            console.debug("来自content_script的消息:", response.response);
        })
        .catch(function(error) {});
}
function sengMessageToCurrentTab(message) {
    const parameters = {
        active: true,
        currentWindow: true
    };
    browser.tabs.query( parameters )
        .then( tabs => sendMessages(tabs, message) )
        .catch( error => console.debug('标签页查询错误：', error) );
}

// 处理点击事件
const buttonClickListener = function(event) {
    sengMessageToCurrentTab({
        website: event.target.dataset.website
    });

};
document.querySelectorAll(".website-button").forEach( element => element.addEventListener('click', buttonClickListener) );
