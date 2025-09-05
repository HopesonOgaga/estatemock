import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section>
      {/* pc view */}
      <div className="flex justify-between items-center w-full p-4">
        {/* Logo */}
        <div>
          <p className="text-green-600 text-2xl capitalize font-bold">warden</p>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            <li className="capitalize font-semibold text-lg hover:text-green-400 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="capitalize font-semibold text-lg hover:text-green-400 transition">
              <Link to="/about">About us</Link>
            </li>
            <li className="capitalize font-semibold text-lg hover:text-green-400 transition">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="capitalize font-semibold text-lg hover:text-green-400 transition">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="capitalize font-semibold text-lg hover:text-green-400 transition">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="capitalize font-semibold text-lg hover:text-green-400 transition">
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="text-lg capitalize px-4 py-2 rounded-md  shadow-sm bg-green-400 text-white hover:bg-green-500 transition">
            Schedule Appointment
          </button>
        </div>
      </div>

      {/* mobile view (hamburger menu placeholder) */}
      <div className="md:hidden flex justify-between items-center p-4">
        <p className="text-green-400 text-2xl capitalize font-bold">warden</p>
        <button className="text-lg">☰</button>
      </div>
    </section>
  );
}
