"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MessageCircle, Mail, FileText, Video, ArrowRight, Book } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function HelpCenterClientPage() {
  return (
      <>
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Help Center</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Find answers, learn about our services, and get help from our support team.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input type="search" placeholder="Search for answers..." className="pl-10 py-6 text-lg" />
              </div>
            </div>

            <div className="mt-12">
              <Tabs defaultValue="guides" className="w-full">
                <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="api">API Docs</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                </TabsList>
                <div className="mt-8">
                  <TabsContent value="guides" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Link href="/help/guides/getting-started" className="group">
                        <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-blue-600" />
                              Getting Started
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-500">
                              Learn the basics of AlgCloud and set up your first resources.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <div className="text-blue-600 group-hover:underline flex items-center">
                              Read guide <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                      <Link href="/help/guides/compute" className="group">
                        <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-blue-600" />
                              Compute Instances
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-500">
                              Everything you need to know about creating and managing compute instances.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <div className="text-blue-600 group-hover:underline flex items-center">
                              Read guide <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                      <Link href="/help/guides/storage" className="group">
                        <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-blue-600" />
                              Storage Solutions
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-500">
                              Learn about object storage, block storage, and file storage options.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <div className="text-blue-600 group-hover:underline flex items-center">
                              Read guide <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                      <Link href="/help/guides/databases" className="group">
                        <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <FileText className="h-5 w-5 text-blue-600" />
                              Database Services
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-500">
                              Set up and manage your database services for optimal performance.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <div className="text-blue-600 group-hover:underline flex items-center">
                              Read guide <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    </div>
                    <div className="text-center mt-6">
                      <Link href="/help/guides">
                        <Button variant="outline">View All Guides</Button>
                      </Link>
                    </div>
                  </TabsContent>
                  <TabsContent value="faq" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Frequently Asked Questions</CardTitle>
                        <CardDescription>Quick answers to common questions about AlgCloud services.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">How do I create my first compute instance?</h3>
                          <p className="text-sm text-gray-500">
                            You can create your first compute instance by logging into your AlgCloud console, navigating
                            to the Compute section, and clicking &quot;Create Instance&quot;. Follow the setup wizard to configure
                            your instance.
                          </p>
                        </div>
                        <div className="space-y-2 pt-4 border-t">
                          <h3 className="font-medium">What payment methods do you accept?</h3>
                          <p className="text-sm text-gray-500">
                            We accept credit cards, bank transfers, and mobile payment methods popular in Algeria. You
                            can manage your payment methods in the Billing section of your account.
                          </p>
                        </div>
                        <div className="space-y-2 pt-4 border-t">
                          <h3 className="font-medium">How do I get support if I have an issue?</h3>
                          <p className="text-sm text-gray-500">
                            You can contact our support team 24/7 via email, live chat, or phone. Premium support plans
                            are also available for businesses with critical workloads.
                          </p>
                        </div>
                        <div className="space-y-2 pt-4 border-t">
                          <h3 className="font-medium">Can I upgrade my instance after creating it?</h3>
                          <p className="text-sm text-gray-500">
                            Yes, you can upgrade your instance&apos;s CPU, RAM, and storage at any time. Some upgrades may
                            require a restart of your instance.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/help/faq">
                          <Button variant="outline">View All FAQs</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="api" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>API Documentation</CardTitle>
                        <CardDescription>Comprehensive documentation for the AlgCloud API.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-500">
                          Our API allows you to programmatically manage all aspects of your AlgCloud resources. Use our
                          API to automate deployments, scale resources, and integrate with your existing tools.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <Link href="/api/reference" className="group">
                            <div className="border rounded-lg p-4 transition-all duration-200 group-hover:shadow-md">
                              <h3 className="font-medium flex items-center">
                                <Book className="h-5 w-5 text-blue-600 mr-2" />
                                API Reference
                              </h3>
                              <p className="text-sm text-gray-500 mt-2">
                                Complete reference for all API endpoints, parameters, and responses.
                              </p>
                            </div>
                          </Link>
                          <Link href="/api/guides" className="group">
                            <div className="border rounded-lg p-4 transition-all duration-200 group-hover:shadow-md">
                              <h3 className="font-medium flex items-center">
                                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                                API Guides
                              </h3>
                              <p className="text-sm text-gray-500 mt-2">
                                Step-by-step guides for common API tasks and workflows.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/api">
                          <Button>Explore API Docs</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="videos" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="overflow-hidden">
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <Video className="h-12 w-12 text-gray-400" />
                        </div>
                        <CardHeader>
                          <CardTitle>Getting Started with AlgCloud</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-500">
                            A complete walkthrough of setting up your AlgCloud account and deploying your first
                            resources.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Link href="/videos/getting-started">
                            <Button variant="outline">Watch Video</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-video bg-gray-100 flex items-center justify-center">
                          <Video className="h-12 w-12 text-gray-400" />
                        </div>
                        <CardHeader>
                          <CardTitle>Advanced Compute Configuration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-500">
                            Learn how to optimize your compute instances for performance and cost efficiency.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Link href="/videos/advanced-compute">
                            <Button variant="outline">Watch Video</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                    <div className="text-center mt-6">
                      <Link href="/videos">
                        <Button variant="outline">View All Videos</Button>
                      </Link>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Contact Support</h2>
                <p className="max-w-[600px] text-gray-500">
                  Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center gap-2">
                    <MessageCircle className="h-8 w-8 text-blue-600" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Chat with our support team in real-time for immediate assistance.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <ChatButton />
                </CardFooter>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center gap-2">
                    <Mail className="h-8 w-8 text-blue-600" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Send us an email and we&apos;ll get back to you within 24 hours.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Link href="mailto:support@algcloud.dz">
                    <Button variant="outline">Email Us</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center gap-2">
                    <FileText className="h-8 w-8 text-blue-600" />
                    Submit Ticket
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Create a support ticket for complex issues requiring detailed investigation.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <TicketButton />
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </>
  )
}

function ChatButton() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Feature Not Available",
          description: "Live chat support is coming soon. Please use email support in the meantime.",
        })
      }}
    >
      Start Chat
    </Button>
  )
}

function TicketButton() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Feature Not Available",
          description: "Ticket submission is coming soon. Please use email support in the meantime.",
        })
      }}
    >
      Create Ticket
    </Button>
  )
}
