import request from 'superagent'

  export async function getWeatherData(location: string) {
    const API_KEY = process.env.API_KEY
    const response = await request.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    )
    return response.body
  }
