import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import Button from "../components/Button";
import ImageDisplay from "../components/ImageDisplay";
import { bookCover } from "../const/Image";

const AccueilPage = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mb-12 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-10">
            <BookOpen className="h-32 w-32 text-blue-300 dark:text-blue-700" />
          </div>
          <BookOpen
            className="mx-auto h-16 w-16 text-blue-600 dark:text-blue-400 mb-6 
            transform hover:rotate-6 transition-transform duration-300 relative z-10"
          />
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 
            tracking-tight"
          >
            Book Project
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium opacity-90">
            Un projet collaboratif créé par les étudiants de la MIAGE PARIS
            PANTHEON SORBONNE. Découvrez et explorez de nouveaux horizons
            littéraires avec nous !
          </p>
        </div>

        <div className="mb-12 shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <ImageDisplay images={bookCover} />
        </div>

        <Link to={`/books`} className="inline-block">
          <Button
            label="Découvrir les livres"
            className="group transition-all duration-300 ease-in-out 
            bg-gradient-to-r from-blue-600 to-indigo-600 
            hover:from-blue-700 hover:to-indigo-700 
            shadow-lg hover:shadow-xl 
            transform hover:-translate-y-1"
            icon={
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default AccueilPage;