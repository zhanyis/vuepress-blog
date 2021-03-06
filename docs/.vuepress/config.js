const sidebar = {
  others : [
    {
      text: 'VuePress',
      children: [
        // SidebarItem
        {
          text: 'VuePress快速搭建',
          link: '/others/vuepress/init.md',
          children: [],
        },
        // 字符串 - 页面文件路径
        // '/foo/bar.md',
      ],
    },
  ]
}

const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'zh-CN',
  title: 'szy\'s blog',
  description: 'a blog manage by a lazy person',
  base: '/vuepress-blog/',
  head: [['link', { rel: 'icon', href: 'iconStar.png' }]],

  theme: path.resolve(__dirname, './theme/index.js'),
  themeConfig: {
    repo: 'https://github.com/zhanyis/vuepress-blog',
    docsDir: 'docs',
    navbar: [
      {
        text: '前端',
        link: '/frontend/',
        children: [
          {
            text: 'HTML',
            link: '/frontend/html/html.md'
          },
          {
            text: 'CSS',
            link: '/frontend/css'
          }
        ]
      },
      {
        text: '前端框架',
        link: '/framework/',
      },
      {
        text: '后端',
        link: '/backend/',
      },
      {
        text: '计算机基础',
        link: '/basics/',
      },
      {
        text: '其他',
        link: '/others/vuepress/init.md',
      },
      {
        text: '日常',
        link: '/daily/',
      },
    ],
    sidebar: {
      '/others/': sidebar.others,
    },
  },
  plugins: [
    require('./plugins/createHomePage.js'),
  ],
}