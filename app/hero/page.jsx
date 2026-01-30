"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[rgb(23,29,100)] rounded-b-3xl"
    >
      {/* Background Image */}
      <Image
        src="/img/hero-bg.jpeg"
        alt="GoldLane Emas Digital"
        fill
        priority
        className="object-cover opacity-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center text-white"
      >
        {/* Logo */}
        <motion.div
          variants={item}
          className="relative mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/img/goldlane.png"
            alt="GoldLane Logo"
            width={180}
            height={60}
            priority
            className="mx-auto object-contain"
          />
        </motion.div>

        {/* Badge */}
        <motion.span
          variants={item}
          className="mb-4 inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-sm font-medium text-white/80"
        >
          GOLDLANE · Emas cerdas untuk masa depan
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Investasi Emas Digital
          <span className="block text-yellow-400">Aman & Terpercaya</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Miliki, simpan, dan perdagangkan emas fisik 24 karat secara digital
          dengan sistem transparan, fleksibel, dan diawasi oleh regulator.
        </motion.p>

        {/* Highlights */}
        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80"
        >
          <span>✔ Emas Fisik Nyata</span>
          <span>✔ Pecahan Gram</span>
          <span>✔ Likuiditas Tinggi</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300"
            >
              Mulai Investasi
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black"
            >
              Pelajari Cara Kerja
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
