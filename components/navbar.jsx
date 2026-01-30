"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#tentang" },
  { label: "Cara Kerja", href: "#mekanisme" },
  { label: "Keunggulan", href: "#manfaat" },
  { label: "Keamanan & Regulasi", href: "#regulasi" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/30 shadow-sm shadow-white/5 backdrop-blur-sm"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="text-lg font-bold">
            <Image
              src="/img/goldlane2.png"
              alt="GoldLane Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative"
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </Link>

              {/* Animated underline */}
              <motion.span
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.25 }}
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              />
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            {/* A11Y */}
            <VisuallyHidden>
              <SheetTitle>Menu Navigasi</SheetTitle>
            </VisuallyHidden>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="mt-8 flex flex-col gap-4 px-5"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { x: 20, opacity: 0 },
                    show: { x: 0, opacity: 1 },
                  }}
                >
                  <Link href={item.href} className="text-sm font-medium">
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <Button className="mt-4 w-full">Login</Button>
              </motion.div>
            </motion.nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
