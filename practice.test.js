import {capitalize, reverseString} from "./string";
import calculator from "./calculator";
import caesarCipher from "./caesar";
import analyzeArray from "./analyze";

test('Takes wing and returns it with the first letter capitalized Wing.', () => {
    expect(capitalize('wing')).toBe("Wing");
});

test('Takes wing and returns ging', () => {
    expect(reverseString('wing')).toBe("gniw");
});

test('adds 1 + 1 = 2', () => {
    expect(calculator.add(1,1)).toBe(2);
});

test('subtracts 2 - 1 = 1', () => {
    expect(calculator.subtract(2,1)).toBe(1);
});

test('divides 10 / 2 = 5', () => {
    expect(calculator.divide(10,2)).toBe(5);
});

test('multiplies 2 * 20 = 40', () => {
    expect(calculator.multiply(2,20)).toBe(40);
});

test('takes \'Beware the Ides of March\' and shifts each letter by 7', () => {
    expect(caesarCipher("Beware the Ides of March.", 7)).toBe("Ildhyl aol Pklz vm Thyjo.");
});

test('takes array [1,8,3,4,2,6] and returns an object with values average: 4, min 1, max 8,'
+'and length 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});
