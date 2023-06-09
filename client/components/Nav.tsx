function Nav() {
  const user = {
    username: 'ida',
  }

  return (
    <>
      <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a
            href="/"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
          >
            Home
          </a>
        </div>
        <div>
          <a
            href="/post"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Post
          </a>
          <a
            href="/groups"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Groups
          </a>
          <a
            href={`/profiles/${user.username}`}
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Profile
          </a>
          <a
            href="/login"
            className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
          >
            Log Off
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav
