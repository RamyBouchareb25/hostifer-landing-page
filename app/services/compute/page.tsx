import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, HardDrive, Globe, Network } from "lucide-react"

export const metadata: Metadata = {
  title: "AC2 - AlgCloud Compute | AlgCloud",
  description: "Scalable virtual machines for any workload with flexible configurations",
}

export default function ComputeServicePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AC2 - AlgCloud Compute
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Scalable virtual machines for any workload with flexible configurations. Deploy in seconds and only
                  pay for what you use.
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
                alt="AlgCloud Compute Service"
                height={400}
                width={600}
                className="mx-auto rounded-lg shadow-2xl object-cover"
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
                Everything you need for reliable, high-performance computing in the cloud.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Flexible Configurations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Choose from a wide range of CPU, memory, and storage configurations to match your workload
                  requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Powered by the latest Intel and AMD processors, with NVMe SSD storage for lightning-fast performance.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Secure & Isolated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Each instance runs in an isolated environment with dedicated resources and comprehensive security
                  controls.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instance Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Instance Types</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the right instance type for your workload.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="compute">Compute Optimized</TabsTrigger>
                <TabsTrigger value="memory">Memory Optimized</TabsTrigger>
              </TabsList>
              <TabsContent value="standard" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Standard Instances</CardTitle>
                    <CardDescription>Balanced CPU-to-memory ratio for general-purpose workloads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4 font-medium">
                        <div>Instance</div>
                        <div>vCPUs</div>
                        <div>Memory</div>
                        <div>Storage</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.small</div>
                        <div>2</div>
                        <div>4 GB</div>
                        <div>80 GB</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.medium</div>
                        <div>4</div>
                        <div>8 GB</div>
                        <div>160 GB</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.large</div>
                        <div>8</div>
                        <div>16 GB</div>
                        <div>320 GB</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">
                      Standard instances are ideal for web servers, small databases, and development environments.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="compute" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Compute Optimized Instances</CardTitle>
                    <CardDescription>High CPU-to-memory ratio for compute-intensive workloads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4 font-medium">
                        <div>Instance</div>
                        <div>vCPUs</div>
                        <div>Memory</div>
                        <div>Storage</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.c.large</div>
                        <div>8</div>
                        <div>8 GB</div>
                        <div>160 GB</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.c.xlarge</div>
                        <div>16</div>
                        <div>16 GB</div>
                        <div>320 GB</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.c.2xlarge</div>
                        <div>32</div>
                        <div>32 GB</div>
                        <div>640 GB</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">
                      Compute optimized instances are ideal for batch processing, media transcoding, and high
                      performance computing.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="memory" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Memory Optimized Instances</CardTitle>
                    <CardDescription>High memory-to-CPU ratio for memory-intensive workloads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4 font-medium">
                        <div>Instance</div>
                        <div>vCPUs</div>
                        <div>Memory</div>
                        <div>Storage</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.m.large</div>
                        <div>4</div>
                        <div>16 GB</div>
                        <div>160 GB</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.m.xlarge</div>
                        <div>8</div>
                        <div>32 GB</div>
                        <div>320 GB</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 border-t pt-4">
                        <div>ac2.m.2xlarge</div>
                        <div>16</div>
                        <div>64 GB</div>
                        <div>640 GB</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">
                      Memory optimized instances are ideal for in-memory databases, real-time big data analytics, and
                      high-performance caching.
                    </p>
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
                AC2 instances are versatile and can be used for a wide range of applications.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Web Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Host websites, content management systems, and e-commerce platforms with reliable performance and
                  scalability.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>WordPress, Drupal, and other CMS platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>E-commerce solutions like Magento and PrestaShop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom web applications built on modern frameworks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Business Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Run your critical business applications in a secure, reliable environment with the performance you
                  need.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>ERP systems like Odoo and SAP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>CRM applications like SuiteCRM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Collaboration tools and productivity suites</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Development & Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Create development, testing, and staging environments that mirror your production setup.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>CI/CD pipelines with Jenkins, GitLab, or GitHub Actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Development environments for distributed teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Automated testing and quality assurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Host databases with the performance and reliability your applications demand.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Relational databases like MySQL and PostgreSQL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>NoSQL databases like MongoDB and Redis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Time-series databases for monitoring and analytics</span>
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
                Ready to get started with AlgCloud Compute?
              </h2>
              <p className="text-white/80 md:text-xl">
                Deploy your first instance in minutes and experience the power of AlgCloud Compute.
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
                Enhance your compute instances with these complementary services.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Link href="/services/storage" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HardDrive className="h-5 w-5 text-blue-600" />
                    AS3 - Storage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Add scalable object storage to your compute instances for backups, media, and more.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/services/load-balancer" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    ALB - Load Balancer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Distribute traffic across multiple compute instances for improved availability and performance.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/services/virtual-network" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-blue-600" />
                    AVN - Virtual Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Create isolated networks for your compute instances with complete control over IP addressing.
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
