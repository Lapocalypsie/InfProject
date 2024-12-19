const API_URL = "http://openlibrary.org/subjects";
const API_URL_BOOK = "https://openlibrary.org";

const fetchBookSubjects = async (subject) => {
  const response = await fetch(`${API_URL}/${subject}.json`);
  const data = await response.json();
  return cleanBookSubjects(data);
};

const fetchBookByISBN = async (work) => {
  const response = await fetch(`${API_URL_BOOK}/works/${work}.json`);
  const data = await response.json();
  return cleanBookByISBN(data);
};

const searchBooks = async (term) => {
  const response = await fetch(
    `http://openlibrary.org/search.json?title=${term}`
  );
  const data = await response.json();
  return cleanBookBySearch(data);
};

const cleanBookBySearch = async (data) => {
  return data.docs.map((book) => {
    return {
      isbn: book.key.replace("/works/", ""),
      title: book.title || "Unknown Title",
      edition_count: book.edition_count || 0,
      authors: book.author_name || ["Unknown Author"],
      cover: book.cover_i
        ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://via.placeholder.com/150?text=No+Cover",
      has_fullText: book.has_fulltext || false,
      publish_year: book.publish_year || [],
      publish_place: book.publish_place || [],
      languages: book.language || [],
      publisher: book.publisher || [],
      ratings: {
        average: book.ratings_average || 0,
        count: book.ratings_count || 0,
      },
    };
  });
};

const cleanBookSubjects = (data) => {
  return data.works.map((work) => {
    return {
      isbn: work.key.replace("/works/", ""),
      title: work.title,
      edition_count: work.edition_count,
      author: work.authors.map((author) => author.name),
      cover: `http://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
      has_fullText: work.has_fulltext,
      ia: work.cover_id,
    };
  });
};

const cleanBookByISBN = (data) => {
  return {
    title: data.title,
    cover: `http://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`,
    authors: data.authors.map((author) => author.name),
    publishedDate: data.first_publish_date,
    description: data.description,
    subjects: data.subjects,
  };
};

export { fetchBookSubjects, fetchBookByISBN, searchBooks };
