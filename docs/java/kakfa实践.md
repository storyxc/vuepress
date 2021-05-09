# kafka实践

## 下载

官方地址:https://kafka.apache.org/downloads.html

linux下载`wget https://mirror-hk.koddos.net/apache/kafka/2.8.0/kafka_2.13-2.8.0.tgz`

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

官方文档:http://kafka.apache.org/quickstart

::: tip

强烈建议新学习一项新内容的时候尽量阅读英文原版文档

:::

### 启动kafka需要的运行环境

使用kafka自带的zookeeper启动

```bash
tar -xzf kafka_2.13-2.8.0.tgz
cd kafka_2.13-2.8.0
bin/zookeeper-server-start.sh config/zookeeper.properties & #后台启动
```

> 在kafka0.5x版本后已经自带了zookeeper, 而在最新的kafka2.8版本中,不再需要zookeeper服务,官网把这种称之为KRaft模式

### 打开另一个命令终端启动kafka服务

```bash
bin/kafka-server-start.sh config/server.properties
```

等所有服务等启动完毕,kafka就已经是可用的了

### 创建一个主题(topic)

创建一个名为quickstart-events的topic,只有一个分区和一个备份

```bash
bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic quickstart-events

查看已创建的topic信息

```bash
[root@localhost kafka_2.13-2.8.0]# bin/kafka-topics.sh --describe --topic quickstart-events --bootstrap-server localhost:9092
Topic: quickstart-events        TopicId: iOM06pJVQV-y_A6QkmfeHw PartitionCount: 1       ReplicationFactor: 1  Configs: segment.bytes=1073741824
        Topic: quickstart-events        Partition: 0    Leader: 0       Replicas: 0     Isr: 0
```

### 发送消息到Topic

kafka提供了一个命令行工具,可以从输入文件或命令行中读取消息并发送给kafka集群,每一行是一条消息.运行`producer(生产者)`,然后再控制台输入几条消息到服务器

```bash
bin/kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092
```

输入此命令后进入交互模式,便可以开始发送消息到topic

```bash
>hello
>hello world
>this is first kafka message
>
```

可以使用`Ctrl+C`退出交互模式

### 消费Topic中的消息

打开另外一个终端窗口运行命令

```bash
bin/kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092
```

可以看到输出了刚才我们通过生产者终端发送的消息

```bash
hello
hello world
this is first kafka message
```

此时如果我们再在生产者终端发送消息,消费者终端也能实时进行消费,同样可以使用`Ctrl+C`退出消费者的交互模式,消息会被持久化到kafka中,所以消息可以被消费多次以及被多个消费者消费,比如我们再打开一个窗口,执行消费的命令

```bash
[root@localhost kafka_2.13-2.8.0]# bin/kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092
hello
hello world
this is first kafka message

可以看到,新的消费者又消费到了刚才的消息

