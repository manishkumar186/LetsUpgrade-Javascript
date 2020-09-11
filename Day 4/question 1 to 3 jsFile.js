// question 1 for js file

const newImage = ()=>{
    let newimage = "image2.jpg";
    let image = document.getElementById('#original')
    image.src=newimage
}

const againNewImage = ()=>{
    let newimage = "image3.jpg";
    let image = document.getElementById('#original')
    image.src=newimage
}

const firstImage = ()=>{
    let newimage = "image1.jpg";
    let image = document.getElementById('#original')
    image.src=newimage
}

// question 2 for js file

const copyValue = ()=>{
    let firstValue = document.getElementById('#inputField1') ;
    let secondValue = document.getElementById('#inputField2') ;
    secondValue.value=firstValue.value;
    
}

// question 3 for js file

const object = [
    {
        name:"manish kumar",
        age:22,
        country:"india",
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
        country:"england",
        hobbies:["cricket","programming","song"]
    },
] 

const data = object.forEach(function(element)
{
    console.log(element)

})

