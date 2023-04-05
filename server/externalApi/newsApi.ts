import request from 'superagent'

export async function getTopHeadlines() {
  const NEWS_API_KEY = process.env.NEWS_API_KEY
  const response = await request.get(
    `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${NEWS_API_KEY}`
  )
  return response.body.articles
}
