import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccueilPage from "./pages/AccueilPage";
import BookListPage from "./pages/BookListPage";
import BookDetailPage from "./pages/BookDetailPage";
import { path } from "./const/route";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navbar from "./components/NavBar";
import FavoritePage from "./pages/FavoritePage";
import { FavoriteProvider } from "./contexts/FavoriteContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <FavoriteProvider>
          <div className="dark:bg-gray-900 min-h-screen">
            <Router>
              <Navbar />
              <Routes>
                <Route path={path.accueil} element={<AccueilPage />} />
                <Route path={path.books} element={<BookListPage />} />
                <Route path={path.bookDetail} element={<BookDetailPage />} />
                <Route path={path.favoris} element={<FavoritePage />} />
              </Routes>
            </Router>
          </div>
        </FavoriteProvider>
      </DarkModeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
