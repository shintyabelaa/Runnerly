const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://fantastic-bat-hose.cyclic.app',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      secure: false,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
