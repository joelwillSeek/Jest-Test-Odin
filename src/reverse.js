/**
 *
 * @param {String} string
 * @returns {String}
 */
let reverse = (string) => {
  let array = string.split("");

  let string_reverse = "";

  for (let i = 0; i < string.length; i++) {
    string_reverse += array.pop();
  }

  console.log(string_reverse);

  return string_reverse.trim();
};

export default reverse;
