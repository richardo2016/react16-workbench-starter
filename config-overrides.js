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
  })
);
