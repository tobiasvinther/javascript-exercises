    /****************************************************************************/
    /* JavaScript functions and Callbacks */
    /****************************************************************************/
 
 //Observe: no return type, no type on parameters
 function add(n1, n2){
    return n1 +n2;
 };

 const sub = function(n1,n2){
    return n1 - n2
  }; 

  const mul = function(n1,n2){
    return n1 * n2
  }; 

  const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+" and "+n2+"="+callback(n1,n2);
  };

  const cbImproved = function(n1,n2, callback){
    typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
    typeof n2 === "number" //Will fail if n2 is undefined, or is not a number
    typeof callback === "function" //Will fail if callback is undefined or is not a function
    return "Result from the two numbers: " + n1 + " and " + n2 + "=" + callback(n1,n2);
  };
  
console.log( add(1,2) );     // this will give 3, we're calling a function and giving it arguments
console.log( add );          // this will just print the function name
//console.log( add(1,2, 3) );    // This will give us 3, because JS will just ignore the thrird argument, since the funcion only takes to parameters
console.log( add(1) );	  // this will give us NaN, because it is trying to add 1 with undefined, since we only pass it one argument and the function takes two, it automatically assumes the second argument is undefined 	
console.log( cb(3,3,add) ); // here we pass two numbers and one function to the function. So the parameter called callback is a function and in this case we pass the add function to the cb function
console.log( cb(4,3,sub) ); // see above
//console.log(cb(3,3,add())); // here we get an error because we call the add function instead of passing it as an argument
console.log(cb(3,"hh",add));// this prints "Result from the two numbers: 3+hh=3hh" because JS will will add "hh" to 3, converting it to a string.

try {
    console.log(cbImproved(3,3,"hi")); 
} catch (error) {
    console.log("ERROR: You provided the wrong type of arguments.")
    //throw new Error('Whoops!')
}

console.log(cb(4,3,mul));

let show = function() {
    console.log(cb(4,3,mul));
};

show();

   /****************************************************************************/
    /* Getting comfortable with filter, map and forEach
    /****************************************************************************/
 

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const shortNames = names.filter(name => name.length <= 3).forEach(console.log);
const upperNames = names.map(name => name.toUpperCase()).forEach(console.log);

 /****************************************************************************/
    /*Implement YOUR OWN functions that takes callbacks as arguments
    /****************************************************************************/

//takes an array as the first argument, and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
function myFilter(array, callback) {
    
  typeof callback === "function"; 
    
  const result = []; //the finished array (starts empty)
  
  //loop through the array we revieved
  for (const element in array) {

    const item = array[element] //make a reference to the index
    const should_include = callback(item) //perform the recieved function on the item in the current index (item) (boolean result)
    
    //if should_include is true, add the item to the result array
    if(should_include) {
      result.push(item);
    }
  }

  return result;
};


const shortNames1 = myFilter(names, name => name.length <= 3);
console.log(shortNames1);

//my own map function
function myMap(array, callback) {
  
  typeof callback === "function"; 
  const result = [];
  
  //loop through the array, run the callback on each element in the array
  for(let i = 0; i < array.length; i++) {
    const newItem = callback(array[i]);
    result.push(newItem);   //and push them to the result array
  }
  
  return result;
}

const upperNames1 = myMap(names, name => name.toUpperCase());
console.log("Using my own map function, result us: " + upperNames1);


//setup
const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

const carsNewerThan1999 = myFilter(cars, car => car.year >= 1999);
console.log(carsNewerThan1999);

const allVolvos = myFilter(cars, car => car.make === 'Volvo');
console.log(allVolvos);

const priceUnder5000 = myFilter(cars, car => car.price < 5000);
console.log(priceUnder5000);

  /****************************************************************************/
    /* Asynchronous Callbacks
    /****************************************************************************/

const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
    };
    console.log("aaaaaaaaaa"); //this will print first
    msgPrinter ("bbbbbbbbbb",2000); //this fifth
    console.log("dddddddddd"); //this second
    msgPrinter ("eeeeeeeeee",1000); //this fourt
    console.log("ffffffffff"); //this third

   /****************************************************************************/
    /* JavaScript objects
    /****************************************************************************/

let me = {name: "Tobias", gender: "Male", hobby: "Drawing", email: "email@email.com", shoeSize: 43}

for(let prop in me){
  console.log(prop, me[prop])
}

//deleting property
delete me.shoeSize

for(let prop in me){
  console.log(prop, me[prop])
}

//adding property
me.height = 180

for(let prop in me){
  console.log(prop, me[prop])
}


