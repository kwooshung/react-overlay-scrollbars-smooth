export default {
  '*.{js,jsx,ts,tsx}': ['npx prettier --write', 'npx eslint --fix'],
  '*.{css,less,scss}': ['npx prettier --write', 'npx stylelint --fix'],
  '*.json': ['npx prettier --write'],
  '*.test.{js,jsx,ts,tsx}': ['pnpm test:ci']
};
