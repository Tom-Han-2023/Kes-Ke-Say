import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchWeather } from '../actions/weatherAction'

function Weather() {
  const weather = useAppSelector((state) => state.weatherReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getWeatherData = async () => {
      await dispatch(fetchWeather())
    }

    getWeatherData()
  }, [dispatch])

  console.log(weather)

  if (weather.isLoading) {
    return <div>weather is loading</div>
  }
  if (weather.error) {
    return <div>{weather.error}</div>
  }
  if (!weather.data) {
    return <div></div>
  }

  return (
    <>
      <h1>{weather.data.current.temp_c}</h1>
    </>
  )
}

export default Weather

/// weather.data && (dasdas)
