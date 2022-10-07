// Write your test here

const { Node, Tree } = require('./challenge01.js');

describe('Testing challenges', () => {
    test('Challenge 1 It should return an array of the values in the tree required order', () => {
        let root = new Node(3);
        let leftSubTree = new Node(9);
        let rightSubTree = new Node(20);
        let fifteen = new Node(15);
        let seven = new Node(7);
        
        root.left = leftSubTree;
        root.right = rightSubTree;
        rightSubTree.left = fifteen;
        rightSubTree.right = seven;
        let tree1 = new Tree(root);
        expect(tree1.preOrder()).toStrictEqual([3, 9, 20, 15, 7]);
        expect(tree1.inOrder()).toStrictEqual([9, 3, 15, 20, 7]);
    });
    test('Challenge 2 It should return an array of the values in the tree required order', () => {
        let root = new Node(-1);
       
        let tree1 = new Tree(root);
        expect(tree1.preOrder()).toStrictEqual([-1]);
        expect(tree1.inOrder()).toStrictEqual([-1]);
    });
})
        