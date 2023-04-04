import Weather from './Weather'

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
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-5">
              <div>
                <p className="font-medium">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="#">
                    About
                  </a>
                  <a className="hover:opacity-75" href="#">
                    Meet the Team
                  </a>
                  <a className="hover:opacity-75" href="#">
                    History
                  </a>
                  <a className="hover:opacity-75" href="#">
                    Careers
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="#">
                    Something
                  </a>
                  <a className="hover:opacity-75" href="#">
                    Company Review
                  </a>
                  <a className="hover:opacity-75" href="#">
                    SEO Optimisation
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="#">
                    Contact
                  </a>
                  <a className="hover:opacity-75" href="#">
                    FAQs
                  </a>
                  <a className="hover:opacity-75" href="#">
                    Live Chat
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="#">
                    Privacy Policy
                  </a>
                  <a className="hover:opacity-75" href="#">
                    Terms &amp; Conditions
                  </a>
                  <a className="hover:opacity-75" href="#">
                    Returns Policy
                  </a>
                  <a className="hover:opacity-75" href="#">
                    Accessibility
                  </a>
                </nav>
              </div>
              <Weather />
            </div>
            
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
