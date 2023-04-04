import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import DateTime from '../DateTime'

jest.useFakeTimers().setSystemTime(1663285276267)
const clock = ['1:41:17', '16']

describe('<DateTime />', () => {
  it('renders time and date', () => {
    render(
      <Router>
        <DateTime />
      </Router>
    )
    const heading = screen.getByTestId('heading')
    expect(heading).toHaveTextContent(/Date.*Time in Paris/)
    expect.assertions(1)
  })
  it('checks the DateTime component displays current time', async () => {
    render(
      <Router>
        <DateTime />
      </Router>
    )
    const time = await screen.findByTestId('time', {}, { timeout: 2000 })
    expect(time).toContainHTML(clock[0])
    expect.assertions(1)
  })
  it('checks the DateTime component displays current date', async () => {
    render(
      <Router>
        <DateTime />
      </Router>
    )

    const date = await screen.findByTestId('date', {}, { timeout: 2000 })
    expect(date).toContainHTML(clock[1])
    expect.assertions(1)
  })
})
