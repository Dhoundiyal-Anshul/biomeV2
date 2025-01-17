import React, { useRef, useState, useEffect } from "react";
import decorative1 from "../assets/images/decorative1.png";
import decorative2 from "../assets/images/decorative2.png";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const feature1 = "https://placehold.co/367x348";
const feature2 = "https://placehold.co/367x348";
const feature3 = "https://placehold.co/367x348";

function Features() {
  const images = [feature1, feature2, feature3];
  const containerRef = useRef(null);
  const decorative1Ref = useRef(null);
  const decorative2Ref = useRef(null);
  const decorative3Ref = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false); // Track animation state

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center start"],
  });

  // Use Spring to adjust animation speed based on scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300, // Default stiffness
    damping: 30, // Default damping
    restDelta: 0.001,
  });

  // Adjust the animation speed based on scroll speed dynamically
  useEffect(() => {
    const adjustSpeed = () => {
      const scrollDelta = Math.abs(
        window.scrollY - containerRef.current?.offsetTop
      );
      const newStiffness = Math.max(100, 300 + scrollDelta * 0.5);
      const newDamping = Math.max(30, 30 + scrollDelta * 0.1);

      smoothProgress.setConfig({
        stiffness: newStiffness,
        damping: newDamping,
      });
    };

    window.addEventListener("scroll", adjustSpeed);
    return () => window.removeEventListener("scroll", adjustSpeed);
  }, [smoothProgress]);

  // First decorative image animation
  const decorative1Opacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const decorative1Scale = useTransform(smoothProgress, [0, 0.2], [0.8, 1]);

  // Path animation - split into two parts with a longer pause
  const pathLength = useTransform(smoothProgress, 
    [0.1, 0.4, 0.5, 0.6], // Extended pause between 0.4-0.5
    [0, 0.7, 0.7, 1] // Line stops at 70% until decorative2 appears
  );

  // Second decorative image animation - faster appearance
  const decorative2Opacity = useTransform(smoothProgress, [0.3, 0.35], [0, 1]);
  const decorative2Scale = useTransform(smoothProgress, [0.3, 0.35], [0.8, 1]);

  // Second path animation
  const path2Length = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);

  // Add animation for decorative3
  const decorative3Opacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);
  const decorative3Scale = useTransform(smoothProgress, [0.5, 0.7], [0.8, 1]);

  return (
    <div
      ref={containerRef}
      className="bg-white min-h-[2048px] relative max-w-[100vw] overflow-hidden"
    >
      {/* Black rounded rectangles */}


      {/* Main heading */}
      <div className="max-w-[1440px] mx-auto text-black text-[96px] font-bold font-lato px-10 py-20">
        Circular, <br />
        Sustainable,
        <br />
        Carbon-Storing Materials.
      </div>

      {/* SVG Path Container */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Path from Decorative1 to Decorative2 */}
        <motion.path
          d={`M 463 -53 C 409 100 500 200 935 208 C 1436 226 1657 426 773 575 C 411 648 549.3333 791.3333 472 881`}
          stroke="#000"
          strokeWidth="2"
          fill="none"
          style={{ pathLength }}
        />
      </svg>

      {/* Decorative Images */}
      <motion.img
        ref={decorative1Ref}
        src={decorative1}
        alt="Decorative-1"
        className="absolute left-[409px] md:left-[509px] top-[-54px] md:top-[-46px] w-[160px] md:w-[400px]"
        style={{
          opacity: decorative1Opacity,
          scale: decorative1Scale,
          rotate: 20,
        }}
      />

      <motion.img
        ref={decorative2Ref}
        src={decorative2}
        alt="Decorative-2"
        className="absolute left-[350px] md:left-[450px] top-[500px] md:top-[508px] w-[120px] md:w-[300px]"
        style={{
          opacity: decorative2Opacity,
          scale: decorative2Scale,
          transition: { 
            type: "spring", 
            stiffness: 200,  // Increased for faster motion
            damping: 10,    // Reduced for faster settling
            duration: 0.5   // Reduced duration for faster animation
          }
        }}
      />
    </div>
  );
}

export default Features;
