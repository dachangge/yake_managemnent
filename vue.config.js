// module.exports = {
//     baseUrl: '/',
//
//     outputDir: 'dist',
//
//     assetsDir: 'static',
//
//     filenameHashing: true,
//
//
//     // 配置路径别名
//     chainWebpack: config => {
//         config.resolve.alias
//             .set('@', resolve('src'))
//     },
//     // eslint-loader 是否在保存的时候检查
//     lintOnSave: true,
//
//     // 是否使用包含运行时编译器的Vue核心的构建
//     runtimeCompiler: false,
//
//     // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
//     transpileDependencies: [],
//
//     // 生产环境 sourceMap
//     productionSourceMap: false,
//
//     // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
//     // corsUseCredentials: false,
//     // webpack 配置，键值对象时会合并配置，为方法时会改写配置
//     // https://cli.vuejs.org/guide/webpack.html#simple-configuration
//     // configureWebpack: (config) => {
//     // },
//
//     // webpack 链接 API，用于生成和修改 webapck 配置
//     // https://github.com/mozilla-neutrino/webpack-chain
//     chainWebpack: (config) => {
//         // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
//         config.optimization
//             .splitChunks({
//                 cacheGroups: {}
//             });
//
//         // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
//         config.module
//             .rule('eslint')
//             .exclude
//             .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
//             .end()
//     },
//
//     // 配置高于chainWebpack中关于 css loader 的配置
//     css: {
//         // 是否开启支持 foo.module.css 样式
//         modules: false,
//
//         // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
//         extract: true,
//
//         // 是否构建样式地图，false 将提高构建速度
//         sourceMap: false,
//
//         // css预设器配置项
//         loaderOptions: {
//             css: {
//                 // options here will be passed to css-loader
//             },
//
//             postcss: {
//                 // options here will be passed to postcss-loader
//             }
//         }
//     },
//
//     // All options for webpack-dev-server are supported
//     // https://webpack.js.org/configuration/dev-server/
//     devServer: {
//         open: true,
//
//         host: '127.0.0.1',
//
//         port: 3000,
//
//         https: false,
//
//         hotOnly: false,
//
//         proxy: null,
//
//         // before: app => {
//         // }
//     },
//     // 构建时开启多进程处理 babel 编译
//     parallel: require('os').cpus().length > 1,
//
//     // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
//     pwa: {},
//
//     // 第三方插件配置
//     pluginOptions: {}
// };

/**
 * *@2018-10-08
 * *@author trsoliu
 * *@describe vue-cli 3.x配置文件
 */
// const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
// const CompressionPlugin = require('compression-webpack-plugin'); //Gzip
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //Webpack包文件分析器

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    //基本路径
    baseUrl: '/central/',
    //输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    //以多页模式构建应用程序。
    pages: undefined,
    //是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,
    //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
    parallel: require('os').cpus().length > 1,
    //生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: false,
    // webpack配置
    //对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // chainWebpack: config => {
        /**
         * 删除懒加载模块的prefetch，降低带宽压力
         * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
         * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
         */
        //config.plugins.delete('prefetch');
        //if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
        //} else {// 为开发环境修改配置...
        //}
    // },
    //调整 webpack 配置 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
    configureWebpack: config => {
        // config.plugins = [
        //     new CopyWebpackPlugin([ { from: path.resolve(__dirname, './static'), to: 'static'}])
        // ]
        //生产and测试环境
        // let pluginsPro = [
        //     new CompressionPlugin({ //文件开启Gzip，也可以通过服务端(如：nginx)(https://github.com/webpack-contrib/compression-webpack-plugin)
        //         filename: '[path].gz[query]',
        //         algorithm: 'gzip',
        //         test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$', ),
        //         threshold: 8192,
        //         minRatio: 0.8,
        //     }),
        //     //	Webpack包文件分析器(https://github.com/webpack-contrib/webpack-bundle-analyzer)
        //     new BundleAnalyzerPlugin(),
        // ];
        //开发环境
        // let pluginsDev = [
        //     //移动端模拟开发者工具(https://github.com/diamont1001/vconsole-webpack-plugin  https://github.com/Tencent/vConsole)
        //     new vConsolePlugin({
        //         filter: [], // 需要过滤的入口文件
        //         enable: true // 发布代码前记得改回 false
        //     }),
        // ];
        // if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
        //     config.plugins = [...config.plugins, ...pluginsPro];
        // } else {
        //     // 为开发环境修改配置...
        //     // config.plugins = [...config.plugins, ...pluginsDev];
        // }
    },
    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps，一般不建议开启
        sourceMap: false,
        // css预设器配置项
        // loaderOptions: {
        //     sass: {
        //         //设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
        //         data: `
		// 		$baseUrl: "/";
		// 		@import '@/assets/scss/_common.scss';
		// 		`
        //         //data: `
        //         //$baseUrl: "/";
        //         //`
        //     }
        // }
    },
    // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
        // host: 'localhost',

        host: "0.0.0.0",
        port: 7000, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
        hotOnly: true, // 热更新
        proxy: 'http://yousouyun.gotoip2.com'   // 配置跨域处理,只有一个代理
        // proxy: { //配置自动启动浏览器
        //     "/rest/*": {
        //         target: "http://172.16.1.12:7071",
        //         changeOrigin: true,
        //         // ws: true,//websocket支持
        //         secure: false
        //     },
        //     "/pbsevice/*": {
        //         target: "http://172.16.1.12:2018",
        //         changeOrigin: true,
        //         //ws: true,//websocket支持
        //         secure: false
        //     },
        // }
    },

    // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
    pluginOptions: {
        'style-resources-loader': {//https://github.com/yenshih/style-resources-loader
            preProcessor: 'scss',//声明类型
            'patterns': [
                //path.resolve(__dirname, './src/assets/scss/_common.scss'),
            ],
            //injector: 'append'
        }
    }
};