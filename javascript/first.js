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


//STRINGS IN JS

// let str="helloworld";
// console.log(str[6]);

//TEMPLATE LITERALS

// let obj={
//     item:"pen",
//     price:50,
// };
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let specialstring=`this is a template literal`;
// console.log(typeof specialstring);

//#STRING INTERPOLATION

// let specialstring=`this is a template literal ${1+2+9}`;
// console.log(specialstring);

//#escape characters

// let str="hello\tworld";
// console.log(str.length);

//STRING METHODS
//1.str.toUpperCase()

// let str="helloworld";
// str=str.toUpperCase();
// console.log(str);

//2.str.toLowerCase();

// let str="HelloWorld";
// str=str.toLowerCase();
// console.log(str);
 
//3.str.trim()//removes whitespaces

// let str="    hello    world   ";
// console.log(str.trim());


//STRING METHODS TO REMEMBER
// . str.slice(start,end?)// returns part of string
//. str1.concat(str2)// joins str2 with str1
//.str.replace(searchVal,newVal)
//. str.charAt(idx)


// let str="Hello";
// console.log(str.slice(1,3));

// let str1="Hello";
// let str2="world";
// let res=str2.concat(str1);
// console.log(res);

// let str="hello";
// console.log(str.replace("h","c"));

// let str="i am mishika";
// console.log(str.charAt(8));

//#PRACTICE QUESTIONS

// let fullName=prompt("enter your Fullname:");
// console.log(fullName);
// let username="@"+fullName+fullName.length;
// console.log(username);

//##ARRAYS##//
//it is a collection of items//
// # array=mutable in js
// # string=immutable in js

// let marks =[90,85,78,65];
// console.log(marks);
// console.log(marks.length);

//#ARRAY INDICES//

// let arr=[98,97,67,54,34];
// console.log(arr);
// // console.log(arr[0],arr[3]);
// console.log(arr[4]=56);
// console.log(arr);

//LOOPING OVER AN ARRAY

// let arr=[98,97,67,54,34];
// for(let idx=0;idx<arr.length;idx++){
//     console.log(arr[idx]);
// }

// let arrays=[98,97,67,54,34];
// for(let array of arrays){
//     console.log(array);
// }

