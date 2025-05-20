"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "AlgCloud has transformed how we deploy our applications. The performance is outstanding and the local support team is always responsive.",
    author: "Mohammed Benali",
    role: "CTO, TechAlgeria",
    avatar: "/images/avatar-1.png",
  },
  {
    quote:
      "Moving our infrastructure to AlgCloud was the best decision we made. The cost savings and performance improvements have been significant.",
    author: "Amina Khelif",
    role: "IT Director, Algerian Bank",
    avatar: "/images/avatar-2.png",
  },
  {
    quote:
      "As a startup, we needed a reliable and cost-effective cloud solution. AlgCloud delivered beyond our expectations with their excellent services.",
    author: "Karim Hadj",
    role: "Founder, DZ Innovate",
    avatar: "/images/avatar-3.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Algerian Businesses</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our customers have to say about AlgCloud.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-10">
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-blue-100" />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-700 mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].author}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonials[currentIndex].author}</p>
                        <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-lg"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-lg"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
