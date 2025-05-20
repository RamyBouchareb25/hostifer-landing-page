import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Kubernetes Service (AKS) | AlgCloud",
  description: "AlgCloud Kubernetes Service (AKS) - Fully managed Kubernetes service for container orchestration",
}

export default function KubernetesServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          AlgCloud Kubernetes Service (AKS)
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Simplify Kubernetes deployment, management, and operations with our fully managed Kubernetes service
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold">Enterprise-Grade Kubernetes</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            AlgCloud Kubernetes Service (AKS) provides a fully managed Kubernetes service that simplifies the
            deployment, management, and operations of Kubernetes for containerized applications.
          </p>
          <div className="space-y-3">
            {[
              "Zero-maintenance Kubernetes control plane",
              "Automated upgrades and patching",
              "Integrated monitoring and logging",
              "Advanced networking with virtual networks",
              "Role-based access control (RBAC)",
              "Horizontal pod autoscaling",
            ].map((feature) => (
              <div key={feature} className="flex items-start">
                <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link href="/pricing-calculator">
                Calculate Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-[400px] overflow-hidden rounded-lg border shadow-lg">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Kubernetes Service Visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Key Capabilities</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Simplified Management",
              description: "Reduce operational complexity with fully managed Kubernetes clusters.",
              icon: <Server className="h-10 w-10 text-primary" />,
            },
            {
              title: "Enterprise Security",
              description:
                "Secure your applications with integrated authentication, authorization, and network policies.",
              icon: <Server className="h-10 w-10 text-primary" />,
            },
            {
              title: "Scalable Infrastructure",
              description: "Scale your applications and infrastructure seamlessly to meet changing demands.",
              icon: <Server className="h-10 w-10 text-primary" />,
            },
          ].map((capability, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-2">{capability.icon}</div>
                <CardTitle>{capability.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Use Cases</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Microservices Architecture",
              description: "Deploy complex microservices architectures with advanced service discovery and networking.",
            },
            {
              title: "CI/CD Pipelines",
              description: "Integrate with your CI/CD pipelines for automated deployments to Kubernetes.",
            },
            {
              title: "Multi-Cloud Applications",
              description: "Build applications that can run consistently across multiple cloud environments.",
            },
            {
              title: "Stateful Applications",
              description: "Run stateful applications with persistent storage and data management.",
            },
            {
              title: "Machine Learning Workloads",
              description: "Deploy and scale machine learning workloads efficiently.",
            },
            {
              title: "High-Performance Computing",
              description: "Run high-performance computing workloads with GPU support.",
            },
          ].map((useCase, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to get started with AKS?</h2>
        <p className="mb-6 text-muted-foreground">
          Deploy your first Kubernetes cluster in minutes and experience the power of managed Kubernetes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/pricing-calculator">Calculate Pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/docs">View Documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
