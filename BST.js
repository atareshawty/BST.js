;
/*
This impl of binary search tree takes data that can be compared with < >, etc
Constructor defaults to an empty tree

*/
function BST(headData) {
  if (!headData) {
    return null;
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
  inOrderPrint(this.head);
};

function inOrderPrint(head) {
  if (head != null) {
    inOrderPrint(head.left);
    console.log(head.data);
    inOrderPrint(head.right);
  }
}

BST.prototype.preOrderPrint = function() {
  preOrderPrint(this.head);
};

function preOrderPrint(head) {
  if (head != null) {
    console.log(head.data);
    preOrderPrint(head.left);
    preOrderPrint(head.right);
  }
}

BST.prototype.postOrderPrint = function() {
  postOrderPrint(this.head);
};

function postOrderPrint(head) {
  if (head != null) {
    postOrderPrint(head.left);
    postOrderPrint(head.right);
    console.log(head.data);
  }
}

BST.prototype.insert = function(data) {
  if (typeof this.head.data != typeof data) {
    console.log('Will only accept the same data type we started with');
    return;
  }
  insert(this.head, data);
};

function insert(head, data) {
  if (head.data >= data) {
    if (head.left) {
      insert(head.left, data);
    } else {
      head.left = new Node(data);
    }
  } else {
    if (head.right) {
      insert(head.right, data);
    } else {
      head.right = new Node(data);
    }
  }
}

BST.prototype.contains = function(data) {
  return contains(this.head, data);
}

function contains(head, data) {
  if (head == null) return false;
  if (head.data === data) {
    return true;
  } else if (head.data > data) {
    return contains(head.left, data);
  } else {
    return contains(head.right, data);
  }
}

module.exports = BST;
