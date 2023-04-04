//https://github.com/tohora-2023/code-from-class/blob/main/week6/tue-pm/client/components/__tests__/Fruits.test.tsx
import nock from 'nock'

import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { screen, render, within } from '@testing-library/react'
import userEvent from '@testing-library/react'

import '@testing-library/jest-dom'

import App from '../App'
import { intialiseStore } from '../../store'

describe('<PostFeed />', () => {
  it('renders a list of posts', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/posts/')
      .reply(200, {
        posts: [
          {
            id: 1,
            user_id: 1,
            body: 'I found this really interesting book, you should check it out',
            image: '',
            created_at: 1680647489666,
            users_username: 'paige',
          },
          {
            id: 2,
            user_id: 2,
            body: 'I found this really cool Italian place, they have the best food',
            image: '',
            created_at: 1680647489666,
            users_username: 'ida',
          },
          {
            id: 3,
            user_id: 2,
            body: 'No pineapples',
            image: '',
            created_at: 1680647489666,
            users_username: 'ida',
          },
          {
            id: 4,
            user_id: 4,
            body: 'I love a full English breakfast',
            image: '',
            created_at: 1680647489666,
            users_username: 'chris',
          },
        ],
      })

    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={intialiseStore()}>
          <App />
        </Provider>
      </MemoryRouter>
    )

    const list = await screen.findAllByRole('listitem')
    expect(list[0]).toBeVisible()
    expect(list).toHaveLength(3)
    expect(list[1]).toHaveTextContent('Italian')
    expect(scope.isDone()).toBeTruthy()
  })
})
