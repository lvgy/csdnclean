function clean() {
    $("#content_left > div").each(function(index, element) {
        const div = this;
        $(div).find("a,span").each(function (index, element) {
            if($(this).text().indexOf("广告") >= 0) {
                console.debug("清理广告");
                div.remove();
            }
        })
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
setInterval(function() {
    clean();
}, 100);
