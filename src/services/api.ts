import fetchData from "./helpers/fetchData"

export const getNewsInfo = async (pathname: string, page: number) => {
  if (pathname.includes('noticia')) {
    const data = await fetchData(
      `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=6&destaque=0&tipo=noticia&page=${page}`
    );
    return  data;
  }

  if (pathname.includes('release')) {
    const data = await fetchData(
      `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=6&destaque=0&tipo=release&page=${page}`
    );
    return  data;
  }

  const data = await fetchData(
    `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=6&destaque=0&page=${page}`
  );
  return data;
}
