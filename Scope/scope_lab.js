// global scope 

var globalvar = "I'm global variable";
let globallet = " I'm also global , but scoped with let";
const globalconst = "I'm a global constant";

{
// Block scope 

var blockscope ="I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockconset ="I'm a block-scoped const";

}

// global scope 

console.log(globalvar);
console.log (globalLet);
console.log (globalconst)



//block scope 

console.log (blockvar);
console.log (blocklet);

function show (){

var functionVar="I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConset = "I'm a block-scoped const";
}

show();

console.log(functionVar);

console.log(functionConst);


