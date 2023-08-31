// map()
//w3schools, mdn
// https://www.w3schools.com/jsref/jsref_map.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
// console.log("numbers",numbers);
// console.log("newArr",newArr);

const numbers2 = [65, 44, 12, 4];
const newArr2 = numbers2.map(myFunction)

function myFunction(num) {
  return num * 10;
}

// console.log(numbers2);
// console.log(newArr2);


// Object Destructuring
//mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
const user = {
    id: 42,
    isVerified: true,
    x:"bla"
};
  
  const { x, id} = user;
  
//   console.log(id); // 42
//   console.log(x);

  


// Spread Operator
//w3schools, mdn
// https://www.w3schools.com/howto/howto_js_spread_operator.asp
// https://www.w3schools.com/react/react_es6_spread.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle,  ...updateMyVehicle} 

      

console.log(myUpdatedVehicle);