import numeral from './';


describe('numeral - englishIndian', () => {
    test('toWords', () => {
        expect(numeral.toWords).toBeInstanceOf(Function);
    });
    test('static numbers', () => {
        expect(numeral.toWords(0)).toBe('zero');
        expect(numeral.toWords(1)).toBe('one');
        expect(numeral.toWords(5)).toBe('five');
        expect(numeral.toWords(10)).toBe('ten');
    });
    test('with units', () => {
        expect(numeral.toWords(20)).toBe('twenty');
        expect(numeral.toWords(25)).toBe('twenty-five');
        expect(numeral.toWords(100)).toBe('one hundred');
        expect(numeral.toWords(120)).toBe('one hundred and twenty');
        expect(numeral.toWords(125)).toBe('one hundred and twenty-five');
        // without 'and'
        expect(numeral.toWords(1200)).toBe('one thausand two hundred');

        expect(numeral.toWords(1234)).toBe('one thausand two hundred and thirty-four');
        expect(numeral.toWords(12345)).toBe('twelve thausand three hundred and fourty-five');
        expect(numeral.toWords(123456)).toBe('one lakh twenty-three thausand four hundred and fifty-six');
        expect(numeral.toWords(1234567)).toBe('twelve lakh thirty-four thausand five hundred and sixty-seven');
        expect(numeral.toWords(12345678)).toBe('one crore twenty-three lakh fourty-five thausand six hundred and seventy-eight');
        expect(numeral.toWords(123456789)).toBe('twelve crore thirty-four lakh fifty-six thausand seven hundred and eighty-nine');
    });
})
