
import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => {
    // Ajouter si le livre n'est pas déjà dans les favoris 
    setFavorites((prev) => {
      if (!prev.some((fav) => fav.isbn === book.isbn)) {
        return [...prev, book];
      }
      return prev;
    });
  };

  const removeFavorite = (isbn) => {
    // Supprimer le livre avec le isbn correspondant
    setFavorites((prev) => prev.filter((fav) => fav.isbn !== isbn));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoriteContext);

