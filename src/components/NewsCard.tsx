import { CardType } from "../types/types";

function NewsCard({item}: CardType) {
  const { titulo, introducao } = item;

  console.log(titulo);

  return (
    <div>
      <h3></h3>
    </div>
  );
}

export default NewsCard;
