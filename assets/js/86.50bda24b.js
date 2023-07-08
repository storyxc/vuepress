(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{528:function(s,t,a){"use strict";a.r(t);var e=a(27),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" nginx配置")]),s._v(" "),a("p",[s._v("记录常用、踩坑的nginx配置内容")]),s._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[s._v("#")]),s._v(" events")]),s._v(" "),a("h2",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[s._v("#")]),s._v(" http")]),s._v(" "),a("h3",{attrs:{id:"upstream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upstream"}},[s._v("#")]),s._v(" upstream")]),s._v(" "),a("blockquote",[a("p",[s._v("upstream指令主要用于负载均衡，设置一系列的后端服务器")])]),s._v(" "),a("h3",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[s._v("#")]),s._v(" server")]),s._v(" "),a("blockquote",[a("p",[s._v("server块的指令主要用于指定主机和端口")])]),s._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[s._v("#")]),s._v(" location")]),s._v(" "),a("blockquote",[a("p",[s._v("location块用于匹配网页位置")])]),s._v(" "),a("h4",{attrs:{id:"匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则"}},[s._v("#")]),s._v(" 匹配规则")]),s._v(" "),a("p",[s._v("location支持正则表达式匹配，也支持条件判断匹配")]),s._v(" "),a("p",[s._v("语法规则："),a("code",[s._v("location [=|~|~*|^~] /uri/ { … }")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("=")]),s._v("：完全精确匹配")]),s._v(" "),a("li",[a("code",[s._v("^~")]),s._v("：表示uri以某个常规字符串开头，理解为匹配url路径即可，nginx不对url进行编码")]),s._v(" "),a("li",[a("code",[s._v("~")]),s._v("：表示区分大小写的正则匹配")]),s._v(" "),a("li",[a("code",[s._v("~*")]),s._v("：表示不区分大小写的正则匹配")]),s._v(" "),a("li",[a("code",[s._v("!~")]),s._v("：区分大小写不匹配")]),s._v(" "),a("li",[a("code",[s._v("!~*")]),s._v("：不区分大小写不匹配")]),s._v(" "),a("li",[a("code",[s._v("/")]),s._v("：通用匹配，优先级最低")])]),s._v(" "),a("p",[s._v("匹配顺序："),a("code",[s._v("=")]),s._v("最高，正则匹配其次（按照规则顺序），通用匹配"),a("code",[s._v("/")]),s._v("最低，匹配成功时停止匹配按照当前规则处理请求")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配所有扩展名以.gif、.jpg、.jpeg、.png、.bmp、.swf结尾的静态文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /wwwroot/xxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# expires用来指定静态文件的过期时间，这里是30天")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("expires")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30d")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ ^/(upload|html)/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配所有/upload /html")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /web/wwwroot/www.cszhi.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("expires")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30d")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"root和alias区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root和alias区别"}},[s._v("#")]),s._v(" root和alias区别")]),s._v(" "),a("ul",[a("li",[s._v("alias指定的是准确目录，且最后必须是"),a("code",[s._v("/")]),s._v("，否则就会访问失败")]),s._v(" "),a("li",[s._v("root是指定目录的上级目录")])]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /abc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /wwwroot/aaa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此规则匹配的最终资源路径为/wwwroot/aaa/abc/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果访问的是/abc/a.html,则最终访问的资源是服务器中的/wwwroot/aaa/abc/a.html")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /abc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alias")]),s._v(" /wwwroot/aaa/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此规则匹配的最终资源路径为/wwwroot/aaa/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果访问的是/abc/b.txt，则最终访问的资源是/wwwroot/aaa/b.txt")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h4",{attrs:{id:"访问静态资源重定向问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问静态资源重定向问题"}},[s._v("#")]),s._v(" 访问静态资源重定向问题")]),s._v(" "),a("p",[s._v("当nginx监听的不是80端口是，访问文件夹且末尾不是"),a("code",[s._v("/")]),s._v("，则nginx会进行301永久重定向，此时会丢掉客户端访问时的端口号，可以通过以下配置解决，作用是将不以 "),a("code",[s._v("/")]),s._v(" 结尾的目录 URL 重定向至以 "),a("code",[s._v("/")]),s._v(" 结尾的目录 URL。使用 "),a("code",[s._v("-d")]),s._v(" 判断 "),a("code",[s._v("$request_filename")]),s._v(" 是否为一个目录，如果是，则使用 "),a("code",[s._v("rewrite")]),s._v(" 指令进行重写。其中，"),a("code",[s._v("[^/]$")]),s._v(" 表示匹配不以 "),a("code",[s._v("/")]),s._v(" 结尾的 URL，即目录 URL，"),a("code",[s._v("$scheme://$http_host$uri/")]),s._v(" 表示重定向目标 URL，其中使用了 "),a("code",[s._v("$scheme")]),s._v(" 变量表示客户端请求所使用的协议（HTTP 或 HTTPS）、"),a("code",[s._v("$http_host")]),s._v(" 变量表示客户端请求的 HOST 头部信息、"),a("code",[s._v("$uri")]),s._v(" 变量表示客户端请求的 URI。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" (-d "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rewrite")]),s._v(" [^/]$ "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),s._v("://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ permanent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);