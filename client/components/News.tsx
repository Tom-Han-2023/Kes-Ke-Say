import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { News as NewsType } from '../../models/news'
import { fetchNews } from '../actions/newsAction'
import InfiniteScroll from 'react-infinite-scroll-component'

function News() {
  const news = useAppSelector((state) => state.news)
  const dispatch = useAppDispatch()
  const [stories, setStories] = useState([] as NewsType[])
  const newsLength = 6

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  useEffect(() => {
    if (news.data && news.data.length > 0) {
      setStories(news.data.slice(0, newsLength))
    }
  }, [news.data])

  function fetchMoreStories() {
    if (news.data) {
      setStories(news.data.slice(0, stories.length + newsLength))
    }
  }
  function extractDateFromTimestamp(timestamp: string) {
    // Extract the first 10 characters (the date portion)
    //and the 11th to 16th (time) from the timestamp
    return timestamp.slice(0, 10) + ' ' + timestamp.slice(11, 16)
  }

  function removeAuthorFromTitle(title: string, author: string) {
    //Remove the " - Author Name" from the end of imported titles
    const titleArray = title.split(' ')
    const authorLength = author.split(' ').length + 1
    return titleArray.slice(0, titleArray.length - authorLength).join(' ')
  }

  if (news.isLoading) {
    return <div className="mt-8 text-center">news is loading...</div>
  }
  if (news.error) {
    return <></>
  }
  if (!news.data) {
    return <div className="ml-8"></div>
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={stories.length}
        next={fetchMoreStories}
        hasMore={stories.length < news.data.length}
        loader={
          stories.length <= news.data.length ? (
            <h4 className="text-center">More News coming...</h4>
          ) : (
            <h4 className="text-center">You have reached the end for today</h4>
          )
        }
      >
        <div className="container mx-auto">
          <h2 className="text-center mt-4">{`Today's News`}</h2>
          {stories.map((story: NewsType, index) => {
            return (
              <div
                className="border-2 border-black w-1/2 mx-auto mb-3 mt-3 p-6"
                role="listitem"
                key={index}
              >
                <div>
                  <a className="text-cyan-800 font-bold" href={story.url}>
                    {removeAuthorFromTitle(story.title, story.author)}
                  </a>
                </div>
                <div>Author: {story.author} </div>
                <div className="italic font-light">
                  {extractDateFromTimestamp(story.publishedAt)}
                </div>
              </div>
            )
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default News
