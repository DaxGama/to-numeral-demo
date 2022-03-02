import numeral from './';

describe('numeral - englishIndian', () => {
    test('toWords', () => {
        expect(numeral.toWords).toBeInstanceOf(Function);
    });
    test('static numbers', () => {
        expect(numeral.toWords(0)).toBe('શૂન્ય');
        expect(numeral.toWords(1)).toBe('એક');
        expect(numeral.toWords(5)).toBe('પાંચ');
        expect(numeral.toWords(10)).toBe('દસ');
        expect(numeral.toWords(200)).toBe('બસ્સો');
    });
    test('with units', () => {
        expect(numeral.toWords(20)).toBe('વીસ');
        expect(numeral.toWords(25)).toBe('પચ્ચીસ');
        expect(numeral.toWords(100)).toBe('એકસો');
        expect(numeral.toWords(120)).toBe('એકસો વીસ');
        expect(numeral.toWords(125)).toBe('એકસો પચ્ચીસ');
        expect(numeral.toWords(1200)).toBe('એક હજાર બસ્સો');
        expect(numeral.toWords(1234)).toBe('એક હજાર બેસો ચોત્રીસ');
        expect(numeral.toWords(12345)).toBe('બાર હજાર ત્રણસો પિસ્તાલીસ');
        expect(numeral.toWords(123456)).toBe('એક લાખ ત્રેવીસ હજાર ચારસો છપ્પન');
        expect(numeral.toWords(1234567)).toBe('બાર લાખ ચોત્રીસ હજાર પાંચસો સડસઠ');
        expect(numeral.toWords(12345678)).toBe('એક કરોડ ત્રેવીસ લાખ પિસ્તાલીસ હજાર છસો ઇઠ્યોતેર');
        expect(numeral.toWords(123456789)).toBe('બાર કરોડ ચોત્રીસ લાખ છપ્પન હજાર સાતસો નેવ્યાસી');
    });
})
