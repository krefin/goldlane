"use client";

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

export default function LatarBelakangSection() {
  return (
    <section id="latar-belakang" className="bg-background py-20">
      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Section Title */}
          <motion.h2
            variants={item}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Transformasi Perdagangan Emas
            <span className="block text-primary">di Era Digital</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={item}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary/60"
          />

          {/* Content */}
          <motion.p
            variants={item}
            className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Pesatnya perkembangan teknologi informasi dan digitalisasi sektor
            keuangan telah mendorong perubahan dalam berbagai instrumen
            investasi, termasuk perdagangan emas. Sistem konvensional yang
            bergantung pada penyimpanan fisik dan transaksi manual dinilai
            kurang efisien, terbatas dari sisi akses, serta berisiko dalam aspek
            keamanan.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Sebagai respons terhadap kebutuhan tersebut, emas digital hadir
            sebagai inovasi yang memungkinkan masyarakat untuk memiliki,
            menyimpan, dan memperdagangkan emas secara elektronik dengan tetap
            mengacu pada keberadaan emas fisik yang nyata dan terverifikasi.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
