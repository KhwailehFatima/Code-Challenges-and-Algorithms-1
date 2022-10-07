// Write here the code challenge solution

// First we need to create a class for the node

class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
  // we don't have to create methods for this challenge
}

// Now we need to create a class for the tree

class Tree {
  constructor(root) {
    this.root = root || null;
  }
  // we need to create pre order and in-order methods

  preOrder() {
    let results = [];
    let traverse = (node) => {
      if (node && node.value) {
        results.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let traverse = (node) => {
      if (node && node.value) {
        if (node.left) traverse(node.left);
        results.push(node.value);
        if (node.right) traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }
}

module.exports = { Node, Tree };

// Now we need to create a tree for each example

// Example 1
function tree1() {
  let root = new Node(3);
  let leftSubTree = new Node(9);
  let rightSubTree = new Node(20);
  let fifteen = new Node(15);
  let seven = new Node(7);

  root.left = leftSubTree;
  root.right = rightSubTree;
  rightSubTree.left = fifteen;
  rightSubTree.right = seven;

  let exampleTree1 = new Tree(root);
  console.log("Example 1 preOrder", exampleTree1.preOrder());
  console.log("Example 1 inOrder", exampleTree1.inOrder());
  return exampleTree1;
}

// Example 2
function tree2() {
  let root = new Node(-1);
  let exampleTree2 = new Tree(root);
  console.log("Example 2 preOrder", exampleTree2.preOrder());
  console.log("Example 2 inOrder", exampleTree2.inOrder());
  return exampleTree2;
}
tree1();
tree2();
