import Navbar from "./Navbar";
import decorative1 from "../assets/images/decorative1.png";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  // Add scroll event handler
  const handleScroll = (e) => {
    // Check if we're in the hero section (at the top)
    if (window.scrollY < window.innerHeight) {
      // If the user scrolls down
      if (e.deltaY > 0) {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }
    }
  };

  // Add event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen w-auto ">
      <Navbar />

      <div>
        <h1 className="text-white text-[80px] md:text-[200px] font-bold text-center font-poppins mt-[-200px] md:mt-[60px]">
          Biome
        </h1>

        <h2 className="text-white text-lg md:text-2xl font-bold text-center font-merriweather mt-[-320px] md:mt-[-60px]">
          Natural Waste-Based Building Materials
        </h2>

        <p className="text-white text-lg font-small max-w-[304px] ml-auto mt-28">
          Transforming agricultural waste <br /> into innovative, high-impact
          products <br /> to address the climate crisis.
        </p>

        <div className="flex justify-center mt-6 md:mt-14">
          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="text-white flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-lg md:text-xl font-semibold">Learn more</span>
            <div className="w-5 h-5 border-2 border-white rounded-full relative">
              <div className="absolute top-1/2 left-1/2 w-2 h-2 border-l-2 border-b-2 border-white transform -translate-x-1/2 -translate-y-1/4 rotate-[-45deg]" />
            </div>
          </button>
        </div>
        <motion.img
          src={decorative1}
          alt="Decorative-1"
          className="absolute left-[200px] md:left-[300px] top-28 md:top-36 w-[80px] md:w-[200px]"
          style={{ transform: "rotate(-20deg)" }}
          animate={{
            rotate: [-20, -22, -20],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.img
          src={decorative1}
          alt="Decorative-2"
          className="absolute right-[230px] md:right-[330px] top-72 md:top-80 w-[80px] md:w-[200px]"
          style={{ transform: "rotate(19deg)" }}
          animate={{
            rotate: [19, 21, 19],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
