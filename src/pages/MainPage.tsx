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

  console.log(lastNew?.imagens);

  return (
    <main className="flex-1">
      <section className="flex flex-col mx-8 px-8">
        <h1 className="flex justify-center text-2xl my-8">Última notícia</h1>

        <div className="">
          <h2 className="text-xl font-bold">{ lastNew?.titulo }</h2>

          <p className="text-sm">{ lastNew?.introducao }</p>
        </div>
      </section>
      
      <section className="my-8">
        <div className="flex flex-wrap m-3 justify-center">
          {news.map((item, index) => (
            <NewsCard key={ index } item={ item } />
          ))}
        </div>

        <div className="flex justify-around my-6">
          <button
            onClick={ handlePrevPage }
          >
            <ChevronLeft />
          </button>
          
          <span>
            {page}
          </span>

          <button
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
