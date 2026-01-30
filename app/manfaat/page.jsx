"use client";

import { ShieldCheck, TrendingUp, Clock, Wallet, Eye } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconAnim = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ManfaatSection() {
  const benefits = [
    {
      title: "Kemudahan Akses & Transaksi",
      desc: "Seluruh aktivitas pembelian, penjualan, dan pemantauan saldo emas dapat dilakukan secara daring melalui sistem elektronik.",
      icon: Wallet,
    },
    {
      title: "Efisiensi Biaya & Waktu",
      desc: "Mengurangi kebutuhan penyimpanan fisik pribadi serta proses transaksi konvensional yang memakan waktu dan biaya tambahan.",
      icon: Clock,
    },
    {
      title: "Transparansi Harga",
      desc: "Harga emas dapat dipantau secara terbuka dan diperbarui secara berkala dengan mengacu pada harga pasar.",
      icon: Eye,
    },
    {
      title: "Keamanan Penyimpanan",
      desc: "Emas fisik disimpan di fasilitas khusus (vault/kustodian) dengan standar keamanan tinggi dan terverifikasi.",
      icon: ShieldCheck,
    },
    {
      title: "Investasi Jangka Panjang",
      desc: "Emas digital dimanfaatkan sebagai instrumen lindung nilai (hedging) terhadap inflasi dalam jangka panjang.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="manfaat" className="relative bg-background py-24">
      {/* Decorative blur */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-primary/5 to-transparent" />

      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block rounded-full border px-4 py-1 text-xs font-medium text-primary">
            Kenapa GoldLane?
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Manfaat Utama
            <span className="block text-primary">GoldLane Emas Digital</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Dirancang sebagai solusi investasi emas digital yang aman,
            transparan, dan relevan untuk kebutuhan finansial modern.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((itemData, i) => {
            const Icon = itemData.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border bg-background/60 p-8 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Icon */}
                <motion.div
                  variants={iconAnim}
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>

                <h3 className="text-lg font-semibold">{itemData.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {itemData.desc}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
