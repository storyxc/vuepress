const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf")
const navConf = require("./config/navConf")
module.exports = {
    title: '故事',
    description: '故事的vuepress博客',
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        logo: '/assets/img/story.jpg',
        lastUpdated: 'Last Updated',
        nav: navConf,
        searchMaxSuggestions: 10
    }
}