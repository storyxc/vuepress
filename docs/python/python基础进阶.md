# python基础进阶

## 网络编程

### 简单的server/client模拟

#### server端

```python
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('0.0.0.0', 8000))
server.listen()
sock, addr = server.accept()


data = sock.recv(1024)
print(data.decode('utf-8'))
sock.send('hello {}'.format(data.decode('utf-8')).encode('utf-8'))
server.close()
sock.close()
```

#### client端

```python
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('127.0.0.1', 8000))
client.send('tom'.encode('utf-8'))
data = client.recv(1024)
print(data.decode('utf-8'))
client.close()
```



启动服务端和客户端后:

```bash
#服务端:
tom

#客户端
hello tom
```

### socket模拟http请求

```python
import socket
from urllib.parse import urlparse


def get_url(url):
    # 通过socket请求
    url = urlparse(url)
    host = url.netloc
    path = url.path
    if path == "":
        path = "/"
    # 建立socket连接
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect((host, 80))

    client.send("GET {} HTTP/1.1\r\nHost:{}\r\nConnection:close\r\n\r\n".format(path, host).encode("utf-8"))
    data = b""
    while True:
        d = client.recv(1024)
        if d:
            data += d
        else:
            break

    data = data.decode("utf-8")
    html_data = data.split("\r\n\r\n")[1]
    print(html_data)
    client.close()

if __name__ == '__main__':
    get_url("https://www.baidu.com")

```

结果:

```bash
<!DOCTYPE html><!--STATUS OK-->
<html>
<head>
	<meta http-equiv="content-type" content="text/html;charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<link rel="dns-prefetch" href="//s1.bdstatic.com"/>
	<link rel="dns-prefetch" href="//t1.baidu.com"/>
	<link rel="dns-prefetch" href="//t2.baidu.com"/>
	<link rel="dns-prefetch" href="//t3.baidu.com"/>
	<link rel="dns-prefetch" href="//t10.baidu.com"/>
	<link rel="dns-prefetch" href="//t11.baidu.com"/>
	<link rel="dns-prefetch" href="//t12.baidu.com"/>
	<link rel="dns-prefetch" href="//b1.bdstatic.com"/>
	<title>百度一下，你就知道</title>
	<link href="http://s1.bdstatic.com/r/www/cache/static/home/css/index.css" rel="stylesheet" type="text/css" />
	<!--[if lte IE 8]><style index="index" >#content{height:480px\9}#m{top:260px\9}</style><![endif]-->
	<!--[if IE 8]><style index="index" >#u1 a.mnav,#u1 a.mnav:visited{font-family:simsun}</style><![endif]-->
	<script>var hashMatch = document.location.href.match(/#+(.*wd=[^&].+)/);if (hashMatch && hashMatch[0] && hashMatch[1]) {document.location.replace("http://"+location.host+"/s?"+hashMatch[1]);}var ns_c = function(){};</script>
	<script>function h(obj){obj.style.behavior='url(#default#homepage)';var a = obj.setHomePage('//www.baidu.com/');}</script>
	<noscript><meta http-equiv="refresh" content="0; url=/baidu.html?from=noscript"/></noscript>
	<script>window._ASYNC_START=new Date().getTime();</script>
</head>
<body link="#0000cc"><div id="wrapper" style="display:none;">
.......
</body></html>
```



## 并发编程

### 多线程的两种实现方式

```python
import time
import threading


# 1.通过threading模块的Thread类直接实例化线程对象
def get_detail_html(url):
    print("get_detail_html_started")
    time.sleep(4)
    print("get_detal_html end")


def get_detail_url(url):
    print("get_detail_url_started")
    time.sleep(2)
    print("get_detail_url_end")


# 2.通过继承Thread类来实现多线程
class GetDetailHtml(threading.Thread):
    def __init__(self, name):
        super().__init__(name=name)

    print("get_detail_html_started")
    time.sleep(4)
    print("get_detal_html end")


class GetDetailUrl(threading.Thread):
    def __init__(self, name):
        super().__init__(name=name)

    print("get_detail_url_started")
    time.sleep(2)
    print("get_detail_url_end")


if __name__ == '__main__':
    # thread1 = threading.Thread(target=get_detail_html, args=("",))
    # thread2 = threading.Thread(target=get_detail_url, args=("",))
    thread1 = GetDetailHtml('thread1')
    thread2 = GetDetailUrl('thread2')
    start_time = time.time()
    print(start_time)
    # 当主线程退出时,子线程kill掉 -> 和java一样 setDaemon
    thread1.setDaemon(True)
    thread1.start()
    thread2.start()
    # 先执行其他线程再执行当前线程 -> 和java一样 join
    # 主线程会等两个子线程执行完毕才执行
    thread1.join()
    thread2.join()
    print("last time : {}".format(time.time() - start_time))
```

**其它:** 

`thread1 = threading.Thread(target=get_detail_html, args=("",)) `这种写法中,args参数之所只有一个`""`空串传入但要加`,`是因为python的语法为了区分单个数据元组和单个数据的,如果写成(3,)会被认为是一个元组,如果是(3),就无法区分是元组还是int类型的3.

:::warning

元组中只包含一个元素时，需要在元素后面添加逗号。

:::



### 线程同步

#### 线程优先级队列实现

```python
import queue
import threading
import time

exitFlag = 0


class MyThread(threading.Thread):
    def __init__(self, thread_id, name, q):
        super().__init__(name=name)
        self.threadId = thread_id
        self.name = name
        self.q = q

    def run(self):
        print("开启线程: " + self.name)
        process_data(self.name, self.q)
        print("退出线程: " + self.name)


def process_data(name, q):
    while not exitFlag:
        queueLock.acquire()
        if not workQueue.empty():
            data = q.get()
            queueLock.release()
            print(f"{name} processing {data}")
        else:
            queueLock.release()
        time.sleep(1)


threadList = ["Thread-1", "Thread-2", "Thread-3"]
queueLock = threading.Lock()
nameList = ["ONE", "TWO", "THREE", "FOUR", "FIVE"]
workQueue = queue.Queue(10)
threads = []
threadId = 1

for tname in threadList:
    thread = MyThread(threadId, tname, workQueue)
    thread.start()
    threads.append(thread)
    threadId += 1

queueLock.acquire()
for name in nameList:
    workQueue.put(name)
queueLock.release()

while not workQueue.empty():
    pass

exitFlag = 1

for t in threads:
    t.join()

print("主线程退出")
```

运行结果:

```bash
开启线程: Thread-1
开启线程: Thread-2
开启线程: Thread-3
Thread-1 processing ONE
Thread-2 processing TWO
Thread-3 processing THREE
Thread-2 processing FOUR
Thread-1 processing FIVE
退出线程: Thread-2
退出线程: Thread-1
退出线程: Thread-3
主线程退出
```



## python高级语法



## 正则表达式

