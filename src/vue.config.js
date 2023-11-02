const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://dineaase.azurewebsites.net',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        },
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:5173'
        }
      }
    }
  }
};
