function clean() {
    console.debug("清理baidu");
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
    console.debug("自动清理");
    clean();
}
