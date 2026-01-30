"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function KarakteristikSection() {
  return (
    <section id="karakteristik" className="bg-background py-20">
      <motion.div
        className="container mx-auto px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section Header */}
        <motion.div
          variants={card}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Karakteristik Utama
            <span className="block text-primary">GoldLane Emas Digital</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            GoldLane dirancang dengan prinsip keamanan, transparansi, dan
            fleksibilitas untuk mendukung investasi emas digital yang
            terpercaya.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              title: "Underlying Asset Emas Fisik",
              desc: "Setiap unit emas digital didukung oleh emas fisik nyata dengan standar kualitas tinggi (umumnya 24 karat / 99,99%) yang tersimpan di fasilitas penyimpanan terverifikasi.",
            },
            {
              title: "Pencatatan Kepemilikan Elektronik",
              desc: "Kepemilikan emas dicatat secara elektronik dalam sistem digital yang terintegrasi dan dapat diakses pengguna secara real-time.",
            },
            {
              title: "Satuan Transaksi Fleksibel",
              desc: "Transaksi dapat dilakukan dalam satuan gram maupun pecahan gram, sehingga memungkinkan inklusi keuangan bagi berbagai kalangan.",
            },
            {
              title: "Likuiditas Tinggi",
              desc: "Emas digital dapat diperjualbelikan kembali dengan cepat kepada Pedagang Emas Digital atau pihak lain sesuai ketentuan platform.",
            },
            {
              title: "Opsi Penarikan Emas Fisik",
              desc: "Pengguna memiliki hak untuk menarik atau mencetak emas fisik sesuai dengan saldo yang dimiliki, mengikuti ketentuan yang berlaku.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -6 }}
              className="rounded-2xl border p-8 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
