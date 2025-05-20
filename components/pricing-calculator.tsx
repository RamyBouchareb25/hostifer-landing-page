"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { InfoIcon as InfoCircle, Download } from "lucide-react"

export function PricingCalculator() {
  // Compute state
  const [computeInstances, setComputeInstances] = useState(1)
  const [computeCpu, setComputeCpu] = useState(2)
  const [computeRam, setComputeRam] = useState(4)
  const [computeStorage, setComputeStorage] = useState(80)
  const [computeHighPerformance, setComputeHighPerformance] = useState(false)

  // Storage state
  const [storageAmount, setStorageAmount] = useState(100)
  const [storageType, setStorageType] = useState("standard")

  // Database state
  const [dbInstances, setDbInstances] = useState(1)
  const [dbType, setDbType] = useState("mysql")
  const [dbCpu, setDbCpu] = useState(2)
  const [dbRam, setDbRam] = useState(4)
  const [dbStorage, setDbStorage] = useState(50)
  const [dbHighAvailability, setDbHighAvailability] = useState(false)

  // Serverless state
  const [functionRequests, setFunctionRequests] = useState(1000000)
  const [functionCompute, setFunctionCompute] = useState(400000)
  const [loadBalancers, setLoadBalancers] = useState(1)

  // Total cost state
  const [totalCost, setTotalCost] = useState(0)
  const [breakdown, setBreakdown] = useState<Record<string, number>>({})

  // Calculate costs
  useEffect(() => {
    // Compute costs
    const cpuCost = computeHighPerformance ? 250 : 150
    const ramCost = computeHighPerformance ? 125 : 75
    const storageCost = computeHighPerformance ? 2500 : 1500

    const computeCpuCost = (computeInstances * computeCpu * cpuCost * 24 * 30) / 1000
    const computeRamCost = (computeInstances * computeRam * ramCost * 24 * 30) / 1000
    const computeStorageCost = (computeInstances * computeStorage * storageCost) / 1000
    const computeTotalCost = computeCpuCost + computeRamCost + computeStorageCost

    // Storage costs
    const standardStorageCost = 400
    const archiveStorageCost = 100
    const storageCostPerGB = storageType === "standard" ? standardStorageCost : archiveStorageCost
    const storageTotalCost = (storageAmount * storageCostPerGB) / 1000

    // Database costs
    const dbCpuCost = dbType === "mysql" ? 200 : 220
    const dbRamCost = dbType === "mysql" ? 100 : 110
    const dbStorageCost = dbType === "mysql" ? 2000 : 2200
    const haMultiplier = dbHighAvailability ? 2 : 1

    const dbCpuTotalCost = ((dbInstances * dbCpu * dbCpuCost * 24 * 30) / 1000) * haMultiplier
    const dbRamTotalCost = ((dbInstances * dbRam * dbRamCost * 24 * 30) / 1000) * haMultiplier
    const dbStorageTotalCost = (dbInstances * dbStorage * dbStorageCost) / 1000
    const dbTotalCost = dbCpuTotalCost + dbRamTotalCost + dbStorageTotalCost

    // Serverless costs
    const requestsCost = (Math.max(0, functionRequests - 1000000) * 0.5) / 1000000
    const computeTimeCost = (Math.max(0, functionCompute - 400000) * 0.1) / 1000
    const loadBalancerCost = loadBalancers * 5000
    const serverlessTotalCost = requestsCost + computeTimeCost + loadBalancerCost

    // Total cost
    const total = computeTotalCost + storageTotalCost + dbTotalCost + serverlessTotalCost

    setTotalCost(Math.round(total))
    setBreakdown({
      compute: Math.round(computeTotalCost),
      storage: Math.round(storageTotalCost),
      database: Math.round(dbTotalCost),
      serverless: Math.round(serverlessTotalCost),
    })
  }, [
    computeInstances,
    computeCpu,
    computeRam,
    computeStorage,
    computeHighPerformance,
    storageAmount,
    storageType,
    dbInstances,
    dbType,
    dbCpu,
    dbRam,
    dbStorage,
    dbHighAvailability,
    functionRequests,
    functionCompute,
    loadBalancers,
  ])

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="compute" className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="compute">Compute</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="serverless">Serverless</TabsTrigger>
            </TabsList>

            <TabsContent value="compute" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>AC2 - Compute Instances</CardTitle>
                  <CardDescription>Configure your virtual machines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Number of instances: {computeInstances}</Label>
                      <span className="text-sm text-gray-500">{computeInstances} instance(s)</span>
                    </div>
                    <Slider
                      value={[computeInstances]}
                      min={1}
                      max={10}
                      step={1}
                      onValueChange={(value) => setComputeInstances(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>vCPUs per instance: {computeCpu}</Label>
                      <span className="text-sm text-gray-500">{computeCpu} vCPU(s)</span>
                    </div>
                    <Slider
                      value={[computeCpu]}
                      min={1}
                      max={16}
                      step={1}
                      onValueChange={(value) => setComputeCpu(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>RAM per instance: {computeRam} GB</Label>
                      <span className="text-sm text-gray-500">{computeRam} GB</span>
                    </div>
                    <Slider
                      value={[computeRam]}
                      min={1}
                      max={64}
                      step={1}
                      onValueChange={(value) => setComputeRam(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Storage per instance: {computeStorage} GB</Label>
                      <span className="text-sm text-gray-500">{computeStorage} GB</span>
                    </div>
                    <Slider
                      value={[computeStorage]}
                      min={10}
                      max={1000}
                      step={10}
                      onValueChange={(value) => setComputeStorage(value[0])}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="high-performance"
                      checked={computeHighPerformance}
                      onCheckedChange={setComputeHighPerformance}
                    />
                    <Label htmlFor="high-performance">High-performance instances</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="storage" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>AS3 - Storage</CardTitle>
                  <CardDescription>Configure your object storage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Storage amount: {storageAmount} GB</Label>
                      <span className="text-sm text-gray-500">{storageAmount} GB</span>
                    </div>
                    <Slider
                      value={[storageAmount]}
                      min={10}
                      max={10000}
                      step={10}
                      onValueChange={(value) => setStorageAmount(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Storage type</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant={storageType === "standard" ? "default" : "outline"}
                        onClick={() => setStorageType("standard")}
                        className="justify-start"
                      >
                        <div className="text-left">
                          <div className="font-medium">Standard</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Frequently accessed data</div>
                        </div>
                      </Button>
                      <Button
                        variant={storageType === "archive" ? "default" : "outline"}
                        onClick={() => setStorageType("archive")}
                        className="justify-start"
                      >
                        <div className="text-left">
                          <div className="font-medium">Archive</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Rarely accessed data</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="database" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>ADB - Database</CardTitle>
                  <CardDescription>Configure your managed database</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Number of instances: {dbInstances}</Label>
                      <span className="text-sm text-gray-500">{dbInstances} instance(s)</span>
                    </div>
                    <Slider
                      value={[dbInstances]}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={(value) => setDbInstances(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Database type</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant={dbType === "mysql" ? "default" : "outline"}
                        onClick={() => setDbType("mysql")}
                        className="justify-start"
                      >
                        <div className="text-left">
                          <div className="font-medium">MySQL</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Popular open-source database</div>
                        </div>
                      </Button>
                      <Button
                        variant={dbType === "postgresql" ? "default" : "outline"}
                        onClick={() => setDbType("postgresql")}
                        className="justify-start"
                      >
                        <div className="text-left">
                          <div className="font-medium">PostgreSQL</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Advanced open-source database</div>
                        </div>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>vCPUs per instance: {dbCpu}</Label>
                      <span className="text-sm text-gray-500">{dbCpu} vCPU(s)</span>
                    </div>
                    <Slider value={[dbCpu]} min={1} max={16} step={1} onValueChange={(value) => setDbCpu(value[0])} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>RAM per instance: {dbRam} GB</Label>
                      <span className="text-sm text-gray-500">{dbRam} GB</span>
                    </div>
                    <Slider value={[dbRam]} min={1} max={64} step={1} onValueChange={(value) => setDbRam(value[0])} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Storage per instance: {dbStorage} GB</Label>
                      <span className="text-sm text-gray-500">{dbStorage} GB</span>
                    </div>
                    <Slider
                      value={[dbStorage]}
                      min={10}
                      max={1000}
                      step={10}
                      onValueChange={(value) => setDbStorage(value[0])}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="high-availability"
                      checked={dbHighAvailability}
                      onCheckedChange={setDbHighAvailability}
                    />
                    <Label htmlFor="high-availability">High-availability (replicated)</Label>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="serverless" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>AF - Serverless Functions</CardTitle>
                  <CardDescription>Configure your serverless workloads</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Monthly requests: {functionRequests.toLocaleString()}</Label>
                      <span className="text-sm text-gray-500">{functionRequests.toLocaleString()} requests</span>
                    </div>
                    <Slider
                      value={[functionRequests]}
                      min={100000}
                      max={100000000}
                      step={100000}
                      onValueChange={(value) => setFunctionRequests(value[0])}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Compute (GB-seconds): {functionCompute.toLocaleString()}</Label>
                      <span className="text-sm text-gray-500">{functionCompute.toLocaleString()} GB-seconds</span>
                    </div>
                    <Slider
                      value={[functionCompute]}
                      min={100000}
                      max={10000000}
                      step={100000}
                      onValueChange={(value) => setFunctionCompute(value[0])}
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <CardTitle className="text-lg mb-4">ALB - Load Balancers</CardTitle>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Number of load balancers: {loadBalancers}</Label>
                        <span className="text-sm text-gray-500">{loadBalancers} balancer(s)</span>
                      </div>
                      <Slider
                        value={[loadBalancers]}
                        min={0}
                        max={5}
                        step={1}
                        onValueChange={(value) => setLoadBalancers(value[0])}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Estimated Monthly Cost</CardTitle>
              <CardDescription>Based on your configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6">{totalCost.toLocaleString()} DZD</div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Cost Breakdown</div>
                  <div className="space-y-1">
                    {Object.entries(breakdown).map(([service, cost]) => (
                      <div key={service} className="flex justify-between">
                        <span className="text-sm capitalize">{service}</span>
                        <span className="text-sm font-medium">{cost.toLocaleString()} DZD</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-start gap-2 text-sm text-gray-500">
                    <InfoCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p>
                      This is an estimate based on the configuration you've selected. Actual costs may vary based on
                      usage patterns and additional services.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full">Get Started with This Configuration</Button>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Estimate
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
