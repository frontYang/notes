module.exports = {
  title: 'YNOTE',
  description: 'Front-end personal notes',

  themeConfig: {
    lastUpdated: '上次更新时间',
    nav: [
      { text: 'HOME', link: '/' }
    ],
    sidebar: [
      {
        title: '缘起',   // 必要的
        path: '/',      // 可选的, 应该是一个绝对路径
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
        title: '藏经阁',
        children: [
          '/interview/',
          '/interview/javascript',
          '/interview/vue',
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