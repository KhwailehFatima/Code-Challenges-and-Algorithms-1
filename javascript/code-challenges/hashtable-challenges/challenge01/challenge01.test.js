// Write your test here
"use strict";

const { Node, Tree, HashTableUsingArray } = require("./challenge01");

describe("Testing challenge 1", () => {
  let tree1, tree2, hashTable = new HashTableUsingArray();
  it("It should return false if the tree has no root-to-leaf path such that adding up all the values along the path equals the given sum", () => {
    let seven = new Node(7);
    let two = new Node(2);
    let one = new Node(1);
    let five = new Node(5);

    let nine = new Node(9);
    let fourten = new Node(14);
    
    seven.left = two;
    seven.right = nine;
    two.left = one;
    two.right = five;
    nine.right = fourten;

    tree1 = new Tree(seven);
    expect(hashTable.checkSum(tree1, 3)).toBeTruthy();
    expect(hashTable.checkSum(tree1, 4)).toBeFalsy();
  
  });
  it("It should return true if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum", () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;
    four.left = eight;

    tree2 = new Tree(one);
    hashTable = new HashTableUsingArray();
    expect(hashTable.checkSum(tree2, 3)).toBeTruthy();
    expect(hashTable.checkSum(tree2, 15)).toBeTruthy();
    expect(hashTable.checkSum(tree2, 16)).toBeFalsy();
  });

});
