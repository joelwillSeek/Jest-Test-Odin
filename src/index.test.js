import analyze_array from "./analyze_array";
import caesar_Cipher from "./caesar_Cipher";
import calculator from "./calculator";
import capitalize from "./capitalize";
import reverse from "./reverse";

//capitalize
// test("Capitalize Name", () => expect(capitalize("eyoel")).toBe("Eyoel"));

// test("Capitalize City", () => expect(capitalize("addis")).toBe("Addis"));

//reverse
// test("Reverse Name", () => expect(reverse("eyoel")).toBe("leoye"));

// test("Reverse Name", () => expect(reverse("addis")).toBe("sidda"));

//calculator

// test("Calculator Add", () => expect(calculator.add(2, 2)).toBe(4));

// test("Calculator Subtract", () => expect(calculator.subtract(5, 2)).toBe(3));

// test("Calculator Divide", () => expect(calculator.divide(10, 2)).toBe(5));

// test("Calculator Multiply", () => expect(calculator.multiply(2, 6)).toBe(12));

//Caesar Cipher
// test("Caesar Cipher Name", () => {
//   expect(caesar_Cipher("eyoel", 5)).toBe("jdtjq");
// });

// test("Caesar Cipher alphabet", () => {
//   expect(caesar_Cipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe(
//     "fghijklmnopqrstuvwxyzabcde"
//   );
// });

// test("Caesar Cipher same", () => {
//   expect(caesar_Cipher("abcdefghijklmnopqrstuvwxyz", 0)).toBe(
//     "abcdefghijklmnopqrstuvwxyz"
//   );
// });

// test("Caesar Cipher punctuation", () => {
//   expect(caesar_Cipher("di!ck", 5)).toBe("in!hp");
// });

//analyze array
test("Analyze Array", () => {
  let obj = {
    max: 5,
    min: 1,
    length: 4,
    average: 2.75,
  };

  expect(analyze_array([5, 3, 2, 1])).toMatchObject(obj);
});
