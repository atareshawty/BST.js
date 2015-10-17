'use strict';

exports.pass = function (name) {
  console.log((name ? name + ' ' : '') + 'passed');
}
exports.fail = function (name) {
  console.log((name ? name + ' ' : '') + 'failed');
  process.exit(1);
}
