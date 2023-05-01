module.exports = {
  '*.{ts,tsx}': [
    () => 'yarn typescheck',
    'prettier --write',
    'eslint --cache --fix --max-warnings=0',
  ],
};
