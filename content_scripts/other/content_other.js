window.onload = function () {
    console.debug("自动清理");
    clean();
}
function clean() {
    console.debug("清理");
    $("#HMcoupletDivleft, " +
        "#HMcoupletDivright, " +
        "#HMRichBox").remove();
    $("#wrap-fixed").parent().remove();
}
console.debug("加载文件");
setInterval(function() {
    // clean();
}, 100);