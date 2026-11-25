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
interface User{
    firstName:string;
    age:number
}
function filterAges(users: User[]){
    return users.filter(x => x.age>18);
}

console.log(filterAges([
    {
        firstName:"Raj",
        age:21
    },
    {
        firstName:"Ujjwal",
        age:12
    },
     {
        firstName:"hiritkj",
        age:34
    }

]))
