# requests模块

requests模块是python中原生的一款基于网络请求的模块，功能强大，简单便捷，效率极高。

作用：模拟浏览器发请求

- 指定url
- 发起请求
- 获取响应
- 持久化存储



## 入门程序

环境安装：pip install requests

```python
import requests

# 爬取搜狗首页的数据

if __name__ == '__main__':
    url = "https://www.sogou.com"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
    }

    response = requests.get(url,headers)
    page_text = response.text
    print(page_text)
    with open("./sogou.html", "w", encoding="utf-8") as fp:
        fp.write(page_text)
    print("爬取结束")
```





:::warning

坑1：ValueError：requests check_hostname requires server_hostname

坑2：requests.exceptions.SSLError: hostname '127.0.0.1' doesn't match None of。。

网上有说降低requests版本的，有安装乱七八糟东西的，最后是降低了urllib3的版本解决的，据说是高版本的urllib有个bug

pip install urllib3==1.25.8

:::

## 简易网页采集器

```python
import requests

if __name__ == '__main__':
    url = 'https://www.sogou.com/web'
    keyword = input('enter your keyword: ')
    # UA伪装
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36'
    }
    param = {
        'query': keyword
    }
    response = requests.get(url, params=param,headers=headers)
    resp = response.text
    file_name = keyword + '.html'
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(resp)
    print(file_name, '保存成功')

```

## 百度翻译内容提取

```python
import requests
import json

if __name__ == '__main__':
    url = 'https://fanyi.baidu.com/sug'
    keyword = {
        'kw': 'dog'
    }
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
    }
    response = requests.post(url=url, data=keyword, headers=headers)
    _json = response.json()
    file_name = keyword.get('kw') + '.json'
    with open(file_name, 'w', encoding='utf-8') as f:
        json.dump(_json,f,ensure_ascii=False)
    print('json存储成功')

```

结果：

```json
{
  "errno": 0,
  "data": [
    {
      "k": "dog",
      "v": "n. 狗; 蹩脚货; 丑女人; 卑鄙小人 v. 困扰; 跟踪"
    },
    {
      "k": "DOG",
      "v": "abbr. Data Output Gate 数据输出门"
    },
    {
      "k": "doge",
      "v": "n. 共和国总督"
    },
    {
      "k": "dogm",
      "v": "abbr. dogmatic 教条的; 独断的; dogmatism 教条主义; dogmatist"
    },
    {
      "k": "Dogo",
      "v": "[地名] [马里、尼日尔、乍得] 多戈; [地名] [韩国] 道高"
    }
  ]
}
```



## 豆瓣电影排行榜

```python
import requests
import json

if __name__ == '__main__':
    url = 'https://movie.douban.com/j/chart/top_list'
    total = 748
    limit = 20
    start = 0
    params = {
        'type': 11,
        'interval_id': '100:90',
        'action': '',
        'start': start,
        'limit': limit
    }
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'
    }
    result = total // limit
    res_list = []
    if result:
        for i in range(result if total // limit == 0 else result + 1):
            start += 20
            res = requests.get(url=url, params=params, headers=headers)
            res_json = res.json()
            res_list.append(res_json)
    with open('douban_movie.json', 'w', encoding='utf-8') as f:
        json.dump(res_list, f, ensure_ascii=False)

    print('over')
```

