/* Flattening */
var arrays = [[1,2,3], [4,5],[6]];

var result = arrays.reduce(
  function(total, element) {
    return total.concat(element)
  },[]);

console.log(result);


/* Mother child age difference */
require('./ancestry.js');
/* had to make it global baaaaaad :)   */

var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

ancestry.forEach(function(person) {
/*  console.log(person.name + person.born);
  console.log(person.mother);
  console.log(momsBirthYearFor(person));*/
  console.log(momsBirthAgeFor(person));
});

var ages = ancestry.reduce(
  function(result, person) {
    return result.concat(momsBirthAgeFor(person))
  },[]);

ages = ages.filter(Number);
console.log(ages);
console.log(average(ages));

function momsBirthYearFor(person){
  var mom = byName[person.mother];
  if (mom)
    return mom.born;
  else
    return null;
}

function momsBirthAgeFor(person){
  if (momsBirthYearFor(person))
    return person.born - momsBirthYearFor(person)
  else
    return null;
}

function average(array) {
  function plus(a,b) { return a+b}
  return array.reduce(plus) / array.length
}
