import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4">
        {/* Logo */}
        <div>
          <p className="text-green-600 text-2xl capitalize font-bold">warden</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            {["Home", "About us", "Projects", "Blog", "Careers", "Media"].map(
              (item, i) => (
                <li
                  key={i}
                  className="capitalize font-semibold text-lg hover:text-green-400 transition"
                >
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="text-lg capitalize px-4 py-2 rounded-md shadow-sm bg-green-400 text-white hover:bg-green-500 transition">
            Schedule Appointment
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-green-600">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-3/4 sm:w-1/2 bg-white h-full p-6 flex flex-col gap-6 relative"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-3xl text-green-600"
              >
                ✕
              </button>

              {/* Links */}
              <ul className="flex flex-col gap-4 mt-12">
                {["Home", "About us", "Projects", "Blog", "Careers", "Media"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="capitalize font-semibold text-lg hover:text-green-400 transition"
                    >
                      <Link
                        to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                        onClick={closeMenu}
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              {/* Button */}
              <div className="mt-8">
                <button
                  onClick={closeMenu}
                  className="w-full text-lg capitalize px-4 py-2 rounded-md shadow-sm bg-green-400 text-white hover:bg-green-500 transition"
                >
                  Schedule Appointment
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
