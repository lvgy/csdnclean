module.exports = {
    // Global options:
    ignoreFiles: [
        "csdnclean.iml",
        "web-ext-config.js",
    ],
    // verbose: true,
    // Command options:
    build: {
        // asNeeded: true       //有文件更改后自动打包
        overwriteDest: true //覆盖同名文件
    },
    run: {
        startUrl: [             //打开浏览器时自动打开网址
            // "https://blog.csdn.net/laravelshao/article/details/82318063",
            "www.baidu.com",
        ],
        target: ["chromium", "firefox-desktop"],
        reload: true,          //有文件更改时自动重新加载扩展，默认ture
        watchFile: [          //指定的文件发生变动时才重新加载

        ],
        browserConsole: false,   //启动时打开调试窗口，默认false
        args: [
            "--verbose"
        ]
    },
    //在浏览器中打开web-ext文档
    docs: {
        // version: true
    }
};