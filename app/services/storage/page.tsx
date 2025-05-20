import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Server, Database, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "AS3 - AlgCloud Storage | AlgCloud",
  description: "Secure, durable, and scalable object storage for any amount of data",
}

export default function StorageServicePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AS3 - AlgCloud Storage
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Secure, durable, and scalable object storage for any amount of data. Store and retrieve any amount of
                  data, anytime, from anywhere.
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
                <Link href="/pricing-calculator">
                  <Button size="lg" variant="outline">
                    Calculate Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="AlgCloud Storage Service"
                className="mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need for reliable, scalable object storage.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Durability & Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Designed for 99.999999999% (11 nines) durability and 99.99% availability, ensuring your data is always
                  accessible when you need it.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Store any amount of data with no limits. Scale your storage up or down automatically as your needs
                  change.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Comprehensive security features including encryption at rest and in transit, access control, and audit
                  logging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Storage Classes Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Storage Classes</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the right storage class for your data access patterns and cost requirements.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="infrequent">Infrequent Access</TabsTrigger>
                <TabsTrigger value="archive">Archive</TabsTrigger>
              </TabsList>
              <TabsContent value="standard" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Standard Storage</CardTitle>
                    <CardDescription>General-purpose storage for frequently accessed data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Standard Storage is designed for frequently accessed data that requires rapid retrieval. It's
                        ideal for a wide range of use cases including websites, content distribution, mobile
                        applications, and big data analytics.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Low latency and high throughput</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>99.99% availability</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>No minimum storage duration</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Use Cases</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Websites and content distribution</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Mobile and gaming applications</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Big data analytics</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Pricing</h4>
                        <p className="text-sm">
                          400 DZD per GB per month for the first 50 TB
                          <br />
                          350 DZD per GB per month for the next 450 TB
                          <br />
                          300 DZD per GB per month for storage over 500 TB
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator">
                      <Button variant="outline">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="infrequent" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Infrequent Access Storage</CardTitle>
                    <CardDescription>Lower cost storage for less frequently accessed data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Infrequent Access Storage is designed for data that is accessed less frequently but requires
                        rapid access when needed. It offers a lower storage cost compared to Standard Storage, but with
                        a higher retrieval cost.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Lower storage cost</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>99.9% availability</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>30-day minimum storage duration</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Use Cases</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Backup and disaster recovery</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Long-term storage for infrequently accessed data</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Data that needs to be retained for compliance</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Pricing</h4>
                        <p className="text-sm">
                          200 DZD per GB per month for storage
                          <br />
                          100 DZD per GB for data retrieval
                          <br />
                          30-day minimum storage duration
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator">
                      <Button variant="outline">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="archive" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Archive Storage</CardTitle>
                    <CardDescription>Lowest cost storage for long-term archiving</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Archive Storage is designed for long-term data archiving at the lowest cost. It's ideal for data
                        that is rarely accessed and can tolerate retrieval times of several hours.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Lowest storage cost</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>99.9% availability</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>90-day minimum storage duration</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Use Cases</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Long-term data archiving</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Digital preservation</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Regulatory and compliance data</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Pricing</h4>
                        <p className="text-sm">
                          100 DZD per GB per month for storage
                          <br />
                          300 DZD per GB for expedited retrieval (within 1-5 minutes)
                          <br />
                          100 DZD per GB for standard retrieval (within 3-5 hours)
                          <br />
                          90-day minimum storage duration
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator">
                      <Button variant="outline">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Use Cases</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                AlgCloud Storage can be used for a wide range of applications.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Backup and Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Store backups of your data securely and cost-effectively. Recover your data quickly when needed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Database backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>File system backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Disaster recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Content Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Store and distribute content to your users efficiently. Ideal for websites, mobile apps, and media
                  distribution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Website assets (images, videos, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Mobile app content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Media streaming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Data Lakes and Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Store and analyze large amounts of structured and unstructured data. Ideal for big data analytics and
                  machine learning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Data lakes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Log analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Machine learning datasets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Archiving and Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Archive data for long-term retention and compliance. Meet regulatory requirements for data retention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Long-term data retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Digital preservation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to get started with AlgCloud Storage?
              </h2>
              <p className="text-white/80 md:text-xl">
                Create your first storage bucket in minutes and experience the power of AlgCloud Storage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link href="https://console.hostifer.me/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
              <Link href="/pricing-calculator">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                  Calculate Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Related Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enhance your storage solutions with these complementary services.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Link href="/services/compute" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-blue-600" />
                    AC2 - Compute
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Process and analyze data stored in AlgCloud Storage with virtual machines.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/services/database" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-blue-600" />
                    ADB - Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Store structured data in managed databases and use AlgCloud Storage for backups.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/services/security" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    ASS - Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Enhance the security of your storage with encryption, access control, and audit logging.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
