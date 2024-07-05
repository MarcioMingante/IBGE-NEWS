import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLastNewInfo, getNewsInfo } from "../services/api";
import { ItemType } from "../types/types";
import NewsCard from "../components/NewsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function MainPage() {
  const [lastNew, setLastNew] = useState<ItemType>();
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<ItemType[]>([]);
  const { pathname } = useLocation();

  const handlePrevPage = async () => {
    const currentPage = page === 1 ? 1 : page - 1;

    const data = await getNewsInfo(pathname, currentPage);
    setPage(currentPage);
    setNews(data.items);
  }
  
  const handleNextPage = async () => {
    const currentPage = page + 1;

    const data = await getNewsInfo(pathname, currentPage);
    setPage(currentPage);
    setNews(data.items);
  }

  const getFirstList = async () => {
    const data = await getNewsInfo(pathname, 1);
    setNews(data.items);
  }

  const handleLastNew = async () => {
    const data = await getLastNewInfo();
    return setLastNew(data);
  }

  useEffect(() => {
    setPage(1);
    getFirstList();
  }, [pathname])
  
  useEffect(() => {
    handleLastNew()
  }, [])

  return (
    <main className="flex-1 bg-slate-800">
      <section 
        className="flex flex-col mx-8 px-8 pb-5 bg-zinc-400 rounded-b-2xl"
        data-testid="last-new"
      >
        <h1 className="flex justify-center text-2xl my-8 text-black">Última notícia</h1>

        <div className="space-y-5 bg-zinc-300 py-4 px-6 rounded-xl">
          <h2 className="text-xl font-bold">{ lastNew?.titulo }</h2>

          <p className="text-sm">{ lastNew?.introducao }</p>

          <div className="flex justify-center">
            <a
              className="bg-green-700 px-1 border-green-700 rounded text-black hover:text-white"
              href={ lastNew?.link } 
              target="blank"
            >
            Saiba mais
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-8">
        <div className="flex flex-wrap m-3 justify-center">
          {news.map((item, index) => (
            <NewsCard 
              key={ index }
              item={ item }
              index={ index }
            />
          ))}
        </div>

        <div className="flex justify-around py-6">
          <button
            className="text-white hover:text-green-500"
            data-testid="prev-page-btn"
            onClick={ handlePrevPage }
            >
            <ChevronLeft />
          </button>
          
          <span
            className="text-white font-bold"
            data-testid="current-page"
          >
            {page}
          </span>

          <button
            className="text-white hover:text-green-500"
            data-testid="next-page-btn"
            onClick={ handleNextPage }
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
