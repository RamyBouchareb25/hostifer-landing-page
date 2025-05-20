"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Algeria&apos;s First Cloud Platform
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Experience world-class cloud infrastructure built on OpenStack, designed specifically for Algerian
                businesses.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://console.hostifer.me/">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Local Data Centers</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative">
                <Image
                  src="/cloud.png"
                  width={550}
                  height={550}
                  alt="AlgCloud Platform"
                  className="mx-auto rounded-lg shadow-2xl"
                />
                <motion.div
                  animate={{
                    y: isHovered ? -10 : 0,
                    boxShadow: isHovered
                      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-48"
                >
                  <div className="text-sm font-medium">Trusted by</div>
                  <div className="text-2xl font-bold">500+ Companies</div>
                  <div className="text-xs text-gray-500">across Algeria</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
