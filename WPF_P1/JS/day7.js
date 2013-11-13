
//var List='';
//for(i=1;i<=100;i++){
//
//    if(i%3==0){
//      List=List+i+ ', ';
//
//    }
//
//}
//   console.log(List);

var Less = 0;
var Arr = [];
for(i=0;i<20;i++){

    Arr[i]=Math.ceil(3*Math.random());

}



for(j=0;j<=20;j++){

   if(Arr[j]>Arr[j+1]){

       Less= Less+1;

   }

}
console.log(Less);
console.log(Arr);
