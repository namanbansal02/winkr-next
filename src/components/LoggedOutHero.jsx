import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import { useAuth } from "../context/authContext";

const LoggedOutHero = () => {
//   const { redirectToLogin } = useAuth();
  const canvasRef = useRef(null);
    const redirectToLogin = () => {
        window.location.replace("https://winkr.live");
    };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars(ctx, canvas.width, canvas.height);
    };

    const drawStars = (ctx, width, height) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < 200; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 1.5;
        const opacity = Math.random() * 0.8 + 0.2;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInLeft}
          className="flex flex-col justify-center items-start space-y-4 w-full md:w-1/2 xxs:mt-24 xs:mt-32 md:mt-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-family-intro font-semibold text-white leading-tight">
            Meet New Friends, Instantly. Wherever, Whenever!
          </h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg font-poppins text-gray-300"
          >
            Connect with people who share your interests. Start chatting now, it's Safe and free.
          </motion.p>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            onClick={redirectToLogin}
            className="relative bg-gradient-to-r from-[#00a887] to-[#006666] text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-md font-family-intro transition duration-300 hover:bg-[#c0392b] shadow-lg hover:shadow-xl transform hover:scale-105 active:translate-y-1 active:shadow-md"
          >
            Let's Go
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInRight}
          className="flex justify-center items-center w-full md:w-1/2"
        >
          <div className="flex justify-center items-center w-full max-w-md md:max-w-full">
            <img loading="lazy" src="https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/Home.webp" alt="Chat Illustration" className="w-full h-full lg:w-[75%]" />
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default LoggedOutHero;
