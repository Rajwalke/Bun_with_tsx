// function greeting(name:string){
//     console.log("Name is ",name);
// };

// greeting(123) 

// function get_first_number(n:number[]):number|null{
//     if(n.length>0){
//         return n[0] ?? null;
//     }else{
//         return null;
//     }
// }
// let x=get_first_number([198,23]);
// console.log(x);

// function delayer(fn : (name:string) => void){
//     setTimeout(fn,2000)
// };
// delayer(function x(){
//     console.log("My name is Raj");
// })

// function check(num:number[]): number | null{
//     if(num.length>0){
//         return num[0] || null;
//     } 
//     return null;
// }
// console.log(check([0]));  


// interface users{
//     age:number
// }

// function isLegal(userInfo:users): boolean{
//     if(userInfo.age>=18){
//         return true;
//     }
//     return false;
// }
// const userAge={
//     age:20
// }
// console.log(isLegal(userAge));


// Interfaces
// interface userSchema{
//     userName:string,
//     email:string
//     age:number
// }

// const user:userSchema={
//     userName:"Raj Walke",
//     email:"rajwalke66@gmail.com",
//     age:12
// }

// function isLegal(userObj:userSchema): boolean{
//     if(userObj.age>18){
//         return true;
//     }
//     return false;
// }
// console.log(isLegal(user));

// Implementing interface in class
// interface User{
//     name:string;
//     age:number;
//     greet(phrase: string): void;
// }

// class Raj implements User{
//     name: string;
//     age:number;

//     constructor(n:string,a:number){
//         this.name=n;
//         this.age=a
//     };  

//     greet(phrase: string){
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// UNION
// type pincode=string | number;
// let Pincode:pincode="101NA";

// Pincode = 12334

// array returns array
// interface User{
//     firstName:string;
//     age:number
// }
// function filterAges(users: User[]){
//     return users.filter(x => x.age>18);
// }

// console.log(filterAges([
//     {
//         firstName:"Raj",
//         age:21
//     },
//     {
//         firstName:"Ujjwal",
//         age:12
//     },
//      {
//         firstName:"hiritkj",
//         age:34
//     }

// ]))

// function sum(n1:number,n2:number):number{
//     let sum:number=n1+n2;
//     return sum;
    
// }

// console.log(sum(4,7))
// interface User{
//     name:string,
//     age:number
// }

// function agefiler(userInfo:User[]):User[]{
//     const filterage=userInfo.filter((x)=>{
//             return x.age>18;
//         }
//     );
//     return filterage;

// }

// console.log(agefiler([
//     {name:"Raj",age:12},
//     {name:"Ujjwal",age:19},
//     {name:"hritik",age:21}
// ]));

// enum status{
//     pending="pending",
//     inpogress="inpogrees",
//     completed="completed"
// }

// interface todo{
//     title:string,
//     todo_status:status
// }

// const todo1:todo={
//     title:"raj",
//     todo_status:status.pending
// }
// // console.log(todo1);



// type status1= "pending" | "inporgress" | "comnpleted"
// interface todo1{
//     title:string,
//     todo_status:status1
// } 
// const todo2:todo1={
//     title:"rajuu",
//     todo_status:"pending"
    
// }

// console.log(todo2)

// enum direction{
//     up="up",
//     down="down",
//     left="left",
//     right="right"
// }

// function setDirection(dir:direction){
//     console.log(dir);
// }

// setDirection(direction.up);
// setDirection(direction.down);
// setDirection(direction.left);
// setDirection(direction.right);

// or

// type direction1= "up" | "down" | "left" | "right"

// function getdirection(dir:direction1){
//     console.log(dir);
// }

// getdirection("up");
// getdirection("down")

// Common use in express
// const express=require('express');

// const app=express();

// enum responseCodeStatus{
//     scuess=200,
//     NotFound=404,
//     Error=505
// };

// app.get("/use",(req,res)=>{
//     res.status(responseCodeStatus.NotFound).json({
//         msg:"Im Not found 404"
//     });
// })

// why use? if you wmatto use in 10 place 404 and you wan to chnae the status code 404 to 401 so just hnage in enumn values of 404 ..
 


// function tp(val:string[] | number[]){
//     return val;
// }

// let op1=tp(["Raj",123]);
// console.log(op1);

// let op2=tp(["Raj",098]);
// console.log(op2)

// function tp<T>(arg: T[]) {
//     return arg;
// }

// let op1=tp<(string | number)>(["Raj",123]);
// console.log(op1);
 

// const express=require('express');

import express from 'express';
