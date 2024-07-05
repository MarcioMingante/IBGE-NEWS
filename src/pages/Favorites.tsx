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
      <div className="flex flex-wrap m-3 justify-center">
        {favoritesList.map((item, index) => (
          <NewsCard 
            key={ index }
            item={ item }
          />
        ))}
      </div>
    </main>
  );
}

export default Favorites;
