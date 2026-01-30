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

const stepCard = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const badge = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};

export default function MekanismeTransaksiSection() {
  const steps = [
    {
      title: "Registrasi & Verifikasi",
      desc: "Pengguna melakukan pendaftaran dan verifikasi identitas (KYC) sesuai ketentuan peraturan perundang-undangan yang berlaku.",
    },
    {
      title: "Pembelian Emas Digital",
      desc: "Pengguna membeli emas digital berdasarkan harga yang ditetapkan dengan mengacu pada harga emas pasar.",
    },
    {
      title: "Penyimpanan Emas Fisik",
      desc: "Emas fisik disimpan secara aman di fasilitas penyimpanan (vault/kustodian) yang terverifikasi.",
    },
    {
      title: "Penjualan / Cetak Emas Fisik",
      desc: "Pengguna dapat menjual kembali emas digital atau melakukan penarikan dan pencetakan emas fisik sesuai ketentuan yang berlaku.",
    },
  ];

  return (
    <section id="mekanisme" className="relative overflow-hidden py-20">
      {/* Background Image */}
      <Image
        src="/img/hero-bg.jpeg"
        alt="GoldLane Emas Digital"
        fill
        priority
        className="object-cover opacity-20"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-muted/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section Header */}
        <motion.div
          variants={stepCard}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mekanisme Transaksi
            <span className="block text-primary">GoldLane Emas Digital</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Setiap tahapan transaksi dilakukan secara terstruktur dan
            mengedepankan aspek keamanan serta kepatuhan regulasi.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div variants={container} className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={stepCard}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border bg-background/90 p-8 text-center backdrop-blur-sm transition-shadow hover:shadow-lg"
            >
              {/* Step Number */}
              <motion.span
                variants={badge}
                className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white"
              >
                {i + 1}
              </motion.span>

              <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
