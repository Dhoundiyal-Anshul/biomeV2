import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Box3() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0.5, 1]);
  const textScale = useTransform(scrollYProgress, [0.6, 0.8], [0.95, 1.05]);

  return (
    <section ref={containerRef} className="bg-white relative max-w-[100vw] overflow-visible flex justify-center min-h-[30vh] mt-[800px]">
      <article className="relative w-[1222px] flex justify-center">
        {/* Vertical line */}
        <svg className="absolute w-[2px] h-[400px] overflow-visible" style={{ left: '900px', top: '-400px' }}>
          <motion.path
            d="M 0 80 L 0 300 H -300 V 434"
            stroke="black"
            strokeWidth="2"
            fill="none"
            style={{ pathLength }}
          />
        </svg>

        <h2 className="text-center w-full text-4xl mt-[50px]">
          We have the <motion.span 
            className="text-8xl font-bold inline-block"
            style={{ 
              opacity: textOpacity,
              scale: textScale
            }}
          >Highest</motion.span> ever score <br /> for a certified sustainable building.
        </h2>
      </article>
    </section>
  );
}

export default Box3;
