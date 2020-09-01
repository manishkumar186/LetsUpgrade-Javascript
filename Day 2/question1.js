//Qusetion 1
// Program to search for a particular character in a string

const string = "LetsUpgrade Javascript Batch Two" ;
let user = prompt("Please enter a character who want to search");
const m = string.indexOf(user);
if(m>=0){
    console.log(`${user} character is available in our string at index Number ${m}`)
}
else{
    console.log(`${user} character not in our string`);
}
