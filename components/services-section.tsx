"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cloud, Database, HardDrive, Layers, Server, Zap, Globe } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Server className="h-10 w-10 text-blue-600" />,
    title: "AC2",
    fullName: "AlgCloud Compute",
    description: "Scalable virtual machines for any workload with flexible configurations.",
    features: ["Custom CPU/RAM configurations", "SSD storage", "Pay-as-you-go pricing"],
    slug: "compute",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "AF",
    fullName: "AlgCloud Functions",
    description: "Serverless compute platform for event-driven applications.",
    features: ["Auto-scaling", "Pay per execution", "Multiple runtime environments"],
    slug: "functions",
  },
  {
    icon: <HardDrive className="h-10 w-10 text-blue-600" />,
    title: "AS3",
    fullName: "AlgCloud Storage",
    description: "Secure, durable, and scalable object storage for any amount of data.",
    features: ["99.999999999% durability", "Lifecycle policies", "Versioning"],
    slug: "storage",
  },
  {
    icon: <Database className="h-10 w-10 text-blue-600" />,
    title: "ADB",
    fullName: "AlgCloud Database",
    description: "Fully managed database services for MySQL, PostgreSQL, MongoDB, and more.",
    features: ["Automated backups", "High availability", "Scaling options"],
    slug: "database",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "ALB",
    fullName: "AlgCloud Load Balancer",
    description: "Distribute network traffic to improve application availability and fault tolerance.",
    features: ["HTTP/HTTPS routing", "Health checks", "SSL termination"],
    slug: "load-balancer",
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-600" />,
    title: "ACS",
    fullName: "AlgCloud Container Service",
    description: "Run and manage Docker containers with ease.",
    features: ["Integrated registry", "Auto-scaling", "Service discovery"],
    slug: "container-service",
  },
  {
    icon: <Cloud className="h-10 w-10 text-blue-600" />,
    title: "AKS",
    fullName: "AlgCloud Kubernetes Service",
    description: "Fully managed Kubernetes service for container orchestration.",
    features: ["Automated upgrades", "Integrated monitoring", "Role-based access control"],
    slug: "kubernetes",
  },
]

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Complete Cloud Infrastructure</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to build, deploy, and scale your applications in Algeria.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription>{service.fullName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={`/services/${service.slug}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: services.length * 0.1 }}
            className="flex items-center justify-center"
          >
            <Card className="h-full transition-all duration-200 hover:shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 border-dashed border-gray-300">
              <CardHeader>
                <div className="flex items-center justify-center h-full">
                  <CardTitle className="text-2xl text-gray-500">More Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <div className="text-4xl text-gray-400 mb-4">...</div>
                <p className="text-gray-500 text-center">Discover our full range of cloud services</p>
              </CardContent>
              <CardFooter>
                <Link href="/services" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Services
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
