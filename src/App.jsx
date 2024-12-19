import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccueilPage from "./pages/AccueilPage";
import BookListPage from "./pages/BookListPage";
import BookDetailPage from "./pages/BookDetailPage";
import { path } from "./const/route";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={path.accueil} element={<AccueilPage />} />
          <Route path={path.books} element={<BookListPage />} />
          <Route path={path.bookDetail} element={<BookDetailPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
