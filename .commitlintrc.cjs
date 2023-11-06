module.exports = {
  extends: ['git-commit-emoji', 'cz'],
  rules: {
    'type-enum': [2, 'always', require('./tools/commitTypes.cjs').map(type => type.value)],
    'scope-enum': [2, 'always', require('./tools/commitScopes.cjs').map(scope => scope[0])],
  },
};
