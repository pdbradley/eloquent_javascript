/* Flattening */
var arrays = [[1,2,3], [4,5],[6]];

var result = arrays.reduce(
  function(total, element) {
    return total.concat(element)
  },[]);

console.log(result);
