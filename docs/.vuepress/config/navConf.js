module.exports = [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },

    {
        text: 'Java',
        ariaLabel: 'Java Menu',
        items: [
            { text: 'Java基础', link: '/java/base/' },
            { text: 'Java框架', link: '/java/framework/' },
            { text: '中间件', link: '/java/middleware/' },
            { text: '数据库', link: '/java/db/' },
            { text: '其他', link: '/java/others/' }
        ]
    },
    {
        text: 'Python',
        ariaLabel: 'Python Menu',
        items: [
            { text: 'Python基础', link: '/python/base/' },
            { text: 'Python爬虫', link: '/python/spider/' },
            { text: 'PythonWeb框架', link: '/python/framework/' },
            { text: '其他', link: '/python/others/' }
        ]
    },
    {
        text: '在线文档',
        ariaLabel: 'Docs Menu',
        items: [
            { text: 'Java', link: 'https://www.runoob.com/java/java-tutorial.html' },
            { text: 'Python', link: 'https://python3-cookbook.readthedocs.io/zh_CN/latest/index.html' },
            { text: 'Vue', link: 'https://cn.vuejs.org/' }
        ]
    },
    { text: '壁纸', link: 'https://www.storyxc.com/images' },
    { text: 'github', link: 'https://github.com/storyxc' },
]