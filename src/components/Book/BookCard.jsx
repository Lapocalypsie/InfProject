import { Link } from "react-router-dom";
import { bookPropTypes } from "../../utils/propsType";
import { Heart } from "lucide-react";
import Button from "../Common/Button";
import { useFavorites } from "../../contexts/FavoriteContext";

const BookCard = ({ book }) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  // creation d'une constante isFavori
  const isFavorite = favorites.some((fav) => fav.isbn === book.isbn);

  const handleFavoriteClick = (e) => {
    e.preventDefault();

    if (isFavorite) {
      removeFavorite(book.isbn); 
    } else {
      addFavorite(book); 
    }
  };

  return (
    <Link
      to={`/book/${book.isbn}`}
      className="group block transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="rounded-xl shadow-md overflow-hidden h-full border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="relative overflow-hidden">
          <img
            src={book.cover}
            alt={`${book.title} cover`}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

          <div className="absolute top-4 right-4">
            <Button
              label=""
              handleClick={handleFavoriteClick}
              className="w-10 h-10 !p-0 flex items-center justify-center bg-white/20 backdrop-blur-sm
                        hover:bg-white/30 dark:bg-gray-800/20 dark:hover:bg-gray-800/30
                        transform transition-all duration-300 hover:scale-110
                        rounded-full"
              icon={
                <Heart
                  size={20}
                  className={`transition-colors duration-300 ${
                    isFavorite
                      ? "fill-red-500 text-red-500"
                      : "fill-none text-white hover:text-red-500"
                  }`}
                />
              }
            />
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold mb-1 truncate group-hover:text-blue-600 transition-colors dark:text-white">
            {book.title}
          </h3>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {book.author}
          </p>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = bookPropTypes;

export default BookCard;


