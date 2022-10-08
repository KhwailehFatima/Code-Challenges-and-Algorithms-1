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

const createTree = (preOrder, inOrder) => {
  const construct = (preArray, inArray) => {
    if (preArray.length === 0) return null;
    let node = new Node(preArray[0]);
    let nodeIdx = inArray.indexOf(preArray[0]);
    node.left = construct(
      preArray.slice(1, nodeIdx + 1),
      inArray.slice(0, nodeIdx)
    );
    node.right = construct(
      preArray.slice(nodeIdx + 1),
      inArray.slice(nodeIdx + 1)
    );
    return node;
  };
  let root = construct(preOrder, inOrder);
  let tree = new Tree(root);
  return tree;
};

let inputPreOrder = [3, 9, 20, 15, 7],
  inputInOrder = [9, 3, 15, 20, 7]; // test

console.log(createTree(inputPreOrder, inputInOrder).inOrder());

module.exports = { Node, Tree, createTree };
