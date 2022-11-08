// Write here the code challenge solution

class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root || null;
  }

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
}

class HashTableUsingArray {
  constructor() {
    this.storage = new Array();
  }

  set(key, value) {
    if (!this.storage[key]) this.storage[key] = [key, []];
    this.storage[key] = [key, [...this.storage[key][1], value]];
  }

  checkSum(tree, num) {
    tree.preOrder().forEach((value) => {
      tree.preOrder().forEach((value2) => {
        if (value !== value2) this.set(value, value2);
      });
    });
    return this.storage
      .map((value) =>
        this.storage[value[0]][1]
          .map((value2) => value[0] + value2)
          .includes(num)
      )
      .includes(true);
  }
}

module.exports = { Node, Tree, HashTableUsingArray };

// Without hashTable

// function checkSum(root, num) {
//   let results = [];
//   let traverse = (node) => {
//     if (node) {
//       results.push(node.value);
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//     }
//   };
//   traverse(root);
//   console.log(results);
//   for (let i = 0; i < results.length; i++) {
//     for (let j = 1; j < results.length; j++) {
//       let check = i !== j ? results[i] + results[j] : null;
//       if (check == num) return true;
//     }
//   }
//   return false;
// }
