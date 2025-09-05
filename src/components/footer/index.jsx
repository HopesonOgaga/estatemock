export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 lg:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Warden Estate</h2>
          <p className="text-sm leading-relaxed">
            A preferred luxury real estate brand, redefining standards across
            Africa with elegance, innovation, and excellence.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Property Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Property Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Luxury Apartments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition">
                Real Estate Investment
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest property updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-full text-gray-900 focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Warden Estate. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-green-500 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-green-500 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
