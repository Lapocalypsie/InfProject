import PropTypes from "prop-types";

export const bookPropTypes = PropTypes.shape({
  isbn: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
});

export const bookCoverPropTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export const bookAuthorPropTypes = {
  authors: PropTypes.arrayOf(PropTypes.string),
};

export const publicationDatePropTypes = {
  firstPublishDate: PropTypes.string,
};

export const bookDescriptionPropTypes = {
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string,
    }),
  ]),
};

export const quickInfoPropTypes = {
  hasFullText: PropTypes.bool,
  ia: PropTypes.string,
};

export const subjectsPropTypes = {
  subjects: PropTypes.arrayOf(PropTypes.string),
};

export const externalLinksPropTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export const imageDisplayPropTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export const inputSearchPropTypes = {
  onSearch: PropTypes.func,
};

export const livreCardPropTypes = {
  books: PropTypes.arrayOf(bookPropTypes).isRequired,
};

export const buttonPropTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.element,
};

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

export const errorAlertPropTypes = {
  error: PropTypes.string.isRequired,
};

export const bookNotFoundPropTypes = {
  bookname: PropTypes.string.isRequired,
};

export const filterDropdownPropTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectOption: PropTypes.func.isRequired,
};

export const bookFilterPropTypes = {
  onSelectGenre: PropTypes.func.isRequired,
};

export const themeProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

export const darkModeProviderPropTypes = {
  children: PropTypes.node.isRequired,
};

export const paginationPropTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};