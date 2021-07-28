# 从零搭建Linux虚拟机环境

## 基础

### 镜像安装

CentOS7-1908版本

http://vault.centos.org/7.7.1908/isos/x86_64/CentOS-7-x86_64-DVD-1908.torrent

## 基础命令包安装

- ifconfig
  - `yum search ifconfig`
  - `yum install net-tools.x86_64`

- lsb_release

  - `yum install -y  redhat-lsb`

- yum提示没有可用镜像
  - `curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo`

- wget

  - `yum install wget`

- dns

  - 虚拟机ping不通域名的解决办法` vi /etc/sysconfig/network-scripts/ifcfg-ens33`
  - 虚拟机的静态ip和真机的必须在同一网段,添加谷歌的dns解析
  - 虚拟机内的配置

  ![image-20210505171618465](https://io.storyxc.com/image-20210505171618465.png)

  - 真机的ip信息

    ![image-20210505171651704](https://io.storyxc.com/image-20210505171651704.png)

## 环境搭建

- JDK1.8
  - oracle官网下载jdk后上传虚拟机

  - 解压并配置环境变量

    `vi /etc/profile/`

    ```bash
    JAVA_HOME=/usr/local/java/jdk1.8.0_291
    PATH=$JAVA_HOME/bin:$PATH
    CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/jre/lib/rt.jar
    export JAVA_HOME
    export CLASSPATH
    export PATH
    ```

  - 重启虚拟机使环境变量生效或者`source /etc/profile`
- python3
  - 见另一篇博客 [centos7安装python环境](https://blog.storyxc.com/actions/Centos7%E5%AE%89%E8%A3%85Python3%E7%8E%AF%E5%A2%83.html)

- mysql 5.7

  - 下载并安装mysql官方的yum repository: `wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm`

  - `yum -y install mysql57-community-release-el7-10.noarch.rpm`

  - 安装mysql服务器: `yum -y install mysql-community-server`

  - 启动`systemctl start  mysqld.service`

  - 临时密码 `grep 'temporary password' /var/log/mysqld.log`

  - 根据临时密码登入mysql

  - 改密码 `ALTER USER 'root'@'localhost' IDENTIFIED BY 'new pwd'`

  - 更改密码弱口令设置，设置简单密码：

    -  `set global validate_password_policy=0`;

    - ` set global validate_password_length=1`

  - 卸载安装的mysql的yum repository `yum -y remove mysql57-community-release-el7-10.noarch`

  - 配置远程登陆

    - `grant all on *.* to 'root'@'%' identified by 'pwd'`

    - 立即生效: `flush privileges`

  

  

- nginx

  - gcc `yum -y install gcc`

  - `yum install pcre pcre-devel`
  - `yum install zlib zlib-devel`

  - `yum install openssl openssl-devel`

  - 下载安装包 `wget http://nginx.org/download/nginx-1.9.9.tar.gz  `

  - 解压到指定目录 `tar -xzvf  nginx-1.9.9.tar.gz  -C /usr/local/nginx/`

  - 切换到nginx的目录执行

    ```bash
    ./configure
     
    make
     
    make install
    ```

  - 安装后切换到/usr/local/nginx/sbin启动nginx并访问

    ![image-20210505174840552](https://io.storyxc.com/image-20210505174840552.png)

- 开放端口
  - 查看已经开放的端口`firewall-cmd --list-ports`
  - 开启端口 `firewall-cmd --zone=public --add-port=80/tcp --permanent`
    - zone:作用域
    - -add-port=80/tcp 端口/协议
    - --permanent 永久生效,没有此参数后重启失效
  - `firewall-cmd --reload #重启firewall`
  - `systemctl stop firewalld.service #停止firewall`
  - `systemctl disable firewalld.service #禁止firewall开机启动`
  - `firewall-cmd --state #查看默认防火墙状态`



- redis

  - 下载安装包`wget http://download.redis.io/releases/redis-5.0.7.tar.gz`

  - `tar -zxvf redis-6.0.3.tar.gz`

  - `mv /root/redis-5.0.7 /usr/local/redis`

  - `cd  /usr/local/redis`

  - `make && make PREFIX=/usr/local/redis install`

    - 可能会报错,因为centos自带的gcc版本太低

    - 执行命令
  
      ```bash
      yum -y install centos-release-scl
      yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils 
      # scl enable devtoolset-9 bash #临时启用新版本的gcc
      echo "source /opt/rh/devtoolset-9/enable" >>/etc/profile # 永久启用新版gcc
      ```
  
  - 开机自启redis
  
    - ```bash
      vi /etc/init.d/redis
      ```
  
    - ```bash
      #!/bin/sh
      # chkconfig: 2345 10 90
      # description: Start and Stop redis
      
      REDISPORT=6379
      EXEC=/usr/local/redis/bin/redis-server
      CLIEXEC=/usr/local/redis/bin/redis-cli
      
      PIDFILE=/var/run/redis_${REDISPORT}.pid
      CONF="/usr/local/redis/redis.conf"
      
      case "$1" in
          start)
              if [ -f $PIDFILE ]
              then
                      echo "$PIDFILE exists, process is already running or crashed"
              else
                      echo "Starting Redis server..."
                      $EXEC $CONF &
              fi
              ;;
          stop)
              if [ ! -f $PIDFILE ]
              then
                      echo "$PIDFILE does not exist, process is not running"
              else
                      PID=$(cat $PIDFILE)
                      echo "Stopping ..."
                      $CLIEXEC -p $REDISPORT shutdown
                      while [ -x /proc/${PID} ]
                      do
                          echo "Waiting for Redis to shutdown ..."
                          sleep 1
                      done
                      echo "Redis stopped"
              fi
              ;;
          restart)
              "$0" stop
              sleep 3
              "$0" start
              ;;
          *)
              echo "Please use start or stop or restart as first argument"
              ;;
      esac
      ```
  
    - ```bash
      vim /usr/local/redis/redis.conf
      修改
      bind 0.0.0.0 #所有ipv4端口
      protected-mode no # 关闭保护模式
      daemonize yes # 守护进程
      ```
  
    - ```bash
      # 授权
      chmod 777 /etc/init.d/redis
      ```
  
    - ```bash
      # 开机启动
      chkconfig redis on
      ```
  
    - ```bash
      # 创建客户端软链接
      ln -s /usr/local/redis/bin/redis-cli /usr/local/bin/redis-cli 
      ```
  
- kafka

  - `wget https://mirror-hk.koddos.net/apache/kafka/2.8.0/kafka_2.13-2.8.0.tgz`
  
  
