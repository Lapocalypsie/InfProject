import { BookOpen } from "lucide-react";
import { useState } from "react";
import BookFilter from "../components/BookFilter";
import InputSearch from "../components/InputSearch";
import { fetchBookSubjects, searchBooks } from "../utils/ApiService";
import LivreCard from "../components/LivreCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert, {
  BookNotFound,
  NoBookFound,
} from "../components/ErrorAlert";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

const PageHeader = () => (
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
);

const ContentRenderer = ({
  isLoading,
  isError,
  error,
  data,
  searchLoading,
  searchError,
  searchErrorDetails,
  searchTerm,
}) => {
  if (isLoading || searchLoading) return <LoadingSpinner />;

  if (isError) return <ErrorAlert error={error.message} />;

  if (searchError) return <ErrorAlert error={searchErrorDetails.message} />;

  if (searchTerm) {
    if (data?.length > 0) return <LivreCard books={data} />;
    return <BookNotFound bookname={searchTerm} />;
  }

  if (data?.length > 0) return <LivreCard books={data} />;

  return <NoBookFound />;
};

const BookListPage = () => {
  const [genre, setGenre] = useState("fantasy");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch books by genre
  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useQuery(["books", genre], () => fetchBookSubjects(genre), {
    enabled: !searchTerm,
    retry: 1,
  });

  // Fetch books by search term
  const {
    data: searchResults,
    isLoading: searchLoading,
    isError: searchError,
    error: searchErrorDetails,
  } = useQuery(["searchBooks", searchTerm], () => searchBooks(searchTerm), {
    enabled: !!searchTerm,
    retry: 1,
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setSearchTerm(""); // Clear search when genre changes
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <PageHeader />

        <div className="space-y-6">
          <InputSearch onSearch={handleSearch} />
          <BookFilter onSelectGenre={handleGenreChange} />
          <ContentRenderer
            isLoading={isLoading}
            isError={isError}
            error={error}
            data={searchTerm ? searchResults : books}
            searchLoading={searchLoading}
            searchError={searchError}
            searchErrorDetails={searchErrorDetails}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default BookListPage;
