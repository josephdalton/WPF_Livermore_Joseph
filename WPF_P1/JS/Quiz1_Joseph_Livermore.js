// A variable is a storage space in code for a information such as numbers,words,or sentences. *** or structures***
// You make a variable by typing var The Name Of The Variable( which can be anything you want to name it) = Then
// whatever you want to set it equal to. 

var Variable = 0;

var Rad = parseInt(prompt('What is the Radius?'));

//An expression is one or multiple lines of code that preform a specific task. Such as math.
//The Area of a circle.



var Area = Math.PI*(Rad*Rad);

console.log(Area);

//Addition (+) is used to add things together.

var M = 10;
var N = 230;
console.log(M+N);

//Subtraction (-) is used to subtract one variable form another.

console.log(M-N);

//Multiplication (*) is used to multiple variables together.

console.log(M*N);

//Division is used to divide on variable by another.

console.log(N/M);

//Modulus is used to find out what the remainder of one variable divided by another is.

console.log(N%M);

// For Loops: A for loop is used to tell a specific piece of code to run for a set number of times then not run again.

var Arr = [];
for(i=0;i<=10;i++){
     Arr[i]=i;


}
console.log(Arr);

//If statements are used to ask a specific true false question or set of true false questions(if else) if the answer to
// any of the questions is true then it runs a specific piece of code.
var Hello =parseInt(prompt('Pick a Number 1 or 0?'));
if(Hello==0){

    console.log('Hello world!');
}
else if(Hello==1){
    console.log('Goodbye cruel world!');
}
else{
    console.log('I said 1 or 0!');
}



