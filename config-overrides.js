const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    /**
     * @reference https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
     */
    modifyVars: {
      // '@primary-color': '#1DA57A',
    },
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  (config) => {
    if (process.env.BUNDLE_STANDALONE) {
      config.optimization.runtimeChunk = false;
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      // JS
      config.output.filename = 'static/js/[name].js';
      // CSS. "5" is MiniCssPlugin
      config.plugins[5].options.filename = 'static/css/[name].css';
      config.plugins[5].options.moduleFilename = () => 'static/css/[name].css';
    }

    return config
  }
);
