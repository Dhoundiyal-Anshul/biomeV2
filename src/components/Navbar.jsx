import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <img src={logo} alt="Biome Logo" className="w-10 h-10" />

      <div className="flex items-center gap-8">
        <NavLink text="Product" />
        <NavLink text="About" />
        <NavLink text="Press" />
        <NavLink text="Careers" />
        <NavLink text="Blog" />
        <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

const NavLink = ({ text }) => (
  <a href="#" className="text-white font-semibold text-sm tracking-wider">
    {text}
  </a>
);

export default Navbar;
