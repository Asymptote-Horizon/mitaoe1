'use client'

import { useState } from 'react'
import { BuildingOfficeIcon, UserGroupIcon, ArrowRightIcon, CalendarDaysIcon, ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const [hoveredCell, setHoveredCell] = useState(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  return (
    /* TWEAK THE PERCENTAGE VALUE BELOW TO CALIBRATE */
    // Change "h-screen" to "h-auto" on the container
// Change "absolute" to "relative" on the video so it dictates the container's height
<div className="relative w-full h-auto overflow-hidden bg-black">
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
    className="w-full h-auto object-contain block" // Changed to relative flow and object-contain
  >
    <source src="/video/banner.mp4" type="video/mp4" />
  </video>

  {(!videoLoaded || videoError) && (
    <img
      src="/video/banner.webp"
      alt="Banner poster"
      className="absolute inset-0 w-full h-full object-contain"
    />
  )}
</div>

  )
}
