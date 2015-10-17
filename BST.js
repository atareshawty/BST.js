;
/*
This impl of binary search tree takes data that can be compared with < >, etc
Constructor defaults to an empty tree

*/
function BST(headData) {
  if (!headData) {
    console.log('You didn\'t give my any data! This won\'t work');
    return;
  } else {
    this.head = new Node(headData);
  }
}

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

BST.prototype.inOrderPrint = function() {
  if (this.head != null) {
    var headStore = this.head;
    this.head = this.head.left;
    this.inOrderPrint();
    console.log(headStore.data);
    this.head = headStore.right;
    this.inOrderPrint();
    this.head = headStore;
  }
};

BST.prototype.preOrderPrint = function() {
  if (this.head != null) {
    var headStore = this.head;
    console.log(this.head.data);
    this.head = this.head.left;
    this.preOrderPrint();
    this.head = headStore.right;
    this.preOrderPrint();
    this.head = headStore;
  }
};

BST.prototype.postOrderPrint = function() {
  if (this.head != null) {
    var headStore = this.head;
    this.head = this.head.left;
    this.preOrderPrint();
    this.head = headStore.right;
    this.preOrderPrint();
    this.head = headStore;
    console.log(this.head.data);
  }
};

BST.prototype.insert = function(data) {
  if (typeof this.head.data != typeof data) console.log('Will only accept the same data type we started with');
  var headStore = this.head;
  if (this.head.data >= data) {
    if (this.head.left != null) {
      this.head = this.head.left;
      this.insert(data);
    } else {
      this.head.left = new Node(data);
    }
  } else {
    if (this.head.right != null) {
      this.head = this.head.right;
      this.insert(data);
    } else {
      this.head.right = new Node(data);
    }
  }
  this.head = headStore;
};

BST.prototype.contains = function(data) {
  return contains(this.head, data);
}

function contains(head, data) {
  if (head == null) {
    return false;
  }
  if (head.data === data) {
    return true;
  } else if (head.data > data) {
    return contains(head.left, data);
  } else {
    return contains(head.right, data);
  }
}

module.exports = BST;
