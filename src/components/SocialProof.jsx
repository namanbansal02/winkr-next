'use client';

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FeedbackCarousel = () => {
  const feedbacks = [
    {
      feedback:
        "Winkr.live is a game-changer! It's the most secure and user-friendly platform I’ve come across. The features are amazing, and I feel safe using it to connect with people worldwide.",
      name: "Stranger #1",
      role: "Verified User",
      photo: "https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/Avatars1.svg",
    },
    {
      feedback:
        "I’ve used many platforms for random chats, but Winkr.live stands out for its superior usability and unmatched security features. It’s by far the best platform out there!",
      name: "Stranger #2",
      role: "Premium Member",
      photo: "https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/Avatars2.svg",
    },
    {
      feedback:
        "Winkr.live is incredible! It offers so many features that make connecting with others fun and effortless. Plus, I love how seriously they take user privacy and security.",
      name: "Stranger #3",
      role: "Beta Tester",
      photo: "https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/Avatars3.svg",
    },
    {
      feedback:
        "If you’re looking for a safe and feature-rich platform, Winkr.live is the way to go. It’s way ahead of its competitors and provides the best experience possible.",
      name: "Stranger #4",
      role: "",
      photo: "https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/Avatars4.svg",
    },
    {
      feedback:
        "Winkr.live has set a new standard for platforms like this. Its enhanced security features make me feel safe while exploring and connecting with people around the globe.",
      name: "Stranger #5",
      role: "Verified User",
      photo: "https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/Avatars5.svg",
    },
    {
      feedback:
        "I never thought I’d find a platform this good! Winkr.live is intuitive, safe, and filled with amazing features. It’s simply the best out there.",
      name: "Stranger #6",
      role: "Longtime User",
      photo: "https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/Avatars6.svg",
    },
  ];

  return (
    <div className="relative bg-black text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2
          className="xxs:text-3xl md:text-4xl lg:text-6xl font-extrabold font-family-intro mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          People rave about us, <br />
          <span className="text-transparent bg-clip-text bg-hwt">and there's a good reason.</span>
        </motion.h2>

        <motion.h3
          className="text-sm md:text-base lg:text-base text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real Reviews From Real People Around the World
        </motion.h3>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          className="w-full mb-8"
          centeredSlides={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-darkBg p-6 rounded-lg shadow-md flex flex-col justify-between border border-borderGray mb-12  md:h-[30vh] lg:h-[50vh]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 20"
                    className="w-6 h-6 text-white mb-4"
                  >
                    <path
                      d="M1.28375 19.41L0.79375 18.64C1.21375 17.0067 1.75042 15.07 2.40375 12.83C3.05708 10.5433 3.75708 8.28 4.50375 6.04C5.29708 3.75333 6.06708 1.77 6.81375 0.0899959H15.3538C14.9338 2.09666 14.4904 4.26667 14.0238 6.6C13.5571 8.88666 13.1371 11.15 12.7638 13.39C12.4371 15.5833 12.1571 17.59 11.9238 19.41H1.28375ZM31.69 0.0899959L32.18 0.859998C31.76 2.54 31.2233 4.5 30.57 6.74C29.9167 8.98 29.2167 11.2433 28.47 13.53C27.7233 15.77 26.9533 17.73 26.16 19.41H17.69C18.0167 17.9167 18.3433 16.33 18.67 14.65C18.9967 12.9233 19.3 11.22 19.58 9.54C19.9067 7.81333 20.1867 6.15667 20.42 4.57C20.7 2.93666 20.91 1.44333 21.05 0.0899959H31.69Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="text-sm md:text-base mb-6 text-gray-300">
                    {item.feedback}
                  </p>
                </div>
                <div className="flex items-center mt-6">
                  <img
                    src={item.photo}
                    loading="lazy"
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-700"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{item.name}</h4>
                    {/* {item.role && (
                      <p className="text-sm text-gray-400">{item.role}</p>
                    )} */}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default FeedbackCarousel;
