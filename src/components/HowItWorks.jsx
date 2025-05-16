'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  // Define animations
  const textVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  useEffect(() => {
    const workPhotoItems = document.querySelectorAll('.work__photo-item');
    workPhotoItems.forEach((item, index) => {
      item.style.zIndex = workPhotoItems.length - index;
    });

    gsap.set('.work__photo-item', {
      clipPath: 'inset(0px 0px 0px 0px)',
    });

    const animation = gsap.to('.work__photo-item:not(:last-child)', {
      clipPath: 'inset(0px 0px 100% 0px)',
      stagger: 0.5,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: '.work',
      start: 'top top',
      end: 'bottom bottom',
      animation: animation,
      scrub: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full py-6 overflow-visible block">
      <section className="work flex flex-col md:flex-row">
        <div className="w-full md:w-[55%] md:h-[300vh] relative">
          <div className="hidden md:flex justify-center items-center sticky top-0 h-[100vh] w-full">
            <div className="w-[40vw] h-[60vh] mx-auto relative">
              <div
                className="work__photo-item absolute w-full h-full cursor-pointer border-2 rounded-3xl"
                title="1"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/images/316171f9-4b3e-425a-dasd-7833d49daee5.webp"
                  alt="1"
                  className="block w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div
                className="work__photo-item absolute w-full h-full"
                title="2"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/images/316171f9-4b3e-425a-b86d-7833d49daee5.webp"
                  alt="2"
                  loading="lazy"
                  className="block w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div
                className="work__photo-item absolute w-full h-full"
                title="3"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/images/2163c43d-91a2-4793-9445-3884874cb6f0.webp"
                  alt="3"
                  loading="lazy"
                  className="block w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/images/316171f9-4b3e-425a-b86d-7833d49daee5.webp"
                alt="1"
                loading="lazy"
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <motion.h1
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-hwt bg-clip-text text-transparent py-4 text-3xl sm:text-4xl lg:text-5xl text-left font-htw font-family-intro mb-4"
              >
                Instant Sign Up
              </motion.h1>
              <motion.p
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-400 text-center"
              >
                Get started in no time! Sign up instantly using your Google account and get into a seamless experience.
              </motion.p>
            </div>
            {/* Repeat for items 2 & 3 with motion wrappers */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/images/316171f9-4b3e-425a-b86d-7833d49daee5.webp"
                alt="1"
                loading="lazy"
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <motion.h1
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-hwt bg-clip-text text-transparent py-4 text-3xl sm:text-4xl lg:text-5xl text-left font-htw font-family-intro mb-4"
              >
                Select Interests
              </motion.h1>
              <motion.p
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-400 text-center"
              >
                Show off your vibe! Let us know if you’re into beats, gaming,
                cinema, or whatever lights up your world.
                </motion.p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/namanbansal02/ImgSrc@main/images/316171f9-4b3e-425a-b86d-7833d49daee5.webp"
                alt="1"
                loading="lazy"
                className="w-[90%] h-auto object-cover rounded-3xl"
              />
              <motion.h1
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-hwt bg-clip-text text-transparent py-4 text-3xl sm:text-4xl lg:text-5xl text-left font-htw font-family-intro mb-4"
              >
                Meet New People!
              </motion.h1>
              <motion.p
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-400 text-center"
              >
                Ready to vibe? We’ll pair you with someone who matches your
                energy and shares your passions. Let’s build some Moments!
              </motion.p>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative w-[45%] h-auto z-20">
          {[
            { title: 'Instant Sign Up', desc: 'Get started in no time! Sign up instantly using your Google account, and get into a seamless experience.' },
            { title: 'Select Interests', desc: 'Show off your vibe! Let us know if you’re into beats, gaming, cinema, or whatever lights up your world.' },
            { title: 'Meet New People!', desc: 'Ready to vibe? We’ll pair you with someone who matches your energy and shares your passions. Let’s build some Moments!' }
          ].map((item, idx) => (
            <div key={idx} className="h-[100vh] flex flex-col justify-center px-4">
              <motion.h1
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-hwt bg-clip-text text-transparent py-4 text-3xl sm:text-4xl lg:text-5xl text-left font-htw font-family-intro mb-4"
              >
                {item.title}
              </motion.h1>
              <motion.p
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-400"
              >
                {item.desc}
              </motion.p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
