import { useEffect, useState } from 'react'
import { addNewPost } from '../actions/posts'
import { useAppDispatch, useAppSelector } from '../hooks'

export default function AddPost() {
  const dispatch = useAppDispatch()
  const [body, setBody] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(
      addNewPost({
        user_id: 1,
        body: body,
        created_at: Number(new Date(Date.now())),
        users_username: '',
      })
    )
    setBody('')
  }

  return (
    <div className="flex justify-center items-center m-8 flex-col">
      <h2>Add your new post here</h2>
      <form className="flex flex-col m-8" onSubmit={handleSubmit}>
        <textarea
          name="post"
          id="post"
          placeholder="Enter your post here"
          className="border-2 border-black p-4 rounded-xl m-8"
          rows={10}
          cols={50}
          onChange={(event) => {
            setBody(event.target.value)
          }}
        ></textarea>
        <button
          type="submit"
          className="border-2 border-wine-red p-3 rounded-xl bg-wine-red text-white m-6 w-48 mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
