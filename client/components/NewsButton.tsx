import { Link } from 'react-router-dom'

function NewsButton() {
  return (
    <div className="flex justify-center mr-6">
      <button className="rounded-full bg-cyan-500 text-lg px-4 flex self-center">
        <Link to={'/news'}>{`Today's Top News`}</Link>
      </button>
    </div>
  )
}

export default NewsButton
