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
    authors: data.authors.map((author) => author.name), // Make sure authors are returned as an array of strings
    publishedDate: data.first_publish_date,
    description: data.description,
    subjects: data.subjects,
  };
};

export { fetchBookSubjects, fetchBookByISBN };
