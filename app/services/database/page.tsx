import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Database, Shield, Zap, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "ADB Database Service | AlgCloud",
  description: "Fully managed database service with high availability, automatic backups, and scaling options.",
}

export default function DatabaseServicePage() {
  return (

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Database Service
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ADB: Managed Database Service
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Focus on your applications while we handle database management, scaling, backups, and high
                  availability.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <a href="#pricing">Get Started</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="/docs/database">Documentation</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=ADB Database"
                    alt="ADB Database Service"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Everything You Need in a Database Service
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  ADB provides fully managed database services with multiple engines, automatic scaling, and
                  enterprise-grade security.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Database className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Multiple Engines</h3>
                  <p className="text-gray-500">
                    Choose from PostgreSQL, MySQL, MongoDB, Redis, and more to match your application needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Shield className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Automatic Backups</h3>
                  <p className="text-gray-500">
                    Daily automated backups with point-in-time recovery to protect your valuable data.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Zap className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">High Performance</h3>
                  <p className="text-gray-500">
                    Optimized configurations for maximum throughput and minimal latency for your workloads.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">High Availability</h3>
                  <p className="text-gray-500">
                    Multi-AZ deployments with automatic failover to ensure your database is always accessible.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Monitoring & Alerts</h3>
                  <p className="text-gray-500">
                    Comprehensive monitoring dashboards and customizable alerts to keep your database healthy.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <ArrowRight className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold">Easy Scaling</h3>
                  <p className="text-gray-500">
                    Scale your database vertically or horizontally with just a few clicks as your needs grow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Database Types Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Database Types
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Choose the Right Database for Your Workload
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  ADB supports a wide range of database engines to meet your specific application requirements.
                </p>
              </div>
            </div>
            <div className="mx-auto py-12">
              <Tabs defaultValue="relational" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
                  <TabsTrigger value="relational">Relational</TabsTrigger>
                  <TabsTrigger value="nosql">NoSQL</TabsTrigger>
                  <TabsTrigger value="inmemory">In-Memory</TabsTrigger>
                  <TabsTrigger value="timeseries">Time Series</TabsTrigger>
                </TabsList>
                <div className="mt-8">
                  <TabsContent value="relational" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">PostgreSQL</h3>
                          <p className="text-gray-500 mt-2">
                            Advanced open-source relational database with strong data integrity, extensibility, and SQL
                            compliance.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Versions 12, 13, 14, and 15</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>PostGIS extension support</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Read replicas</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">MySQL</h3>
                          <p className="text-gray-500 mt-2">
                            The world&apos;s most popular open-source relational database, known for its reliability and ease
                            of use.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Versions 5.7 and 8.0</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>InnoDB storage engine</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Multi-source replication</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="nosql" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">MongoDB</h3>
                          <p className="text-gray-500 mt-2">
                            Document database designed for ease of development and scaling with flexible schema design.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Versions 4.4, 5.0, and 6.0</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Sharded clusters</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Atlas compatibility</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">Cassandra</h3>
                          <p className="text-gray-500 mt-2">
                            Highly scalable, high-performance distributed database designed for handling large amounts
                            of data.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Versions 3.11 and 4.0</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Multi-region clusters</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>CQL support</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="inmemory" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">Redis</h3>
                          <p className="text-gray-500 mt-2">
                            In-memory data structure store used as a database, cache, message broker, and streaming
                            engine.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Versions 6.2 and 7.0</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Cluster mode</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Redis Modules support</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">Memcached</h3>
                          <p className="text-gray-500 mt-2">
                            High-performance, distributed memory object caching system designed for speeding up dynamic
                            web applications.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Latest stable version</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Multi-node clusters</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Auto discovery</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="timeseries" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">InfluxDB</h3>
                          <p className="text-gray-500 mt-2">
                            Purpose-built time series database for fast, high-availability storage and retrieval of time
                            series data.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Versions 2.x and 3.x</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Flux query language</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Continuous queries</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">TimescaleDB</h3>
                          <p className="text-gray-500 mt-2">
                            PostgreSQL extension optimized for time-series data with full SQL support and scalability.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Latest version</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Hypertables</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Continuous aggregates</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Pay only for what you use with no hidden fees or long-term commitments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-2xl font-bold">Standard</h3>
                    <div className="space-y-1">
                      <p className="text-5xl font-bold">$15</p>
                      <p className="text-gray-500">per month</p>
                    </div>
                    <p className="text-gray-500">Perfect for small applications and development environments.</p>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>1 vCPU</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>2 GB RAM</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>10 GB Storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Daily Backups</span>
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-600 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                      Most Popular
                    </div>
                    <h3 className="text-2xl font-bold">Professional</h3>
                    <div className="space-y-1">
                      <p className="text-5xl font-bold">$45</p>
                      <p className="text-gray-500">per month</p>
                    </div>
                    <p className="text-gray-500">Ideal for production applications with moderate traffic.</p>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>2 vCPU</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>8 GB RAM</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>50 GB Storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Hourly Backups</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>High Availability</span>
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <div className="space-y-1">
                      <p className="text-5xl font-bold">$120</p>
                      <p className="text-gray-500">per month</p>
                    </div>
                    <p className="text-gray-500">For high-traffic applications with demanding workloads.</p>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>4 vCPU</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>16 GB RAM</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>200 GB Storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Continuous Backups</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Multi-AZ Deployment</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Dedicated Support</span>
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-gray-500">
                Need a custom configuration?{" "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Contact us
                </Link>{" "}
                for custom pricing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Find answers to common questions about our database service.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">How do I migrate my existing database to ADB?</h3>
                  <p className="text-gray-500 mt-2">
                    We provide migration tools and step-by-step guides to help you migrate your existing database to ADB
                    with minimal downtime. Our support team can also assist with complex migrations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Can I connect to my database from outside AlgCloud?</h3>
                  <p className="text-gray-500 mt-2">
                    Yes, you can connect to your ADB database from any application or service, whether it&apos;s hosted on
                    AlgCloud or elsewhere. You&apos;ll need to configure the appropriate security groups and network
                    settings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">How does ADB handle database scaling?</h3>
                  <p className="text-gray-500 mt-2">
                    ADB allows you to scale your database vertically (by increasing CPU and RAM) or horizontally (by
                    adding read replicas) with minimal downtime. You can schedule scaling operations during maintenance
                    windows or perform them on-demand.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">What backup options are available?</h3>
                  <p className="text-gray-500 mt-2">
                    ADB provides automated daily backups with a retention period of 7 days by default. You can also
                    create manual snapshots at any time, which are retained until you delete them. For enterprise plans,
                    we offer continuous backups with point-in-time recovery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">How does ADB ensure high availability?</h3>
                  <p className="text-gray-500 mt-2">
                    ADB offers high availability through multi-AZ deployments, where your database is replicated across
                    multiple availability zones. In case of an infrastructure failure, ADB automatically fails over to
                    the standby replica with minimal disruption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed">
                  Create your first database in minutes and focus on building your application, not managing
                  infrastructure.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild variant="secondary">
                  <a href="#pricing">Create Database</a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent text-white hover:bg-white/10">
                  <a href="/docs/database">Read Documentation</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
