import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Book, FileText, Code, Bell } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation | AlgCloud",
  description: "AlgCloud documentation and API reference",
}

export default function DocsPage() {
  return (
      <>
        <div className="bg-gray-100 border-b">
          <div className="container px-4 md:px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-900">Documentation</span>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Coming Soon</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Documentation</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Our comprehensive documentation is currently under development. We&apos;re working hard to provide you with
                detailed guides and API references.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">User Guides</h2>
                  <p className="text-gray-500 mt-2">
                    Comprehensive guides for using AlgCloud services, with step-by-step instructions and best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">API Reference</h2>
                  <p className="text-gray-500 mt-2">
                    Detailed API documentation with examples, request/response formats, and authentication information.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Tutorials</h2>
                  <p className="text-gray-500 mt-2">
                    Hands-on tutorials for common tasks and use cases, from basic to advanced scenarios.
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Get Notified</h2>
                  <p className="text-gray-500 mt-2">Subscribe to be notified when our documentation is available.</p>
                  <div className="mt-4">
                    <Button>Subscribe for Updates</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="border rounded-lg p-6 bg-gray-50">
              <h2 className="text-xl font-bold mb-4">Need Help Now?</h2>
              <p className="text-gray-500 mb-4">
                While our documentation is being developed, our support team is available to help you with any questions
                or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/help">
                  <Button variant="outline" className="w-full">
                    Visit Help Center
                  </Button>
                </Link>
                <Link href="mailto:support@algcloud.dz">
                  <Button className="w-full">Contact Support</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
