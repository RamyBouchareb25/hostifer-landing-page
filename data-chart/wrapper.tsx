"use client"

import type React from "react"

interface ChartWrapperProps {
  content: React.ComponentType
  className?: string
  title?: string
}

export function ChartWrapper({ content: Content, className, title }: ChartWrapperProps) {
  return (
    <div className={className}>
      {title && <span className="sr-only">{title}</span>}
      <Content />
    </div>
  )
}
