const path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {
      // root: `${__dirname}/src/`,
      // path: [`${__dirname}/src/`],
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};
