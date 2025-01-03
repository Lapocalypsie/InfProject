// LivreCard.jsx
import BookCard from "./BookCard";
import { bookPropTypes } from "../utils/propsType";

const LivreCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <BookCard key={book.isbn} book={book} />
      ))}
    </div>
  );
};

LivreCard.propTypes = bookPropTypes;

export default LivreCard;