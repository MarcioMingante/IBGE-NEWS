import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNewsInfo } from "../services/api";
import { ItemType } from "../types/types";
import NewsCard from "../components/NewsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function MainPage() {
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

  useEffect(() => {
    setPage(1);
    getFirstList();
  }, [pathname])

  return (
    <main>
      {/* area da ultima noticia */}
      <section>
        <h2>last new</h2>
      </section>
      
      {/* area com os cards das noticias */}
      <section>
        <div className="flex flex-wrap m-3 justify-center">
          {news.map((item, index) => (
            <NewsCard key={ index } item={ item } />
          ))}
        </div>

          {/* div para paginação */}
        <div className="flex justify-around my-6">
          <button
            onClick={ handlePrevPage }
          >
            <ChevronLeft />
          </button>
          
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
