// src/utils/propTypes.js
import PropTypes from "prop-types";

// BookCard prop types
export const bookPropTypes = PropTypes.shape({
  isbn: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
});

// BookCover prop types
export const bookCoverPropTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
};

// BookAuthor prop types
export const bookAuthorPropTypes = {
  authors: PropTypes.arrayOf(PropTypes.string),
};

// PublicationDate prop types
export const publicationDatePropTypes = {
  firstPublishDate: PropTypes.string,
};

// BookDescription prop types
export const bookDescriptionPropTypes = {
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string,
    }),
  ]),
};

// QuickInfo prop types
export const quickInfoPropTypes = {
  hasFullText: PropTypes.bool,
  ia: PropTypes.string,
};

// Subjects prop types
export const subjectsPropTypes = {
  subjects: PropTypes.arrayOf(PropTypes.string),
};

// ExternalLinks prop types
export const externalLinksPropTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

// ImageDisplay prop types
export const imageDisplayPropTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

// InputSearch prop types
export const inputSearchPropTypes = {
  onSearch: PropTypes.func,
};

// LivreCard prop types
export const livreCardPropTypes = {
  books: PropTypes.arrayOf(bookPropTypes).isRequired,
};

// Button prop types
export const buttonPropTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.element,
};

// ContentRenderer prop types
export const contentRendererPropTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.array,
  searchLoading: PropTypes.bool,
  searchError: PropTypes.bool,
  searchErrorDetails: PropTypes.object,
  searchTerm: PropTypes.string,
};

// ErrorAlert prop types
export const errorAlertPropTypes = {
  error: PropTypes.string.isRequired,
};

// BookNotFound prop types
export const bookNotFoundPropTypes = {
  bookname: PropTypes.string.isRequired,
};

// FilterDropdown prop types
export const filterDropdownPropTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectOption: PropTypes.func.isRequired,
};

// BookFilter prop types
export const bookFilterPropTypes = {
  onSelectGenre: PropTypes.func.isRequired,
};

// ThemeProvider prop types
export const themeProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

// ThemeToggle prop types
export const themeTogglePropTypes = {
  // No props for ThemeToggle
};

// Navbar prop types
export const navbarPropTypes = {
  // No props for Navbar
};

// PageHeader prop types
export const pageHeaderPropTypes = {
  // No props for PageHeader
};

// AccueilPage prop types
export const accueilPagePropTypes = {
  // No props for AccueilPage
};

// BookDetailPage prop types
export const bookDetailPagePropTypes = {
  // No props for BookDetailPage (uses useParams internally)
};

// BookListPage prop types
export const bookListPagePropTypes = {
  // No props for BookListPage
};

// LoadingSpinner prop types
export const loadingSpinnerPropTypes = {
  // No props for LoadingSpinner
};