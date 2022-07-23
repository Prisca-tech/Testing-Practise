const { describe } = require('yargs');
const { stringlength, reverseString, capitalize, calculator } = require ('./function.js')

test('check length of string yes to equal 3', () => {
  expect(stringlength("yes")).toEqual(3);
  expect(stringlength("hello")).toEqual(5);

});

test('check length of string meets condition', () => {
expect(() => stringlength()).toThrow(Error);
});

test('reverseString function exists', () => {
expect(reverseString).toBeDefined();
});

test('string reverses', () => {
expect(reverseString('hello')).toEqual('olleh')
});

test('check if string is capitalized', () => {
	expect(capitalize("yes")).toBe("Yes");
  
  });

describe('calculator', () => {
	it('should add two numbers', () => {
		const calculator = new calculator();
		expect(calculator.addtion(1 + 2)).toBe(3);
	}
	);

    it('should substract two numbers', () => {
		const calculator = new calculator();
		expect(calculator.addtion(4 - 2)).toBe(2);
	}
	);

    it('should multiply two numbers', () => {
		const calculator = new calculator();
		expect(calculator.addtion(1 * 2)).toBe(2);
	}
	);

    it('should divide two numbers', () => {
		const calculator = new calculator();
		expect(calculator.addtion(2 / 2)).toBe(1);
	}
	);

});

