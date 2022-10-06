const { sum } = require('../code-challenges/sample-challenge');


describe('Testing Code Challenge:', () => {
    test('Sum of two numbers', () => {
        expect(sum(1, 1)).toEqual(2);
    });
});