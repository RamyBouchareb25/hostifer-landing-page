"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowRight, FileText, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpSearch } from "@/components/help-search"

// Sample help content for search
const helpContent = [
  {
    id: "getting-started",
    title: "Getting Started with AlgCloud",
    category: "Guides",
    excerpt: "Learn how to set up your AlgCloud account and deploy your first application.",
    url: "/help/guides/getting-started",
  },
  {
    id: "compute-service",
    title: "Using AlgCloud Compute Service",
    category: "Guides",
    excerpt: "A comprehensive guide to AlgCloud's compute service for virtual machines and containers.",
    url: "/help/guides/compute-service",
  },
  {
    id: "storage-options",
    title: "Storage Options on AlgCloud",
    category: "Guides",
    excerpt: "Explore the different storage solutions available on AlgCloud platform.",
    url: "/help/guides/storage-options",
  },
  {
    id: "billing-faq",
    title: "Billing and Payments",
    category: "FAQ",
    excerpt: "Frequently asked questions about billing, invoices, and payment methods.",
    url: "/help/faq#billing",
  },
  {
    id: "account-management",
    title: "Managing Your Account",
    category: "FAQ",
    excerpt: "Learn how to manage users, permissions, and account settings.",
    url: "/help/faq#account",
  },
  {
    id: "api-authentication",
    title: "API Authentication",
    category: "API",
    excerpt: "How to authenticate your requests to the AlgCloud API.",
    url: "/api/reference#authentication",
  },
  {
    id: "compute-api",
    title: "Compute API Reference",
    category: "API",
    excerpt: "Complete reference for the AlgCloud Compute API endpoints.",
    url: "/api/reference#compute",
  },
  {
    id: "storage-api",
    title: "Storage API Reference",
    category: "API",
    excerpt: "Complete reference for the AlgCloud Storage API endpoints.",
    url: "/api/reference#storage",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<typeof helpContent>([])

  useEffect(() => {
    if (query) {
      // Simple search implementation - in a real app, this would be server-side
      const searchResults = helpContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Help Center Search</h1>
        <div className="mx-auto mt-6 max-w-md">
          <HelpSearch />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">
          {query ? (
            <>
              Search results for: <span className="text-primary">"{query}"</span>
            </>
          ) : (
            "Search for help articles"
          )}
        </h2>

        {query && (
          <p className="text-muted-foreground">
            Found {results.length} {results.length === 1 ? "result" : "results"}
          </p>
        )}
      </div>

      {query && results.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-medium">No results found</h3>
          <p className="mb-6 text-muted-foreground">We couldn't find any help articles matching your search.</p>
          <div className="space-y-4">
            <p className="font-medium">Suggestions:</p>
            <ul className="mx-auto max-w-md list-disc text-left text-muted-foreground">
              <li>Check your spelling</li>
              <li>Try more general keywords</li>
              <li>Try different keywords</li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/help">Browse All Help Articles</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {results.map((result) => (
            <Card key={result.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground">{result.category}</span>
                </div>
                <CardTitle className="line-clamp-2">{result.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2">{result.excerpt}</CardDescription>
                <Button asChild variant="link" className="mt-2 p-0">
                  <Link href={result.url}>
                    Read Article <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!query && (
        <div className="rounded-lg border p-8 text-center">
          <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-medium">Search the Help Center</h3>
          <p className="mb-6 text-muted-foreground">
            Enter a search term above to find help articles, guides, and FAQs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/help/guides">Browse Guides</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/help/faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      )}

      <div className="mt-12 rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Need More Help?</h2>
        <p className="mb-6 text-muted-foreground">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/help">Browse Help Center</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
