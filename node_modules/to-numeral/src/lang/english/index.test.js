import numeral from './';

describe('numeral - english', () => {
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
        expect(numeral.toWords(120)).toBe('one hundred and twenty');
        expect(numeral.toWords(125)).toBe('one hundred and twenty-five');
        expect(numeral.toWords(100)).toBe('one hundred');
        // without 'and'
        expect(numeral.toWords(1200)).toBe('one thausand two hundred');

        expect(numeral.toWords(1234)).toBe('one thausand two hundred and thirty-four');
        expect(numeral.toWords(12345)).toBe('twelve thausand three hundred and fourty-five');
        expect(numeral.toWords(123456)).toBe('one hundred and twenty-three thausand four hundred and fifty-six');
        expect(numeral.toWords(1234567)).toBe('one million two hundred and thirty-four thausand five hundred and sixty-seven');
        expect(numeral.toWords(12345678)).toBe('twelve million three hundred and fourty-five thausand six hundred and seventy-eight');
        expect(numeral.toWords(123456789)).toBe('one hundred and twenty-three million four hundred and fifty-six thausand seven hundred and eighty-nine');
        expect(numeral.toWords(1234567890)).toBe('one billion two hundred and thirty-four million five hundred and sixty-seven thausand eight hundred and nineteen');
        expect(numeral.toWords(12345678901)).toBe('twelve billion three hundred and fourty-five million six hundred and seventy-eight thausand nine hundred and one');
        expect(numeral.toWords(123456789012)).toBe('one hundred and twenty-three billion four hundred and fifty-six million seven hundred and eighty-nine thausand twelve');
        expect(numeral.toWords(1234567890123)).toBe('one trillion two hundred and thirty-four billion five hundred and sixty-seven million eight hundred and nineteen thausand one hundred and twenty-three');
    });
})
