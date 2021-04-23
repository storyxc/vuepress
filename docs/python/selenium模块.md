# selenium模块

selenium是一个用于web应用程序测试的工具,selenium测试直接运行在浏览器中,就像真正的用户在操作一样

selenium在爬虫中的应用:

- 便捷的获取网站动态加载的数据
- 便捷的实现模拟登录

selenium模块:

- 基于浏览器自动化的一个模块



## 使用流程

- 环境安装：`pip install selenium`
- 下载浏览器驱动程序

>http://chromedriver.storage.googleapis.com/index.html 驱动程序

- 实例化浏览器对象
- 编写基于浏览器对象操作的代码

```python
from selenium import webdriver
from lxml import etree
import time

# 实例化一个浏览器对象
browser = webdriver.Chrome(executable_path=r'D:\install\tools\chromedriver\chromedriver.exe')
# 访问url
browser.get('https://movie.douban.com/typerank?type_name=%E5%89%A7%E6%83%85&type=11&interval_id=100:90&action=')
# 获取页面源码内容
page_text = browser.page_source

tree = etree.HTML(page_text)
span_list = tree.xpath('//div[@class="movie-content"]/div[1]/div[1]/span[1]')
for span in span_list:
    name = span.xpath('.//a/text()')
    print(name)
time.sleep(5)
# 退出
browser.quit()
    
res:
['肖申克的救赎']
['霸王别姬']
['控方证人']
['伊丽莎白']
['阿甘正传']
['美丽人生']
['辛德勒的名单']
['茶馆']
['控方证人']
['十二怒汉（电视版）']
['这个杀手不太冷']
['千与千寻']
['泰坦尼克号']
['忠犬八公的故事']
['十二怒汉']
['泰坦尼克号 3D版']
['背靠背，脸对脸']
['灿烂人生']
['横空出世']
['遥望南方的童年']
```



## 简单操作

```python
from selenium import webdriver
from time import sleep

bro = webdriver.Chrome(executable_path=r'D:\install\tools\chromedriver\chromedriver.exe')
bro.get('https://www.taobao.com/')
# 找到搜索框
input_ = bro.find_element_by_id('q')
# 输入值
input_.send_keys('macbook')
# 执行js
bro.execute_script('window.scrollTo(0,document.body.scrollHeight)')
sleep(2)
# 点击搜索按钮
btn = bro.find_element_by_xpath('//*[@id="J_TSearchForm"]/div[1]/button')
btn.click()

sleep(2)

bro.get('https://www.baidu.com')
sleep(1)
# 后退
bro.back()

sleep(1)
# 前进
bro.forward()
sleep(1)
bro.quit()
```

