// Only change code below this line
function myForLoop1() {
  var evenNumbers;
  for (var i = 0; i < 9; i++)
    if (i % 2 === 0);
    console.log(i);
}
function myForLoop2() {
  var oddNumbers;
  for (var i = 0; i < 9; i++)
    if (i % 2 !== 0);
    console.log(i);
}
console.log(myForLoop1());
// Only change code above this line

module.exports = {
  myForLoop1,
  myForLoop2
}