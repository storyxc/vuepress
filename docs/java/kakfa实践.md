# kafka实践

## 下载

官方地址:https://kafka.apache.org/downloads.html

linux下载`wget https://mirror-hk.koddos.net/apache/kafka/2.8.0/kafka_2.12-2.8.0.tgz`

## kafka入门介绍

### kafka作为一个分布式流平台，意味着什么

- 发布和订阅消息（流），在这方面它类似一个消息队列
- 以容错（故障转移）的方式存储消息（流）
- 在消息流发生时处理它们

### kafka的优势

- 构建实时的数据管道，可靠的获取系统和应用程序间的数据
- 构建实时流的应用程序，对数据流进行转换或反应

### kafka的几个概念

- kafka作为集群运行在一个或多个服务器上
- kafka集群存储的消息是以topic为类别记录的
- 每个消息由一个key，一个value和时间戳构成

### kafka四个核心API

- Product API：发布消息到一个或多个topic中
- Consumer API：订阅一个或多个topic，并处理产生的消息
- Streams API：充当一个流处理器 ，从一个或多个topic消费输入流，并产生一个输出流到一个或多个输出topic，有效地将输入流转换到输出流
- Connector API：可构建或运行可重用的生产者或消费者，将topic连接到现有的应用程序或数据系统。例如连接到关系型数据库的连接器可以捕捉表的每个变更

## 快速启动kafka

```bash
tar -xzf kafka_2.12-2.8.0.tgz
cd kafka_2.12-2.8.0
bin/zookeeper-server-start.sh config/zookeeper.properties & #后台启动
```

