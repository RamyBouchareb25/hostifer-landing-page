import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cloud, Database, HardDrive, Layers, Server, Zap, Globe, Shield, Network, Cpu } from "lucide-react"

export const metadata: Metadata = {
  title: "All Services | AlgCloud",
  description: "Explore all cloud services offered by AlgCloud",
}

const services = [
  {
    icon: <Server className="h-10 w-10 text-blue-600" />,
    title: "AC2",
    fullName: "AlgCloud Compute",
    description: "Scalable virtual machines for any workload with flexible configurations.",
    slug: "compute",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "AF",
    fullName: "AlgCloud Functions",
    description: "Serverless compute platform for event-driven applications.",
    slug: "functions",
  },
  {
    icon: <HardDrive className="h-10 w-10 text-blue-600" />,
    title: "AS3",
    fullName: "AlgCloud Storage",
    description: "Secure, durable, and scalable object storage for any amount of data.",
    slug: "storage",
  },
  {
    icon: <Database className="h-10 w-10 text-blue-600" />,
    title: "ADB",
    fullName: "AlgCloud Database",
    description: "Fully managed database services for MySQL, PostgreSQL, MongoDB, and more.",
    slug: "database",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "ALB",
    fullName: "AlgCloud Load Balancer",
    description: "Distribute network traffic to improve application availability and fault tolerance.",
    slug: "load-balancer",
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-600" />,
    title: "ACS",
    fullName: "AlgCloud Container Service",
    description: "Run and manage Docker containers with ease.",
    slug: "container-service",
  },
  {
    icon: <Cloud className="h-10 w-10 text-blue-600" />,
    title: "AKS",
    fullName: "AlgCloud Kubernetes Service",
    description: "Fully managed Kubernetes service for container orchestration.",
    slug: "kubernetes",
  },
  {
    icon: <Network className="h-10 w-10 text-blue-600" />,
    title: "AVN",
    fullName: "AlgCloud Virtual Network",
    description: "Isolated cloud networks with complete control over your IP address space.",
    slug: "virtual-network",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "ASS",
    fullName: "AlgCloud Security Services",
    description: "Comprehensive security solutions to protect your cloud resources.",
    slug: "security",
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-600" />,
    title: "AGP",
    fullName: "AlgCloud GPU",
    description: "GPU-accelerated computing instances for AI, ML, and high-performance workloads.",
    slug: "gpu",
  },
]

export default function ServicesPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">All Services</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our comprehensive suite of cloud services designed for Algerian businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.slug} className="h-full transition-all duration-200 hover:shadow-lg">
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
                <p className="text-gray-500">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/services/${service.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
