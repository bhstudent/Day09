// Only change code below this line
function switchCase(letter){

  switch(letter){
  case "a":
  console.log("antilope");
  break;

  case "b":
  console.log("bird");
  break;

  case "c":
  console.log("cat");
  break;

  default:
  console.log("stuff");
  break;
}
return letter;
}
console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
// Only change code above this line
module.exports = switchCase;
