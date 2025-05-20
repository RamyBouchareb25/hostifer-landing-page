import type { Metadata } from "next"
import { PricingCalculator } from "@/components/pricing-calculator"

export const metadata: Metadata = {
  title: "Pricing Calculator | AlgCloud",
  description: "Calculate your estimated costs for AlgCloud services",
}

export default function PricingCalculatorPage() {
  return (
      <>
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Calculator</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estimate your monthly costs based on your expected usage.
                </p>
              </div>
            </div>
            <PricingCalculator />
          </div>
        </section>
      </>
  )
}
