// import $j from "jquery";
// 处理来自background.js或者popup发送的消息
const messageListener = function(message, sender, sendResponse) {
    clean();
}
chrome.runtime.onMessage.addListener(messageListener);
function clean() {
    $(".left-toolbox, " +
        ".blog_container_aside, " +
        "#rightAside, " +
        "#csdn-toolbar, " +
        ".csdn-side-toolbar").remove();

    $("body").css({
        "min-width": "1px"
    });
    $("#mainBox").css({
        width: "100%"
    });
    $("#mainBox main").css({
        width: "100%"
    });
    $("code, code span").css({
        "word-wrap":"break-word",
        "word-break":"normal"
    });
    // document.getElementById("rightAside").remove();
    // document.getElementById("csdn-toolbar").remove();
    // document.getElementsByClassName("left-toolbox")[0].remove();
    // document.getElementsByClassName("blog_container_aside")[0].remove();
    // document.getElementsByClassName("csdn-side-toolbar")[0].remove();
    // document.getElementsByTagName("body")[0].style.minWidth = "1px";
    // document.getElementById("mainBox").style.width="100%";
    // document.getElementsByTagName("main")[0].style.width="100%";
}
