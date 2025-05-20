import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


export const metadata: Metadata = {
  title: "Contact Us | AlgCloud",
  description:
    "Get in touch with AlgCloud for sales inquiries, support, or partnership opportunities",
};

export default function ContactPage() {
  return (

      <>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                Contact Us
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Get in touch with our team for sales inquiries, support, or
                partnership opportunities
              </p>
            </div>

            <div className="mb-16 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger id="inquiry-type">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="press">Press Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="mr-2 h-5 w-5" /> Sales
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-2">
                        For sales inquiries and pricing information
                      </CardDescription>
                      <p className="font-medium">+1 (555) 123-4567</p>
                      <p className="text-primary">sales@algcloud.com</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageSquare className="mr-2 h-5 w-5" /> Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-2">
                        For technical support and assistance
                      </CardDescription>
                      <p className="font-medium">+1 (555) 987-6543</p>
                      <p className="text-primary">support@algcloud.com</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        24/7 support available for enterprise customers
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5" /> Headquarters
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-2">
                        Our main office location
                      </CardDescription>
                      <p>123 Tech Park Avenue</p>
                      <p>Suite 500</p>
                      <p>San Francisco, CA 94103</p>
                      <p>United States</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Mail className="mr-2 h-5 w-5" /> General Inquiries
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-2">
                        For general questions and information
                      </CardDescription>
                      <p className="text-primary">info@algcloud.com</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-center">
                Global Offices
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    city: "San Francisco",
                    country: "United States",
                    address: "123 Tech Park Avenue, Suite 500",
                  },
                  {
                    city: "New York",
                    country: "United States",
                    address: "456 Madison Avenue, 15th Floor",
                  },
                  {
                    city: "London",
                    country: "United Kingdom",
                    address: "78 Finsbury Square, EC2A 1HP",
                  },
                  {
                    city: "Singapore",
                    country: "Singapore",
                    address: "10 Marina Boulevard, #39-01",
                  },
                  {
                    city: "Tokyo",
                    country: "Japan",
                    address: "Roppongi Hills Mori Tower, 6-10-1",
                  },
                  {
                    city: "Sydney",
                    country: "Australia",
                    address: "120 Collins Street, Level 31",
                  },
                  {
                    city: "Berlin",
                    country: "Germany",
                    address: "Friedrichstraße 68, 10117",
                  },
                  {
                    city: "Dubai",
                    country: "UAE",
                    address: "Dubai Internet City, Building 12",
                  },
                ].map((office, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{office.city}</CardTitle>
                      <CardDescription>{office.country}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{office.address}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-muted p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">
                Need Immediate Assistance?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Our support team is available 24/7 to help you with any
                questions or issues.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="/help">Visit Help Center</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/help/faq">View FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
