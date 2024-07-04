export default async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Não foi possivel receber resposta da API');
  const data = await response.json();
  return data;
}
