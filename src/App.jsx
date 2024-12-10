import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccueilPage from "./pages/AccueilPage";
import BookListPage from "./pages/BookListPage"; 
import BookDetailPage from "./pages/BookDetailPage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
