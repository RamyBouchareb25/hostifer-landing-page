import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, XCircle, Clock, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "System Status | AlgCloud",
  description: "Current status of AlgCloud services and systems",
}

const services = [
  {
    name: "AC2 - Compute",
    status: "operational",
    description: "All compute services are operating normally.",
    lastUpdated: "5 minutes ago",
  },
  {
    name: "AS3 - Storage",
    status: "operational",
    description: "All storage services are operating normally.",
    lastUpdated: "5 minutes ago",
  },
  {
    name: "ADB - Database",
    status: "operational",
    description: "All database services are operating normally.",
    lastUpdated: "5 minutes ago",
  },
  {
    name: "AF - Functions",
    status: "degraded",
    description: "Some users may experience increased latency when deploying new functions.",
    lastUpdated: "15 minutes ago",
  },
  {
    name: "ALB - Load Balancer",
    status: "operational",
    description: "All load balancing services are operating normally.",
    lastUpdated: "5 minutes ago",
  },
  {
    name: "ACS - Container Service",
    status: "operational",
    description: "All container services are operating normally.",
    lastUpdated: "5 minutes ago",
  },
  {
    name: "AKS - Kubernetes Service",
    status: "operational",
    description: "All Kubernetes services are operating normally.",
    lastUpdated: "5 minutes ago",
  },
  {
    name: "Console & API",
    status: "operational",
    description: "The management console and API are operating normally.",
    lastUpdated: "5 minutes ago",
  },
]

const incidents = [
  {
    title: "AF - Functions Latency",
    status: "investigating",
    date: "May 19, 2025 - 14:45",
    description:
      "We are investigating reports of increased latency when deploying new functions. Our engineering team is working to identify and resolve the issue.",
    updates: [
      {
        time: "14:45",
        message: "We are investigating reports of increased latency when deploying new functions.",
      },
      {
        time: "14:30",
        message: "We have received reports of increased latency when deploying new functions.",
      },
    ],
  },
]

const maintenanceEvents = [
  {
    title: "Database Maintenance",
    status: "scheduled",
    date: "May 22, 2025 - 01:00 to 03:00",
    description:
      "We will be performing scheduled maintenance on our database infrastructure. During this time, you may experience brief periods of increased latency when accessing database services.",
  },
]

export default function StatusPage() {
  return (
      <>
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">System Status</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Current status of AlgCloud services and infrastructure.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
                <p className="text-sm text-gray-500">Last updated: May 19, 2025 - 15:21</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Current Status</CardTitle>
                  <CardDescription>Overall system status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    <div>
                      <h3 className="font-medium">Partial System Outage</h3>
                      <p className="text-sm text-gray-500">
                        Some services are experiencing issues. See below for details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Service Status</CardTitle>
                  <CardDescription>Status of individual services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.name} className="flex items-start gap-3 p-4 border rounded-lg">
                        {service.status === "operational" ? (
                          <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                        ) : service.status === "degraded" ? (
                          <AlertTriangle className="h-6 w-6 text-yellow-500 mt-0.5" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-500 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{service.name}</h3>
                            <span
                              className={`text-sm ${
                                service.status === "operational"
                                  ? "text-green-600"
                                  : service.status === "degraded"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }`}
                            >
                              {service.status === "operational"
                                ? "Operational"
                                : service.status === "degraded"
                                  ? "Degraded Performance"
                                  : "Outage"}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                          <p className="text-xs text-gray-400 mt-2">Updated {service.lastUpdated}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Active Incidents</CardTitle>
                  <CardDescription>Currently ongoing incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  {incidents.length > 0 ? (
                    <div className="space-y-6">
                      {incidents.map((incident) => (
                        <div key={incident.title} className="space-y-4">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-yellow-500 mt-0.5" />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium">{incident.title}</h3>
                                <span className="text-sm text-yellow-600">
                                  {incident.status === "investigating"
                                    ? "Investigating"
                                    : incident.status === "identified"
                                      ? "Identified"
                                      : "Monitoring"}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{incident.date}</p>
                              <p className="mt-2">{incident.description}</p>
                            </div>
                          </div>
                          <div className="pl-9 space-y-3">
                            <h4 className="text-sm font-medium">Updates</h4>
                            {incident.updates.map((update, index) => (
                              <div key={index} className="text-sm border-l-2 border-gray-200 pl-4 py-1">
                                <p className="text-gray-500">{update.time}</p>
                                <p>{update.message}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center p-6 text-center">
                      <div>
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="font-medium text-lg">No Active Incidents</h3>
                        <p className="text-gray-500 mt-1">All systems are operating normally.</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Maintenance</CardTitle>
                  <CardDescription>Upcoming maintenance events</CardDescription>
                </CardHeader>
                <CardContent>
                  {maintenanceEvents.length > 0 ? (
                    <div className="space-y-4">
                      {maintenanceEvents.map((event) => (
                        <div key={event.title} className="flex items-start gap-3 p-4 border rounded-lg">
                          <Clock className="h-6 w-6 text-blue-500 mt-0.5" />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{event.title}</h3>
                              <span className="text-sm text-blue-600">
                                {event.status === "scheduled" ? "Scheduled" : "In Progress"}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                            <p className="mt-2">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center p-6 text-center">
                      <div>
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="font-medium text-lg">No Scheduled Maintenance</h3>
                        <p className="text-gray-500 mt-1">There are no upcoming maintenance events.</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </>
  )
}
