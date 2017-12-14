var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


vfunction addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}