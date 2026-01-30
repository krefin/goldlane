"use client";

import Image from "next/image";
import Link from "next/link";
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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="bg-[rgb(23,29,100)] text-white">
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <motion.div variants={item}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/img/goldlane3.png"
                alt="GoldLane"
                width={90}
                height={90}
              />
            </motion.div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Platform emas digital berbasis emas fisik nyata yang dirancang
              untuk memberikan kemudahan, keamanan, dan transparansi dalam
              berinvestasi.
            </p>
          </motion.div>

          {/* Navigasi */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {[
                { label: "Tentang GoldLane", href: "#tentang" },
                { label: "Mekanisme Transaksi", href: "#mekanisme" },
                { label: "Manfaat", href: "#manfaat" },
                { label: "Regulasi & Keamanan", href: "#regulasi" },
              ].map((link, i) => (
                <li key={i} className="relative w-fit">
                  <Link
                    href={link.href}
                    className="hover:text-white transition"
                  />
                  <motion.span
                    whileHover={{ width: "100%" }}
                    className="absolute left-0 -bottom-1 h-px w-0 bg-yellow-400"
                  />
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {["Kebijakan Privasi", "Syarat & Ketentuan", "Disclaimer"].map(
                (text, i) => (
                  <li key={i} className="relative w-fit">
                    <Link href="#" className="hover:text-white transition">
                      {text}
                    </Link>
                    <motion.span
                      whileHover={{ width: "100%" }}
                      className="absolute left-0 -bottom-1 h-px w-0 bg-yellow-400"
                    />
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Kontak */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Email: support@goldlane.id</li>
              <li>Jam Operasional: Senin – Jumat</li>
              <li>09.00 – 17.00 WIB</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={item} className="my-10 h-px bg-white/20" />

        {/* Bottom */}
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row"
        >
          <p>
            © {new Date().getFullYear()} GoldLane. Seluruh hak cipta dilindungi.
          </p>
          <p>Emas digital berbasis emas fisik | Patuh regulasi</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
