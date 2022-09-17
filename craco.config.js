const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {"@primary-color": "#680D8E"},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
