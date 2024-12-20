module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'commitlint.config.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    //import导入顺序规则
    'import/order': [
      'error',
      {
        //按照分组顺序进行排序
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'type'],
        //通过路径自定义分组
        pathGroups: [
          {
            pattern: 'react*', //对含react的包进行匹配
            group: 'builtin', //将其定义为builtin模块
            position: 'before', //定义在builtin模块中的优先级
          },
          {
            pattern: '@/components/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'parent',
            position: 'after',
          },
          {
            pattern: '@/apis/**',
            group: 'parent',
            position: 'after',
          },
        ],
        //将react包不进行排序，并放在前排，可以保证react包放在第一行
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always', //每个分组之间换行
        //根据字母顺序对每个组内的顺序进行排序
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'], //允许使用any
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: ['that'], // this可用的局部变量名称
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off', //允许使用@ts-ignore
    '@typescript-eslint/no-non-null-assertion': 'off', //允许使用非空断言
    'no-console': [
      //提交时不允许有console.log
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 'warn', //提交时不允许有debugger
  },
};
