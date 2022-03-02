export interface Words {
    [key: number]: string;
}
export interface Units {
    [key: number]: {
        word: string | {
            noRemainder: string;
            default: string;
        };
        format?: {
            value?: string | boolean;
            remainder?: string | boolean;
            seperator?: string;
        };
        remainder?: {
            [key: number]: string;
        };
        divideBy?: number;
    };
}
export interface LanguageConfig {
    words: Words;
    units: Units;
}
declare function Numeral(lang: LanguageConfig): {
    toWords: (number: number) => string;
};
export default Numeral;
