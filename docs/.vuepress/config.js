module.exports = {
  title: 'YNOTE',
  description: 'Front-end personal notes',

  themeConfig: {
    lastUpdated: '上次更新时间',
    nav: [{
      text: '缘起',
      link: '/'
    }],
    sidebar: [{
        title: '缘起', // 必要的
        path: '/', // 可选的, 应该是一个绝对路径
      },
      {
        title: 'Typescript',
        children: [
          '/typescript/',
          '/typescript/tsconfig.json',
          '/typescript/datatype',
          '/typescript/fn',
          '/typescript/interface',
          '/typescript/class',
          '/typescript/generic',
          '/typescript/module',
          '/typescript/namespace',
          '/typescript/decorator',
        ]
      },
      {
        title: 'js设计模式',
        children: [
          '/design_mod/this_call_apply',
          '/design_mod/singleton',
          '/design_mod/adapter',
          '/design_mod/state',
          '/design_mod/strategy',
          '/design_mod/singleton',
        ]
      },
      {
        title: '第三方sdk',
        children: [
          '/third_sdk/facebook_login_share'
        ]
      },
      {
        title: '开发工具',
        children: [
          '/tool/vscode_pretter',
        ]
      },
      {
        title: '取经阁',
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
        ]
      },
      {
        title: '疯言疯语',
        children: [
          '/speech/ '
        ]
      }
    ]
  }
}