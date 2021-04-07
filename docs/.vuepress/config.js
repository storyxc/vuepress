module.exports = {
    title: '故事',
    description: '故事的vuepress博客',
    head: [
        ['link', {rel: 'icon', href: '/assets/img/favicon.ico'}],
        ['meta', {name: 'author', content: '故事'}],
        ['meta', {name: 'keywords', content: 'Java,Python,Vue,VuePress,后端开发'}]
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