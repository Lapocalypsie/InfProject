import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBookByISBN } from "../utils/ApiService";

const BookDetailPage = () => {
  const { id } = useParams(); // Use 'id' instead of 'bookId'
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid Book ID");
      setLoading(false);
      return;
    }

    fetchBookByISBN(id)
      .then((data) => {
        if (!data) {
          setError("Book not found");
        } else {
          setBook(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  // Loading and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // If no book found
  if (!book) return <div>Book not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">{book.title}</h1>

      {/* Cover Image */}
      <div className="mb-4 text-center">
        {book.cover ? (
          <img
            src={book.cover}
            alt={`${book.title} cover`}
            className="w-64 h-96 object-cover mx-auto"
          />
        ) : (
          <p>No cover image available</p>
        )}
      </div>

      {/* Authors */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Authors:</p>
        <p>{book.authors.join(", ")}</p>
      </div>

      {/* Edition Count */}
      <div className="mb-4">
        <p className="text-lg font-semibold">First publishedDate</p>
        <p>{book.publishedDate}</p>
      </div>

      {/* Full Text Available */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Full Text Available:</p>
        <p>{book.has_fullText ? "Yes" : "No"}</p>
      </div>

      {/* Internet Archive Link */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Internet Archive ID:</p>
        <a
          href={`https://archive.org/details/${book.ia}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {book.ia}
        </a>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Description:</p>
        <p>{book.description || "No description available"}</p>
      </div>

      {/* Publish Date */}
      <div className="mb-4">
        <p className="text-lg font-semibold">First Published:</p>
        <p>{book.first_publish_date || "N/A"}</p>
      </div>

      {/* Subjects */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Subjects:</p>
        <ul>
          {book.subjects && book.subjects.length > 0 ? (
            book.subjects.map((subject, index) => (
              <li key={index} className="list-disc ml-5">
                {subject}
              </li>
            ))
          ) : (
            <p>No subjects available</p>
          )}
        </ul>
      </div>

      {/* External Links */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Learn More:</p>
        <ul>
          {book.links && book.links.length > 0 ? (
            book.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {link.title}
                </a>
              </li>
            ))
          ) : (
            <p>No external links available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BookDetailPage;
