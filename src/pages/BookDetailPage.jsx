import { useParams } from "react-router-dom";
import { fetchBookByISBN } from "../utils/ApiService";
import {
  BookOpen,
  Calendar,
  Tags,
  Link as LinkIcon,
  FileText,
} from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert, { NoBookFound } from "../components/ErrorAlert";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

// Cover Component
const BookCover = ({ cover, title }) => (
  <div className="md:col-span-1 p-6 bg-gray-50 flex items-center justify-center">
    {cover ? (
      <div className="relative group">
        <img
          src={cover}
          alt={`${title} cover`}
          className="w-full max-h-[500px] object-contain rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
      </div>
    ) : (
      <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-lg">
        <p className="text-gray-500">No cover image</p>
      </div>
    )}
  </div>
);

// Details Section
const BookDetails = ({ book }) => (
  <div className="md:col-span-2 p-6">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
      {book.title}
    </h1>
    <BookAuthor authors={book.authors} />
    <PublicationDate firstPublishDate={book.first_publish_date} />
    <BookDescription description={book.description} />
    <QuickInfo hasFullText={book.has_fullText} ia={book.ia} />
    <Subjects subjects={book.subjects} />
    <ExternalLinks links={book.links} />
  </div>
);

// Author Component
const BookAuthor = ({ authors }) => (
  <div className="flex items-center mb-4 text-gray-700">
    <BookOpen className="mr-2 text-blue-500" size={24} />
    <p className="text-lg font-semibold">
      {authors ? authors.join(", ") : "Unknown Author"}
    </p>
  </div>
);

// Publication Date Component
const PublicationDate = ({ firstPublishDate }) => (
  <div className="flex items-center mb-4 text-gray-700">
    <Calendar className="mr-2 text-blue-500" size={24} />
    <p className="text-lg">First Published: {firstPublishDate || "N/A"}</p>
  </div>
);

// Description Component
const BookDescription = ({ description }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <FileText className="mr-2 text-blue-500" size={24} />
      <h2 className="text-xl font-semibold text-gray-800">Description</h2>
    </div>
    <p className="text-gray-600 leading-relaxed">
      {description || "No description available"}
    </p>
  </div>
);

// Quick Info Component
const QuickInfo = ({ hasFullText, ia }) => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-sm text-gray-600">Full Text Available</p>
      <p className="font-bold text-blue-700">{hasFullText ? "Yes" : "No"}</p>
    </div>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-sm text-gray-600">Internet Archive</p>
      <a
        href={`https://archive.org/details/${ia}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-blue-700 hover:underline"
      >
        {ia || "N/A"}
      </a>
    </div>
  </div>
);

// Subjects Component
const Subjects = ({ subjects }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <Tags className="mr-2 text-blue-500" size={24} />
      <h2 className="text-xl font-semibold text-gray-800">Subjects</h2>
    </div>
    {subjects && subjects.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {subjects.slice(0, 6).map((subject, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
          >
            {subject}
          </span>
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No subjects available</p>
    )}
  </div>
);

// External Links Component
const ExternalLinks = ({ links }) =>
  links &&
  links.length > 0 && (
    <div>
      <div className="flex items-center mb-2">
        <LinkIcon className="mr-2 text-blue-500" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">Learn More</h2>
      </div>
      <div className="space-y-2">
        {links.slice(0, 3).map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <LinkIcon className="mr-2" size={16} />
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );

// Main Component
const BookDetailPage = () => {
  const { id } = useParams();

  // Using useQuery for data fetching
  const {
    data: book,
    isLoading,
    error,
  } = useQuery(
    ["book", id], // Query key
    () => fetchBookByISBN(id), // Fetching function
    {
      enabled: !!id, // Ensure query runs only if ID exists
      retry: 1, // Retry once if the query fails
    }
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorAlert error={error.message || "An error occurred"} />;
  if (!book) return <NoBookFound />;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:max-w-5xl">
      <div className="grid md:grid-cols-3 gap-8 bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100">
        <BookCover cover={book.cover} title={book.title} />
        <BookDetails book={book} />
      </div>
    </div>
  );
};

export default BookDetailPage;
