import { useParams } from "react-router-dom";
import { useBookDetail } from "../hooks/useBooks";
import {
  BookAuthor,
  BookCover,
  BookDescription,
  ExternalLinks,
  PublicationDate,
  QuickInfo,
  Subjects,
} from "../components/Book/BookComponents";
import ErrorAlert, { NoBookFound } from "../components/Feedback/ErrorAlert";
import LoadingSpinner from "../components/Feedback/LoadingSpinner";
import CommentaryBox from "../components/Commentaires/Commentaires.jsx";

const BookDetailPage = () => {
  const { id } = useParams();
  const { book, isLoading, error } = useBookDetail(id);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorAlert error={error.message || "An error occurred"} />;
  if (!book) return <NoBookFound />;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:max-w-5xl">
      <div>
        <div className="grid md:grid-cols-3 gap-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <BookCover cover={book.cover} title={book.title} />
          <div className="md:col-span-2 p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 leading-tight">
              {book.title}
            </h1>
            <BookAuthor authors={book.authors} />
            <PublicationDate firstPublishDate={book.first_publish_date} />
            <BookDescription description={book.description} />
            <QuickInfo hasFullText={book.has_fullText} ia={book.ia} />
            <Subjects subjects={book.subjects} />
            <ExternalLinks links={book.links} />
          </div>
        </div>
      </div>
      <CommentaryBox id={id}></CommentaryBox>
    </div>
  );
};

export default BookDetailPage;
