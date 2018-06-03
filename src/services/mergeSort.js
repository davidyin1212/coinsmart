// Takes two arrays represented my left -> middle + 1 and middle + 1 -> right + 1 and merges them inplace
const merge = (array, left, middle, right) => {
  let leftArray = array.slice(left, middle + 1);
  let rightArray = array.slice(middle + 1, right + 1);

  let i = left;
  let j = 0;
  let k = 0;
  while (j < leftArray.length && k < rightArray.length) {
    if (leftArray[j] < rightArray[k]) {
      array[i] = leftArray[j];
      j++;
    } else {
      array[i] = rightArray[k];
      k++;
    }
    i++;
  }

  while (j < leftArray.length) {
    array[i] = leftArray[j];
    i++;
    j++;
  }

  while (k < rightArray.length) {
    array[i] = rightArray[k];
    i++;
    k++;
  }
};

// Splits array using divide and conquer mergesort algo
const mergesort = (array, left, right) => {
  if (left < right) {
    let middle = Math.floor((right + left) / 2);

    mergesort(array, left, middle);
    mergesort(array, middle + 1, right);

    merge(array, left, middle, right);
  }
};

export default mergesort;
