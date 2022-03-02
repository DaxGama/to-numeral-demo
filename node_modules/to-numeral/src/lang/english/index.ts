import Numeral, { Units, Words } from "../../index.js";

const words: Words = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
};

const units: Units = {
    20: { word: 'twenty', format: { value: false, remainder: '-#', seperator: '' } },
    30: { word: 'thirty', format: { value: false, remainder: '-#', seperator: '' } },
    40: { word: 'fourty', format: { value: false, remainder: '-#', seperator: '' } },
    50: { word: 'fifty', format: { value: false, remainder: '-#', seperator: '' } },
    60: { word: 'sixty', format: { value: false, remainder: '-#', seperator: '' } },
    70: { word: 'seventy', format: { value: false, remainder: '-#', seperator: '' } },
    80: { word: 'eighty', format: { value: false, remainder: '-#', seperator: '' } },
    90: { word: 'nineteen', format: { value: false, remainder: '-#', seperator: '' } },
    100: { word: 'hundred', format: { remainder: 'and #' } },
    1000: { word: 'thausand' },
    1000000: { word: 'million' },
    1000000000: { word: 'billion' },
    1000000000000: { word: 'trillion' },
    1000000000000000: { word: 'quadrillion' },
}

const numeral = Numeral({ words, units });
export default numeral;