const moment = require('moment');

module.exports = {
    '@vuepress/last-updated':
    {
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale('zh-cn')
            return moment(timestamp).format("lll")
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
        selector: 'img.x'
    },
}