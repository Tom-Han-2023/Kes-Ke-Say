import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import nock from 'nock'

import { intialiseStore } from '../../store'
import Weather from '../Weather'

describe('<Weather/>', () => {
  it('should render the weather component and demonstrate loading and when api call is finished', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/externalapi')
      .reply(200, {
        location: {
          name: 'Auckland',
          region: '',
          country: 'New Zealand',
          lat: -36.87,
          lon: 174.77,
          tz_id: 'Pacific/Auckland',
          localtime_epoch: 1680646337,
          localtime: '2023-04-05 10:12',
        },
        current: {
          last_updated_epoch: 1680645600,
          last_updated: '2023-04-05 10:00',
          temp_c: 17,
          temp_f: 62.6,
          is_day: 1,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 1000,
          },
          wind_mph: 3.8,
          wind_kph: 6.1,
          wind_degree: 120,
          wind_dir: 'ESE',
          pressure_mb: 1019,
          pressure_in: 30.09,
          precip_mm: 0,
          precip_in: 0,
          humidity: 83,
          cloud: 0,
          feelslike_c: 17,
          feelslike_f: 62.6,
          vis_km: 10,
          vis_miles: 6,
          uv: 5,
          gust_mph: 2.5,
          gust_kph: 4,
        },
      })
    render(
      <Provider store={intialiseStore()}>
        <Weather />
      </Provider>
    )

    const loading = await screen.getByText('weather is loading')
    expect(loading).toBeInTheDocument()

    const weather = await screen.findByAltText('Sunny')
    const locationName = await screen.findByText('Auckland')

    expect(weather).toBeInTheDocument()
    expect(locationName).toBeInTheDocument()
    expect(scope.isDone()).toBeTruthy()
  })
  it.todo('should display the error message when api call was unsuccessful')
  //   const scope = nock('http://localhost')
  //     .get('/api/v1/externalapi')
  //     .reply(500, {
  //       error: 'There was an error trying to get the users location :(',
  //     })
  //   render(
  //     <Provider store={intialiseStore()}>
  //       <Weather />
  //     </Provider>
  //   )

  //   const loading = await screen.getByText('weather is loading')
  //   const errorMessage = await screen.findByText('There was an error')
  // })
})
