'use strict';

window.TESTS_COMPLETE = 0;
window.TESTS_PASSED = 0;
window.TESTS_FAILED = 0;

exports.pass = function (name) {
  if (typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log((name ? name + ' ' : '') + 'passed');
  }
  window.TESTS_COMPLETE++;
  window.TESTS_PASSED++;
}
exports.fail = function (name) {
  if (typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log((name ? name + ' ' : '') + 'failed');
  }
  window.TESTS_COMPLETE++;
  window.TESTS_FAILED++;
}
