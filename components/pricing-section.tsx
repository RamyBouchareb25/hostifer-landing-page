"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pay Only For What You Use</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Flexible pricing options for businesses of all sizes. All prices in Algerian Dinar (DZD).
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="compute" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-xl">
                <TabsTrigger value="compute">Compute</TabsTrigger>
                <TabsTrigger value="storage">Storage</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="serverless">Serverless</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="compute" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AC2 Standard Instances</CardTitle>
                    <CardDescription>General purpose virtual machines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>vCPU</span>
                        <span className="font-medium">150 DZD / vCPU / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Memory</span>
                        <span className="font-medium">75 DZD / GB / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>SSD Storage</span>
                        <span className="font-medium">1,500 DZD / GB / month</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Popular configurations:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>2 vCPU, 4 GB RAM</span>
                          <span className="font-medium">~25,000 DZD / month</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>4 vCPU, 8 GB RAM</span>
                          <span className="font-medium">~50,000 DZD / month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AC2 Performance Instances</CardTitle>
                    <CardDescription>High-performance computing instances</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>vCPU</span>
                        <span className="font-medium">250 DZD / vCPU / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Memory</span>
                        <span className="font-medium">125 DZD / GB / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>NVMe Storage</span>
                        <span className="font-medium">2,500 DZD / GB / month</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Popular configurations:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>4 vCPU, 16 GB RAM</span>
                          <span className="font-medium">~75,000 DZD / month</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>8 vCPU, 32 GB RAM</span>
                          <span className="font-medium">~150,000 DZD / month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800">
                    All compute instances include free inbound data transfer. Outbound data transfer is charged at 500
                    DZD per GB after the first 100 GB per month.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AS3 Standard Storage</CardTitle>
                    <CardDescription>Durable object storage for any data type</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>First 50 TB / month</span>
                        <span className="font-medium">400 DZD / GB / month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Next 450 TB / month</span>
                        <span className="font-medium">350 DZD / GB / month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Over 500 TB / month</span>
                        <span className="font-medium">300 DZD / GB / month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Data retrieval</span>
                        <span className="font-medium">50 DZD / GB</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AS3 Archive Storage</CardTitle>
                    <CardDescription>Low-cost storage for rarely accessed data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Storage</span>
                        <span className="font-medium">100 DZD / GB / month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Standard retrieval</span>
                        <span className="font-medium">100 DZD / GB</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Expedited retrieval</span>
                        <span className="font-medium">300 DZD / GB</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Minimum storage duration</span>
                        <span className="font-medium">90 days</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>ADB MySQL</CardTitle>
                    <CardDescription>Fully managed MySQL database service</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>vCPU</span>
                        <span className="font-medium">200 DZD / vCPU / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Memory</span>
                        <span className="font-medium">100 DZD / GB / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Storage</span>
                        <span className="font-medium">2,000 DZD / GB / month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Backup storage</span>
                        <span className="font-medium">500 DZD / GB / month</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ADB PostgreSQL</CardTitle>
                    <CardDescription>Fully managed PostgreSQL database service</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>vCPU</span>
                        <span className="font-medium">220 DZD / vCPU / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Memory</span>
                        <span className="font-medium">110 DZD / GB / hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Storage</span>
                        <span className="font-medium">2,200 DZD / GB / month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Backup storage</span>
                        <span className="font-medium">550 DZD / GB / month</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="serverless" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AF Functions</CardTitle>
                    <CardDescription>Event-driven serverless compute</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Requests</span>
                        <span className="font-medium">0.50 DZD / 1,000 requests</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Compute time</span>
                        <span className="font-medium">0.10 DZD / GB-second</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Free tier</span>
                        <span className="font-medium">1M requests/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Free compute</span>
                        <span className="font-medium">400,000 GB-seconds/month</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ALB Load Balancer</CardTitle>
                    <CardDescription>Application load balancing service</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Load balancer usage</span>
                        <span className="font-medium">5,000 DZD / load balancer / month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Data processed</span>
                        <span className="font-medium">300 DZD / GB</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rule evaluations</span>
                        <span className="font-medium">0.10 DZD / 1,000 evaluations</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/pricing-calculator" className="w-full">
                      <Button className="w-full">Calculate Your Price</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500">
            All prices are estimates. Actual costs may vary based on usage patterns and configurations.
          </p>
          <div className="mt-4">
            <Link href="/pricing-calculator">
              <Button variant="outline">View Full Pricing Calculator</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
