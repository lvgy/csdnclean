// 向所有标签发送消息
const sendMessages = function (tabs, message) {
    tabs.forEach(tab => {
        browser.tabs.sendMessage( tab.id, message ).then(response => {
            console.log("来自content_script的消息:", response.response);
        }).catch(function(error) {});
    });
}

// 处理点击事件
const buttonClickListener = function(event) {
    event.preventDefault();
    const color = event.target.dataset.color;
    const message = { color: color };

    browser.tabs.query( {currentWindow: true} )
        .then( tabs => sendMessages(tabs, message) )
        .catch( error => console.log('标签页查询错误：', error) );
};
const list = document.querySelectorAll(".color-button");
list.forEach( element => element.addEventListener('click', buttonClickListener) );
