// import $j from "jquery";
// 处理来自background.js或者popup发送的消息
const messageListener = function(message, sender, sendResponse) {
    switch (message.website) {
        case "csdn":
            cleanCsdn();
            break;
        case "baidu":
            cleanBaidu();
    }
}
browser.runtime.onMessage.addListener(messageListener);
function cleanCsdn() {
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
}

function cleanBaidu() {
    $("#content_left > div").each(function(index, element) {
        if(!this.hasAttribute("id")) {
            this.remove();
        }
        $(this).css({
            width: "100%"
        })
    })
    $("#content_left").css({
        width: "80%"
    })
    $("#content_right").remove();
}

window.onload = function () {
    cleanBaidu();
}
