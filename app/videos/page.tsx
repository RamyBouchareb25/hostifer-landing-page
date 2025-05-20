import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Video, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Video Tutorials | AlgCloud",
  description: "Learn how to use AlgCloud services with our video tutorials",
}

const videos = [
  {
    title: "Getting Started with AlgCloud",
    description: "A complete walkthrough of setting up your AlgCloud account and deploying your first resources.",
    duration: "15:32",
    category: "Beginner",
    slug: "getting-started",
  },
  {
    title: "Advanced Compute Configuration",
    description: "Learn how to optimize your compute instances for performance and cost efficiency.",
    duration: "23:45",
    category: "Intermediate",
    slug: "advanced-compute",
  },
  {
    title: "Working with Storage Buckets",
    description: "How to create, configure, and manage storage buckets for your applications.",
    duration: "18:20",
    category: "Beginner",
    slug: "storage-buckets",
  },
  {
    title: "Database Backup and Recovery",
    description: "Best practices for backing up and recovering your database instances.",
    duration: "27:15",
    category: "Intermediate",
    slug: "database-backup",
  },
  {
    title: "Serverless Functions Deep Dive",
    description: "Advanced techniques for building and deploying serverless applications.",
    duration: "31:40",
    category: "Advanced",
    slug: "serverless-functions",
  },
  {
    title: "Setting Up Load Balancers",
    description: "How to distribute traffic across multiple instances for improved availability.",
    duration: "20:10",
    category: "Intermediate",
    slug: "load-balancers",
  },
  {
    title: "Container Orchestration with Kubernetes",
    description: "Managing containerized applications with AlgCloud Kubernetes Service.",
    duration: "35:25",
    category: "Advanced",
    slug: "kubernetes",
  },
  {
    title: "Monitoring and Logging",
    description: "How to monitor your resources and analyze logs for better performance.",
    duration: "22:30",
    category: "Intermediate",
    slug: "monitoring-logging",
  },
  {
    title: "Security Best Practices",
    description: "Securing your cloud resources with AlgCloud security features.",
    duration: "28:15",
    category: "Intermediate",
    slug: "security",
  },
  {
    title: "Cost Optimization Strategies",
    description: "Tips and tricks for optimizing your cloud spending.",
    duration: "19:45",
    category: "Intermediate",
    slug: "cost-optimization",
  },
  {
    title: "Building a Highly Available Architecture",
    description: "Designing resilient applications that can withstand failures.",
    duration: "33:20",
    category: "Advanced",
    slug: "high-availability",
  },
  {
    title: "CI/CD Pipeline Integration",
    description: "Integrating AlgCloud with your CI/CD pipelines for automated deployments.",
    duration: "26:50",
    category: "Advanced",
    slug: "cicd-integration",
  },
]

const categories = ["All", "Beginner", "Intermediate", "Advanced"]

export default function VideosPage() {
  return (
      <>
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Video Tutorials</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Learn how to use AlgCloud services with our video tutorials.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input type="search" placeholder="Search videos..." className="pl-10 py-6 text-lg" />
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
              {videos.map((video) => (
                <Link key={video.slug} href={`/videos/${video.slug}`} className="group">
                  <Card className="h-full transition-all duration-200 group-hover:shadow-lg overflow-hidden">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center relative group-hover:bg-gray-200 transition-colors">
                      <Video className="h-12 w-12 text-gray-400" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{video.category}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 text-sm">{video.description}</p>
                      <div className="flex items-center mt-4 text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{video.duration}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="text-blue-600 group-hover:underline flex items-center">Watch Video</div>
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
