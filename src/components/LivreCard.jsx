import { Link } from "react-router-dom";

const LivreCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <Link
          key={book.isbn}
          to={`/book/${book.isbn}`} // Navigate to the book details page
          className="book-item bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="book-cover">
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="book-details p-4">
            <h3 className="book-title text-lg font-semibold">{book.title}</h3>
            <p className="book-author text-gray-600">{book.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LivreCard;
