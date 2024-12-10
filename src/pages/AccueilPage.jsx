import { Link } from "react-router-dom";
import Button from "../components/Button";
import ImageDisplay from "../components/ImageDisplay";
import { bookCover } from "../const/Image";

const AccueilPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Book Project
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
        Un projet fait par les étudiants de la MIAGE PARIS PANTHEON SORBONNE,
        découvrez ou recherchez de nouveaux livres avec nous! 😀
      </p>
      <ImageDisplay images={bookCover} />
      <Link to={`/books`}>
        <Button
          label="Découvrir"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0.5"
        />
      </Link>
    </div>
  );
};

export default AccueilPage;
