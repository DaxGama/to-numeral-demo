import numeral from './';

describe('numeral - englishIndian', () => {
    test('toWords', () => {
        expect(numeral.toWords).toBeInstanceOf(Function);
    });
    test('static numbers', () => {
        expect(numeral.toWords(0)).toBe('शून्य');
        expect(numeral.toWords(1)).toBe('एक');
        expect(numeral.toWords(5)).toBe('पांच');
        expect(numeral.toWords(10)).toBe('दस');
    });
    test('with units', () => {
        expect(numeral.toWords(20)).toBe('बीस');
        expect(numeral.toWords(25)).toBe('पच्चीस');
        expect(numeral.toWords(100)).toBe('एक सौ');
        expect(numeral.toWords(120)).toBe('एक सौ बीस');
        expect(numeral.toWords(125)).toBe('एक सौ पच्चीस');
        expect(numeral.toWords(1200)).toBe('एक हज़ार दो सौ');
        expect(numeral.toWords(1234)).toBe('एक हज़ार दो सौ चौंतीस');
        expect(numeral.toWords(12345)).toBe('बारह हज़ार तीन सौ पैंतालीस');
        expect(numeral.toWords(123456)).toBe('एक लाख तेईस हज़ार चार सौ छप्पन');
        expect(numeral.toWords(1234567)).toBe('बारह लाख चौंतीस हज़ार पांच सौ सड़सठ');
        expect(numeral.toWords(12345678)).toBe('एक करोड़ तेईस लाख पैंतालीस हज़ार छह सौ अठहत्तर');
        expect(numeral.toWords(123456789)).toBe('बारह करोड़ चौंतीस लाख छप्पन हज़ार सात सौ नवासी');
    });
})
