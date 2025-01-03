import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert, { BookNotFound, NoBookFound } from "./ErrorAlert";
import LivreCard from "./LivreCard";
import {contentRendererPropTypes} from "../utils/propsType";

const ContentRenderer = ({
  isLoading,
  isError,
  error,
  data,
  searchLoading,
  searchError,
  searchErrorDetails,
  searchTerm,
}) => {
  if (isLoading || searchLoading) return <LoadingSpinner />;

  if (isError) return <ErrorAlert error={error.message} />;

  if (searchError) return <ErrorAlert error={searchErrorDetails.message} />;

  if (searchTerm) {
    if (data?.length > 0) return <LivreCard books={data} />;
    return <BookNotFound bookname={searchTerm} />;
  }

  if (data?.length > 0) return <LivreCard books={data} />;

  return <NoBookFound />;
};

ContentRenderer.propTypes = contentRendererPropTypes;

export default ContentRenderer;