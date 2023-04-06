import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchWeather } from '../actions/weatherAction'

function Weather() {
  const weather = useAppSelector((state) => state.weather)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getWeatherData = async () => {
      await dispatch(fetchWeather())
    }

    getWeatherData()
  }, [dispatch])

  if (weather.isLoading) {
    return <div className="ml-8">weather is loading</div>
  }
  if (weather.error) {
    return <></>
  }
  if (!weather.data) {
    return <div className="ml-8"></div>
  }

  return (
    <div className="ml-8 ">
      <img
        src={weather.data.current.condition.icon}
        alt={weather.data.current.condition.text}
      />
      {weather.data.current.temp_c < 14 ? (
        <p className="text-xl font-bold text-blue-400">
          {weather.data.current.temp_c}°C
        </p>
      ) : (
        <p className="text-xl font-bold text-red-400">
          {weather.data.current.temp_c}°C
        </p>
      )}
      <p>{weather.data.location.name}</p>
    </div>
  )
}

export default Weather

/// weather.data && (dasdas)
