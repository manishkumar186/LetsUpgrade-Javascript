const data = []
function alldata(search)
{
let addData = ""
    search.forEach(function(element,index)
    {
        // index = index+1
        let currentdata = `<tr>
        <td>${index+1}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.city}</td>
        <td>${element.salary}</td>
        <td><button onclick='deletes(${index})'>Delete</button></td>
        </tr>`
        addData = addData+currentdata
    })
    document.getElementById("tbody").innerHTML=addData
}
alldata(data)
function addData(event)
{
    event.preventDefault()
    newobj = {}
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    newobj.name=name;
    newobj.age=age;
    newobj.city=city;
    newobj.salary=salary;

    data.push(newobj)
    alldata(data)
}

function searchName()
{
    let searchName = document.getElementById("sname").value;

    let search = data.filter(function(element){
        return element.name.indexOf(searchName)!=-1
    })
    alldata(search)
}

function searchCity()
{
    let searchCity = document.getElementById("cname").value;

    let search = data.filter(function(element){
        return element.city.indexOf(searchCity)!=-1
    })
    alldata(search)
}
function deletes(index)
{
    data.splice(index,1)
    alldata(data)
}


