import { useQuery } from "@tanstack/react-query";
import {
  fetchBookByISBN,
  fetchBookSubjects,
  searchBooks,
} from "../utils/ApiService";

const ITEMS_PER_PAGE = 12;

const useBooks = (genre, searchTerm, page) => {
  const booksQuery = useQuery({
    queryKey: ["books", genre, page],
    queryFn: () => fetchBookSubjects(genre, page, ITEMS_PER_PAGE),
    enabled: Boolean(genre) && !searchTerm,
    retry: 1,
    keepPreviousData: true,
  });

  const searchQuery = useQuery({
    queryKey: ["searchBooks", searchTerm, page],
    queryFn: () => searchBooks(searchTerm, page, ITEMS_PER_PAGE),
    enabled: Boolean(searchTerm),
    retry: 1,
    keepPreviousData: true,
  });

  return {
    books: booksQuery.data?.books || [],
    searchResults: searchQuery.data?.docs || [],
    displayedBooks: searchTerm
      ? searchQuery.data?.docs || []
      : booksQuery.data?.books || [],
    isLoading: booksQuery.isLoading || searchQuery.isLoading,
    isError: booksQuery.isError || searchQuery.isError,
    error: booksQuery.error || searchQuery.error,
    totalBooks: booksQuery.data?.totalBooks || 0,
    totalPages: booksQuery.data?.totalPages || 1,
  };
};

const useBookDetail = (id) => {
  const bookQuery = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBookByISBN(id),
    enabled: Boolean(id),
    retry: 1,
  });

  return {
    book: bookQuery.data || {},
    isLoading: bookQuery.isLoading,
    error: bookQuery.error,
  };
};

export { useBooks, useBookDetail };
