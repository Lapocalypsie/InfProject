import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccueilPage from "./pages/AccueilPage";
import BookListPage from "./pages/BookListPage";
import BookDetailPage from "./pages/BookDetailPage";
import { path } from "./const/route";
import { QueryClient, QueryClientProvider } from "react-query";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navbar from "./components/NavBar";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <div className="dark:bg-gray-900 min-h-screen">
          <Router>
            <Navbar />
            <Routes>
              <Route path={path.accueil} element={<AccueilPage />} />
              <Route path={path.books} element={<BookListPage />} />
              <Route path={path.bookDetail} element={<BookDetailPage />} />
            </Routes>
          </Router>
        </div>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
