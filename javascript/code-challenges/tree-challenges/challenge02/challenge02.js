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

const isSame = (array1, array2) => {
  return JSON.stringify(array1.inOrder())==JSON.stringify(array2.inOrder());
};

let first = createTree([1,2,3], [2, 1, 3])
let second = createTree([1,2,3], [2, 1, 3])

console.log(isSame(first, second))
module.exports = {isSame, createTree}