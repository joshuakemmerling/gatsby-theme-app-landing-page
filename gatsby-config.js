module.exports = options => ({
  plugins: [
    {
      resolve: 'gatsby-source-apple-app-store',
      options: {
        id: options.appStoreId,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')('./tailwind.config.js'),
        ],
      },
    },
  ],
});
