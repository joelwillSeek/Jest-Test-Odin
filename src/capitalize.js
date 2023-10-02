/**
 *
 * @param {String} string
 */
export default capitalize = (string) => {
  let array = string.split("");
  array.unshift(array.shift().toUpperCase());
  let st = "";
  array.forEach((char) => {
    st += char;
  });
  return st;
};
