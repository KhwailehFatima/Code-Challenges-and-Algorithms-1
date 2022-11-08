// Write your test here
"use strict";

const { Node, Tree, HashTableUsingArray } = require("./challenge01");

describe("Testing challenge 1", () => {
  let tree, hashTable = new HashTableUsingArray();
  beforeAll(() => {
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

    tree = new Tree(one);
  });
  it("It should return true if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum", () => {
    expect(hashTable.checkSum(tree, 3)).toBeTruthy();
    expect(hashTable.checkSum(tree, 15)).toBeTruthy();
    expect(hashTable.checkSum(tree, 16)).toBeFalsy();
  });
});
