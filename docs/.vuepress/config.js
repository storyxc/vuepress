const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "故事",
  description: 'storyxc技术博客',
  base: "/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}