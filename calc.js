const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let name = "tuli"
console.log(`hello ${name}.`)
reader.question("please validate your password.", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

  if (mathSymbol === '+') {
	 console.log(num1 + num2);
 }
  if (mathSymbol === '-') {
	 console.log(num1 - num2);
 }
  if (mathSymbol ==='*') {
	 console.log(num1 * num2);
 } 
  if (mathSymbol === '^') {
	 console.log(num1 ^ num2);
 } 
  if (mathSymbol === '/') {
	 console.log(num1 / num2);
 }
  if (mathSymbol === 'sqrt') {
	 console.log(math.sqrt(num1)); 
 }
 	
 

	// This line closes the connection to the command line interface.
	reader.close()

});
