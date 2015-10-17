var bst = require("../BST.js");
var assert = require('assert');
var test = require('testit');

function createTree(data) {
  var tree;
  if (data.length > 0) {
    tree = new bst(data[0]);
  }
  for (var i = 1; i < data.length; i++) {
    tree.insert(data[i]);
  }
  return tree;
}

test('contains', function() {
  test('one node, contains = true', function() {
    var tree = createTree([10]);
    assert(tree.contains(10));
  })
  test('one node, contains = false', function() {
    var tree = createTree([10]);
    assert(!tree.contains(15));
  })
})
