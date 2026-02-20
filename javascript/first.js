//operators in js
//1.Arithmetic operators
//let a =6;
//let b =4;
//console.log("a=6 & b=4");
//console.log("a+b=",a+b); //addition
//console.log("a-b=",a-b); //subtraction
//console.log("a*b=",a*b);    //multiplication
//console.log("a/b=",a/b);    //division
//console.log("a%b=",a%b);    //modulus
//console.log("a**b=",a**b);  //exponentiation


//we have two unary operators in js
//1.increment operator

//let a =6;
//let b =4;
//console.log("a=",a,"& b=",b);
//a++;
//console.log("a++=",a);
//console.log("++a=",a);

//2.decrement operator

//a--;
//console.log("a--=",a);
//console.log("--a=",a);
//++a; //pre increment
//--a; //pre decrement
//a++; //post increment
//a--; //post decrement

//assignment operators

// let a =8;
// let b =2;
// console.log("a=",a,"& b=",b);
// a +=b;
// console.log("a+=b=",a);

// a -=b;
// console.log("a-=b=",a);

// a *=b;
// console.log("a*=b=",a);

// a /=b;
// console.log("a/=b=",a);

// a %=b;
// console.log("a%=b=",a);

//comparison operators

// let a =8; 
// let b =2;
// console.log("a=",a,"& b=",b);

// console.log("a!=b",a!=b); //notequal to

// console.log("a==b",a==b); //equal to

// console.log("a===b",a===b); //strict checking

// console.log("a!==b",a!==b);

// console.log("a>b",a>b); //greater than

// console.log("a<b",a<b); //less than

// console.log("a>=b",a>=b); //greater than or equal to

// console.log("a<=b",a<=b); //less than or equal to


//logical &&operators

// let a =8;
// let b =6;
// console.log("a=",a,"& b=",b);

// let condition1 = a>b;
// let condition2=a<b;
// console.log("condition1 && condition2 =",condition1 && condition2);  

//logical OR|| operators

// let a =8;
// let b =6;
// console.log("a=",a,"& b=",b);

// let condition1=a<b;
// let condition2=a>b;
// console.log("condition1 || condition2=",condition1||condition2);

//logical NOT! operator

// let a =8;
// let b =6;
// console.log("!a===b=",!a===b);

//CONDITIONAL STATEMENTS

// let age=16;

// if(age>=18){
//     console.log("you can vote")
// }
//    else(age<18)
//     { console.log("you cannot vote")}
    
// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black"
// }
// console.log(color);

// let a=7;

// if(a%2===0){
//     console.log(a,"is even");
// }
// else{
//     console.log(a,"is odd");}

    //syntax -> rules

    //else if statement

    // let mode="dark";
    // let color;

//     if(mode==="dark"){
//         color="black"
//     }else if(mode==="blue"){
//         color="blue"
//     }else if(mode==="pink"){
//         color="pink"
//     }else{
//         color="white"
//     }
// console.log(color);

// ternary operators

// let age=17;
// let result=age>=18?"adult": "not adult";
// console.log(result);

//#practice question
//1.

// let number=prompt("give number");

// if(number%5===0){
//     console.log(number,"is a multiple of 5");
// }else{console.log(number,"is not a multiple of 5");}

//2.
 
// let score=prompt("enter your score");
// let grade;

// if(score >=90 && score <=100){
//     grade="A";
// }else if(score >=70 && score<=89){
//     grade="B";
// }else if(score >=60 && score<=69){
//     grade="C";
// }else if(score >=50 && score<=59){
//     grade="D";
// }else if(score >=0 && score<=49){ 
//     grade="F";
// }

// console.log("according to your score your grade was:",grade)
   
//#LOOPS IN JS
//FOR loops

// for(let i=1;i<=128;i++){
//     console.log("hello world")
// }

//Calculate sum of 1 to n

// let sum=0;
// for(let i=1;i<=8;i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);

//INFINITE loops
// for(let i=1;i<=128;i++){
//     console.log("hello world")
// }

//WHILE loops

// let i=1;
// while(i<=5) {
//     console.log("i=",i);
//     i++;
// }


//DO-WHILE loops

// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);

//FOR-OF loops

// let str="javascript";
// let length=0;
// for(let i of str){
//     console.log("i=",i);
//     length++;
// }

// console.log("string length=",length);

//FOR-IN loops

// let student={
//     name:"mishika",
//     age:15,
//     cgpa:10,
//     ispass:true,
// };

// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

//PRACTICE QUESTIONS OF LOOPS
//#1.
// for(let num=0;num<=100;num++){
//     if(num%2!==0)console.log("num=",num);
// }

//#2.
// let gameNum=15;
// let userNum=prompt("guess the gamenumber:");

// while(userNum != gameNum){
//    userNum=prompt("you entered the wrong number. guess again:");

// }
// console.log("congratulations,you entered the right number");




