import { Link } from "react-router-dom";
import { bookPropTypes } from "../utils/propsType";

const BookCard = ({ book }) => {

  
  return (
    <Link
      to={`/book/${book.isbn}`}
      className="group block transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
    >
      <div className="rounded-xl shadow-md overflow-hidden h-full border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-400">
        <div className="book-cover relative overflow-hidden">
          <img
            src={book.cover}
            alt={`${book.title} cover`}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="book-details p-4">
          <h3 className="book-title text-xl font-bold mb-1 truncate group-hover:text-blue-600 transition-colors dark:text-white">
            {book.title}
          </h3>
          <p className="book-author text-sm font-medium text-gray-500 dark:text-gray-400">
            {book.author}
          </p>
          
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = bookPropTypes;

export default BookCard;
