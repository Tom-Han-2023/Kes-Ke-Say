import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { MemoryRouter, MemoryRouter as Router } from 'react-router-dom'
import App from '../App'
import { Provider } from 'react-redux'
import { intialiseStore } from '../../store'

jest.useFakeTimers().setSystemTime(1663285276267)
const clock = ['01:41:16', '16']

describe('<DateTime />', () => {
  it('renders time and date', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    const heading = screen.getByTestId('heading')
    expect(heading).toHaveTextContent(/Date.*Time in Paris/)
    expect.assertions(1)
  })
  it('checks the DateTime component displays current time', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    const time = await screen.findByTestId('time', {})
    expect(time.textContent).toMatch(clock[0])
    expect.assertions(1)
  })
  it('checks the DateTime component displays current date', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )


    const date = await screen.findByTestId('date', {})
    expect(date).toContainHTML(clock[1])
    expect.assertions(1)
  })
})
