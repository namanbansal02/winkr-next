'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Metrics = () => {
  const stats = [
    { label: "Total Users", value: 1000000, formattedValue: "M+" },
    { label: "Active Chats", value: 500000, formattedValue: "K+" },
    { label: "Countries Covered", value: 190, formattedValue: "+" },
    { label: "Avg Match Time", value: 5, formattedValue: "s" },
  ];

  const [incrementedStats, setIncrementedStats] = useState(
    stats.map((stat) => ({ ...stat, value: 0 }))
  );

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const incrementValue = (targetValue, index, formattedValue) => {
    const incrementSpeed = 10;
    const incrementStep = Math.ceil(targetValue / 200);

    let currentValue = 0;
    const intervalId = setInterval(() => {
      currentValue += incrementStep;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(intervalId);
      }
      setIncrementedStats((prevStats) => {
        const newStats = [...prevStats];
        newStats[index] = { ...newStats[index], value: currentValue, formattedValue };
        return newStats;
      });
    }, incrementSpeed);
  };

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        incrementValue(stat.value, index, stat.formattedValue);
      });
    }
  }, [isInView]);

  const formatNumber = (value, formattedValue) => {
    if (formattedValue === "M+") {
      return `${(value / 1000000).toFixed(1)}M+`;
    } else if (formattedValue === "K+") {
      return `${(value / 1000).toFixed(0)}K+`;
    } else {
      return `${value}${formattedValue}`;
    }
  };

  return (
    <div
      className="text-white py-16 px-6"
      ref={sectionRef}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-family-intro mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Discover Our Global Reach
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {incrementedStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
            >
              <motion.h3
                className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-poppins font-bold mb-4 text-green-300"
                style={{ minWidth: "120px" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
              >
                {formatNumber(stat.value, stat.formattedValue)}
              </motion.h3>
              <p className="text-gray-400 font-poppins text-sm sm:text-base font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
