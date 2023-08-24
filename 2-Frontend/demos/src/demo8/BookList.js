import { books } from './books';
import Book from './Book';

const firstBook= books[0];
const secondBook= books[1]
const thirdBook= books[2]

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
