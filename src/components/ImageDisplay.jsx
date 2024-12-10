import PropTypes from "prop-types";

const ImageDisplay = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-48 h-72 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <img
            src={image.src}
            alt={image.alt || `Book cover ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

ImageDisplay.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default ImageDisplay;
