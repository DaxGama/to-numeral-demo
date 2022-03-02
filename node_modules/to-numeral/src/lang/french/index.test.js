import numeral from './';

describe('numeral - english', () => {
    test('toWords', () => {
        expect(numeral.toWords).toBeInstanceOf(Function);
    });
    test('static numbers', () => {
        expect(numeral.toWords(0)).toBe('zéro');
        expect(numeral.toWords(1)).toBe('un');
        expect(numeral.toWords(5)).toBe('cinq');
        expect(numeral.toWords(10)).toBe('dix');
    });
    test('with units', () => {
        expect(numeral.toWords(20)).toBe('vingt');
        expect(numeral.toWords(25)).toBe('vingt-cinq');
        expect(numeral.toWords(100)).toBe('cent');
        expect(numeral.toWords(120)).toBe('cent vingt');
        expect(numeral.toWords(125)).toBe('cent vingt-cinq');
        expect(numeral.toWords(1200)).toBe('mille deux cents');
        expect(numeral.toWords(1234)).toBe('mille deux cent trente-quatre');
        expect(numeral.toWords(12345)).toBe('douze mille trois cent quarante-cinq');
        expect(numeral.toWords(123456)).toBe('cent vingt-trois mille quatre cent cinquante-six');
        expect(numeral.toWords(1234567)).toBe('un million deux cent trente-quatre mille cinq cent soixante-sept');
        expect(numeral.toWords(12345678)).toBe('douze millions trois cent quarante-cinq mille six cent soixante-dix-huit');
        expect(numeral.toWords(123456789)).toBe('cent vingt-trois millions quatre cent cinquante-six mille sept cent quatre-vingt-neuf');
        expect(numeral.toWords(1234567890)).toBe('un milliard deux cent trente-quatre millions cinq cent soixante-sept mille huit cent quatre-vingt-dix');
        expect(numeral.toWords(12345678901)).toBe('douze milliards trois cent quarante-cinq millions six cent soixante-dix-huit mille neuf cent un');
        expect(numeral.toWords(123456789012)).toBe('cent vingt-trois milliards quatre cent cinquante-six millions sept cent quatre-vingt-neuf mille douze');
        expect(numeral.toWords(1234567890123)).toBe('un billion deux cent trente-quatre milliards cinq cent soixante-sept millions huit cent quatre-vingt-dix mille cent vingt-trois');
    });
})
