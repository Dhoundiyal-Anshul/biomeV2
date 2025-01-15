import decorative3 from "../assets/images/decorative3.png";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Box1() {
  return (
    // <div
    //   ref={containerRef}
    //   className="bg-white min-h-[2048px] relative max-w-[100vw] overflow-hidden"
    // >
    //   <div className="absolute left-1/2 -translate-x-1/2 top-[834px] w-[1222px] h-[578px] bg-black rounded-[100px]">
    //     {/* Decorative3 inside first black box */}
    //     <motion.img
    //       ref={decorative3Ref}
    //       src={decorative3}
    //       alt="Decorative-3"
    //       className="absolute left-[100px] top-[100px] w-[200px] md:w-[300px]"
    //       style={{
    //         opacity: decorative3Opacity,
    //         scale: decorative3Scale,
    //         rotate: -15,
    //       }}
    //     />
    //   </div>{" "}
    //   {/* White vertical line */}
    //   <div className="absolute left-[374px] top-[330px] h-[57px] border-l-[3px] border-white" />
    //   {/* Image grid */}
    //   <div className="absolute left-1/2 -translate-x-1/2 top-[1643px] w-[1222px] grid grid-cols-3 gap-[78px]">
    //     {images.map((image, index) => (
    //       <motion.img
    //         key={index}
    //         src={image}
    //         alt={`Feature ${index + 1}`}
    //         className="w-[367px] h-[348px] rounded-[100px] object-cover"
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ delay: index * 0.2 }}
    //       />
    //     ))}
    //   </div>
    // </div>
  );
}

export default Box1;
