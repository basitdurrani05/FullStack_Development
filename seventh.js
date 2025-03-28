// setTimeout(() => {

//     console.log("Hello World")
    
// },3000);



// setInterval(() => {

//     console.log("Hello World")
    
// }, 3000);


// console.log("Hello World")



// Synchronous and asynchronous JavaScript



// setTimeout(() => {    // asynchronous    

//     console.log("Arun")
    
// }, 3000);


// console.log("Asheesh");  // synchronous
// console.log("Amit")   //synchronous


// setInterval(() => {
    
//     console.log("Hello World")   // asynchronous
// }, 3000);



// Promises

// let a = new Promise((resolve, reject) => {

//     let num = 22;

//     if(num%2==0){

//         resolve("Even Number");
//     }

//     else{
//         reject("Odd Number");
//     }

// })

// a.then((message)=> console.log(message))
// .catch((error)=> console.log(error))



// Async and Await


async function first(){

    return new Promise((resolve, reject) => { 

        setTimeout(() => {

            resolve("Wait......")
            
        }, 3000);

     })
}


async function second(){

    console.log("Smart-Phone IPhone-16")

    let a = await first();

    console.log(a)
    console.log("Your Ordered Successfully Done")
}





second();





