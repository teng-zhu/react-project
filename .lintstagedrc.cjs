module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --max-warnings 0 --fix'],
  'src/**/*.{scss,css}': ['prettier --write'],
};
