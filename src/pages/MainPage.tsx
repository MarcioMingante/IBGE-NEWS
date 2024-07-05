import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNewsInfo } from "../services/api";
import { ItemType } from "../types/types";

function MainPage() {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState<ItemType[]>([]);
  const { pathname } = useLocation();

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
        <h2>hello</h2>
      </section>
      
      {/* area com os cards das noticias */}
      <section>
        <h2>world</h2>
      </section>
    </main>
  );
}

export default MainPage;
