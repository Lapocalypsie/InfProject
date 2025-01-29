import { useState, useMemo } from "react";
import InputSearch from "../components/Filter/InputSearch";
import BookCard from "../components/Book/BookCard";
import LoadingSpinner from "../components/Feedback/LoadingSpinner";
import ErrorAlert from "../components/Feedback/ErrorAlert";
import { useBooks } from "../hooks/useBooks";
import Pagination from "../components/Common/Pagination";
import BookFilter from "../components/Filter/BookFilter";
import PageHeader from "../components/Display/PageHeader";

const BookListPage = () => {
  const [genre, setGenre] = useState("fantasy");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const {
    books,
    searchResults,
    isLoading,
    isError,
    error,
    searchLoading,
    searchError,
    totalPages,
  } = useBooks(genre, searchTerm, page);

  const displayedBooks = useMemo(
    () => (searchTerm ? searchResults : books),
    [searchTerm, searchResults, books]
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handleGenreChange = (newGenre) => {
    setGenre(newGenre);
    setSearchTerm("");
    setPage(1);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-8">
        <PageHeader />
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="w-full sm:flex-1">
            <InputSearch onSearch={handleSearch} />
          </div>

          <div className="w-full sm:w-auto">
            <BookFilter onSelectGenre={handleGenreChange} />
          </div>
        </div>

        {(() => {
          if (isLoading || searchLoading) {
            return <LoadingSpinner />;
          } else if (isError || searchError) {
            return (
              <ErrorAlert error={error?.message || searchError?.message} />
            );
          } else {
            return (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {displayedBooks.map((book) => (
                    <BookCard key={book.isbn} book={book} />
                  ))}
                </div>
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  setPage={setPage}
                />
              </>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default BookListPage;
