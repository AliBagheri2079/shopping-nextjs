/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-selectors': { preserve: true },
      },
    },
    'postcss-import': {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          autoprefixer: {},
          cssnano: { preset: 'default' },
        }
      : {}),
  },
};
