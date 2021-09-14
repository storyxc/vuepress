const moment = require('moment');
import moment from 'moment-timezone'

module.exports = {
    '@vuepress/last-updated':
    {
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment');
            moment.locale('zh-cn');
            moment.tz.setDefault("Asia/Shanghai");
            console.log(moment(timestamp).format("lll"));
            return moment(timestamp).format("lll")；
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
        selector: 'img.x'
    },
}