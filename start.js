'use strict';

require('babel-register')({
  presets: ['env'],
  plugins: ['transform-runtime']
})

require('./src/index.js')