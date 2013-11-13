//var Human = parseInt(prompt('How old are you?'));
//var Dog = Human*7;
//console.log('If Sparky is '+Human+' human years old.'+' Then Sparky is '+Dog+' dog years old');
var A = parseInt(prompt('What is your A value'));
var B = parseInt(prompt('What is your B value'));
var C = parseInt(prompt('What is your C value'));

if(A==0){
    A=null;
}
if(B==0){
    B=null;
}
if(C==0){
    C=null;
}
isNaN(A);
function pythagorean(a,b,c){

    if(c==null){
        return Math.sqrt(a*a+b*b);
    }
    else if(a==null){
        return Math.sqrt(c*c-b*b);
    }else if(b==null){
        return Math.sqrt(c*c-a*a);
    }
    else{
       return console.log('Incorrect data!!!')
    }
}
     console.log(pythagorean(A,B,C));