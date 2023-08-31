
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book2.jpg',
    id: 2,
  },
  {
    author: 'Stephen King',
    title: 'Fairy Tale',
    img: './images/book3.jpg',
    id: 3,
  },
];


const book1=books[1]
const book2=books[2]
// Note what happens
console.log({...book1, ...book2 });


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
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);