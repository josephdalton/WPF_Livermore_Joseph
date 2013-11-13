//var ArrLayer1 = [];
//ArrLayer1[0]=[];
//ArrLayer1[1]=[];
//ArrLayer1[2]=[];

//ArrLayer1 [0][0]= ['dog'];
//ArrLayer1 [0][1]= ['cat'];
//ArrLayer1 [0][2]= ['pig'];

//ArrLayer1 [1][0]= [1];
//ArrLayer1 [1][1]= [10];
//ArrLayer1 [1][2]= [908277.289];

//ArrLayer1 [2][0]= ['dog','monkey'];
//ArrLayer1 [2][1]= ['cat','dolphin'];
//ArrLayer1 [2][2]= ['pig','whale'];

//console.log(ArrLayer1[0][0]);
//console.log(ArrLayer1[2][0]);
//console.log(ArrLayer1[2][0][0]);


var pro= parseInt(prompt('Give a number'));

var ArrMath = [];

ArrMath [0]=[];
ArrMath [1]=[];
ArrMath [2]=[];
ArrMath [3]=[];

ArrMath [0][0] = parseInt(prompt('Give a number'));
var AddVal= parseInt(prompt('Give a number'));

for(x=0;x<=4;x=x+1){
    for(y=0;y<=4;y++){



    }

}
ArrMath [0][1] = ArrMath[0][0]+AddVal;
ArrMath [0][2] = ArrMath[0][0]+(AddVal*2);
ArrMath [0][3] = ArrMath[0][0]+(AddVal*3);

ArrMath [1][0] = ArrMath[0][0]+AddVal;
ArrMath [2][0] = ArrMath[0][0]+(AddVal*2);
ArrMath [3][0] = ArrMath[0][0]+(AddVal*3);

ArrMath [1][1] = ArrMath [0][1] * ArrMath [1][0]*pro;
ArrMath [1][2] = ArrMath [0][2] * ArrMath [1][0]*pro;
ArrMath [1][3] = ArrMath [0][3] * ArrMath [1][0]*pro;

ArrMath [2][1] = ArrMath [0][1] * ArrMath [2][0]*pro;
ArrMath [2][2] = ArrMath [0][2] * ArrMath [2][0]*pro;
ArrMath [2][3] = ArrMath [0][3] * ArrMath [2][0]*pro;

ArrMath [3][1] = ArrMath [0][1] * ArrMath [3][0]*pro;
ArrMath [3][2] = ArrMath [0][2] * ArrMath [3][0]*pro;
ArrMath [3][3] = ArrMath [0][3] * ArrMath [3][0]*pro;

ArrMath [0][1] = ArrMath[0][1]*pro;
ArrMath [0][2] = ArrMath[0][2]*pro;
ArrMath [0][3] = ArrMath[0][3]*pro;
ArrMath [1][0] = ArrMath[1][0]*pro;
ArrMath [2][0] = ArrMath[2][0]*pro;
ArrMath [3][0] = ArrMath[3][0]*pro;

console.log(ArrMath[0]);
console.log(ArrMath[1]);
console.log(ArrMath[2]);
console.log(ArrMath[3]);

//var loop =parseInt(prompt('Give a number'));
//for(a=loop;a<=loop*loop;a=a+loop){
//
//    console.log(a);
//
//}





