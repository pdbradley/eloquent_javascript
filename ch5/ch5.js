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
  console.log(person.name);
  console.log(person.mother);
  console.log(momsBirthAgeFor(person.name));
});



function momsBirthAgeFor(name){
  p = byName[name]
  if(p != null)
    return p.born;
  else
    return null;
}
