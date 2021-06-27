# 链接和别名（ln、alias)





## 链接

ln： link，链接，类似windows中的快捷方式的概念，主要针对路径比较长的文件夹，建立一个链接，让访问更加方便，分为软链接（-s）和硬链接

### 使用

- ln      /mnt/cdrom1  /var/www/html/centos/      ## 硬链接
- ln -s /mnt/cdrom2   /var/www/html/centos/     ##软链接-符号链接

## 别名

alias：别名，主要是针对某个命令，如果命令的路径比较长、比较复杂，那么起个别名会更方便

### 使用

- 查看别名：alias
- 定义别名：alias la=‘ll -a'
- 取消别名：unalias la

