import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LivreCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <Link
          key={book.isbn}
          to={`/book/${book.isbn}`}
          className="group block transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100 hover:border-blue-200">
            <div className="book-cover relative overflow-hidden">
              <img
                src={book.cover}
                alt={`${book.title} cover`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="book-details p-4 bg-white">
              <h3 className="book-title text-xl font-bold text-gray-800 mb-1 truncate group-hover:text-blue-600 transition-colors">
                {book.title}
              </h3>
              <p className="book-author text-gray-500 text-sm font-medium">
                {book.author}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LivreCard;
