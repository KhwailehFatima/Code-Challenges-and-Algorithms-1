"use strict";

const { isSame, createTree } = require("./challenge02");

describe("Testing isSame to check trees", () => {
  it("Testing Example 1", () => {
    let first = createTree([1, 2, 3], [2, 1, 3]);
    let second = createTree([1, 2, 3], [2, 1, 3]);

    let check = isSame(first, second);
    expect(check).toBe(true);
  });

  it("Testing Example 2", () => {
    let first = createTree([1, 2], [2, 1]);
    let second = createTree([1, 2], [1, 2]);

    let check = isSame(first, second);
    expect(check).toBe(false);
  });

  it("Testing Example 3", () => {
    let first = createTree([1, 2, 1], [2, 1, 1]);
    let second = createTree([1, 1, 2], [1, 1, 2]);

    let check = isSame(first, second);
    expect(check).toBe(false);
  });
});
