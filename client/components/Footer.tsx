import Weather from './Weather'
import DateTime from './DateTime'
import NewsButton from './NewsButton'

function Footer() {
  return (
    <>
      <footer className="mt-auto bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img
                src="/images/icons/icon-darkgray.png"
                className="mr-5 h-6 sm:h-9"
                alt="logo"
              />
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                Social media by Jean-Pierre.
              </p>
              <DateTime />
            </div>
            <NewsButton />

            <Weather />
          </div>
          <p className="mt-8 text-xs text-gray-800">
            © Tohorā 2023 | Kes-Ke-Say Limited
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
