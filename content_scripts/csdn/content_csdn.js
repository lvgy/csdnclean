function clean() {
    console.debug("清理csdn");
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
setInterval(function() {
    clean();
}, 100);