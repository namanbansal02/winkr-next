'use client';

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGoogle, FaGlobe, FaLock, FaTrophy,FaLanguage, FaUser, FaRobot } from 'react-icons/fa';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Features = () => {
  // const featuresData = [
  //   { icon: "🤝", title: "Anonymous Connections", description: "Chat with new people globally while keeping your identity a secret, making connections totally private." },
  //   { icon: "🔎", title: "Interest-Based Matching", description: "Match with people who vibe with your interests for fun and engaging conversations every time." },
  //   { icon: "⚡", title: "Real-Time Chat", description: "Enjoy fast, smooth video or text chats with zero lag, powered by next-gen WebRTC tech." },
  //   { icon: "🌐", title: "Global Community", description: "Meet people worldwide, explore cultures, and make diverse connections with ease." },
  //   { icon: "🛡️", title: "Enhanced Security", description: "Stay safe with encrypted chats and moderation tools that block harmful content instantly." },
  //   { icon: "🏆", title: "Gamified Experience", description: "Level up, earn rewards, and unlock badges for active chatting and building connections." },
  //   { icon: "🎨", title: "Customizable Profiles", description: "Show your style by updating your profile with interests, moods, and fun status updates." },
  //   { icon: "🌍", title: "Multilingual Support", description: "Break language barriers with instant chat translations that let you talk to anyone." },
  //   { icon: "🎭", title: "Themed Chatrooms", description: "Hop into chatrooms for gaming, travel, and more to connect with like-minded people." },
  //   { icon: "🤖", title: "AI-Powered Moderation", description: "Enjoy safer chats with AI that detects and blocks toxic behavior on the spot." },
  //   { icon: "🎧", title: "Voice-Only Mode", description: "Chill and chat using only your voice—perfect for when you’re not in the mood for video." },
  //   { icon: "❤", title: "Favorite Connections", description: "Bookmark your favorite chats and revisit them anytime to keep the good vibes going." },
  // ];
  const featuresData = [
    { icon: "🔎", title: "Shared Interests", description: "Find people who share your interests—whether it's gaming, traveling, or just good conversations." },
    { icon: <FaGoogle />, title: "Quick Login", description: "Get started instantly with Google login—quick, easy, and start connecting instantly with no hassle." },
    { icon: <FaLock />, title: "Privacy & Security", description: "Your privacy matters. Winkr ensures secure chats with strict moderation and strong data protection." },
    { icon: "⚡", title: "Real-Time Chat", description: "Enjoy seamless video or text chats with no delays, making every conversation smooth and natural." },
    { icon: <FaRobot />, title: "AI-Powered Moderation", description: "Stay safe with AI that instantly detects and blocks harmful content, ensuring positive interactions." },
    { icon: "🎭", title: "Themed Chatrooms", description: "Dive into exciting themed chatrooms like music, movies, and hobbies to meet like-minded people." },
    { icon: <FaUser />, title: "Your Profile", description: "Check out your personalized profile page. Update your interests, achievements, and connections to keep everything on point.." },
    { icon: <FaLanguage />, title: "Multilingual Chats", description: "Chat in any language with real-time translation, making communication effortless across the globe." },
    { icon: "❤️", title: "Favorite Connections", description: "Bookmark your favorite chats and easily reconnect with the people who left an impression." },
    { icon: <FaGlobe />, title: "Global Connections", description: "Connect with peoples from across the world, make real and genuine friendships, learn new languages or just discover new perspectives." },
    { icon: <FaTrophy />, title: "Gamified Interactions", description: "Earn rewards, unlock achievements, and level up your connection game with every chat." },
    { icon: "🎧", title: "Voice-Only Mode", description: "Chill and chat using only your voice—perfect for when you’re not in the mood for video." },
  ];

  const swiperSettings = {
    modules: [EffectCoverflow, Pagination, Autoplay],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    breakpoints: {
      1920: { slidesPerView: 4, spaceBetween: 20 },
      1440: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 1, spaceBetween: 5 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full px-4 py-16 md:py-20 lg:py-24 text-white bg-black overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.h2
          className="xxs:text-3xl md:text-4xl lg:text-5xl font-family-intro mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Features built for better Moments, <br></br><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500 tracking-tight">Because You Deserve the Best.</span>
        </motion.h2>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Swiper {...swiperSettings}>
            {featuresData.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-darkBg rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-[290px] md:h-[260px] transition-transform duration-300 transform border border-borderGray"
                  initial={{ opacity: 0}}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-white text-3xl font-family-intro mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
