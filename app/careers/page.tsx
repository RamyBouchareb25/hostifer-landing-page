import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { MapPin, Briefcase, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | AlgCloud",
  description: "Join the team building Algeria&apos;s cloud infrastructure",
}

const jobOpenings = [
  {
    title: "Senior Cloud Engineer",
    department: "Engineering",
    location: "Algiers, Algeria",
    type: "Full-time",
    description: "Design, implement, and maintain our cloud infrastructure based on OpenStack.",
    requirements: [
      "5+ years of experience with cloud infrastructure",
      "Strong knowledge of OpenStack",
      "Experience with Linux systems administration",
      "Familiarity with automation tools like Ansible or Terraform",
    ],
    slug: "senior-cloud-engineer",
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Algiers, Algeria",
    type: "Full-time",
    description: "Build and maintain the user interfaces for our cloud management console.",
    requirements: [
      "3+ years of experience with React",
      "Experience with TypeScript and modern frontend tooling",
      "Knowledge of responsive design and accessibility",
      "Understanding of REST APIs and GraphQL",
    ],
    slug: "frontend-developer",
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "Oran, Algeria",
    type: "Full-time",
    description: "Build and maintain our CI/CD pipelines and infrastructure automation.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Experience with containerization and orchestration (Docker, Kubernetes)",
      "Knowledge of CI/CD tools (Jenkins, GitLab CI, etc.)",
      "Scripting skills in Python, Bash, or similar",
    ],
    slug: "devops-engineer",
  },
  {
    title: "Technical Support Specialist",
    department: "Customer Success",
    location: "Algiers, Algeria",
    type: "Full-time",
    description: "Provide technical support to our customers and help them succeed with our platform.",
    requirements: [
      "2+ years of experience in technical support",
      "Knowledge of cloud computing concepts",
      "Excellent communication skills in Arabic, French, and English",
      "Problem-solving mindset and customer-focused attitude",
    ],
    slug: "technical-support-specialist",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Algiers, Algeria",
    type: "Full-time",
    description: "Define and drive the product roadmap for AlgCloud services.",
    requirements: [
      "3+ years of experience in product management",
      "Experience with cloud or infrastructure products",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management skills",
    ],
    slug: "product-manager",
  },
  {
    title: "Sales Representative",
    department: "Sales",
    location: "Constantine, Algeria",
    type: "Full-time",
    description: "Drive sales of AlgCloud services to businesses across Algeria.",
    requirements: [
      "3+ years of experience in B2B sales",
      "Knowledge of cloud computing or IT services",
      "Strong networking and relationship-building skills",
      "Fluency in Arabic, French, and English",
    ],
    slug: "sales-representative",
  },
]

export default function CareersPage() {
  return (

      <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Join Our Team</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Help us build Algeria&apos;s cloud infrastructure and shape the future of technology in our country.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#openings">
                    <Button size="lg">View Open Positions</Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn About Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/join-team.avif"
                  width={600}
                  height={400}
                  alt="AlgCloud Team Working"
                  className="mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Join AlgCloud?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  We&apos;re building something special, and we want you to be part of it.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Meaningful Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Be part of building Algeria&apos;s digital infrastructure. Your work will directly impact businesses
                    across the country and help drive digital transformation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Growth & Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Work with cutting-edge technologies and learn from experienced professionals. We invest in your
                    growth with training, conferences, and certification support.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inclusive Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Join a diverse team that values different perspectives. We foster an inclusive environment where
                    everyone can contribute and thrive.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Enjoy competitive salaries, health insurance, retirement plans, and generous paid time off. We take
                    care of our team so you can focus on doing your best work.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We value work-life balance and offer flexible working arrangements. We believe that well-rested
                    employees do their best work.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Career Advancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Clear paths for career advancement and regular performance reviews. We want to help you grow your
                    career at AlgCloud.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="openings" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Open Positions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Find your next career opportunity at AlgCloud.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {jobOpenings.map((job) => (
                <Link key={job.slug} href={`/careers/${job.slug}`} className="group">
                  <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-500">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="text-blue-600 group-hover:underline flex items-center">
                        View Details <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Hiring Process</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  What to expect when you apply to AlgCloud.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-2">
                    1
                  </div>
                  <CardTitle>Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Submit your application online. Our team will review your resume and cover letter.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-2">
                    2
                  </div>
                  <CardTitle>Initial Interview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    If your profile matches our requirements, we&apos;ll schedule an initial interview to get to know you
                    better.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-2">
                    3
                  </div>
                  <CardTitle>Technical Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Depending on the role, you may be asked to complete a technical assessment or case study.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-2">
                    4
                  </div>
                  <CardTitle>Final Interview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Meet with the team and leadership for a final interview before we make our decision.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Don&apos;t See a Perfect Fit?</h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed">
                  We&apos;re always looking for talented individuals to join our team. Send us your resume and we&apos;ll keep it
                  on file for future opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Submit Your Resume
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}
