'use client'

import { useState } from 'react'
import { BuildingOfficeIcon, UserGroupIcon, ArrowRightIcon, CalendarDaysIcon, ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false)

  return (
    <div className="relative w-full h-auto overflow-hidden bg-black">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        poster="/video/banner.webp"
        onError={() => setVideoError(true)}
        className="w-full h-auto object-cover block"
      >
        <source src="/video/banner.mp4" type="video/mp4" />
      </video>

      {videoError && (
        <img
          src="/video/banner.webp"
          alt="Banner poster"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  )
}
