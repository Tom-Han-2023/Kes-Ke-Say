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
          return <li key={index}>{singleNews.title}</li>
        })}
      </ul>
    </div>
  )
}

export default News
