import type { Metadata } from "next"
import { HelpSearch } from "@/components/help-search"

export const metadata: Metadata = {
  title: "Help Center | AlgCloud",
  description: "Get help with AlgCloud services and find answers to your questions",
}

export default function HelpPage() {
  return (
    <div className="container mx-auto mt-8">
      <header className="text-center">
        <h1 className="text-3xl font-semibold">Help Center</h1>
        <p className="mt-2 text-gray-600">Find answers to your questions or contact support.</p>
        <div className="mx-auto mt-6 max-w-md">
          <HelpSearch />
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        {/* Add FAQ items here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold">Question 1</h3>
            <p>Answer to question 1.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold">Question 2</h3>
            <p>Answer to question 2.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold">Question 3</h3>
            <p>Answer to question 3.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <p>If you can't find the answer you're looking for, please contact our support team.</p>
        {/* Add contact form or details here */}
      </section>
    </div>
  )
}
