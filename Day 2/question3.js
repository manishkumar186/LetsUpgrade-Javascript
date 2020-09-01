// Question 3
// Program to search for a element in an array of string
 
const user = prompt("Please enter element who want to search");

const list = ["yellow","blue","orange","green","red","black"];

if(list.includes(user)){
    console.log(`${user} match in an array of string`);
}
else{
    console.log(`${user} not match in an array of string`);
}

