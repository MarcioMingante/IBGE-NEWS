import { CardType } from "../types/types";

function NewsCard({item}: CardType) {
  const { titulo, introducao } = item;

  return (
    <div className="flex-col border rounded-xl w-80 h-64 px-3 py-2 m-5">
      <h3 className="h-28 font-bold leading-5">{titulo}</h3>

      <section className="space-y-4">
        <p className="text-xs">{`${introducao.substring(0, 200)}...`}</p>

        <div className="flex-1">
          {/* dias que foi lançada */}

          <button>
            Saiba mais
          </button>

          {/* botão de favorito */}
        </div>
      </section>
    </div>
  );
}

export default NewsCard;
