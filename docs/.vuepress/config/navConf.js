module.exports = [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
    {
        text: '分类',
        items: [
            { text: 'Java', link: '/java/' },
            { text: 'Python', link: '/python/' },
            { text: 'Linux', link: '/linux/'},
            { text: '实践', link: '/actions/'},
            //{ text: '内功', link: '/base/'},
            { text: 'Docker', link: '/docker/'},
        ]
    },
    {
        text: '在线工具',
        items: [
            {
                text: '文档', items: [
                    { text: 'Java', link: 'https://www.runoob.com/java/java-tutorial.html' },
                    { text: 'Python', link: 'https://python3-cookbook.readthedocs.io/zh_CN/latest/index.html' },
                    { text: 'Vue', link: 'https://cn.vuejs.org/' },
                    { text: 'Vuepress', link: 'https://vuepress.vuejs.org/zh/' }
                ]
            },
            {
                text: '在线编辑', items: [
                    { text: 'JSON编辑器', link: 'https://www.bejson.com/jsoneditoronline' },
                    { text: 'CRON表达式', link: 'https://cron.qqe2.com/' },
                ]
            }
        ]

    },
    { text: '壁纸', link: 'https://www.storyxc.com/images'},
    { text: '关于我', link: '/guide/about' },
]