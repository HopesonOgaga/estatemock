import VideoCarousel from "../components/caorusel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const estate = [
  {
    title: "Palmview Villa",
    details:
      "A modern 5-bedroom villa with a private pool, smart home system, and panoramic city views.",
    Image: "/images/houseimage.jpg",
    price: "$1,200,000",
    button: "view details",
  },
  {
    title: "Emerald Heights",
    details:
      "Luxury high-rise apartments offering 3-bedroom suites with access to a rooftop lounge and gym.",
    Image: "/images/houseimage.jpg",
    price: "$850,000",
    button: "view details",
  },
  {
    title: "Lakeside Mansion",
    details:
      "Exclusive 6-bedroom mansion with direct lake access, wine cellar, and private cinema.",
    Image: "/images/houseimage.jpg",
    price: "$2,500,000",
    button: "view details",
  },
  {
    title: "Oakwood Residency",
    details:
      "Family-friendly 4-bedroom duplex surrounded by green parks, schools, and shopping centers.",
    Image: "/images/houseimage.jpg",
    price: "$650,000",
    button: "view details",
  },
  {
    title: "Skyline Penthouse",
    details:
      "Elegant 2-story penthouse with floor-to-ceiling windows and a 360° view of the city skyline.",
    Image: "/images/houseimage.jpg",
    price: "$3,200,000",
    button: "view details",
  },
  {
    title: "Savannah Court",
    details:
      "A gated estate featuring 3-bedroom townhouses with modern finishes and 24/7 security.",
    Image: "/images/houseimage.jpg",
    price: "$450,000",
    button: "view details",
  },
];

export default function Home() {
  return (
    <section>
      {/* Navbar */}
      <Navbar />

      {/* Hero Video */}
      <VideoCarousel />

      {/* Stats Section */}
      <section className="flex flex-col md:flex-row justify-around items-center px-6 sm:px-10 py-12 gap-8 bg-gray-50">
        {[
          { number: "7000+", label: "land and house sold" },
          { number: "20+", label: "completed projects" },
          { number: "150+", label: "staff members" },
          { number: "5", label: "member companies" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col text-center md:flex-row md:text-left gap-4 items-center">
            <img className="w-14 sm:w-16" src="/images/house.png" alt={stat.label} />
            <div className="flex flex-col">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {stat.number}
              </p>
              <p className="text-sm text-gray-600 capitalize">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row justify-evenly items-center px-6 sm:px-10 py-16 gap-12">
        {/* Text */}
        <div className="max-w-xl">
          <p className="text-green-500 text-sm font-semibold uppercase tracking-wide mb-2">
            Warden Estate
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Preferred Luxury Real Estate Brand
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            In the heart of Africa’s thriving luxury property market,{" "}
            <span className="font-semibold text-gray-900">Warden Estate</span>{" "}
            rises as a symbol of prestige, innovation, and excellence.
            Recognized for its unwavering commitment to creating remarkable
            living experiences, the brand has redefined standards in luxury real
            estate across the continent. <br />
            <br />
            Warden Estate represents a vision where elegance meets modern
            innovation. Its portfolio reflects a dedication to delivering iconic
            residences that combine contemporary design with timeless
            sophistication. Every development is a masterpiece, thoughtfully
            designed to satisfy the refined lifestyle and expectations of its
            distinguished clientele.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            className="w-full  md:h-[75vh] object-cover rounded-2xl shadow-lg"
            src="/images/woman.jpg"
            alt="Luxury living"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col justify-center items-center gap-6 text-center bg-gray-100 px-6 py-16">
        <p className="uppercase font-bold text-2xl text-green-400">
          our mission
        </p>
        <p className="max-w-2xl text-gray-700 leading-relaxed text-lg md:text-2xl">
          A team of professionals committed to advancing lives through design,
          lifestyle and thriving communities.
        </p>
        <button className="text-lg sm:text-xl bg-green-400 text-white font-semibold capitalize px-6 sm:px-10 py-3 sm:py-4 rounded-md shadow-sm hover:bg-green-600 active:bg-green-700 transition">
          management team
        </button>
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex flex-col gap-2 sm:gap-4 p-6 text-center sm:text-left">
          <p className="text-lg sm:text-xl capitalize font-bold text-green-400">
            our projects
          </p>
          <p className="text-2xl sm:text-3xl font-semibold">
            Palton Morgan Projects Redefines High-End Living
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
          {estate.map((items, index) => (
            <section
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="h-56 w-full">
                <img
                  src={items.Image}
                  alt={items.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {items.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {items.details}
                </p>
                <p className="text-green-600 font-semibold text-lg">
                  {items.price}
                </p>
              </div>

              {/* Button */}
              <div className="p-4">
                <button className="w-full sm:w-1/2 h-12 rounded-md shadow-md text-white font-semibold bg-green-400 hover:bg-green-600 transition">
                  {items.button}
                </button>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </section>
  );
}
