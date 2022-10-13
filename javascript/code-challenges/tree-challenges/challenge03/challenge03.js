// Write here the code challenge solution

"use strict";

class Node {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root || null;
  }

  // for testing only

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

function sortedArrayToBST(arr) {
  let root = new Node(arr[0]);
  let ifEven;
  if (arr.length % 2 === 0) ifEven = arr.splice(-1);

  let leftSubTree = arr.slice(1, arr.length / 2 + 1);
  let rightSubTree = arr.slice(arr.length / 2 + 1);

  // create a function to create the left and right subtrees
  const construct = (array) => {
    if (array.length === 0) return null;
    let node = new Node(array[0]);
    node.left = construct(array.slice(1));
    return node;
  };
  // recursive call to construct the left and right subtrees of the root
  root.left = construct(leftSubTree);
  root.right = construct(rightSubTree);
  // if the array length is even, we need to add the last element to a subtree as a right node
  if (ifEven) root.right.right = new Node(ifEven[0]);
  let tree = new Tree(root);
  return tree;
}

module.exports = {
  Node,
  Tree,
  sortedArrayToBST,
};

// let a = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
// console.log( a.inOrder() );
