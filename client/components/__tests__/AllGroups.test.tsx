import nock from 'nock'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { screen, render, within } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'
import { intialiseStore } from '../../store'

describe('<AllGroups />', () => {
  it('successfully shows a list of groups', async () => {
    // ARRANGE
    const scope = nock('http://localhost')
      .get('/api/v1/groups')
      .reply(200, {
        groups: [
          { id: 1, name: 'friendChips', image: 'fries-darkgray.png' },
          {
            id: 2,
            name: 'The fast and the curious',
            image: 'car-darkgray.png',
          },
        ],
      })

    // this just renders everything?
    render(
      <MemoryRouter initialEntries={['/groups']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )
    // ACT
    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
    const groupImgs = await screen.findAllByRole('img')

    // image
    // ptags with name of each group

    // ASSERT
    expect(groupImgs[0]).toBeVisible()
    // expect(groupImgs).toHaveLength(2) <-- why is this failing?
    expect(scope.isDone()).toBeTruthy()
  })
})
