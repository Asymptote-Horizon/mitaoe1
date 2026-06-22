'use client'

import { useState } from 'react'
import { BuildingOfficeIcon, UserGroupIcon, ArrowRightIcon, CalendarDaysIcon, ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const [hoveredCell, setHoveredCell] = useState(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  return (
    <div className="relative overflow-hidden bg-transparent">
        <div className="relative w-full h-screen">
          <div className="relative w-full h-full">
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
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video/banner.mp4" type="video/mp4" />
            </video>

            {(!videoLoaded || videoError) && (
              <img
                src="/video/banner.webp"
                alt="Banner poster"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
  )
}
