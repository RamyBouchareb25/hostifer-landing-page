import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Server, HardDrive, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "AF - AlgCloud Functions | AlgCloud",
  description: "Serverless compute platform for event-driven applications",
}

export default function FunctionsServicePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AF - AlgCloud Functions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Run code without provisioning or managing servers. Pay only for the compute time you consume.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://console.hostifer.me/">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/pricing-calculator">
                  <Button size="lg" variant="outline">
                    Calculate Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="AlgCloud Functions Service"
                className="mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need for serverless application development.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Zero Server Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Focus on your code, not infrastructure. We handle all the server management, scaling, and maintenance.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Automatic Scaling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Your functions automatically scale from a few requests per day to thousands per second without any
                  configuration.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Pay-Per-Use Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Only pay for the compute time you consume. No charge when your code isn't running.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Runtime Environments Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Runtime Environments</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from a variety of programming languages and runtimes.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="nodejs" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="java">Java</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
                <TabsTrigger value="ruby">Ruby</TabsTrigger>
              </TabsList>
              <TabsContent value="nodejs" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Node.js Runtime</CardTitle>
                    <CardDescription>JavaScript/TypeScript runtime environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Build serverless applications using JavaScript or TypeScript with the Node.js runtime. Perfect
                        for web applications, APIs, and microservices.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Supported Versions</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Node.js 20.x (Latest)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Node.js 18.x (LTS)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Node.js 16.x</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Features</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>NPM package support</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>TypeScript support</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>ES Modules support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Example Function</h4>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>
                            {`exports.handler = async (event) => {
  const name = event.name || 'World';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: \`Hello, \${name}!\`
    })
  };
};`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/help/guides/serverless-functions/nodejs">
                      <Button variant="outline">View Node.js Documentation</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="python" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Python Runtime</CardTitle>
                    <CardDescription>Python runtime environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Build serverless applications using Python. Ideal for data processing, machine learning, and
                        scientific computing.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Supported Versions</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Python 3.11 (Latest)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Python 3.10</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Python 3.9</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Features</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Pip package support</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Virtual environments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>Common ML libraries</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Example Function</h4>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>
                            {`def handler(event, context):
    name = event.get('name', 'World')
    return {
        'statusCode': 200,
        'body': {
            'message': f'Hello, {name}!'
        }
    }`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/help/guides/serverless-functions/python">
                      <Button variant="outline">View Python Documentation</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="java" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Java Runtime</CardTitle>
                    <CardDescription>Java runtime environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Build enterprise-grade serverless applications using Java. Ideal for complex business logic and
                      enterprise applications.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="go" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Go Runtime</CardTitle>
                    <CardDescription>Go runtime environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Build high-performance serverless applications using Go. Perfect for applications requiring low
                      latency and high throughput.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ruby" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ruby Runtime</CardTitle>
                    <CardDescription>Ruby runtime environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Build serverless applications using Ruby. Great for web applications and APIs with elegant,
                      readable code.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Use Cases</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                AlgCloud Functions can be used for a wide range of applications.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>API Backends</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Build scalable API backends without managing servers. Perfect for mobile and web applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>RESTful APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>GraphQL endpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Webhook handlers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Real-time Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Process data in real-time as it arrives. Ideal for IoT applications, analytics, and monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>IoT device data processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Stream processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Scheduled Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Run code on a schedule without maintaining cron servers. Perfect for periodic tasks and maintenance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Database backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Report generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Data synchronization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Image and Media Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-4">
                  Process images and media files on-demand. Ideal for thumbnail generation, video transcoding, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Image resizing and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Video transcoding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Audio processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to get started with AlgCloud Functions?
              </h2>
              <p className="text-white/80 md:text-xl">
                Deploy your first function in minutes and experience the power of serverless computing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link href="https://console.hostifer.me/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
              <Link href="/pricing-calculator">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                  Calculate Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Related Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enhance your serverless applications with these complementary services.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <Link href="/services/storage" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HardDrive className="h-5 w-5 text-blue-600" />
                    AS3 - Storage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Store and retrieve data for your serverless functions with scalable object storage.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/services/compute" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-blue-600" />
                    AC2 - Compute
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Use virtual machines for workloads that require more resources or longer execution times.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/services/database" className="group">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    ADB - Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Store and retrieve structured data for your serverless applications with managed databases.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="text-blue-600 group-hover:underline flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
