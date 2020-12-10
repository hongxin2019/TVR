module.exports = {
  publicPath: '/TVR/',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'TVR - Transformation Driven Visual Reasoning';
        return args;
      });
  },
}