import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Container Service (ACS) | AlgCloud",
  description: "AlgCloud Container Service (ACS) - Fully managed container orchestration service",
}

export default function ContainerServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          AlgCloud Container Service (ACS)
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Deploy and manage containerized applications with our fully managed container orchestration service
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold">Simplify Container Management</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            AlgCloud Container Service (ACS) provides a fully managed environment for deploying, managing, and scaling
            containerized applications using Docker containers.
          </p>
          <div className="space-y-3">
            {[
              "No infrastructure management required",
              "Automatic scaling based on demand",
              "Integrated with AlgCloud monitoring and logging",
              "Seamless deployment from container registries",
              "Built-in load balancing and service discovery",
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
              alt="Container Service Visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Build & Push",
              description: "Package your application in a Docker container and push it to a container registry.",
              icon: <Server className="h-10 w-10 text-primary" />,
            },
            {
              title: "Deploy",
              description: "Deploy your containerized application to ACS with a few clicks or API calls.",
              icon: <Server className="h-10 w-10 text-primary" />,
            },
            {
              title: "Scale & Manage",
              description:
                "ACS automatically scales your containers based on demand and handles all the infrastructure management.",
              icon: <Server className="h-10 w-10 text-primary" />,
            },
          ].map((step, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-2">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{step.description}</p>
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
              description: "Deploy and manage microservices-based applications with ease.",
            },
            {
              title: "CI/CD Pipelines",
              description: "Integrate with your CI/CD pipelines for automated deployments.",
            },
            {
              title: "Web Applications",
              description: "Host scalable web applications with automatic load balancing.",
            },
            {
              title: "API Services",
              description: "Deploy API services with high availability and scalability.",
            },
            {
              title: "Batch Processing",
              description: "Run batch processing jobs in isolated containers.",
            },
            {
              title: "Development & Testing",
              description: "Create consistent development and testing environments.",
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
        <h2 className="mb-4 text-2xl font-bold">Ready to get started with ACS?</h2>
        <p className="mb-6 text-muted-foreground">
          Deploy your first container in minutes and experience the simplicity of managed container services.
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
