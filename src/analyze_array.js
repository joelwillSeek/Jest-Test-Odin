let analyze_array = (array) => {
  let min = get_min(array);

  let max = get_max(array);

  let average = get_average(array);

  let length = array.length;

  return { length, max, min, average };
};

let get_min = (array) => {
  let min = null;

  for (let i = 0; i < array.length; i++) {
    if (min == null) min = array[i];
    else if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

let get_max = (array) => {
  let max = null;

  for (let i = 0; i < array.length; i++) {
    if (max == null) max = array[i];
    else if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

let get_average = (array) => {
  let average = 0;

  for (let i = 0; i < array.length; i++) average += array[i];

  return average / array.length;
};

export default analyze_array;
