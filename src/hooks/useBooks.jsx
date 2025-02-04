import { useQuery } from "react-query";
import {
  fetchBookByISBN,
  fetchBookSubjects,
  searchBooks,
} from "../utils/ApiService";

const ITEMS_PER_PAGE = 12;

const useBooks = (genre, searchTerm, page) => {
  const {
    data: booksData,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["books", genre, page],
    () => fetchBookSubjects(genre, page, ITEMS_PER_PAGE),
    {
      enabled: !!genre && !searchTerm,
      retry: 1,
    }
  );

  const {
    data: searchResultsData,
    isLoading: searchLoading,
    isError: searchError,
    error: searchErrorDetails,
  } = useQuery(
    ["searchBooks", searchTerm, page],
    () => searchBooks(searchTerm, page, ITEMS_PER_PAGE),
    {
      enabled: !!searchTerm,
      retry: 1,
    }
  );

  return {
    books: booksData?.books || [],
    searchResults: searchResultsData?.docs || [],
    displayedBooks: searchTerm
      ? searchResultsData?.docs || []
      : booksData?.books || [],
    isLoading,
    isError,
    error,
    searchLoading,
    searchError,
    searchErrorDetails,
    totalBooks: booksData?.totalBooks || 0,
    totalPages: booksData?.totalPages || 1,
  };
};

const useBookDetail = (id) => {
  const { data, isLoading, error } = useQuery(
    ["book", id],
    () => fetchBookByISBN(id),
    {
      enabled: !!id,
      retry: 1,
    }
  );

  return {
    book: data || {},
    isLoading,
    error,
  };
};

export { useBooks, useBookDetail };
