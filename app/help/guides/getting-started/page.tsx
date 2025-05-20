import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, FileText, ThumbsUp, ThumbsDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Getting Started with AlgCloud | Help Guides",
  description: "Learn the basics of AlgCloud and set up your first resources",
}

export default function GettingStartedGuidePage() {
  return (
      <>
        <div className="bg-gray-100 border-b">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/help" className="hover:text-blue-600">
                Help Center
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/help/guides" className="hover:text-blue-600">
                Guides
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-gray-900">Getting Started</span>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Getting Started with AlgCloud</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>Beginner</span>
                  </div>
                  <div>Updated: May 15, 2025</div>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="lead">
                  Welcome to AlgCloud! This guide will walk you through the basics of setting up your account and
                  deploying your first resources on Algeria&apos;s premier cloud platform.
                </p>

                <h2>Creating Your Account</h2>
                <p>
                  To get started with AlgCloud, you&apos;ll need to create an account. Visit the{" "}
                  <Link href="https://console.hostifer.me/">sign-up page</Link> and follow these steps:
                </p>
                <ol>
                  <li>Enter your email address and create a secure password</li>
                  <li>Verify your email address by clicking the link sent to your inbox</li>
                  <li>Complete your profile with your name, company information, and contact details</li>
                  <li>Add a payment method to your account (credit card, bank transfer, or mobile payment)</li>
                </ol>

                <div className="my-8">
                  <Image
                    src="/images/signup-screenshot.png"
                    alt="AlgCloud signup screen"
                    width={800}
                    height={450}
                    className="rounded-lg border shadow-sm"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">The AlgCloud signup screen</p>
                </div>

                <h2>Navigating the Dashboard</h2>
                <p>
                  After signing in, you&apos;ll be taken to the AlgCloud Dashboard. This is your control center for managing
                  all your cloud resources. Here&apos;s a quick overview of the main sections:
                </p>
                <ul>
                  <li>
                    <strong>Services Menu:</strong> Access all AlgCloud services like Compute, Storage, and Databases
                  </li>
                  <li>
                    <strong>Projects:</strong> Organize your resources into separate projects
                  </li>
                  <li>
                    <strong>Monitoring:</strong> View performance metrics and logs for your resources
                  </li>
                  <li>
                    <strong>Billing:</strong> Manage your payment methods and view your usage costs
                  </li>
                  <li>
                    <strong>Support:</strong> Access help resources and contact support
                  </li>
                </ul>

                <h2>Creating Your First Compute Instance</h2>
                <p>
                  Let&apos;s create your first virtual machine using AlgCloud Compute (AC2). Follow these steps to launch a
                  basic instance:
                </p>
                <ol>
                  <li>From the Dashboard, click on &quot;Compute&quot; in the services menu</li>
                  <li>Click the &quot;Create Instance&quot; button</li>
                  <li>
                    Choose an instance type (we recommend starting with &quot;ac2.small&quot; for testing)
                    <ul>
                      <li>2 vCPUs</li>
                      <li>4 GB RAM</li>
                      <li>80 GB SSD storage</li>
                    </ul>
                  </li>
                  <li>Select an operating system (Ubuntu, CentOS, Windows, etc.)</li>
                  <li>Configure networking options (use the default VPC for now)</li>
                  <li>Create or select an SSH key for secure access</li>
                  <li>Click &quot;Launch Instance&quot;</li>
                </ol>

                <div className="bg-blue-50 p-4 rounded-lg my-6">
                  <h3 className="text-blue-800 font-medium">Pro Tip</h3>
                  <p className="text-blue-700 mb-0">
                    New accounts receive 2,000 DZD in free credits that can be used for any service. This is a great way
                    to experiment with different resources without incurring costs.
                  </p>
                </div>

                <h2>Connecting to Your Instance</h2>
                <p>
                  Once your instance is running, you can connect to it using SSH (for Linux instances) or RDP (for
                  Windows instances):
                </p>

                <h3>For Linux Instances (SSH)</h3>
                <p>Open your terminal and use the following command:</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>ssh -i /path/to/your-key.pem username@instance-ip-address</code>
                </pre>

                <h3>For Windows Instances (RDP)</h3>
                <p>
                  Use the Remote Desktop Connection application on your computer and enter the instance&apos;s IP address.
                  You&apos;ll need the administrator password, which you can retrieve from the instance details page.
                </p>

                <h2>Next Steps</h2>
                <p>Now that you&apos;ve created your first instance, here are some next steps to explore:</p>
                <ul>
                  <li>
                    <Link href="/help/guides/storage" className="text-blue-600 hover:underline">
                      Set up storage volumes
                    </Link>{" "}
                    for your instance
                  </li>
                  <li>
                    <Link href="/help/guides/networking-basics" className="text-blue-600 hover:underline">
                      Configure networking
                    </Link>{" "}
                    to secure your instance
                  </li>
                  <li>
                    <Link href="/help/guides/load-balancing" className="text-blue-600 hover:underline">
                      Set up a load balancer
                    </Link>{" "}
                    if you&apos;re running a web application
                  </li>
                  <li>
                    <Link href="/help/guides/monitoring-logging" className="text-blue-600 hover:underline">
                      Configure monitoring
                    </Link>{" "}
                    to keep track of your instance&apos;s performance
                  </li>
                </ul>

                <h2>Getting Help</h2>
                <p>
                  If you encounter any issues or have questions, our support team is here to help. You can reach us
                  through:
                </p>
                <ul>
                  <li>
                    <Link href="/help" className="text-blue-600 hover:underline">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/help/faq" className="text-blue-600 hover:underline">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>Email: support@algcloud.dz</li>
                  <li>Phone: +213 XX XXX XXXX (9am-6pm, Sunday-Thursday)</li>
                </ul>
              </div>

              <div className="mt-12 border-t pt-6">
                <h3 className="font-medium mb-4">Was this guide helpful?</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    Yes
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ThumbsDown className="h-4 w-4" />
                    No
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-4">In this guide</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link href="#creating-your-account" className="text-blue-600 hover:underline">
                          Creating Your Account
                        </Link>
                      </li>
                      <li>
                        <Link href="#navigating-the-dashboard" className="text-blue-600 hover:underline">
                          Navigating the Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link href="#creating-your-first-compute-instance" className="text-blue-600 hover:underline">
                          Creating Your First Compute Instance
                        </Link>
                      </li>
                      <li>
                        <Link href="#connecting-to-your-instance" className="text-blue-600 hover:underline">
                          Connecting to Your Instance
                        </Link>
                      </li>
                      <li>
                        <Link href="#next-steps" className="text-blue-600 hover:underline">
                          Next Steps
                        </Link>
                      </li>
                      <li>
                        <Link href="#getting-help" className="text-blue-600 hover:underline">
                          Getting Help
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <h3 className="font-medium mb-4">Related guides</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/help/guides/compute" className="text-blue-600 hover:underline text-sm">
                        Compute Instances
                      </Link>
                    </li>
                    <li>
                      <Link href="/help/guides/storage" className="text-blue-600 hover:underline text-sm">
                        Storage Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/help/guides/networking-basics" className="text-blue-600 hover:underline text-sm">
                        Networking Basics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help/guides/security-best-practices"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Security Best Practices
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
