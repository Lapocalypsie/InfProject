import { useState, useMemo } from "react";
import { useQuery } from "react-query";
import BookFilter from "../components/BookFilter";
import InputSearch from "../components/InputSearch";
import { fetchBookSubjects, searchBooks } from "../utils/ApiService";
import PageHeader from "../components/PageHeader";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

const BookListPage = () => {
  const [genre, setGenre] = useState("fantasy");
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useQuery(["books", genre], () => fetchBookSubjects(genre), {
    enabled: !searchTerm,
    retry: 1,
  });

  const {
    data: searchResults,
    isLoading: searchLoading,
    isError: searchError,
    error: searchErrorDetails,
  } = useQuery(["searchBooks", searchTerm], () => searchBooks(searchTerm), {
    enabled: !!searchTerm,
    retry: 1,
  });

  const displayedBooks = useMemo(() => {
    return searchTerm ? searchResults : books;
  }, [searchTerm, searchResults, books]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <PageHeader />

        <div className="space-y-6">
          <InputSearch onSearch={handleSearch} />
          <BookFilter onSelectGenre={handleGenreChange} />

          {isLoading || searchLoading ? (
            <div className="text-center text-gray-500">
              <LoadingSpinner />
            </div>
          ) : isError || searchError ? (
            <div className="text-center text-red-500">
              <ErrorAlert
                error={error?.message || searchErrorDetails?.message}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {displayedBooks?.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookListPage;
