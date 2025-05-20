import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Partners | AlgCloud",
  description:
    "AlgCloud Partners - Join our ecosystem of technology and solution partners",
};

export default function PartnersPage() {
  return (
      <>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                AlgCloud Partners
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Join our ecosystem of technology and solution partners to
                accelerate innovation and deliver exceptional cloud solutions
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Partner Programs
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Technology Partners",
                    description:
                      "Integrate your technology with AlgCloud to create joint solutions that solve customer challenges.",
                    cta: "Become a Technology Partner",
                  },
                  {
                    title: "Solution Partners",
                    description:
                      "Build, market, and sell solutions based on AlgCloud to help customers accelerate their digital transformation.",
                    cta: "Become a Solution Partner",
                  },
                  {
                    title: "Consulting Partners",
                    description:
                      "Provide professional services to help customers design, architect, build, migrate, and manage their workloads on AlgCloud.",
                    cta: "Become a Consulting Partner",
                  },
                ].map((program, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="mb-4">
                        {program.description}
                      </CardDescription>
                      <Button asChild variant="outline" size="sm">
                        <Link href="/contact">
                          {program.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Featured Partners
              </h2>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <div className="relative h-20 w-32 overflow-hidden grayscale transition-all hover:grayscale-0">
                      <Image
                        src={`/placeholder.svg?height=80&width=128&text=Partner ${
                          index + 1
                        }`}
                        alt={`Partner ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Partner Success Stories
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "TechSolutions Inc.",
                    description:
                      "How TechSolutions leveraged AlgCloud to deliver a scalable SaaS platform for their customers.",
                    image:
                      "/placeholder.svg?height=200&width=300&text=Case Study 1",
                  },
                  {
                    title: "DataWorks Corp.",
                    description:
                      "DataWorks built a high-performance data analytics platform on AlgCloud, reducing costs by 40%.",
                    image:
                      "/placeholder.svg?height=200&width=300&text=Case Study 2",
                  },
                  {
                    title: "CloudNative Systems",
                    description:
                      "CloudNative Systems migrated 100+ enterprise clients to AlgCloud, improving performance and reliability.",
                    image:
                      "/placeholder.svg?height=200&width=300&text=Case Study 3",
                  },
                ].map((story, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{story.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{story.description}</CardDescription>
                      <Button asChild variant="link" className="mt-2 p-0">
                        <Link href="#">
                          Read Case Study{" "}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-muted p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Become an AlgCloud Partner
              </h2>
              <p className="mb-6 text-muted-foreground">
                Join our partner ecosystem and grow your business with AlgCloud.
                We provide the resources, training, and support you need to
                succeed.
              </p>
              <Button asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </>
  );
}
