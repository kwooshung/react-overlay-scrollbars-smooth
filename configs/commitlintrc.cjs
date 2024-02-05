const types = require('./.ks-cvlar.types.cjs');
const scopes = require('./.ks-cvlar.scopes.cjs');
const { ConvertToLintTypes, ConvertToLintScopes } = require('@kwooshung/cvlar');

module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'header-max-length': [2, 'always', 140],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ConvertToLintTypes(types)],
    'scope-enum': [2, 'always', ConvertToLintScopes(scopes)]
  }
};
