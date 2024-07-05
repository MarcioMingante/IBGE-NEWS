import { useEffect, useState } from "react";
import { ItemType } from "../types/types";
import NewsCard from "../components/NewsCard";

function Favorites() {
  const [favoritesList, setFavoritesList] = useState<ItemType[]>([])

  const favorites: ItemType[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  useEffect(() => {
    setFavoritesList(favorites);
  }, [favorites])

  return (
    <main className="flex-1">
      {favoritesList.length === 0 && (
        <h1 className="flex justify-center my-10 text-2xl font-bold">Você ainda não tem nenhuma notícia favorita.</h1>
      )}

      {favoritesList.length > 0 && (
        <div className="flex flex-wrap m-3 justify-center">
          {favoritesList.map((item, index) => (
            <NewsCard 
              key={ index }
              item={ item }
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;
