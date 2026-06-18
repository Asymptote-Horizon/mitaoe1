'use client'

import { useState } from 'react'
import { BuildingOfficeIcon, UserGroupIcon, ArrowRightIcon, CalendarDaysIcon, ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const [hoveredCell, setHoveredCell] = useState(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  return (
    <div className="relative overflow-hidden bg-transparent">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16">
        <div className="w-full">
          <div className="relative w-full">
            <video
              playsInline
              autoPlay
              muted
              loop
              preload="auto"
              poster="/video/banner.webp"
              onCanPlayThrough={() => setVideoLoaded(true)}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className="w-full block"
            >
              <source src="/video/banner.mp4" type="video/mp4" />
            </video>

            {(!videoLoaded || videoError) && (
              <img
                src="/video/banner.webp"
                alt="Banner poster"
                className="w-full block"
              />
            )}
          </div>
        </div>

        {/* keep the following Explore content below the hero */}
      </div>

      {/* spacer so header overlaps video nicely */}
      <div className="h-6" />
    </div>
  )
}
