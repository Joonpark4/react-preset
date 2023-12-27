const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/, // SCSS 파일에 대한 정규식 패턴
        use: [
          'style-loader', // 스타일 태그를 생성하여 DOM에 적용
          'css-loader', // CSS를 CommonJS 모듈로 변환
          'sass-loader' // SCSS를 CSS로 컴파일
        ]
      }
    ],
  },
};
