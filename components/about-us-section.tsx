"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function AboutUsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Algeria&apos;s Cloud Pioneers</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Building the digital infrastructure for Algeria&apos;s future.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-500">
              At AlgCloud, our mission is to empower Algerian businesses with world-class cloud infrastructure. We
              believe that local businesses deserve access to the same level of technology and reliability that global
              enterprises enjoy, without having to rely on foreign providers.
            </p>
            <p className="text-gray-500">
              Founded in 2025, we are the first Algerian cloud platform built on OpenStack, providing a complete suite
              of cloud services designed specifically for the local market.
            </p>

            <h3 className="text-2xl font-bold pt-4">Our Values</h3>
            <ul className="grid gap-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-gray-500">
                    Constantly pushing the boundaries of what&apos;s possible with cloud technology in Algeria.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Reliability</h4>
                  <p className="text-sm text-gray-500">
                    Building infrastructure you can depend on, with 99.9% uptime guarantees.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Local Focus</h4>
                  <p className="text-sm text-gray-500">
                    Understanding the unique needs of Algerian businesses and providing tailored solutions.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-[300px]">
                  <Image src="/team.jpg" alt="AlgCloud Team" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Our Team</h3>
                  <p className="text-gray-500 mb-4">
                    Our team consists of Algeria&apos;s top cloud engineers, network specialists, and customer support
                    professionals. With decades of combined experience in cloud infrastructure, we&apos;re dedicated to
                    providing the best service possible.
                  </p>
                  <Link href="/team">
                    <Button variant="outline" className="w-full">
                      Meet Our Team
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-500">Data Centers</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Team Members</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">Clients</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl mt-12">
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Join Algeria&apos;s Cloud Revolution</h3>
                  <p className="text-gray-600">
                    Be part of the digital transformation that&apos;s changing how Algerian businesses operate. With
                    AlgCloud, you&apos;re not just getting cloud services - you&apos;re joining a movement to build a stronger,
                    more independent digital infrastructure for Algeria.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Link href="https://console.hostifer.me/">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Started Today
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
