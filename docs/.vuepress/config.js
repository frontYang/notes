module.exports = {
  title: 'YNOTE',
  description: 'Front-end personal notes',
  base: '/notes/',
  // plugins: ['demo-container'],
  contributors: {
    frontmatter: 'frontYang'
  },
  themeConfig: {
    lastUpdated: '上次更新时间',
    navbar: [
      {
        text: '缘起',
        link: '/',
      },
    ],
    sidebarDepth: 3,
    sidebar: [
      {
        text: '缘起', // 必要的
        link: '/', // 可选的, 应该是一个绝对路径
      },
      {
        text: '目录', // 必要的
        link: '/guide', // 可选的, 应该是一个绝对路径
      },
      {
        text: 'vue',
        children: ['/vue/', '/vue/vuex'],
      },
      {
        text: 'vue3',
        children: ['/vue3/', '/vue3/base', '/vue3/program'],
      },
      {
        text: 'react',
        children: ['/react/', '/react/base'],
      },
      {
        text: 'Typescript',
        children: [
          '/typescript/',
          '/typescript/introduce',
          '/typescript/tsconfig.json',
          '/typescript/datatype',
          '/typescript/fn',
          '/typescript/interface',
          '/typescript/class',
          '/typescript/generic',
          '/typescript/module',
          '/typescript/namespace',
          '/typescript/decorator',
        ],
      },
      {
        text: '八股文',
        children: ['/javascript/', '/javascript/event_loop']
      },
      {
        text: 'js设计模式',
        children: ['/design_mod/', '/design_mod/this_call_apply', '/design_mod/singleton', '/design_mod/adapter', '/design_mod/state', '/design_mod/strategy'],
      },
      {
        text: 'nodejs',
        children: ['/nodejs/', '/nodejs/koa2']
      },
      {
        text: '第三方sdk',
        children: ['/third_sdk/facebook_login_share', '/third_sdk/fire_key_event'],
      },
      {
        text: '开发工具',
        children: ['/tool/vscode_pretter', '/tool/vuepress_github', '/tool/compress'],
      },
      {
        text: '数据库',
        children: ['/database/', '/database/mysql/'],
      },
      {
        text: '取经阁',
        children: [
          '/interview/',
          '/interview/html',
          '/interview/css',
          '/interview/javascript',
          '/interview/vue',
          '/interview/network',
          '/interview/webpack',
          '/interview/others',
          '/interview/my_interview',
        ],
      },
      {
        text: '疯言疯语',
        children: ['/speech/', '/speech/20210706'],
      },
    ],
  },
  
}
