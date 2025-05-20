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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Search,
  Server,
  Database,
  HardDrive,
  Globe,
  Layers,
  Cloud,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Reference | AlgCloud",
  description: "Complete reference for all AlgCloud API endpoints",
};

export default function ApiReferencePage() {
  return (
    <>
      <div className="bg-gray-100 border-b">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/api" className="hover:text-blue-600">
              API
            </Link>
            <span>/</span>
            <span className="font-medium text-gray-900">Reference</span>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              API Reference
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
              Complete reference documentation for the AlgCloud API.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search API endpoints..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="compute" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="compute">Compute</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="networking">Networking</TabsTrigger>
            </TabsList>

            <TabsContent value="compute" className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Server className="h-5 w-5 text-blue-600" />
                  <h2 className="text-2xl font-bold">Compute API</h2>
                </div>
                <p className="text-gray-500 mb-6">
                  The Compute API allows you to create and manage virtual
                  machines, serverless functions, and container services.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-mono text-green-600">
                            GET /compute/instances
                          </CardTitle>
                          <CardDescription>
                            List all compute instances
                          </CardDescription>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          GET
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">
                            Query Parameters
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left pb-2">Parameter</th>
                                  <th className="text-left pb-2">Type</th>
                                  <th className="text-left pb-2">
                                    Description
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="py-2 font-mono">limit</td>
                                  <td>integer</td>
                                  <td>
                                    Maximum number of instances to return
                                    (default: 20)
                                  </td>
                                </tr>
                                <tr className="border-b">
                                  <td className="py-2 font-mono">offset</td>
                                  <td>integer</td>
                                  <td>
                                    Number of instances to skip (default: 0)
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-2 font-mono">status</td>
                                  <td>string</td>
                                  <td>
                                    Filter by instance status (running, stopped,
                                    etc.)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Response</h4>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre>
                              <code>
                                {`{
  "instances": [
    {
      "id": "i-12345",
      "name": "web-server-1",
      "instance_type": "ac2.small",
      "status": "running",
      "created_at": "2025-05-01T12:00:00Z",
      "vpc_id": "vpc-12345",
      "public_ip": "41.111.222.333",
      "private_ip": "10.0.0.5"
    },
    {
      "id": "i-67890",
      "name": "database-1",
      "instance_type": "ac2.medium",
      "status": "running",
      "created_at": "2025-05-02T14:30:00Z",
      "vpc_id": "vpc-12345",
      "public_ip": null,
      "private_ip": "10.0.0.6"
    }
  ],
  "total": 2,
  "limit": 20,
  "offset": 0
}`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/api/reference/compute/instances"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Full Documentation
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-mono text-blue-600">
                            POST /compute/instances
                          </CardTitle>
                          <CardDescription>
                            Create a new compute instance
                          </CardDescription>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          POST
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">
                            Request Body
                          </h4>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre>
                              <code>
                                {`{
  "name": "web-server-2",
  "instance_type": "ac2.small",
  "image_id": "ubuntu-20.04",
  "vpc_id": "vpc-12345",
  "subnet_id": "subnet-12345",
  "ssh_key_id": "key-12345",
  "security_group_ids": ["sg-12345"],
  "user_data": "#!/bin/bash\\necho 'Hello World'"
}`}
                              </code>
                            </pre>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Response</h4>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre>
                              <code>
                                {`{
  "instance": {
    "id": "i-34567",
    "name": "web-server-2",
    "instance_type": "ac2.small",
    "status": "pending",
    "created_at": "2025-05-19T15:30:00Z",
    "vpc_id": "vpc-12345",
    "subnet_id": "subnet-12345",
    "public_ip": null,
    "private_ip": "10.0.0.7"
  }
}`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/api/reference/compute/instances"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Full Documentation
                      </Link>
                    </CardFooter>
                  </Card>

                  <div className="text-center">
                    <Button variant="outline">
                      View All Compute API Endpoints
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="storage" className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <HardDrive className="h-5 w-5 text-blue-600" />
                  <h2 className="text-2xl font-bold">Storage API</h2>
                </div>
                <p className="text-gray-500 mb-6">
                  The Storage API allows you to create and manage object storage
                  buckets, upload and download files, and configure storage
                  policies.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-mono text-green-600">
                            GET /storage/buckets
                          </CardTitle>
                          <CardDescription>
                            List all storage buckets
                          </CardDescription>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          GET
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Response</h4>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre>
                              <code>
                                {`{
  "buckets": [
    {
      "id": "bucket-12345",
      "name": "my-website-assets",
      "created_at": "2025-04-15T10:30:00Z",
      "region": "algiers",
      "access_policy": "private"
    },
    {
      "id": "bucket-67890",
      "name": "app-backups",
      "created_at": "2025-05-01T14:45:00Z",
      "region": "oran",
      "access_policy": "private"
    }
  ]
}`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/api/reference/storage/buckets"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Full Documentation
                      </Link>
                    </CardFooter>
                  </Card>

                  <div className="text-center">
                    <Button variant="outline">
                      View All Storage API Endpoints
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-5 w-5 text-blue-600" />
                  <h2 className="text-2xl font-bold">Database API</h2>
                </div>
                <p className="text-gray-500 mb-6">
                  The Database API allows you to create and manage database
                  instances, configure backups, and perform database operations.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-mono text-green-600">
                            GET /database/instances
                          </CardTitle>
                          <CardDescription>
                            List all database instances
                          </CardDescription>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          GET
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Response</h4>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre>
                              <code>
                                {`{
  "instances": [
    {
      "id": "db-12345",
      "name": "production-mysql",
      "engine": "mysql",
      "version": "8.0",
      "status": "available",
      "created_at": "2025-04-10T09:15:00Z",
      "endpoint": "production-mysql.db.algcloud.dz",
      "port": 3306
    },
    {
      "id": "db-67890",
      "name": "analytics-postgresql",
      "engine": "postgresql",
      "version": "14",
      "status": "available",
      "created_at": "2025-05-05T11:30:00Z",
      "endpoint": "analytics-postgresql.db.algcloud.dz",
      "port": 5432
    }
  ]
}`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/api/reference/database/instances"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Full Documentation
                      </Link>
                    </CardFooter>
                  </Card>

                  <div className="text-center">
                    <Button variant="outline">
                      View All Database API Endpoints
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="networking" className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <h2 className="text-2xl font-bold">Networking API</h2>
                </div>
                <p className="text-gray-500 mb-6">
                  The Networking API allows you to create and manage virtual
                  networks, subnets, load balancers, and security groups.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-mono text-green-600">
                            GET /networking/vpcs
                          </CardTitle>
                          <CardDescription>
                            List all virtual private clouds
                          </CardDescription>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          GET
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Response</h4>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre>
                              <code>
                                {`{
  "vpcs": [
    {
      "id": "vpc-12345",
      "name": "production-vpc",
      "cidr_block": "10.0.0.0/16",
      "region": "algiers",
      "created_at": "2025-03-15T08:30:00Z"
    },
    {
      "id": "vpc-67890",
      "name": "development-vpc",
      "cidr_block": "10.1.0.0/16",
      "region": "oran",
      "created_at": "2025-04-20T13:45:00Z"
    }
  ]
}`}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="/api/reference/networking/vpcs"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Full Documentation
                      </Link>
                    </CardFooter>
                  </Card>

                  <div className="text-center">
                    <Button variant="outline">
                      View All Networking API Endpoints
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Other API Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-blue-600" />
                    Container API
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Create and manage Docker containers and container
                    registries.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/api/reference/container"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Documentation
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-blue-600" />
                    Kubernetes API
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Create and manage Kubernetes clusters and workloads.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/api/reference/kubernetes"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Documentation
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Security API
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Manage security groups, IAM policies, and encryption keys.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/api/reference/security"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Documentation
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
