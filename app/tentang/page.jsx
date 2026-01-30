"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function TentangSection() {
  return (
    <section
      id="tentang"
      className="relative overflow-hidden py-20 rounded-3xl"
    >
      {/* Background Image */}
      <Image
        src="/img/bg-gold2.jpeg"
        alt="GoldLane Emas Digital"
        fill
        priority
        className="object-cover opacity-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgb(23,29,100)]/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <motion.div variants={fadeLeft} className="text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Apa Itu
              <span className="block text-yellow-400">
                GoldLane Emas Digital?
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              GoldLane Emas Digital adalah bentuk kepemilikan emas di mana emas
              fisik dengan kadar tertentu dicatat dan direpresentasikan dalam
              sistem digital. Kepemilikan tersebut dibukukan secara elektronik
              atas nama pengguna, sementara emas fisiknya disimpan secara aman
              di fasilitas penyimpanan (vault/kustodian) yang terverifikasi.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Setiap saldo emas digital pada platform GoldLane memiliki
              underlying asset berupa emas fisik nyata, sehingga memberikan
              kepastian kepemilikan, transparansi, serta perlindungan bagi
              pengguna.
            </p>
          </motion.div>

          {/* Highlight Box */}
          <motion.div
            variants={fadeRight}
            className="rounded-2xl bg-white/95 p-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Prinsip Utama GoldLane
            </h3>

            <motion.ul
              variants={container}
              className="mt-6 space-y-4 text-sm text-gray-700"
            >
              {[
                "Emas fisik nyata sebagai underlying asset",
                "Pencatatan kepemilikan secara elektronik",
                "Penyimpanan emas di vault/kustodian aman",
                "Hak pengguna untuk menjual atau mencetak emas fisik",
              ].map((text, i) => (
                <motion.li key={i} variants={listItem} className="flex gap-3">
                  <span className="text-yellow-500">●</span>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
