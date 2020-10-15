const expect = require('chai').expect;
const calculate = require('../index.js').calculate;
describe('Index', function () {
    describe('#calculate()', function () {
        it('should return the result of multiplication', function () {
            let result = calculate(5, 7);
            expect(result).to.equal(35);
        });
    });
});