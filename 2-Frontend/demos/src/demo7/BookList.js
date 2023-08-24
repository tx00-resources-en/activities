import Book from './Book';

import img1 from './images/book-1.jpg';
import img2 from './images/book-2.jpg';


const firstBook= {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: img1,
  id: 1,
};

const secondBook= {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: img2,
  id: 2,
};

const thirdBook= {
  author: 'Stephen King',
  title: 'Fairy Tale',
  img: './images/book-3.jpg',
  id: 3,
};

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
      <Book author={thirdBook.author} title={thirdBook.title} img={thirdBook.img} />
      </section>
    </>
  );
}

export default BookList;
