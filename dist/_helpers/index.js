'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breakpointUtil = require('./breakpoint-util');

Object.keys(_breakpointUtil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _breakpointUtil[key];
    }
  });
});