const ErrorAlert = (error) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-8 py-6 rounded-lg shadow-md max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Oops!</h2>
        <p>{error}</p>
      </div>
    </div>
  );
};

const noBookFound = () => {
  return (
    <div className="flex justify-center items-center h-screen text-gray-600">
      Book not found.
    </div>
  );
};

const BookNotFound = (bookname) => {
  return (
    <div className="flex justify-center items-center h-screen text-gray-600">
      No books found for <span className=" font-bold">{bookname}</span>. Try a
      different search term again.  
    </div>
  );
};
export { noBookFound, BookNotFound };
export default ErrorAlert;
