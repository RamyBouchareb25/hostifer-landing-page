import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Press | AlgCloud",
  description:
    "AlgCloud Press - Latest news, press releases, and media resources",
};

export default function PressPage() {
  return (
      <>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                AlgCloud Press
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Latest news, press releases, and media resources from AlgCloud
              </p>
            </div>

            <Tabs defaultValue="press-releases" className="mb-16">
              <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="press-releases">Press Releases</TabsTrigger>
                <TabsTrigger value="news-coverage">News Coverage</TabsTrigger>
                <TabsTrigger value="media-kit">Media Kit</TabsTrigger>
              </TabsList>
              <TabsContent value="press-releases">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "AlgCloud Announces New Region in Middle East",
                      date: "May 15, 2023",
                      description:
                        "AlgCloud expands global footprint with new region in the Middle East to meet growing customer demand.",
                      link: "#",
                    },
                    {
                      title: "AlgCloud Introduces Advanced AI Services",
                      date: "April 3, 2023",
                      description:
                        "New suite of AI services helps developers build intelligent applications with ease.",
                      link: "#",
                    },
                    {
                      title:
                        "AlgCloud Reports 200% Growth in Enterprise Customers",
                      date: "March 10, 2023",
                      description:
                        "Record growth driven by enterprise adoption of AlgCloud's secure and scalable cloud solutions.",
                      link: "#",
                    },
                    {
                      title:
                        "AlgCloud Partners with Leading Technology Providers",
                      date: "February 22, 2023",
                      description:
                        "Strategic partnerships expand AlgCloud's ecosystem and capabilities.",
                      link: "#",
                    },
                    {
                      title: "AlgCloud Achieves ISO 27001 Certification",
                      date: "January 18, 2023",
                      description:
                        "Certification demonstrates AlgCloud's commitment to information security management.",
                      link: "#",
                    },
                    {
                      title: "AlgCloud Launches Sustainability Initiative",
                      date: "December 5, 2022",
                      description:
                        "New program aims to achieve carbon neutrality across all operations by 2025.",
                      link: "#",
                    },
                  ].map((release, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{release.title}</CardTitle>
                        <CardDescription>{release.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">
                          {release.description}
                        </p>
                        <Button asChild variant="link" className="p-0">
                          <Link href={release.link}>
                            Read Full Release{" "}
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="news-coverage">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "AlgCloud Featured in Tech Today Magazine",
                      source: "Tech Today",
                      date: "June 2, 2023",
                      description:
                        "AlgCloud's innovative approach to cloud computing featured in leading technology publication.",
                      link: "#",
                    },
                    {
                      title:
                        "AlgCloud CEO Interview on Future of Cloud Computing",
                      source: "Cloud Insider",
                      date: "May 20, 2023",
                      description:
                        "In-depth interview discussing the future of cloud computing and AlgCloud's vision.",
                      link: "#",
                    },
                    {
                      title: "AlgCloud Named in 'Top Cloud Providers to Watch'",
                      source: "Business Tech Review",
                      date: "April 15, 2023",
                      description:
                        "AlgCloud recognized as one of the top emerging cloud providers in annual industry report.",
                      link: "#",
                    },
                    {
                      title: "How AlgCloud is Disrupting the Cloud Market",
                      source: "Digital Transformation Weekly",
                      date: "March 28, 2023",
                      description:
                        "Analysis of AlgCloud's impact on the competitive cloud services landscape.",
                      link: "#",
                    },
                    {
                      title:
                        "AlgCloud's Approach to Sustainable Cloud Computing",
                      source: "Green Tech Journal",
                      date: "February 10, 2023",
                      description:
                        "Feature on AlgCloud's initiatives to reduce environmental impact of cloud operations.",
                      link: "#",
                    },
                    {
                      title: "The Rise of AlgCloud in Enterprise Solutions",
                      source: "Enterprise Strategy",
                      date: "January 5, 2023",
                      description:
                        "Case study on AlgCloud's growing adoption among enterprise customers.",
                      link: "#",
                    },
                  ].map((article, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription>
                          {article.source} • {article.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-muted-foreground">
                          {article.description}
                        </p>
                        <Button asChild variant="link" className="p-0">
                          <Link href={article.link}>
                            Read Article <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="media-kit">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Brand Assets</CardTitle>
                      <CardDescription>
                        Download AlgCloud logos, icons, and brand guidelines
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6 grid grid-cols-2 gap-4">
                        <div className="relative h-32 rounded-lg border bg-background p-2">
                          <Image
                            src="/placeholder.svg?height=128&width=128&text=Logo"
                            alt="AlgCloud Logo"
                            width={128}
                            height={128}
                            className="mx-auto"
                          />
                        </div>
                        <div className="relative h-32 rounded-lg border bg-background p-2">
                          <Image
                            src="/placeholder.svg?height=128&width=128&text=Icon"
                            alt="AlgCloud Icon"
                            width={128}
                            height={128}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">
                          <Download className="mr-2 h-4 w-4" /> Download Brand
                          Kit
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Executive Bios & Photos</CardTitle>
                      <CardDescription>
                        Information about AlgCloud leadership team
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6 space-y-4">
                        {[
                          { name: "Jane Doe", title: "CEO & Co-founder" },
                          { name: "John Smith", title: "CTO & Co-founder" },
                          { name: "Sarah Johnson", title: "COO" },
                        ].map((executive, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-full">
                              <Image
                                src={`/placeholder.svg?height=64&width=64&text=${executive.name.charAt(
                                  0
                                )}`}
                                alt={executive.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">{executive.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {executive.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#">
                          <Download className="mr-2 h-4 w-4" /> Download
                          Executive Kit
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Media Contact</CardTitle>
                      <CardDescription>
                        For press inquiries, please contact our media relations
                        team
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p>
                          <strong>Email:</strong> press@algcloud.com
                        </p>
                        <p>
                          <strong>Phone:</strong> +1 (555) 123-4567
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Our media relations team is available Monday through
                          Friday, 9:00 AM to 5:00 PM EST.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="rounded-lg bg-muted p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
              <p className="mb-6 text-muted-foreground">
                Subscribe to our press release mailing list to receive the
                latest news and updates from AlgCloud.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
