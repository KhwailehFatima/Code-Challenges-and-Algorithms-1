// Write your test here
"use strict";

const Node = require("./challenge03.js").Node;
const Tree = require("./challenge03.js").Tree;
const sortedArrayToBST = require("./challenge03.js").sortedArrayToBST;

describe("Testing challenge 03", () => {
  test("It should return the root of the tree", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let tree = sortedArrayToBST(arr);

    expect(tree.preOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(tree.inOrder()).toEqual([4, 3, 2, 1, 7, 6, 5]);
  });

  test("It should return the root of the tree", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let tree = sortedArrayToBST(arr);

    expect(tree.preOrder()).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    ]);
    expect(tree.inOrder()).toEqual([
      7, 6, 5, 4, 3, 2, 1, 13, 12, 11, 10, 9, 8, 14,
    ]);
  });
});
