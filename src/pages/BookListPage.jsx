import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import BookFilter from "../components/BookFilter";
import InputSearch from "../components/InputSearch";
import { fetchBookSubjects, searchBooks } from "../utils/ApiService";
import LivreCard from "../components/LivreCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("fantasy");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBookSubjects(genre);
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load books. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [genre]);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    setLoading(true);
    setError(null);

    if (term) {
      try {
        const searchResults = await searchBooks(term);
        setBooks(searchResults);
      } catch (error) {
        console.error("Search error:", error);
        setError("Search failed. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      handleGenreChange(genre);
    }
  };

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <BookOpen
            className="mx-auto h-16 w-16 text-blue-600 mb-4 
            transform hover:rotate-12 transition-transform duration-300"
          />
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600"
          >
            Project Book
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Cherchez et venez découvrir de nouveaux livres !
          </p>
        </header>

        <div className="space-y-6">
          <InputSearch onSearch={handleSearch} />
          <BookFilter onSelectGenre={handleGenreChange} />

          {error && <ErrorAlert error={error} />}
          {loading ? (
            <LoadingSpinner />
          ) : books.length > 0 ? (
            <LivreCard books={books} />
          ) : (
            <div className="text-center text-gray-500 bg-gray-50 p-4 rounded-lg">
              No books found. Try a different search or genre.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookListPage;
