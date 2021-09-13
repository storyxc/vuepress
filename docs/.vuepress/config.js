const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf")
const navConf = require("./config/navConf")

module.exports = {
  title: '故事',
  description: '故事的vuepress博客',
  head: headConf,
  plugins: pluginsConf,
  // markdown: {
  //   lineNumbers: true
  // },
  themeConfig: {
    //logo: '/assets/img/story.jpg',
    lastUpdated: 'Last Updated',
    nav: navConf,
    repo: 'storyxc/vuepress',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'main',
    editLinkText: '编辑',
    //displayAllHeaders: true,
    sidebar: {
      '/guide/': getGuideSidebar('指南', '博客历史', '关于我'),
      '/java/': getJavaSidebar('Java基础', 'Java框架', '中间件', '数据库', '开发工具', '其他'),
      '/python/': getPythonSidebar('Python基础', 'Python爬虫', 'PythonWeb', '脚本及其他'),
      '/linux/': getLinuxSidebar('linux'),
      '/actions/': getActionSidebar('工具', '环境', '设计模式'),
      //'/base/': getBaseSidebar('计算机网络', '数据结构与算法', '操作系统', '计算机组成原理'),
    }
  }
}

function getGuideSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'changelog',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'about'
      ]
    }
  ]
}

function getJavaSidebar(base, frame, midware, db, tools, others) {
  return [
    {
      title: base,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        'String类的深入学习',
        'JDK1.8 HashMap源码学习',

      ]
    },
    {
      title: frame,
      collapsable: false,
      children: [
        'POI事件模式解析并读取Excel文件数据',
        'SpringMVC的执行流程源码分析',
        'netty+websocket实现即时通讯功能',
        '分布式定时任务解决方案xxl-job',

      ]
    },
    {
      title: midware,
      collapsable: false,
      children: [
        '分布式锁解决方案',
        '关于消息中间件MQ',
        'kafka学习记录',
        'kakfa实践',
      ]
    },
    {
      title: db,
      collapsable: false,
      children: [
        'MySql索引',
        'SQL优化学习',
      ]
    },
    {
      title: tools,
      collapsable: false,
      children: [
        'Maven的生命周期',
      ]
    },
    {
      title: others,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        'linux服务器安装OpenOffice踩坑',
        'POI踩坑-zip file is closed',
        'OpenJDK没有jstack等命令的解决办法',
        'ribbon刷新服务列表间隔和canal的坑',
        '微信小程序加密数据对称解密工具类',
      ]
    }
  ]
}

function getPythonSidebar(base, spider, web, others) {
  return [
    {
      title: base,
      collapsable: false,
      children: [
        'python基础语法',
        'python基础进阶',
        '异步编程',
      ]
    },
    {
      title: spider,
      collapsable: false,
      children: [
        'requests模块入门',
        '验证码识别和模拟登录',
        '多线程爬取梨视频网站的热门视频',
        'selenium模块',
        'python配合ffmpeg下载bilibili视频',
        'scrapy框架入门',
        'scrapy进阶',
        'CrawlSpider全站爬取',
        '分布式爬虫和增量式爬虫',
        '增量式爬虫实践案例 下载指定b站up主的所有作品',
      ]
    },
    {
      title: web,
      collapsable: false,
      children: [
        'pymysql使用',
        'Django入门',
      ]
    },
    {
      title: others,
      collapsable: false,
      children: [
        'argparse模块入门',
      ]
    }
  ]
}

function getActionSidebar(tools, environment,design) {
  return [
    {
      title: tools,
      collapsable: false,
      children: [
        'git命令整理',
        'Markdown基础语法',
        'Typora、PicGo、七牛云实现markdown图片自动上传图床',
      ]
    },
    {
      title: environment,
      collapsable: false,
      children: [
        'Windows下Docker Desktop安装',
        'git配置socks5代理解决github上down代码慢的问题',
        'mysql启动报错排查及处理',
        'macOS开启终端的代理',
      ]
    },
    {
      title: design,
      collapsable: false,
      children: [
        '策略模式的具体实现',
      ]
    },
    // {
    //   title: others,
    //   collapsable: false,
    //   children: [
    //   ]
    // },
  ]
}

function getLinuxSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'Linux服务器文件目录共享映射配置',
        'bash常用的快捷键',
        'Centos7安装Python3环境',
        '从零搭建Linux虚拟机环境',
        'canal部署',
        '链接和别名（ln、alias)',
        '阿里云服务器挂载阿里云盘',
      ]
    }
  ]
}

function getBaseSidebar(net, data, os, comp) {
  return [
    {
      title: net,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: data,
      collapsable: false,
      children: [
        '',
      ]
    },
    {
      title: os,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: comp,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}