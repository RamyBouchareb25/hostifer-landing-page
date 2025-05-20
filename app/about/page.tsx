import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Clock, TrendingUp, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AlgCloud",
  description:
    "Learn about AlgCloud's mission, values, and the team behind Algeria's leading cloud provider.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Story
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Building Algeria&apos;s Digital Future
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in 2025, AlgCloud is Algeria&apos;s first homegrown
                cloud infrastructure provider, dedicated to empowering
                businesses and developers with reliable, scalable, and
                affordable cloud solutions.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AlgCloud headquarters"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Empowering Algerian Innovation
              </h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our mission is to accelerate Algeria&apos;s digital
                transformation by providing world-class cloud infrastructure
                that enables businesses of all sizes to innovate faster, scale
                efficiently, and compete globally.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                We&apos;re committed to keeping data local, creating tech jobs,
                and building digital sovereignty for Algeria&apos;s growing
                digital economy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                A Cloud-Powered Algeria
              </h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                We envision a future where Algeria is a regional technology hub,
                with a thriving ecosystem of startups, enterprises, and
                government services all powered by locally-hosted, world-class
                cloud infrastructure.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                By 2030, we aim to have data centers across all major Algerian
                cities, serving the entire North African region with reliable,
                low-latency cloud services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What Drives Us Every Day
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Our core values shape everything we do, from how we build our
                products to how we serve our customers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <TrendingUp className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500">
                  We constantly push boundaries to deliver cutting-edge
                  solutions that meet the evolving needs of our customers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Award className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-gray-500">
                  We hold ourselves to the highest standards in everything we
                  do, from code quality to customer service.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Heart className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-gray-500">
                  We&apos;re committed to growing Algeria&apos;s tech community
                  through education, events, and open source contributions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                The AlgCloud Story
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                From a small startup to Algeria&apos;s leading cloud provider,
                our journey has been defined by growth, innovation, and impact.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-blue-600"></div>
              </div>
              <div className="space-y-2 pb-8">
                <h3 className="text-xl font-bold">2022: The Beginning</h3>
                <p className="text-gray-500">
                  AlgCloud was founded by a team of engineers with a vision to
                  build Algeria&apos;s first cloud infrastructure provider.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-blue-600"></div>
              </div>
              <div className="space-y-2 pb-8">
                <h3 className="text-xl font-bold">2023: First Data Center</h3>
                <p className="text-gray-500">
                  We launched our first data center in Algiers, offering compute
                  and storage services to early customers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-blue-600"></div>
              </div>
              <div className="space-y-2 pb-8">
                <h3 className="text-xl font-bold">2024: Expansion</h3>
                <p className="text-gray-500">
                  We expanded our service offerings to include managed
                  databases, Kubernetes, and serverless functions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Clock className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">2025: Today</h3>
                <p className="text-gray-500">
                  Today, we serve hundreds of businesses across Algeria and are
                  expanding to new regions with our second data center in Oran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet the People Behind AlgCloud
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Our diverse team of engineers, designers, and business leaders
                are united by a passion for technology and a commitment to
                excellence.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
             <div key={0} className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/ramy-bouchareb.jpg"
                    alt="Ramy Bouchareb"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Ramy Bouchareb</h3>
                  <p className="text-blue-600">CTO & Founder</p>
                </div>
              </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={`/placeholder.svg?height=160&width=160&text=Team Member ${i}`}
                    alt={`Team member ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Team Member {i}</h3>
                  <p className="text-blue-600">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                Our Locations
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Where to Find Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                With offices and data centers across Algeria, we&apos;re
                building the infrastructure for the country&apos;s digital
                future.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <Card className="bg-white">
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Algiers Headquarters</h3>
                  <p className="text-gray-500 mt-2">
                    123 Digital Boulevard
                    <br />
                    Algiers Business District
                    <br />
                    Algiers, 16000
                    <br />
                    Algeria
                  </p>
                  <p className="text-blue-600 mt-4">+213 21 00 00 00</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Oran Office</h3>
                  <p className="text-gray-500 mt-2">
                    45 Tech Avenue
                    <br />
                    Oran Innovation Park
                    <br />
                    Oran, 31000
                    <br />
                    Algeria
                  </p>
                  <p className="text-blue-600 mt-4">+213 41 00 00 00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Join Us on Our Journey
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed">
                Whether you&apos;re looking to use our services, join our team,
                or partner with us, we&apos;d love to hear from you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild variant="secondary">
                <a href="/careers">View Careers</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-white hover:bg-white/10"
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
