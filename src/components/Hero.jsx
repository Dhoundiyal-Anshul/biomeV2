import Navbar from "./Navbar";
import decorative1 from "../assets/images/decorative1.png";

function Hero() {
  return (
    <div className="bg-black min-h-screen w-auto ">
      <Navbar />

      <div>
        <h1 className="text-white text-[100px] md:text-[250px] font-bold text-center font-poppins mt-[-320px] md:mt-[-60px]">
          Biome
        </h1>

        <h2 className="text-white text-lg md:text-2xl font-bold text-center font-merriweather mt-[-320px] md:mt-[-60px]">
          Natural Waste-Based Building Materials
        </h2>

        <p className="text-white text-xl font-medium max-w-[304px] ml-auto mt-16">
          Transforming agricultural waste into innovative, high-impact products
          to address the climate crisis.
        </p>

        <div className="flex justify-center mt-8 md:mt-16">
          <button className="text-white flex flex-col items-center gap-2">
            <span className="text-lg md:text-xl font-semibold">Learn more</span>
            <div className="w-5 h-5 border-2 border-white rounded-full relative">
              <div className="absolute top-1/2 left-1/2 w-2 h-2 border-l-2 border-b-2 border-white transform -translate-x-1/2 -translate-y-1/4 rotate-[-45deg]" />
            </div>
          </button>
        </div>
        {/* <img
          src={decorative1}
          alt="Decorative"
          className="absolute right-[-30px] md:right-[-80px] top-56 md:top-96 rotate-2 w-[180px] md:w-[400px]"
        />
        <img
          src={decorative1}
          alt="Decorative"
          className="absolute left-[-30px] md:left-[-150px] top-40 md:top-72 -rotate-3 w-[180px] md:w-[400px]"
        /> */}
      </div>
    </div>
  );
}

export default Hero;
