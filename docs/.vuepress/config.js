module.exports = {
  lang: 'zh-CN',
  title: 'SZY blog',
  description: 'a blog manage by a lazy person',
  base: '/vuepress-blog/',
  head: [['link', { rel: 'icon', href: 'iconStar.png' }]],

  themeConfig: {
    repo: 'https://github.com/zhanyis/vuepress-blog',
    editLink: false,
    navbar: [
      {
        text: '前端',
        link: '/frontend',
      },
      {
        text: '日常',
        link: '/daily',
      },
    ],
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