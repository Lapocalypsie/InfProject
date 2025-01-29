import { BookOpen } from "lucide-react";

const PageHeader = () => (
  <header className="text-center">
    <BookOpen
      className="mx-auto h-16 w-16 text-blue-600 dark:text-blue-400 mb-4 
      transform hover:rotate-12 transition-transform duration-300"
    />
    <h1
      className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-3 
      bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600"
    >
      Project Book
    </h1>
    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-lg">
      Cherchez et venez découvrir de nouveaux livres !
    </p>
  </header>
);

export default PageHeader;