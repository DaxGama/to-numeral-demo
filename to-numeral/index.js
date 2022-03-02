function Numeral(lang) {
    const sortedUnitsKey = Object.keys(lang.units).map(n => +n).sort((a, b) => b - a);
    const getFormated = (number, format) => {
        const word = number ? toWords(number) : undefined;
        if (format)
            return format.replace('#', word);
        return word;
    };
    const toWords = (number) => {
        if (isNaN(number))
            return '';
        if (lang.words[number])
            return lang.words[number];
        const closestKey = sortedUnitsKey.find(sn => sn <= number);
        const unit = lang.units[closestKey];
        const result = [];
        if (unit.format?.value !== false) {
            const value = Math.floor(number / (unit.divideBy ?? closestKey));
            if (value)
                result.push(getFormated(value, typeof unit.format?.value == 'string' ? unit.format.value : undefined));
        }
        if (typeof unit.word === 'string') {
            result.push(unit.word);
        }
        else {
            if (unit.word.noRemainder && !(number % (unit.divideBy ?? closestKey))) {
                result.push(unit.word.noRemainder);
            }
            else {
                result.push(unit.word.default);
            }
        }
        if (unit.format?.remainder !== false) {
            const remainder = number % (unit.divideBy ?? closestKey);
            if (remainder)
                result.push(getFormated(remainder, typeof unit.format?.remainder == 'string' ? unit.format.remainder : undefined));
        }
        return result.join(unit.format?.seperator ?? ' ');
    };
    return { toWords };
}
export default Numeral;
//# sourceMappingURL=index.js.map