import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { CtaSection } from "@/components/cta-section"
import { AboutUsSection } from "@/components/about-us-section"

export default function Home() {
  return (

      <div className="flex-1">
        <HeroSection />
        <ServicesSection />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  OpenStack Powered
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Algeria&apos;s First Cloud Platform</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Built on OpenStack, our infrastructure provides enterprise-grade reliability, scalability, and
                  security for businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">99.9% Uptime Guarantee</h3>
                      <p className="text-sm text-gray-500">
                        Our infrastructure is designed for maximum reliability and performance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">Local Data Centers</h3>
                      <p className="text-sm text-gray-500">
                        Keep your data in Algeria with our state-of-the-art data centers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold">24/7 Technical Support</h3>
                      <p className="text-sm text-gray-500">
                        Our team of experts is always available to help you with any issues.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto w-full max-w-[500px] relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <Image
                    src="/Data-center.avif"
                    width={500}
                    height={500}
                    alt="Data center illustration"
                    className="mx-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <PricingSection />
        <AboutUsSection />
        <CtaSection />
      </div>

  )
}
