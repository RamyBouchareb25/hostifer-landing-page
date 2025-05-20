import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Help Guides | AlgCloud",
  description: "Comprehensive guides for using AlgCloud services",
}

const guides = [
  {
    title: "Getting Started with AlgCloud",
    description: "Learn the basics of AlgCloud and set up your first resources.",
    category: "Beginner",
    slug: "getting-started",
  },
  {
    title: "Compute Instances",
    description: "Everything you need to know about creating and managing compute instances.",
    category: "Compute",
    slug: "compute",
  },
  {
    title: "Storage Solutions",
    description: "Learn about object storage, block storage, and file storage options.",
    category: "Storage",
    slug: "storage",
  },
  {
    title: "Database Services",
    description: "Set up and manage your database services for optimal performance.",
    category: "Database",
    slug: "databases",
  },
  {
    title: "Networking Basics",
    description: "Understanding virtual networks, subnets, and IP addressing in AlgCloud.",
    category: "Networking",
    slug: "networking-basics",
  },
  {
    title: "Load Balancing",
    description: "Configure load balancers to distribute traffic across your instances.",
    category: "Networking",
    slug: "load-balancing",
  },
  {
    title: "Serverless Functions",
    description: "Build and deploy serverless applications with AlgCloud Functions.",
    category: "Serverless",
    slug: "serverless-functions",
  },
  {
    title: "Container Services",
    description: "Deploy and manage Docker containers with AlgCloud Container Service.",
    category: "Containers",
    slug: "container-services",
  },
  {
    title: "Kubernetes Clusters",
    description: "Create and manage Kubernetes clusters for container orchestration.",
    category: "Kubernetes",
    slug: "kubernetes-clusters",
  },
  {
    title: "Security Best Practices",
    description: "Secure your cloud resources with AlgCloud security features.",
    category: "Security",
    slug: "security-best-practices",
  },
  {
    title: "Monitoring and Logging",
    description: "Monitor your resources and analyze logs for better performance.",
    category: "Operations",
    slug: "monitoring-logging",
  },
  {
    title: "Billing and Cost Management",
    description: "Understand your bill and optimize costs for your cloud resources.",
    category: "Billing",
    slug: "billing-cost-management",
  },
]

const categories = [
  "All",
  "Beginner",
  "Compute",
  "Storage",
  "Database",
  "Networking",
  "Serverless",
  "Containers",
  "Kubernetes",
  "Security",
  "Operations",
  "Billing",
]

export default function GuidesPage() {
  return (
      <>
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Guides & Tutorials</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Find helpful guides and tutorials to get the most out of our platform.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input type="search" placeholder="Search guides..." className="pl-10 py-6 text-lg" />
              </div>
            </div>


            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-2 min-w-max p-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/help/guides/${guide.slug}`} className="group">
                  <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-600" />
                          {guide.title}
                        </CardTitle>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{guide.category}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">{guide.description}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="text-blue-600 group-hover:underline flex items-center">
                        Read guide <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
  )
}
