import decorative3 from "../assets/images/decorative3.png";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function Box1() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  const [contentIndex, setContentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(400);

  const contents = [
    {
      title: "Sustainable Future",
      description: "Transform waste into innovative building materials. Our sustainable solutions help create a better future while reducing environmental impact.",
    },
    {
      title: "Eco-Friendly Materials",
      description: "Using agricultural waste to create high-performance, carbon-negative building materials for a cleaner planet.",
    },
    {
      title: "Innovation",
      description: "Pioneering new technologies and processes to revolutionize the construction industry with sustainable practices.",
    }
  ];

  useEffect(() => {
    let interval;
    if (isHovering) {
      interval = setInterval(() => {
        setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovering, contents.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const baseHeight = 400; // minimum height
      const newHeight = baseHeight + scrollPosition;
      setScrollHeight(newHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="bg-white relative max-w-[100vw] overflow-hidden flex justify-center mt-[-1245px] mb-[50px]">
        <div className="relative w-full">
          <motion.article
            ref={ref}
            className="w-[1222px] h-[578px] bg-black rounded-[100px] relative flex items-center cursor-pointer mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            {/* Right side white box */}
            <motion.aside
              className="absolute right-[60px] w-[500px] h-[400px] bg-white rounded-[50px] p-10 flex flex-col justify-between overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.section
                key={contentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="flex-grow"
              >
                <motion.h2 className="text-4xl font-bold mb-6 font-lato">
                  {contents[contentIndex].title}
                </motion.h2>
                <motion.p className="text-lg text-gray-600 leading-relaxed font-inter">
                  {contents[contentIndex].description}
                </motion.p>
              </motion.section>
              
              {/* Content progress indicators */}
              <motion.footer className="flex justify-center gap-2 mt-6">
                {contents.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === contentIndex ? 'bg-black' : 'bg-gray-300'}`}
                  />
                ))}
              </motion.footer>
            </motion.aside>

            {/* Decorative images */}
            <motion.figure
              className="absolute left-[50px] top-[20%] w-[600px] transform -translate-y-1/2 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <img src={decorative3} alt="Decorative-3" />
            </motion.figure>
          </motion.article>
        </div>
      </section>

      {/* Connecting line */}
      <div className="relative w-full flex justify-center">
        <div className="absolute w-[2px] h-[150px] bg-black" style={{ top: '-75px' }} />
      </div>

      <section className="bg-white relative max-w-[100vw] overflow-hidden flex justify-center mt-[50px]">
        <article className="relative w-[1222px]">
          <motion.section
            ref={textRef}
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-black text-[96px] font-normal font-lato text-center">
                Biome board impact
              </h1>
              <motion.h2 
                className="text-black text-[24px] font-normal font-lato text-center mt-[-30px]"
                animate={{ 
                  filter: isHovering ? "blur(4px)" : "blur(0px)",
                  opacity: isHovering ? 0.7 : 1
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Compared to Plywood/MDF
              </motion.h2>
            </div>
          </motion.section>
        </article>
      </section>
    </>
  );
}

export default Box1;  
