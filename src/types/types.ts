export type MainAPIReturnType = {
  count: number
  previousPage: number
  page: number
  nextPage: number
  showingFrom: number
  showingTo: number
  totalPages: number
  items: ItemType[]
}

export type ItemType = {
  data_publicacao: string
  destaque: boolean
  editorias: string
  id: number
  imagens: string
  introducao: string
  link: string
  produto_id: number
  produtos: string
  produtos_relacionados: string
  tipo: string
  titulo: string
}
