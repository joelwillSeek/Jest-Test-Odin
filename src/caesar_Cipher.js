/**
 * @param {String} string
 * @returns {String}
 */
let caesar_Cipher = (string, factor) => {
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let capher = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (alphabets[j] == string[i]) {
        capher += alphabets[(j + factor) % alphabets.length];
      } else if (string[i] == "!") {
        capher += string[i];
        break;
      }
    }
  }

  return capher;
};

export default caesar_Cipher;
