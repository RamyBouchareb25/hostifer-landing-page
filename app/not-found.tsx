import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (

      <div className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-7xl font-bold tracking-tighter text-blue-600">404</h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Page Not Found</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/">
                <Button size="lg">Return Home</Button>
              </Link>
              <Link href="/help">
                <Button size="lg" variant="outline">
                  Visit Help Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
