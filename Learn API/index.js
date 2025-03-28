let a = {
    name:"Basit",
    age: 21,
    city: "New York",
    country: "USA",
    occupation: "Developer",
    hobbies: ["reading", "gaming", "coding"],
    isEmployed: true,
    salary: 60000

}

document.getElementById("first").innerHTML = "Name : "+a.name;
document.getElementById("second").innerHTML = "Age : "+a.age;
document.getElementById("third").innerHTML = "City : "+a.city;
document.getElementById("fourth").innerHTML = "Country : "+a.country;
document.getElementById("fifth").innerHTML = "Occupation : "+a.occupation;
document.getElementById("sixth").innerHTML = "Salary : "+a.salary;


