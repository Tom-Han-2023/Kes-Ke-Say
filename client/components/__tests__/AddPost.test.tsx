import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import nock from 'nock'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import AddPost from '../AddPost'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([thunk])
const initialState = { post: { body: 'this is a test' } }
const store = mockStore(initialState)
describe('<AddPost />', () => {
  it('should add a post', async () => {
    nock('http://localhost')
      .post('/api/v1/posts/')
      .reply(200, {
        post: {
          id: 1,
          user_id: 1,
          body: 'This is a new post',
          image: 'image.jpg',
          created_at: 1680564029673,
        },
      })

    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <AddPost />
        </Provider>
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    const submitButton = screen.getByRole('button')

    fireEvent.change(input, { target: { value: 'this is a test post' } })
    fireEvent.click(submitButton)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Add your new post here'
    )
    expect(screen.getByRole('button')).toBeInTheDocument()

    await waitFor(() => {
      expect(store.getActions()).toEqual([
        {
          payload: {
            body: 'This is a new post',
            created_at: 1680564029673,
            id: 1,
            image: 'image.jpg',
            user_id: 1,
          },
          type: 'ADD_POST_SUCCESS',
        },
      ])
    })
  })
})
