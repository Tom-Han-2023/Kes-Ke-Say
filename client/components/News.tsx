import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'

import { fetchNews } from '../actions/newsAction'

function News() {
  const news = useAppSelector((state) => state.newsReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getNewsData = async () => {
      await dispatch(fetchNews())
    }

    getNewsData()
  }, [dispatch])

  if (news.isLoading) {
    return <div className="ml-8">news is loading</div>
  }
  if (news.error) {
    return <></>
  }
  if (!news.data) {
    return <div className="ml-8"></div>
  }

  return (
    <div className="ml-8 ">
      <ul>
        {news.data.map((singleNews, index) => {
          return (
            <li key={index}>
              <div><a href={singleNews.url}>Headline:{singleNews.title}</a></div>
              <div>Author:{singleNews.author} </div>
              <div>
                Published:
                {singleNews.publishedAt}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default News
