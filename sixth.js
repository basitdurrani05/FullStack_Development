// let a = document.getElementById('first');
// a.style.color = 'red';


// Browser Object Model (BOM)

// alert("It's a 18+ Contents , you are not enter because you are a child......")
// confirm("Are you 18 + ?");
// prompt("Enter Your Age : ");    Taking User Input



// DOM Nodes

// 1). text node
// 2). element node
// 3). Comment node



// What is Searching DOM OR How many type of selector in javascript.

// let a = document.getElementById();
// let b = document.getElementsByClassName();
// let c= document.querySelector();
// let d = document.querySelectorAll();





// let a = document.getElementById('first');

// let b = document.getElementsByClassName('first');

// let a = document.querySelector('#first')
// let a = document.querySelectorAll('#first');

// for(let i = 0; i < a.length; i++){

//     a[i].style.color = 'red';
// }


// DOM Properities.

// let a = document.getElementById("first");

// a.innerHTML="Hello World";
// a.style.color="red";
// a.style.backgroundColor="yellow"
// a.style.border="2px solid black"

// a.outerHTML="Hello World";



// Most Important Topic in DOM.

// Create class and elements with the help of DOM


// First Method


// let a = document.createElement("h1");

// a.innerHTML="<h1>Hello Arun</h1>";

// a.setAttribute("id","second");

// document.querySelector("#first").append(a);

// Remove the class and div.

// document.querySelector("#second").remove();




// 2 Method

// document.querySelector("#first").classList.add("second");

// document.querySelector("#first").classList.remove(".second");


// Callback function in javascript.   similar to recursion


// function fact(a){

//     if(a == 1){
//         return 1;
//     }
//     else{
//         return a * fact(a-1);
//     }


// }

// console.log(fact(5))



// function first(){

//     console.log("Arun");
//     first();
// }

// first();


// AddEvent Listeners in javascript.


let a = document.getElementById("btn");


a.addEventListener('click',()=>{


    document.getElementById("first").innerHTML="-2000";
    a.style.backgroundColor="green";
    a.style.color="yellow";
    a.style.border="2px solid black";
    a.innerHTML="Paymwent Successfully Done";


})










