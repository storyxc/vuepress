#!/usr/bin/env sh

set -e

curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://www.storyxc.com&token=U8xQsWQkbmEGmtG2"

rm -f urls.txt