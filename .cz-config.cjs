const commitTypes = require('./tools/commitTypes.cjs');
const commitScopes = require('./tools/commitScopes.cjs');

module.exports = {
  // https://gitmoji.dev/ emoji表情
  releaseCommitMessageFormat: 'release: 🎉 v{{currentTag}}',
  types: commitTypes,
  scopes: commitScopes.map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    };
  }),
  messages: {
    type: '选择一种你的提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '短说明:',
    body: '长说明，使用"|"换行(可选)：',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '关联关闭的issue，例如：#31, #34(可选):',
    confirmCommit: '确定提交说明?'
  },
  allowCustomScopes: false,
  allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
  subjectLimit: 100
};
