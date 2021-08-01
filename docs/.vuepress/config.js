const sidebar = {
  blogProcess : [
    {
      title: 'VuePress 搭建过程',
      collapsable: false,
      children: [
        {
          text: 'VuePress快速搭建',
          link: '/blogProcess/init.html'
        }
      ]
    }
  ]
}

module.exports = {
  lang: 'zh-CN',
  title: 'szy\'s blog',
  description: 'a blog manage by a lazy person',
  base: '/vuepress-blog/',
  head: [['link', { rel: 'icon', href: 'iconStar.png' }]],

  themeConfig: {
    repo: 'https://github.com/zhanyis/vuepress-blog',
    editLink: false,
    navbar: [
      {
        text: '前端',
        link: '/frontend/',
      },
      {
        text: '日常',
        link: '/daily/',
      },
      {
        text: 'vuepress',
        link: '/blogProcess/',
      },
    ],
    sidebar: {
      collapsable: false,
      '/blogProcess/': sidebar.blogProcess,
    },
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-HCDF3J2F1X',
      },
    ],
  ],
}