/* eslint-disable indent */
const binarySearch = require('./array-binary-search.js');


describe('Binary Search Method', () => {

    it('If key is found return index', () => {

        const testArray = [1, 2, 3, 4, 5, 6, 7]
        const results = binarySearch(testArray, 1);
        expect(results).toEqual(0)
    })

    it('Should return false if key is not found', () => {

        const testArray = [1, 2, 3, 4, 5, 6, 7];
        const results = binarySearch(testArray, 100);
        expect(results).toBe(false)
    })
})
