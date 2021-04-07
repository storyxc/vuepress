const moment = require('moment');
module.exports = {
    title: '故事',
    description: '故事的vuepress博客',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ['meta', { name: 'author', content: '故事' }],
        ['meta', { name: 'keywords', content: 'Java,Python,Vue,VuePress,后端开发' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale('zh-cn')
                    return moment(timestamp).format("lll")
                }
            }
        ],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
            }
        }
        ]
    ],
    themeConfig: {
        logo: '/assets/img/story.jpg',
        lastUpdated: 'Last Updated',
        nav: [
            { text: '指南', link: '/guide/' },
            { text: 'Java', link: '/java/' },
            { text: 'Python', link: '/python/' },
            {
                text: '在线文档',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Python', link: 'https://python3-cookbook.readthedocs.io/zh_CN/latest/index.html' },
                    { text: 'Vue', link: 'https://cn.vuejs.org/' }
                ]
            },
            { text: 'github', link: 'https://github.com/storyxc' },
        ]
    }
}