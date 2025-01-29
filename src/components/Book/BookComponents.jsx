import {
  BookOpen,
  Calendar,
  FileText,
  Tags,
  Link as LinkIcon,
} from "lucide-react";
import {
  bookCoverPropTypes,
  bookAuthorPropTypes,
  publicationDatePropTypes,
  bookDescriptionPropTypes,
  quickInfoPropTypes,
  subjectsPropTypes,
  externalLinksPropTypes,
} from "../../utils/propsType";

export const BookCover = ({ cover, title }) => (
  <div className="md:col-span-1 p-6 bg-gray-50 dark:bg-gray-700 flex items-center justify-center">
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
      <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-600 rounded-lg">
        <p className="text-gray-500 dark:text-gray-300">No cover image</p>
      </div>
    )}
  </div>
);

export const BookAuthor = ({ authors }) => (
  <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
    <BookOpen className="mr-2 text-blue-500" size={24} />
    <p className="text-lg font-semibold">
      {authors ? authors.join(", ") : "Unknown Author"}
    </p>
  </div>
);

export const PublicationDate = ({ firstPublishDate }) => (
  <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
    <Calendar className="mr-2 text-blue-500" size={24} />
    <p className="text-lg">First Published: {firstPublishDate || "N/A"}</p>
  </div>
);

export const BookDescription = ({ description }) => {
  const descriptionText =
    typeof description === "object" ? description.value : description;

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <FileText className="mr-2 text-blue-500" size={24} />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Description
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {descriptionText || "No description available"}
      </p>
    </div>
  );
};

export const QuickInfo = ({ hasFullText, ia }) => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Full Text Available
      </p>
      <p className="font-bold text-blue-700 dark:text-blue-400">
        {hasFullText ? "Yes" : "No"}
      </p>
    </div>
    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Internet Archive
      </p>
      <a
        href={`https://archive.org/details/${ia}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-blue-700 dark:text-blue-400 hover:underline"
      >
        {ia || "N/A"}
      </a>
    </div>
  </div>
);

export const Subjects = ({ subjects }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <Tags className="mr-2 text-blue-500" size={24} />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Subjects
      </h2>
    </div>
    {subjects && subjects.length > 0 ? (
      <div className="flex flex-wrap gap-2">
        {subjects.slice(0, 6).map((subject, link) => (
          <span
            key={link.url}
            className="bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
          >
            {subject}
          </span>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 dark:text-gray-400">No subjects available</p>
    )}
  </div>
);

export const ExternalLinks = ({ links }) =>
  links &&
  links.length > 0 && (
    <div>
      <div className="flex items-center mb-2">
        <LinkIcon className="mr-2 text-blue-500" size={24} />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Learn More
        </h2>
      </div>
      <div className="space-y-2">
        {links.slice(0, 3).map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <LinkIcon className="mr-2" size={16} />
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );

BookCover.propTypes = bookCoverPropTypes;
BookAuthor.propTypes = bookAuthorPropTypes;
PublicationDate.propTypes = publicationDatePropTypes;
BookDescription.propTypes = bookDescriptionPropTypes;
QuickInfo.propTypes = quickInfoPropTypes;
Subjects.propTypes = subjectsPropTypes;
ExternalLinks.propTypes = externalLinksPropTypes;
