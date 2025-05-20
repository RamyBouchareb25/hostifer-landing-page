import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team | AlgCloud",
  description: "Meet the team behind Algeria's first cloud platform",
}

const teamMembers = [
  {
    name: "Ahmed Benali",
    role: "Founder & CEO",
    bio: "Ahmed has over 15 years of experience in cloud infrastructure and previously led technology teams at major Algerian telecom companies.",
    image: "/images/team-1.png",
    linkedin: "#",
    twitter: "#",
    email: "ahmed@algcloud.dz",
  },
  {
    name: "Leila Khelif",
    role: "CTO",
    bio: "Leila is an expert in OpenStack and cloud architecture with a background in distributed systems and high-performance computing.",
    image: "/images/team-2.png",
    linkedin: "#",
    twitter: "#",
    email: "leila@algcloud.dz",
  },
  {
    name: "Karim Hadj",
    role: "VP of Engineering",
    bio: "Karim leads our engineering team and has extensive experience building scalable infrastructure for global tech companies.",
    image: "/images/team-3.png",
    linkedin: "#",
    twitter: "#",
    email: "karim@algcloud.dz",
  },
  {
    name: "Amina Berber",
    role: "Head of Customer Success",
    bio: "Amina ensures our customers get the most out of AlgCloud with her deep knowledge of cloud solutions and customer support.",
    image: "/images/team-4.png",
    linkedin: "#",
    twitter: "#",
    email: "amina@algcloud.dz",
  },
  {
    name: "Youcef Mansouri",
    role: "Security Director",
    bio: "Youcef oversees all security aspects of AlgCloud with his background in cybersecurity and compliance.",
    image: "/images/team-5.png",
    linkedin: "#",
    twitter: "#",
    email: "youcef@algcloud.dz",
  },
  {
    name: "Samira Taleb",
    role: "Product Manager",
    bio: "Samira shapes our product roadmap with her keen understanding of customer needs and market trends.",
    image: "/images/team-6.png",
    linkedin: "#",
    twitter: "#",
    email: "samira@algcloud.dz",
  },
]

export default function TeamPage() {
  return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate people behind Algeria&apos;s first cloud platform.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{member.bio}</p>
                  </CardContent>
                  <CardFooter className="flex justify-start gap-4">
                    <Link href={member.linkedin}>
                      <Button variant="ghost" size="icon">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href={member.twitter}>
                      <Button variant="ghost" size="icon">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                    <Link href={`mailto:${member.email}`}>
                      <Button variant="ghost" size="icon">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="max-w-[600px] mx-auto text-gray-500 mb-6">
                We&apos;re always looking for talented individuals to join our mission of building Algeria&apos;s cloud
                infrastructure.
              </p>
              <Link href="/careers">
                <Button size="lg">View Open Positions</Button>
              </Link>
            </div>
          </div>
        </section>
      </>
  )
}
