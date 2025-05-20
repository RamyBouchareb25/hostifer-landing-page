import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export const metadata: Metadata = {
  title: "Blog | AlgCloud",
  description:
    "AlgCloud Blog - Insights, tutorials, and news about cloud computing and AlgCloud services",
};

const featuredPosts = [
  {
    id: "1",
    title: "Optimizing Cloud Costs: A Comprehensive Guide",
    excerpt:
      "Learn how to effectively manage and optimize your cloud spending with these proven strategies.",
    date: "June 10, 2023",
    readTime: "8 min read",
    author: "Jane Doe",
    category: "Cloud Optimization",
    image: "/placeholder.svg?height=400&width=800&text=Featured Post",
  },
  {
    id: "2",
    title: "Serverless Architecture: Benefits and Use Cases",
    excerpt:
      "Explore the advantages of serverless computing and discover ideal scenarios for implementation.",
    date: "May 28, 2023",
    readTime: "6 min read",
    author: "John Smith",
    category: "Serverless",
    image: "/placeholder.svg?height=400&width=800&text=Featured Post",
  },
  {
    id: "3",
    title: "Securing Your Cloud Infrastructure: Best Practices",
    excerpt:
      "Essential security measures to protect your cloud resources from common threats and vulnerabilities.",
    date: "May 15, 2023",
    readTime: "10 min read",
    author: "Sarah Johnson",
    category: "Security",
    image: "/placeholder.svg?height=400&width=800&text=Featured Post",
  },
];

const recentPosts = [
  {
    id: "4",
    title: "Introduction to Containerization with Docker",
    excerpt:
      "A beginner's guide to understanding and implementing containerization using Docker.",
    date: "June 5, 2023",
    readTime: "7 min read",
    author: "Michael Brown",
    category: "Containers",
    image: "/placeholder.svg?height=200&width=300&text=Recent Post",
  },
  {
    id: "5",
    title: "Implementing CI/CD Pipelines for Cloud Applications",
    excerpt:
      "Step-by-step guide to setting up continuous integration and deployment for your cloud applications.",
    date: "June 1, 2023",
    readTime: "9 min read",
    author: "Emily Chen",
    category: "DevOps",
    image: "/placeholder.svg?height=200&width=300&text=Recent Post",
  },
  {
    id: "6",
    title: "Database Migration to the Cloud: Strategies and Challenges",
    excerpt:
      "Learn how to successfully migrate your databases to the cloud while avoiding common pitfalls.",
    date: "May 25, 2023",
    readTime: "8 min read",
    author: "David Wilson",
    category: "Databases",
    image: "/placeholder.svg?height=200&width=300&text=Recent Post",
  },
  {
    id: "7",
    title: "Monitoring Cloud Applications: Tools and Techniques",
    excerpt:
      "Comprehensive overview of monitoring solutions for cloud-based applications.",
    date: "May 20, 2023",
    readTime: "6 min read",
    author: "Lisa Taylor",
    category: "Monitoring",
    image: "/placeholder.svg?height=200&width=300&text=Recent Post",
  },
  {
    id: "8",
    title: "Scaling Microservices in the Cloud",
    excerpt:
      "Strategies for effectively scaling microservices architecture in cloud environments.",
    date: "May 18, 2023",
    readTime: "7 min read",
    author: "Robert Johnson",
    category: "Microservices",
    image: "/placeholder.svg?height=200&width=300&text=Recent Post",
  },
  {
    id: "9",
    title: "Cloud Compliance and Governance",
    excerpt:
      "Understanding regulatory requirements and implementing effective governance in the cloud.",
    date: "May 12, 2023",
    readTime: "9 min read",
    author: "Amanda Lee",
    category: "Compliance",
    image: "/placeholder.svg?height=200&width=300&text=Recent Post",
  },
];

const categories = [
  "All",
  "Cloud Optimization",
  "Serverless",
  "Security",
  "Containers",
  "DevOps",
  "Databases",
  "Monitoring",
  "Microservices",
  "Compliance",
];

export default function BlogPage() {
  return (

      <>
        {/* Blog Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                AlgCloud Blog
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Insights, tutorials, and news about cloud computing and AlgCloud
                services
              </p>
            </div>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full max-w-md">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pr-10"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {categories.slice(0, 5).map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  More +
                </Button>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold">Featured Articles</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" /> {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative h-6 w-6 overflow-hidden rounded-full">
                          <Image
                            src={`/placeholder.svg?height=24&width=24&text=${post.author.charAt(
                              0
                            )}`}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs">{post.author}</span>
                      </div>
                      <Button asChild variant="link" size="sm" className="p-0">
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold">Recent Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="flex flex-col">
                    <div className="relative h-40 w-full">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" /> {post.date}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative h-6 w-6 overflow-hidden rounded-full">
                          <Image
                            src={`/placeholder.svg?height=24&width=24&text=${post.author.charAt(
                              0
                            )}`}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs">{post.author}</span>
                      </div>
                      <Button asChild variant="link" size="sm" className="p-0">
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold">Topics</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="rounded-full border border-input bg-background px-4 py-2 text-sm hover:bg-muted"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-muted p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Subscribe to Our Newsletter
              </h2>
              <p className="mb-6 text-muted-foreground">
                Get the latest articles, tutorials, and news delivered to your
                inbox.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
