'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Menu = require('./Menu');

Object.keys(_Menu).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Menu[key];
    }
  });
});

var _Close = require('./Close');

Object.keys(_Close).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Close[key];
    }
  });
});