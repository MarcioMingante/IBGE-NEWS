import { useEffect, useState } from "react";
import { CardType } from "../types/types";

function NewsCard({item}: CardType) {
  const [releaseTime, setReleaseTime] = useState('');
  const { titulo, introducao, link, data_publicacao } = item;

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

  useEffect(() => {
    handleReleaseDate()
  }, [item])

  return (
    <div className="flex-col border rounded-xl w-80 h-64 px-3 py-2 m-5">
      <h3 className="h-28 font-bold leading-5">{titulo}</h3>

      <section className="space-y-4">
        <p className="text-xs">{`${introducao.substring(0, 200)}...`}</p>

        <div className="flex flex-1 justify-between p-2">
          <p className="text-sm italic text-red-600">{ releaseTime }</p>

          <a href={ link } target="blank">Saiba mais</a>

          {/* botão de favorito */}
        </div>
      </section>
    </div>
  );
}

export default NewsCard;
