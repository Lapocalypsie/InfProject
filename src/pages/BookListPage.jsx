import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import BookFilter from "../components/BookFilter";
import InputSearch from "../components/InputSearch";
import { fetchBookSubjects } from "../utils/ApiService";
import LivreCard from "../components/LivreCard";

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("fantasy");

  useEffect(() => {
    fetchBookSubjects(genre).then((data) => {
      setBooks(data);
    });
  }, [genre]);

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <BookOpen className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Project Book
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Cherchez et venez découvrir de nouveaux livre !
          </p>
        </header>
        <InputSearch />
        <BookFilter onSelectGenre={handleGenreChange} />
        <LivreCard books={books} />
      </div>
    </div>
  );
};

export default BookListPage;
