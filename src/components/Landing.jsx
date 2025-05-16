'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import React from 'react';

import Metrics from '@/components/Metrics';
import SocialProof from '@/components/SocialProof';

export default function Landing() {
    return (
        <>
                <section className="flex items-center justify-center h-screen w-full overflow-hidden"
          style={{
            background: `
                            linear-gradient(135deg, rgba(0, 168, 135, 0.1) 0%, rgba(0, 102, 102, 0) 30%)  no-repeat,
                            linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)) no-repeat,
                            linear-gradient(135deg, rgba(0, 168, 135, 0.1) 0%, rgba(0, 102, 102, 0) 30%) no-repeat
                          `,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Hero />
        </section>
            <section className="py-16 px-4 flex items-center bg-black justify-center sm:pt-0 w-full overflow-hidden">
                <Features />
            </section>
            <section className="px-4 bg-black text-white">
                <motion.h2
                    className="xxs:text-3xl md:text-4xl lg:text-6xl font-family-intro mb-4 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    Here's How it Begins
                </motion.h2>
                <HowItWorks />
            </section>
            <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black text-white w-full overflow-hidden">
                <Metrics />
            </section>
            <section className="py-16 px-4 bg-black text-white w-full overflow-hidden">
                <SocialProof />
            </section>
            <section
                className="bg-black py-16 px-4 flex items-center justify-center w-full overflow-hidden relative"
            >
                <div className="relative max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: "some" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between sm:gap-8 backdrop-blur-lg bg-darkBg/80   rounded-3xl shadow-xl p-8 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://framerusercontent.com/images/GlzPg2C0jKyCFSf1twdRmUhAQ.webp')",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[rgb(11,11,13)]/80 rounded-3xl"></div>

                        {/* Content */}
                        <div className="relative z-10 text-center sm:text-left">
                            <h3 className="text-3xl font-bold font-family-intro text-white">Need Help?</h3>
                            <p className="mt-4 text-lg text-white">
                                Got questions or facing issues? Our support team is here to help.
                            </p>
                        </div>
                        <Link
                            href="/support"
                            className="relative z-10 inline-block bg-dark-green text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 xxs:mt-4 text-center whitespace-nowrap"
                        >
                            Visit Support
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
