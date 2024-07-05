import { useEffect, useState } from "react";
import { CardType, ItemType } from "../types/types";
import { Heart } from "lucide-react";

function NewsCard({item, index}: CardType) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [releaseTime, setReleaseTime] = useState('');
  const { titulo, introducao, link, data_publicacao } = item;

  const addNRemoveFromFavorites = () => {
    const favorites: ItemType[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    const checkFavorites = favorites.filter((favorite) => favorite.id !== item.id);

    if (checkFavorites.length === favorites.length) {
      const newFavoritesList = [...favorites, item];
      setIsFavorite(true);
      return localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
    }

    setIsFavorite(false);
    return localStorage.setItem('favorites', JSON.stringify(checkFavorites));
  }

  const timeItWasReleased = (data: string) => {
    const entrie = data.split(' ');
    const date = entrie[0].split('/');
    const time = entrie[1] ? entrie[1].split(':') : [0, 0];

    // separete all info to create calculate the release difference
    const day = parseInt(date[0], 10);
    const month = parseInt(date[1], 10) - 1;
    const year = parseInt(date[2], 10);
    const hour = parseInt(time[0] as string, 10);
    const minutes = parseInt(time[1] as string, 10);

    // save both dates for comparison
    const itemDate = new Date(year, month, day, hour, minutes);
    const currentDate = new Date();

    // get difference
    const difference = currentDate.getTime() - itemDate.getTime();
    const inDaysDiference = Math.floor(difference / (1000 * 60 * 60 *24));

    return inDaysDiference;
  }

  const handleReleaseDate = () => {
    const difference = timeItWasReleased(data_publicacao);

    if (difference === 0) {
      return setReleaseTime('A menos de um dia');
    } 
    
    if (difference === 1) {
      setReleaseTime('A 1 dia');
    } else {
      setReleaseTime(`A ${String(difference)} dias`);
    }
  }

  const checkIfFavorite = () => {
    const favorites: ItemType[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    const checkFavorites = favorites.find((favorite) => favorite.id === item.id);

    if (checkFavorites !== undefined) {
      return setIsFavorite(true);
    }

    return setIsFavorite(false);
  }

  useEffect(() => {
    handleReleaseDate()
    checkIfFavorite()
  }, [item])

  return (
    <div 
      className="flex-col border-slate-900 rounded-xl w-80
      h-64 px-3 py-2 m-5 bg-slate-600 hover:bg-slate-500
      shadow-2xl"
      data-testid={ `${index}-info-card` }
    >
      <h3 className="h-24 font-bold leading-5">{titulo}</h3>

      <section className="h-36 space-y-4 bg-zinc-400 px-1 pt-1 rounded-lg shadow-xl">
        <p className="text-xs">{`${introducao.substring(0, 200)}...`}</p>

        <div className="flex flex-1 justify-between p-2">
          <p className="text-sm italic font-bold">{ releaseTime }</p>

          <a 
            className="bg-green-600 px-1 border-green-700 rounded text-black hover:text-white"
            href={ link }
            target="blank"
          >
          Saiba mais
          </a>

          <button
            onClick={ addNRemoveFromFavorites }
          >
            {isFavorite ? (
              <Heart color="red" fill="red"/>
            ) : (
              <Heart />
            )}
          </button>
        </div>
      </section>
    </div>
  );
}

export default NewsCard;
