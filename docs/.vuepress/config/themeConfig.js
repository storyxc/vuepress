const nav = require("./nav.js");
const htmlModules = require("./htmlModules.js");

// Theme Config
module.exports = {
  nav,
  sidebarDepth: 2,
  repo: "storyxc",
  searchMaxSuggestions: 10,
  lastUpdated: "上次更新",
  docsRepo: "storyxc",
  docsDir: "docs",
  docsBranch: "main",
  editLinks: true,
  editLinkText: "编辑",

  // Vdoing Theme Config
  sidebar: { mode: "structuring", collapsable: false },

  updateBar: {
    showToArticle: false
  },

  category: true,
  tag: true,
  archive: true,

  author: {
    name: "storyxc",
    href: "https://github.com/storyxc"
  },

  social: {
    icons: [
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/storyxc"
      },
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: "mailto:storyxc@163.com"
      }
    ]
  },

  footer: {
    createYear: 2019,
    copyrightInfo: [
      '<a href="https://storyxc.com" target="_blank" style="font-weight:bold">story</a>',
      ' | ',
      '<a href="http://beian.miit.gov.cn/" target=_blank>豫ICP备19046036号</a>',
    ].join('')
  },

  htmlModules
};
