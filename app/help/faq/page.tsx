import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, Mail, FileText } from "lucide-react"
import { HelpSearch } from "@/components/help-search"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AlgCloud",
  description: "Find answers to common questions about AlgCloud services",
}

const categories = [
  { name: "All", count: 30 },
  { name: "Account & Billing", count: 8 },
  { name: "Compute", count: 6 },
  { name: "Storage", count: 4 },
  { name: "Database", count: 5 },
  { name: "Networking", count: 4 },
  { name: "Security", count: 3 },
]

export default function FaqPage() {
  return (

      <>
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <header className="text-center">
              <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
              <p className="mt-2 text-gray-600">Find answers to common questions about our product.</p>
              <div className="mx-auto mt-6 max-w-md">
                <HelpSearch />
              </div>
            </header>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input type="search" placeholder="Search FAQs..." className="pl-10 py-6 text-lg" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
              <div className="lg:w-1/4">
                <div className="sticky top-24 space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Button
                            variant={category.name === "All" ? "default" : "ghost"}
                            className="w-full justify-start"
                          >
                            <span>{category.name}</span>
                            <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t">
                    <h3 className="font-medium mb-4">Can&apos;t find an answer?</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contact Support
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/4">
                <section className="mt-12">
                  {/* FAQ items will go here */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Example FAQ Item */}
                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">What is AlgCloud?</h2>
                      <p className="mt-2 text-gray-700">
                        AlgCloud is Algeria&apos;s first cloud platform built on OpenStack, providing a complete suite of
                        cloud services designed specifically for the Algerian market. We offer compute, storage,
                        database, networking, and other services to help businesses of all sizes build and deploy
                        applications in the cloud.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">Where are AlgCloud data centers located?</h2>
                      <p className="mt-2 text-gray-700">
                        AlgCloud operates three data centers in Algeria, located in Algiers, Oran, and Constantine. All
                        data centers are built to Tier III standards, ensuring high availability and reliability for
                        your applications and data.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">How do I get started with AlgCloud?</h2>
                      <p className="mt-2 text-gray-700">
                        Getting started with AlgCloud is easy. Simply visit our{" "}
                        <Link href="https://console.hostifer.me/" className="text-blue-600 hover:underline">
                          sign-up page
                        </Link>{" "}
                        to create an account. After verifying your email and adding a payment method, you&apos;ll have access
                        to all AlgCloud services.
                      </p>
                      <p className="mt-2 text-gray-700">
                        For a step-by-step guide, check out our{" "}
                        <Link href="/help/guides/getting-started" className="text-blue-600 hover:underline">
                          Getting Started guide
                        </Link>
                        .
                      </p>
                    </div>

                    {/* Add more FAQ items here */}
                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">What payment methods do you accept?</h2>
                      <p className="mt-2 text-gray-700">
                        We accept various payment methods including credit cards (Visa, Mastercard), bank transfers, and
                        popular mobile payment methods in Algeria. You can manage your payment methods in the Billing
                        section of your account.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">How does billing work?</h2>
                      <p className="mt-2 text-gray-700">
                        AlgCloud uses a pay-as-you-go billing model, which means you only pay for the resources you
                        actually use. We calculate your usage hourly and provide a detailed bill at the end of each
                        month. You can view your current usage and estimated costs at any time in the Billing section of
                        your account.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">Do you offer free credits for new accounts?</h2>
                      <p className="mt-2 text-gray-700">
                        Yes, new accounts receive 2,000 DZD in free credits that can be used for any AlgCloud service.
                        These credits are valid for 30 days from the date of account creation, giving you time to
                        explore our services without incurring costs.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">Can I set spending limits on my account?</h2>
                      <p className="mt-2 text-gray-700">
                        Yes, you can set spending limits and budget alerts in the Billing section of your account. This
                        helps you control costs and avoid unexpected charges. You can set both monthly spending limits
                        and alerts at specific thresholds (e.g., 50%, 80%, 90% of your budget).
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">What operating systems do you support?</h2>
                      <p className="mt-2 text-gray-700">
                        AlgCloud Compute (AC2) supports a wide range of operating systems including:
                        <ul className="list-disc pl-6 mt-2">
                          <li>Linux distributions (Ubuntu, CentOS, Debian, Red Hat Enterprise Linux)</li>
                          <li>Windows Server (2016, 2019, 2022)</li>
                          <li>Custom images that you can upload</li>
                        </ul>
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">Can I resize my compute instance after creating it?</h2>
                      <p className="mt-2 text-gray-700">
                        Yes, you can resize your compute instance at any time to increase or decrease CPU, memory, and
                        storage resources. Some changes may require a restart of your instance. To resize an instance,
                        go to the Compute section in your dashboard, select the instance, and choose the &quot;Resize&quot;
                        option.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">
                        What is the difference between standard and performance instances?
                      </h2>
                      <p className="mt-2 text-gray-700">
                        <strong>Standard instances</strong> are general-purpose virtual machines with a balanced
                        CPU-to-memory ratio, suitable for most workloads like web servers, small databases, and
                        development environments.
                      </p>
                      <p className="mt-2 text-gray-700">
                        <strong>Performance instances</strong> are optimized for high-performance computing with more
                        powerful CPUs, faster NVMe storage, and enhanced networking capabilities. They&apos;re ideal for
                        compute-intensive workloads, large databases, and applications requiring high I/O performance.
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">What types of storage does AlgCloud offer?</h2>
                      <p className="mt-2 text-gray-700">
                        AlgCloud offers several types of storage:
                        <ul className="list-disc pl-6 mt-2">
                          <li>
                            <strong>Object Storage (AS3):</strong> For storing unstructured data like images, videos,
                            and backups
                          </li>
                          <li>
                            <strong>Block Storage:</strong> Attachable volumes for compute instances, similar to
                            physical hard drives
                          </li>
                          <li>
                            <strong>Archive Storage:</strong> Low-cost storage for rarely accessed data and long-term
                            retention
                          </li>
                        </ul>
                      </p>
                    </div>

                    <div className="rounded-lg border p-4 shadow-md">
                      <h2 className="text-lg font-medium">How durable is AlgCloud Storage?</h2>
                      <p className="mt-2 text-gray-700">
                        AlgCloud Storage (AS3) is designed for 99.999999999% (11 nines) durability. This means that your
                        data is redundantly stored across multiple devices and facilities within a region, ensuring
                        extremely high durability and availability.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="text-center mt-12">
                  <p className="text-gray-500 mb-4">Can&apos;t find what you&apos;re looking for?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Contact Support
                    </Button>
                    <Link href="/help/guides">
                      <Button variant="outline" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Browse Guides
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

  )
}
