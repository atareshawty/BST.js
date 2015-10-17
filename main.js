var bst = require("./BST.js");
var myTree = new bst(15);
myTree.insert(10);
myTree.insert(12);
myTree.insert(100);
myTree.inOrderPrint();
console.log(myTree.contains(100));
console.log(myTree.contains(50));
