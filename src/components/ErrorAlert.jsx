import { AlertCircle, BookX, Search } from "lucide-react";

const ErrorAlert = ({ error }) => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="w-full max-w-lg transform rounded-xl bg-red-50 p-6 shadow-lg transition-all hover:shadow-xl sm:p-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-red-100 p-3">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-center text-2xl font-bold text-red-800">
            Error Occurred
          </h2>
          <p className="text-center text-red-600">{error}</p>
        </div>
      </div>
    </div>
  );
};

const NoBookFound = () => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="w-full max-w-lg transform rounded-xl bg-amber-50 p-6 shadow-lg transition-all hover:shadow-xl sm:p-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-amber-100 p-3">
            <BookX className="h-8 w-8 text-amber-600" />
          </div>
          <h2 className="text-center text-2xl font-bold text-amber-800">
            No Book Found
          </h2>
          <p className="text-center text-amber-600">
            Sorry, we couldn&apos;t find the book you&apos;re looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

const BookNotFound = ({ bookname }) => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center p-4">
      <div className="w-full max-w-lg transform rounded-xl bg-slate-50 p-6 shadow-lg transition-all hover:shadow-xl sm:p-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-slate-100 p-3">
            <Search className="h-8 w-8 text-slate-600" />
          </div>
          <h2 className="text-center text-2xl font-bold text-slate-800">
            No Books Found
          </h2>
          <p className="text-center text-slate-600">
            No books found for{" "}
            <span className="font-semibold text-slate-700">{bookname}</span>
            <br />
            Try a different search term.
          </p>
        </div>
      </div>
    </div>
  );
};

export { NoBookFound, BookNotFound, ErrorAlert };
export default ErrorAlert;