//#PRACTICE QUESTIONS//
//#1

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class=${avg}`);

//#2

// let items=[250,645,300,900,50];

// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
// items[i]-=offer;
// }
// console.log(items);


//#ARRAY METHODS

//1. push()
//2.pop()
//3.toString()
//4.concat()
//5.unshift()
//6.shift()
//7.slice()
//8.splice()

// let veggies=["potato","tomato","ginger","garlic","onion"];
// console.log(veggies);
// let deleteditem=veggies.pop();
// console.log(veggies);
// console.log(deleteditem);

// let veggies=["potato","tomato","ginger","garlic","onion"];
// console.log(veggies);
// console.log(veggies.toString());

// let favheroes=["motu","patlu","john"];
// let dcheroes=["bheem","chutki"];
// let heroes=favheroes.concat(dcheroes);
// console.log(heroes);

// let favheroes=["motu","patlu","john"];
// favheroes.unshift("antman");
// console.log(favheroes);

// let favheroes=["motu","patlu","john"];
// console.log(favheroes);
// let val=favheroes.shift();
// console.log("deleted=",val);


// let favheroes=["motu","patlu","john","chutki","bheem"];
// console.log(favheroes);
// console.log(favheroes.slice(1,4));

// let arr=[1,2,3,4,5,6,7];
// arr.splice(3,3,55,78);
//ADD ELEMENT
// arr.splice(2,0,55);
//DELETE ELEMENT
// arr.splice(2,1);
//REPLACE ELEMENT
// arr.splice(3,1,101);

//## PRACTICE QUESTIONS
//1.

// let arr=["bloomberg","microsoft","uber","google","ibm","netflix"];
// arr.shift();
// arr.splice(2,1,"ola");
// arr.push("amazon");
// console.log(arr);

//## FUNCTIONS & METHODS //

//FUNCTIONS IN JS//

// console.log("hello!");
// "abc".toUpperCase()
// [1,2,3].push(4);

//WAYS TO CREATE FUNCTIONS IN JS//

// function myFunction(){
//     console.log("welcome to my page");
//     console.log("i am learning js");
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("i love js");

// function sum(x,y){
// s=x+y;
// console.log("before return");
// return s;
// console.log("after return");
// }
// let val=sum(3,4);
// console.log(val);

//#SUM FUNCTION//
// function sum(a,b){
//     return a+b;
// }
//MODERN JS
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// };

//#MULTIPLICATION FUNCTION//
// function mul(a,b){
//     return a*b;
// }
// const arrowMul=(a,b)=>{
//     console.log(a*b);
// };

// const printHello=()=> console.log("hello");

//# PRACTICE QUESTIONS
1
//1.

// function countVowels(str){
//     let count=0
//    for(const char of str) {
//     if(char==="a"|| char==="e"|| char==="i"||char==="o"||char==="u"){
//         count++;
//     }
// }
// return count;
// }
// const countVow=(str)=>{
//         let count=0
//    for(const char of str) {
//     if(char==="a"|| char==="e"|| char==="i"||char==="o"||char==="u"){
//         count++;
//     }
// }
// return count;

// };

//# FOR EACH LOOPS IN ARRAYS.
//## HIGHER ORDER FUNCTIONS //

// function abc(){
//     console.log("hello");
// }
// function myFunction(abc){
//     return abc;
// }

// let arr=["titoo","motu"];

// arr.forEach((val) => {
// console.log(val.toUpperCase());
// });


// let arr=["titoo","motu"];
// arr.forEach((val,idx,arr) => {
// console.log(val.toUpperCase(),idx,arr);
// });

//PRACTICE QUESTIONS
//1.

// let nums=[2,3,4,5,6];
// nums.forEach((num)=>{
// console.log(num*num);

// });

//SOME MORE ARRAY METHODS//
//MAP METHOD//

// let nums=[2,3,4,5,6];

// let newArr=nums.map((val)=>{
// return val*val;
// });
// console.log(newArr);

// let calcSquare=(num)=>{
// console.log(num*num);
// };

//FILTER METHOD//

// let arr=[2,3,4,5,6];

// let evenArr=arr.filter((val)=>{
//     return val%2===0
// });
// console.log(evenArr);

//## REDUCE METHOD //

// let arr=[2,3,4,5,6];
// const output=arr.reduce((res,curr)=>{
//   return  res+curr;
// });

// console.log(output);


// let arr=[2,3,9,5,6];
// const output=arr.reduce((res,curr)=>{
//   return  res>curr?res:curr;
// });

// console.log(output);

//PRACTICE QUESTION//
//#1.
// let arr=[87,93,75,98];
// let marksmorethan90=arr.filter((val)=>{
//     return val>=90
// });
// console.log("marks of students that scored 90=",marksmorethan90);

//2.
// let n=prompt("enter a number:");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);
// console.log(arr);
// const multiple=arr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log(multiple);

//## DOM ##// DOCUMENT OBJECT MODEL //

// let headings=document.getElementsByClassName("heading");
// console.log(headings);

// DOM MANIPULATION //
// let div=document.querySelector("div");
// console.dir(div);

//# PRACTICE QUESTIONS //
//1.

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText= h2.innerText+"from mishika yadav";

//DOM ATTRIBUTES//

// let div=document.querySelector("div");
// console.log(div.setAttribute("id","newid"));

// let div=document.querySelector("div");
// div.style.backgroundColor="pink";
// div.style.fontSize="26px";

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);

//# PRACTICE QUESTIONS //
//1.


// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newBtn);

//## EVENTS IN JS //
//# EVENT OBJECT

// let btn1=document.querySelector("#btn1");

// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//      console.log(e.target);
// };

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside div");
// };

//# EVENT LISTENERS//

// btn1.addEventListener("click",(evt)=>{
//     console.log("button1 was clicked - handler1");
// });

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler2");
// });

// const handler3=()=>{
// console.log("button1 was clicked-handler3");
// };
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler4");
// });
// btn1.removeEventListener("click",handler3);

//# PRACTICE QUESTIONS//

// let modeBtn=document.querySelector("#mode");
// let currMode="light";

// modeBtn.addEventListener("click",()=>{
// if(currMode==="light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";
// }else{
//     currMode="light";
//  document.querySelector("body").style.backgroundColor="white";
// }

// console.log(currMode);
// });