import getArray from '../services/getArray';
import bubbleSort from '../services/bubbleSort';
import mergeSort from '../services/mergeSort';

// Takes values parses csv and calls bubble sort on it
export const bubble = (req, res) => {
  let val = req.query.value;
  let array = [];
  if (!val || val.length === 0) {
    res.send([]);
    return;
  }
  try {
    array = getArray(val);
  } catch (e) {
    res.send(e);
    return;
  }
  let result = bubbleSort(array);
  res.send(result);
};

// Takes values parses csv and calls merge sort on it
export const merge = (req, res) => {
  let val = req.query.value;
  let array = [];
  if (!val || val.length === 0) {
    res.send([]);
    return;
  }
  try {
    array = getArray(val);
  } catch (e) {
    res.send(e);
    return;
  }
  mergeSort(array, 0, array.length - 1);
  res.send(array);
};
