const API_URL = "http://openlibrary.org/subjects";
const API_URL_BOOK = "https://openlibrary.org";

const fetchBookSubjects = async (subject, page = 1, itemsPerPage = 12) => {
  const offset = (page - 1) * itemsPerPage;
  const response = await fetch(
    `${API_URL}/${subject}.json?limit=${itemsPerPage}&offset=${offset}`
  );
  const data = await response.json();

  return {
    books: cleanBookSubjects(data),
    totalBooks: data.work_count || 0,
    totalPages: Math.ceil((data.work_count || 0) / itemsPerPage),
  };
};

const fetchBookByISBN = async (work) => {
  const response = await fetch(`${API_URL_BOOK}/works/${work}.json`);
  const data = await response.json();
  return cleanBookByISBN(data);
};

const searchBooks = async (term, page = 1, itemsPerPage = 12) => {
  const offset = (page - 1) * itemsPerPage;
  const response = await fetch(
    `http://openlibrary.org/search.json?title=${term}&limit=${itemsPerPage}&offset=${offset}`
  );
  const data = await response.json();
  return cleanBookBySearch(data, itemsPerPage);
};

const cleanBookBySearch = (data, itemsPerPage) => {
  return {
    docs: data.docs.map((book) => ({
      isbn: book.key.replace("/works/", ""),
      title: book.title || "Unknown Title",
      edition_count: book.edition_count || 0,
      authors: book.author_name || ["Unknown Author"],
      cover: book.cover_i
        ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://authors.bookfunnel.com/wp-content/uploads/2017/02/Soothing_Clouds.jpg",
      has_fullText: book.has_fulltext || false,
      publish_year: book.publish_year || [],
      publisher: book.publisher || [],
    })),
    totalBooks: data.numFound || 0,
    totalPages: Math.ceil((data.numFound || 0) / itemsPerPage),
  };
};

const cleanBookSubjects = (data) => {
  return data.works.map((work) => ({
    isbn: work.key.replace("/works/", ""),
    title: work.title,
    edition_count: work.edition_count,
    author: work.authors.map((author) => author.name),
    cover: work.cover_id
      ? `http://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
      : "https://authors.bookfunnel.com/wp-content/uploads/2017/02/Soothing_Clouds.jpg",
    has_fullText: work.has_fulltext,
  }));
};

const cleanBookByISBN = (data) => ({
  title: data.title,
  cover: data.covers?.[0]
    ? `http://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`
    : "https://authors.bookfunnel.com/wp-content/uploads/2017/02/Soothing_Clouds.jpg",
  authors: data.authors.map((author) => author.name),
  first_publish_date: data.first_publish_date,
  description: data.description,
  subjects: data.subjects,
});

export { fetchBookSubjects, fetchBookByISBN, searchBooks };
