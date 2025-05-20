"use client"

import { useEffect, useRef } from "react"
import { Chart, type ChartConfiguration, registerables } from "chart.js"

Chart.register(...registerables)

export default function Component() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Destroy existing chart
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy()
    }

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, "rgba(30, 136, 229, 0.5)")
    gradient.addColorStop(1, "rgba(30, 136, 229, 0)")

    // Generate random data for the last 30 days
    const generateData = () => {
      const baseValue = 50000
      const data = []
      for (let i = 0; i < 30; i++) {
        // Generate a value between 0.7 and 1.3 times the base value
        // with a trend that increases over time
        const trendFactor = 1 + (i / 30) * 0.5
        const randomFactor = 0.7 + Math.random() * 0.6
        data.push(Math.round(baseValue * randomFactor * trendFactor))
      }
      return data
    }

    const labels = Array.from({ length: 30 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - 29 + i)
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    })

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Visitors",
            data: generateData(),
            borderColor: "#1E88E5",
            backgroundColor: gradient,
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: "#1E88E5",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#333",
            bodyColor: "#666",
            borderColor: "#e2e8f0",
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            callbacks: {
              label: (context) => `Visitors: ${context.parsed.y.toLocaleString()}`,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 5,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              borderDash: [2, 4],
              color: "#e2e8f0",
            },
            ticks: {
              callback: (value) => {
                if (typeof value === "number") {
                  if (value >= 1000000) return (value / 1000000).toString() + "M"
                  if (value >= 1000) return (value / 1000).toString() + "K"
                  return value
                }
                return value
              },
            },
          },
        },
        interaction: {
          mode: "nearest",
          axis: "x",
          intersect: false,
        },
        elements: {
          line: {
            tension: 0.4,
          },
        },
      },
    }

    // Create new chart
    chartInstanceRef.current = new Chart(ctx, config)

    // Cleanup
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}
