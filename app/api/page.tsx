import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Code,
  FileText,
  Book,
  Terminal,
  Key,
  Lock,
  Server,
  Database,
  HardDrive,
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Documentation | AlgCloud",
  description: "Comprehensive documentation for the AlgCloud API",
};

export default function ApiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  API Documentation
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Comprehensive documentation for the AlgCloud API to help you
                  automate and integrate.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-blue-600" />
                    API Reference
                  </CardTitle>
                  <CardDescription>
                    Complete reference for all API endpoints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Detailed documentation of all API endpoints, request
                    parameters, response formats, and error codes. Find
                    everything you need to interact with AlgCloud services
                    programmatically.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/api/reference" className="w-full">
                    <Button className="w-full">View API Reference</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    API Guides
                  </CardTitle>
                  <CardDescription>
                    Step-by-step guides for common API tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Learn how to use the AlgCloud API with practical examples
                    and step-by-step guides for common tasks like creating
                    resources, managing instances, and automating workflows.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/api/guides" className="w-full">
                    <Button variant="outline" className="w-full">
                      Browse API Guides
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                Getting Started with the API
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Authentication</h3>
                  <p className="text-gray-500 mb-4">
                    All API requests to AlgCloud require authentication. We
                    support two authentication methods:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Key className="h-5 w-5 text-blue-600" />
                          API Keys
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">
                          Generate API keys in your account dashboard and
                          include them in the Authorization header of your
                          requests.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Lock className="h-5 w-5 text-blue-600" />
                          OAuth 2.0
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">
                          Use OAuth 2.0 for more secure authentication,
                          especially for applications acting on behalf of users.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Base URL</h3>
                  <Card>
                    <CardContent className="p-4">
                      <code className="text-sm bg-gray-100 p-2 rounded block overflow-x-auto">
                        https://api.algcloud.dz/v1
                      </code>
                    </CardContent>
                  </Card>
                  <p className="text-sm text-gray-500 mt-2">
                    All API endpoints are relative to this base URL. For
                    example, to list compute instances, you would use{" "}
                    <code className="text-xs bg-gray-100 p-1 rounded">
                      GET /compute/instances
                    </code>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">API Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="p-4">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Server className="h-5 w-5 text-blue-600" />
                          Compute API
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-gray-500">
                          Create, manage, and monitor virtual machines and
                          serverless functions.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Link
                          href="/api/reference/compute"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View Documentation
                        </Link>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="p-4">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <HardDrive className="h-5 w-5 text-blue-600" />
                          Storage API
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-gray-500">
                          Manage object storage, upload files, and configure
                          storage policies.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Link
                          href="/api/reference/storage"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View Documentation
                        </Link>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="p-4">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Database className="h-5 w-5 text-blue-600" />
                          Database API
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-gray-500">
                          Create and manage database instances, backups, and
                          configurations.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Link
                          href="/api/reference/database"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View Documentation
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Code Examples</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">
                        Creating a Compute Instance
                      </h4>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre>
                          <code>
                            {`curl -X POST https://api.algcloud.dz/v1/compute/instances \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "my-instance",
    "instance_type": "ac2.small",
    "image_id": "ubuntu-20.04",
    "vpc_id": "vpc-12345",
    "ssh_key_id": "key-12345"
  }'`}
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        Listing Storage Buckets
                      </h4>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <pre>
                          <code>
                            {`curl -X GET https://api.algcloud.dz/v1/storage/buckets \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold">SDKs & Libraries</h2>
                <p className="text-gray-500">
                  We provide official SDKs for popular programming languages to
                  make it easier to interact with the AlgCloud API:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Terminal className="h-5 w-5 text-blue-600" />
                        Python SDK
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="bg-gray-100 p-2 rounded text-sm mb-2">
                        <code>pip install algcloud</code>
                      </div>
                      <p className="text-xs text-gray-500">
                        Comprehensive Python library for interacting with all
                        AlgCloud services.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Link
                        href="/api/sdk/python"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Documentation
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Code className="h-5 w-5 text-blue-600" />
                        JavaScript SDK
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="bg-gray-100 p-2 rounded text-sm mb-2">
                        <code>npm install algcloud-js</code>
                      </div>
                      <p className="text-xs text-gray-500">
                        JavaScript/TypeScript library for Node.js and browser
                        applications.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Link
                        href="/api/sdk/javascript"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Documentation
                      </Link>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Terminal className="h-5 w-5 text-blue-600" />
                        CLI Tool
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="bg-gray-100 p-2 rounded text-sm mb-2">
                        <code>npm install -g algcloud-cli</code>
                      </div>
                      <p className="text-xs text-gray-500">
                        Command-line interface for managing AlgCloud resources
                        from your terminal.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Link
                        href="/api/cli"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Documentation
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-500 mb-4">Need help with the API?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="http://github.com/algcloud">
                    <Button className="flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      Join Developer Community
                    </Button>
                  </Link>
                  <Link href="/help">
                    <Button variant="outline">Contact Support</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
