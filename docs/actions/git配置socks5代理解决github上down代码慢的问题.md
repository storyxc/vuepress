# git配置socks5代理解决github上down代码慢的问题

```bash
git config --global http.proxy 'socks5://127.0.0.1:10880'

git config --global https.proxy 'socks5://127.0.0.1:10880'
```

端口号根据自己本地的代理端口填写