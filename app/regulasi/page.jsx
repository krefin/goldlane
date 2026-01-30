"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const divider = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: "5rem",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const logo = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function RegulasiSection() {
  return (
    <section id="regulasi" className="relative overflow-hidden py-20">
      {/* Background Image */}
      <Image
        src="/img/bg-gold.jpeg"
        alt="Regulasi dan Keamanan GoldLane"
        fill
        priority
        className="object-cover opacity-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgb(23,29,100)]/85" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Section Title */}
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Regulasi & Keamanan
            <span className="block text-yellow-400">GoldLane Emas Digital</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={divider}
            className="mx-auto mt-4 h-1 rounded-full bg-yellow-400/80"
          />

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-8 text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Perdagangan Emas Digital melalui platform GoldLane dilaksanakan
            dengan mengedepankan prinsip kepatuhan terhadap peraturan
            perundang-undangan yang berlaku di Indonesia serta diawasi oleh
            otoritas dan regulator terkait.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg"
          >
            GoldLane berkomitmen untuk menjalankan operasional secara
            transparan, akuntabel, dan aman guna memberikan perlindungan optimal
            bagi pengguna dalam setiap aktivitas transaksi emas digital.
          </motion.p>

          {/* Diawasi Oleh */}
          <motion.div variants={item} className="mt-12">
            <p className="mb-6 text-sm uppercase tracking-widest text-white/70">
              Diawasi oleh
            </p>

            <motion.div
              variants={container}
              className="flex flex-wrap items-center justify-center gap-10"
            >
              {[
                {
                  src: "/img/bappebti_logo.png",
                  alt: "Bappebti",
                  w: 140,
                },
                {
                  src: "/img/OJK.png",
                  alt: "Otoritas Jasa Keuangan (OJK)",
                  w: 120,
                },
                {
                  src: "/img/BI_Logo.png",
                  alt: "Regulator Terkait",
                  w: 140,
                },
              ].map((reg, i) => (
                <motion.div
                  key={i}
                  variants={logo}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={reg.src}
                    alt={reg.alt}
                    width={reg.w}
                    height={60}
                    className="opacity-90 grayscale transition hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
