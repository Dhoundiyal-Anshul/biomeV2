import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import decorative4 from "../assets/images/decorative4.png";
import decorative5 from "../assets/images/decorative5.jpg";

function Box2() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="bg-white relative max-w-[100vw] overflow-visible flex justify-center min-h-[30vh]">
      <article className="relative w-[1222px] flex justify-center">
        {/* Line going down and left */}
        <svg className="absolute w-[600px] h-[200px] overflow-visible">
          <motion.path
            d="M 300 0 L 300 100 L -110 100 V 300"
            stroke="black"
            strokeWidth="2"
            fill="none"
            style={{ pathLength }}
          />
        </svg>

        {/* Decorative image 4 */}
        <motion.div 
          className="absolute left-[50px] top-[300px] w-[300px] h-[300px] overflow-visible"
          style={{
            opacity: imageOpacity,
            scale: imageScale
          }}
        >
          <img 
            src={decorative4} 
            alt="Decorative-4" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* VS Text */}
        <motion.div
          className="absolute left-[450px] top-[400px] z-10"
          style={{ opacity: imageOpacity }}
        >
          <h2 className="text-black text-[48px] font-normal font-lato">VS</h2>
        </motion.div>

        {/* Decorative image 5 */}
        <motion.div 
          className="absolute left-[600px] top-[100px] w-[600px] h-[600px] overflow-visible"
          style={{
            opacity: imageOpacity,
            scale: imageScale
          }}
        >
          <img 
            src={decorative5} 
            alt="Decorative-5" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Text below decorative */}
        <motion.div
          className="absolute left-[50px] top-[600px] bg-white rounded-[20px] p-8"
          style={{ opacity: textOpacity }}
        >
          <div className="space-y-4 text-center">
            <p className="text-black text-lg font-inter">Controlled smoke & air pollution</p>
            <p className="text-black text-lg font-inter">Reduces global warming</p>
            <p className="text-black text-lg font-inter">Energy saving and eco-friendly</p>
          </div>
        </motion.div>
      </article>
    </section>
  );
}

export default Box2;
