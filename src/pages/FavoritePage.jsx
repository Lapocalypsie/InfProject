import BookCard from "../components/Book/BookCard";
import { useFavorites } from "../contexts/FavoriteContext";

const FavoritePage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorite-page min-h-screen bg-white p-6 dark:bg-gray-800">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 dark:text-gray-200">
        Mes Favoris
      </h1>
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            Aucun livre ajouté aux favoris pour le moment.
          </p>
          <p className="text-lg text-gray-500">
            Explorez et ajoutez vos livres favoris!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {favorites.map((book) => (
            <BookCard key={book.isbn} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
