(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{580:function(s,a,t){"use strict";t.r(a);var e=t(27),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装pve虚拟机并在pve安装truenas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装pve虚拟机并在pve安装truenas"}},[s._v("#")]),s._v(" 安装PVE虚拟机并在PVE安装truenas")]),s._v(" "),t("h2",{attrs:{id:"安装pve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装pve"}},[s._v("#")]),s._v(" 安装PVE")]),s._v(" "),t("h3",{attrs:{id:"制作系统安装盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制作系统安装盘"}},[s._v("#")]),s._v(" 制作系统安装盘")]),s._v(" "),t("ol",[t("li",[s._v("下载rufus")]),s._v(" "),t("li",[s._v("下载pve最新镜像")]),s._v(" "),t("li",[s._v("rufus选择镜像并刷写到自己的U盘中")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("一般的系统选择iso镜像模式写入，安装pve需要选择dd镜像模式写入")])]),s._v(" "),t("h3",{attrs:{id:"安装系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装系统"}},[s._v("#")]),s._v(" 安装系统")]),s._v(" "),t("p",[s._v("等待刷写完毕按照正常U盘安装系统流程安装，注意ip网关等配置即可")]),s._v(" "),t("h2",{attrs:{id:"pve中安装truenas-scale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pve中安装truenas-scale"}},[s._v("#")]),s._v(" PVE中安装Truenas Scale")]),s._v(" "),t("h3",{attrs:{id:"上传iso镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传iso镜像"}},[s._v("#")]),s._v(" 上传iso镜像")]),s._v(" "),t("p",[s._v("官网下载truenas scale系统镜像，打开pve的配置地址，点击上传后选择下载好的镜像文件并上传")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424104118496.png",alt:"image-20220424104118496"}})]),s._v(" "),t("h2",{attrs:{id:"创建虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟机"}},[s._v("#")]),s._v(" 创建虚拟机")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424104248209.png",alt:"image-20220424104248209"}})]),s._v(" "),t("p",[s._v("操作系统选择刚上传的镜像")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424104316127.png",alt:"image-20220424104316127"}})]),s._v(" "),t("p",[s._v("系统tab页默认即可，磁盘这里要注意"),t("strong",[s._v("总线/设备选择sata0，磁盘大小选择16即可，这里是分了一个虚拟的系统盘，不需要太大，因为truenas系统的系统引导盘和存储是分开的，分的太大在truenas中也无法用于存储")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424104359163.png",alt:"image-20220424104359163"}})]),s._v(" "),t("p",[s._v("cpu根据情况设置，内存最小8G，建议尽可能大，truenas scale官方建议最好16G，因为truenas的文件系统很依赖内存。")]),s._v(" "),t("h3",{attrs:{id:"安装truenas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装truenas"}},[s._v("#")]),s._v(" 安装truenas")]),s._v(" "),t("p",[s._v("启动刚创建的虚拟机，在选择系统安装盘界面按空格选中刚分配的16G磁盘，选择ok即可")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424104822972.png",alt:"image-20220424104822972"}})]),s._v(" "),t("p",[s._v("然后输入root密码，安装完后选择3重启")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424104905506.png",alt:"image-20220424104905506"}})]),s._v(" "),t("p",[s._v("随后等待系统安装完毕")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424104940291.png",alt:"image-20220424104940291"}})]),s._v(" "),t("p",[s._v("输入9选择关机")]),s._v(" "),t("h3",{attrs:{id:"给truenas分配存储盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给truenas分配存储盘"}},[s._v("#")]),s._v(" 给truenas分配存储盘")]),s._v(" "),t("ol",[t("li",[s._v("最简单的办法，直接添加虚拟硬盘")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424105115934.png",alt:"image-20220424105115934"}})]),s._v(" "),t("p",[s._v("总线这里序号会默认自增，存储选择磁盘，我这里是只有一个固态硬盘，磁盘大小根据实际情况选择即可，添加即完成了虚拟硬盘的添加。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424105147413.png",alt:"image-20220424105147413"}})]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("硬盘直通")]),s._v(" "),t("p",[s._v("1）直通单个硬盘")]),s._v(" "),t("p",[s._v("因为我这台测试机器只有一个固态硬盘，pve系统也装在这上面，所以无法用硬盘的直通，如果有多个机械盘，想直通给truenas，可以使用以下命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /dev/disk/by-id "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看硬盘名称")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220424105554763.png",alt:"image-20220424105554763"}})]),s._v(" "),t("p",[s._v("这里sda对应就是我的唯一一个硬盘，后面的sda1、2、3都是分区，可以忽略，记录下磁盘名称ata-WDC_WD10EZEX-08WN4A0_WD-WCC6Y6EDC1NT，执行命令进行直通")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("qm "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" -sata1 /dev/disk/by-id ata-WDC_WD10EZEX-08WN4A0_WD-WCC6Y6EDC1NT\n---\n返回\nupdate VM "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(": -sata1 /dev/disk/by-id ata-WDC_WD10EZEX-08WN4A0_WD-WCC6Y6EDC1NT \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("看到这个返回信息即为直通成功，回到虚拟机下面可以看到已经新增了一个sata硬盘")]),s._v(" "),t("p",[s._v("命令拆解：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("qm "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" vm编号 -总线编号 磁盘路径\n- vm编号为pve虚拟机中的编号，例如100，101，102等\n- 总线编号为指定编号下要新增的硬盘总线编号，例如虚拟机下只有一个硬盘sata0，要新增的就是sata1，这里就要填sata1\n- 磁盘路径 就是/dev/disk/by-id/ + 我们上一步保存的硬盘名称\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2）添加PCI设备，直通sata控制器")]),s._v(" "),t("p",[t("strong",[s._v("Proxmox VE(PVE)系统直通SATA Controller(SATA 控制器)，会把整个sata总线全部直通过去，就是直接将南桥或者直接把北桥连接的sata总线直通，那么有些主板sata接口就会全部被直通。")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("如果PVE系统安装在sata硬盘中，会导致PVE无法启动，所以在直通sata控制器前要确认自己的PVE系统安装位置，或者直接安装到NVMe硬盘中")])])])]),s._v(" "),t("p",[s._v("​\t\t"),t("img",{attrs:{src:"https://storyxc.com/images/blog/image-20220425090446637.png",alt:"image-20220425090446637"}})]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("删除直通设备")])]),s._v(" "),t("p",[t("code",[s._v("qm set vm编号 -delete 设备名")]),s._v("，例如要删除设备ID为100的虚拟机下直通的sata1")]),s._v(" "),t("p",[s._v("那就是"),t("code",[s._v("qm set 100 -delete sata1")])])])}),[],!1,null,null,null);a.default=r.exports}}]);