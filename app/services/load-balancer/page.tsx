import type { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Network, Shield, Zap, BarChart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "ALB Load Balancer | AlgCloud",
  description: "Distribute traffic across multiple servers with our fully managed load balancing service.",
}

export default function LoadBalancerServicePage() {
  return (

      <>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Load Balancer</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ALB: Advanced Load Balancer
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Distribute traffic, ensure high availability, and scale your applications with our fully managed load
                  balancing service.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <a href="#pricing">Get Started</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/docs/load-balancer">Documentation</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=ALB Load Balancer"
                    alt="ALB Load Balancer Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Powerful Load Balancing Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  ALB provides advanced traffic distribution, health checks, and security features to ensure your
                  applications are always available and performing optimally.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Network className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Intelligent Routing</h3>
                  <p className="text-gray-500">
                    Route traffic based on content, path, host, HTTP headers, and more with advanced routing rules.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Shield className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">SSL/TLS Termination</h3>
                  <p className="text-gray-500">
                    Offload SSL/TLS encryption and decryption to the load balancer to reduce backend server load.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Zap className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Auto Scaling</h3>
                  <p className="text-gray-500">
                    Automatically adjust capacity based on traffic patterns to handle varying loads efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Health Checks</h3>
                  <p className="text-gray-500">
                    Continuously monitor backend health and automatically route traffic away from unhealthy instances.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <BarChart className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Detailed Metrics</h3>
                  <p className="text-gray-500">
                    Access comprehensive metrics and logs for traffic patterns, latency, and error rates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <ArrowRight className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">WebSocket Support</h3>
                  <p className="text-gray-500">
                    Maintain persistent connections for real-time applications with full WebSocket support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Load Balancer Types Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Load Balancer Types
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Choose the Right Load Balancer for Your Workload
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  ALB offers different types of load balancers to meet your specific application requirements.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <Tabs defaultValue="application" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-3xl mx-auto">
                  <TabsTrigger value="application">Application</TabsTrigger>
                  <TabsTrigger value="network">Network</TabsTrigger>
                  <TabsTrigger value="global">Global</TabsTrigger>
                </TabsList>
                <div className="mt-8">
                  <TabsContent value="application" className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold">Application Load Balancer</h3>
                        <p className="text-gray-500 mt-2">
                          Operates at the application layer (Layer 7) and is ideal for HTTP/HTTPS traffic. It provides
                          advanced routing capabilities based on content, headers, and paths.
                        </p>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Path-based routing</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Host-based routing</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>HTTP/2 and WebSocket support</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>SSL/TLS termination</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Content-based routing</span>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button asChild>
                            <a href="#pricing">Get Started</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="network" className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold">Network Load Balancer</h3>
                        <p className="text-gray-500 mt-2">
                          Operates at the transport layer (Layer 4) and is designed for handling TCP, UDP, and TLS
                          traffic with ultra-low latency and high throughput.
                        </p>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>TCP/UDP/TLS protocol support</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Static IP addresses</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Ultra-low latency</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Millions of requests per second</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Connection preservation during failover</span>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button asChild>
                            <a href="#pricing">Get Started</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="global" className="space-y-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold">Global Load Balancer</h3>
                        <p className="text-gray-500 mt-2">
                          Provides high availability and fast failover across multiple geographic regions, ensuring your
                          applications are always accessible.
                        </p>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Multi-region deployment</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Fast failover</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Global traffic management</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>Low-latency routing</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span>DDoS protection</span>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button asChild>
                            <a href="#pricing">Get Started</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      </>
  )
}
