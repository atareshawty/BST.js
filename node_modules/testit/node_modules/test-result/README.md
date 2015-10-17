# test-result

A simple module to mark the result of your tests

[![Build Status](https://img.shields.io/travis/ForbesLindesay/test-result/master.svg)](https://travis-ci.org/ForbesLindesay/test-result)
[![Dependency Status](https://img.shields.io/gemnasium/ForbesLindesay/test-result.svg)](https://gemnasium.com/ForbesLindesay/test-result)
[![NPM version](https://img.shields.io/npm/v/test-result.svg)](https://www.npmjs.org/package/test-result)

## Installation

    npm install test-result

## Usage

```js
var result = require('test-result');

// if tests passed
result.pass('the best tests');
// if tests failed
result.fail('the worst tests');
```

## On the server

It will log a message for test pass or fail.  It will also `process.exit(1)` if the tests failed.

## On the client

It will log a message for test pass or fail if the browser has console support.  It will also count the number of completed, passed and failed tests in three counters, initialized as:

```js
window.TESTS_COMPLETE = 0;
window.TESTS_PASSED = 0;
window.TESTS_FAILED = 0;
```

## License

  MIT
