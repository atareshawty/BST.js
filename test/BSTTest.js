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

test('constructor', function() {
  test('dont\'t give constructor data, empty object', function() {
    var tree = new bst();
    assert(Object.keys(tree).length === 0);
  })

  test('give constructor data, doesn\'t return null', function() {
    var tree = new bst(10);
    assert(tree != null);
  })
})

test('contains', function() {
  test('one node, contains = true', function() {
    var tree = createTree([10]);
    assert(tree.contains(10));
  })

  test('one node, contains = false', function() {
    var tree = createTree([10]);
    assert(!tree.contains(15));
  })

  test('bunch of nodes, contains = true', function() {
    var tree = createTree([1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,4,5,45,566,4]);
    assert(tree.contains(4));
  })

  test('bunch of nodes, contains = false', function() {
    var tree = createTree([1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,4,5,45,566,4]);
    assert(!tree.contains('10'));
  })
})

test('insert', function() {
  test('one node, should be left', function() {
    var tree = createTree([1]);
    tree.insert(0);
    //Make sure data is in correct node
    assert(tree.head.left.data === 0);
    //Make sure right node is still null
    assert(tree.head.right === null);
  })

  test('one node, should be right', function() {
    var tree = createTree([1]);
    tree.insert(3);
    //Make sure data is in correct node
    assert(tree.head.right.data === 3);
    //Make sure left node is still null
    assert(tree.head.left === null);
  })

  test('both left and right', function() {
    var tree = createTree([2]);
    tree.insert(2);
    tree.insert(3);
    assert(tree.head.left.data === 2);
    assert(tree.head.right.data === 3);
  })

  test('add node to left, and to left of that', function() {
    var tree = createTree([5]);
    tree.insert(3);
    tree.insert(2);
    var leftChild = tree.head.left;
    assert(tree.head.right === null);
    assert(leftChild.data === 3);
    assert(leftChild.right === null);
    assert(leftChild.left.data === 2);
  })

  test('add node to left, and to the right of that', function() {
    var tree = createTree([5]);
    tree.insert(2);
    tree.insert(3);
    var leftChild = tree.head.left;
    assert(tree.head.right === null);
    assert(leftChild.data === 2);
    assert(leftChild.left === null);
    assert(leftChild.right.data === 3);
  })

  test('add node to right, and to left of that', function() {
    var tree = createTree([3]);
    tree.insert(6);
    tree.insert(5);
    var rightChild = tree.head.right;
    assert(tree.head.left === null);
    assert(rightChild.data === 6);
    assert(rightChild.right === null);
    assert(rightChild.left.data === 5);
  })

  test('add node to right, and to right of that', function() {
    var tree = createTree([3]);
    tree.insert(6);
    tree.insert(7);
    var rightChild = tree.head.right;
    assert(tree.head.left === null);
    assert(rightChild.data === 6);
    assert(rightChild.right.data === 7);
    assert(rightChild.left === null);
  })
})
