import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNewsInfo } from "../services/api";

function MainPage() {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const { pathname } = useLocation();

  const getFirstList = async () => {
    const data = await getNewsInfo(pathname, 1);
    setNews(data);
  }

  useEffect(() => {
    setPage(1);
    getFirstList();
  }, [pathname])

  console.log(news)

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
