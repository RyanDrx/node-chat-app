var expect = require('expect');

const { isRealString } = require('./validation');

describe('Validation Tests', () => {

    describe('isRealString', () => {

        it('should reject non-string values', () => {
            var testNum = 2398;
            var validationResponse = isRealString(testNum);
            expect(validationResponse).toBe(false);
        })

        it('should reject string with only spaces', () => {
            var testBlankString = '  ';
            var validationResponse = isRealString(testBlankString);
            expect(validationResponse).toBe(false);
        })

        it('should allows strings with non-space characters', () => {
            var testGoodString = '  ThisIsAGoodString  ';
            var validationResponse = isRealString(testGoodString);
            expect(validationResponse).toBe(true);
        })

    });
});

