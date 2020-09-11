
// question 4 for js file

const object = [
    {
        name:"manish kumar",
        age:22,
        country:"america",
        hobbies:["cricket","programming","song","news"]
    },
    {
        name:"AB de villiers",
        age:38,
        country:"south africa",
        hobbies:["cricket","news"]
    },
    {
        name:"steve smith",
        age:32,
        country:"australia",
        hobbies:["cricket","song","news"]
    },
    {
        name:"kevin pietersen",
        age:45,
        country:"india",
        hobbies:["cricket","programming","song"]
    },
] 



const abc = object.forEach(function(element)
{
    if(element.age<30)
    {
        console.log(element)

    }
})

const xyz = object.forEach(function(element)
{
    if(element.country=="india")
    {
        console.log(element)

    }
})