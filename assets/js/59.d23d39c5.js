(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{501:function(s,a,r){"use strict";r.r(a);var t=r(27),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"分布式爬虫和增量式爬虫"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式爬虫和增量式爬虫"}},[s._v("#")]),s._v(" 分布式爬虫和增量式爬虫")]),s._v(" "),r("h2",{attrs:{id:"分布式爬虫"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式爬虫"}},[s._v("#")]),s._v(" 分布式爬虫")]),s._v(" "),r("h3",{attrs:{id:"概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),r("p",[s._v("搭建集群，让集群对一组资源进行联合爬取")]),s._v(" "),r("h3",{attrs:{id:"作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),r("p",[s._v("提升爬取数据效率")]),s._v(" "),r("h3",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("安装scrapy-redis组件")])]),s._v(" "),r("li",[r("p",[s._v("原生scrapy无法实现分布式爬虫")]),s._v(" "),r("ul",[r("li",[s._v("调度器不可被集群共享")]),s._v(" "),r("li",[s._v("管道不可被集群共享")])])]),s._v(" "),r("li",[r("p",[s._v("scrapy-redis组件作用")]),s._v(" "),r("ul",[r("li",[s._v("给原生scrapy提供被共享的调度器和管道")])])]),s._v(" "),r("li",[r("p",[s._v("实现流程")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("创建工程")])]),s._v(" "),r("li",[r("p",[s._v("创建一个基于CrawlSpider的爬虫")])]),s._v(" "),r("li",[r("p",[s._v("修改爬虫文件")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("爬虫文件添加"),r("code",[s._v("from scrapy_redis.spiders import RedisCrawlSpider")])])]),s._v(" "),r("li",[r("p",[s._v("注释掉start_urls和allowed_domains")])]),s._v(" "),r("li",[r("p",[s._v("新增属性"),r("code",[s._v("redis_key = 'story'")]),s._v("，代表被共享的调度器队列的名称")])]),s._v(" "),r("li",[r("p",[s._v("编写数据解析操作")])]),s._v(" "),r("li",[r("p",[s._v("将当前爬虫类的父类修改成"),r("code",[s._v("RedisCrawlSpider")])])])])]),s._v(" "),r("li",[r("p",[s._v("settings配置新增")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("指定使用可以共享的管道")]),s._v(" "),r("div",{staticClass:"language-python line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[s._v("ITEM_PIPELINES "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrapy_redis.pipelines.RedisPipeline'")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])])]),s._v(" "),r("li",[r("p",[s._v("指定可以共享的调度器")]),s._v(" "),r("div",{staticClass:"language-python line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加一个去重容器的配置,使用redis的set来存储请求数据,实现请求去重持久化")]),s._v("\nDUPEFLTER_CLASS "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scrapy_redis.dupefilter.RFPDupeFilter"')]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用scrapy-redis组件自己的调度器")]),s._v("\nSCHEDULER "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scrapy_redis.scheduler.Scheduler"')]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置调度器是否要持久化-爬虫结束要不要清空redis请求队列和去重的set")]),s._v("\nSCHEDULER_PERSIST "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br")])])])])]),s._v(" "),r("li",[r("p",[s._v("配置redis的配置文件")]),s._v(" "),r("ul",[r("li",[r("code",[s._v("bind 127.0.0.1")]),s._v("注释掉")]),s._v(" "),r("li",[s._v("关闭保护模式:"),r("code",[s._v("protected-mode")]),s._v(" 改为no")])])]),s._v(" "),r("li",[r("p",[s._v("启动redis")])]),s._v(" "),r("li",[r("p",[s._v("启动工程，进入到爬虫文件的目录后"),r("code",[s._v("scrapy runspider xxx")])])]),s._v(" "),r("li",[r("p",[s._v("向调度器队列中放入起始url")]),s._v(" "),r("ul",[r("li",[r("code",[s._v("lpush redis_key url")])])])])])])]),s._v(" "),r("h2",{attrs:{id:"增量式爬虫"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#增量式爬虫"}},[s._v("#")]),s._v(" 增量式爬虫")]),s._v(" "),r("h3",{attrs:{id:"概念-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),r("p",[s._v("检测网站数据更新情况，只会爬取网站最新更新的数据")]),s._v(" "),r("h3",{attrs:{id:"实现-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),r("ul",[r("li",[s._v("指定起始url")]),s._v(" "),r("li",[s._v("基于CrawlSpider获取其他页码链接")]),s._v(" "),r("li",[s._v("基于Rule对其他页码进行请求")]),s._v(" "),r("li",[s._v("从每一个页码对应源码中解析出详情页的url")]),s._v(" "),r("li",[s._v("==检测详情页的url是否被请求过（redis/mysql)==")]),s._v(" "),r("li",[s._v("对详情页发起请求")]),s._v(" "),r("li",[s._v("持久化存储")])])])}),[],!1,null,null,null);a.default=e.exports}}]);