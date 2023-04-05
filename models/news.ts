export interface News {
  source: Source
  author: string
  title: string
  description: null
  url: string
  urlToImage: null
  publishedAt: string
  content: null
}

export interface Source {
  id: string
  name: string
}
