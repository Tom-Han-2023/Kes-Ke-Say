export default function AddPost() {
  return (
    <div className="flex justify-center items-center m-8 flex-col">
      <h2>Add your new post here</h2>
      <form className="flex flex-col m-8">
        <textarea
          name="post"
          id="post"
          placeholder="Enter your post here"
          className="border-2 border-black p-4 rounded-xl m-8"
          rows={10}
          cols={50}
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
