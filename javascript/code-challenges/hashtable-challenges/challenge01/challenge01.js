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
    if (!this.storage[key]) this.storage[key] = [value];
    this.storage[key] = [...this.storage[key], value];
  }

  checkSum(tree, num) {
    tree.preOrder().forEach((value) => {
      tree.preOrder().forEach((value2) => {
        if (value !== value2) this.set(value, value2);
      });
    });
    console.log(this.storage);
    return this.storage
      .map((value, idx) =>
        this.storage[idx]?.find((value2) => idx + value2 === num && idx !== value2)
      )
      .filter((value) => value).length?true:false;
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

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.left = six;
// three.right = seven;
// four.left = eight;

// let tree = new Tree(one);
// let hashTable = new HashTableUsingArray();

// console.log(hashTable.checkSum(tree, 16));
