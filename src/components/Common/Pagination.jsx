import { ChevronLeft, ChevronRight } from "lucide-react";
import { paginationPropTypes } from "../../utils/propsType";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft />
      </button>
      <span className="px-4">Page {currentPage} of {totalPages}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        <ChevronRight />
      </button>
    </div>
  );
};

Pagination.propTypes = paginationPropTypes;

export default Pagination;
