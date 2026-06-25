'use client'

import Link from 'next/link'
import {
  VideoCameraIcon,
  MapIcon,
  CpuChipIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

export default function ExploreSection() {
  return (
    <section className="py-12 sm:py-16 bg-white/60 backdrop-blur-sm border-t border-teal-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-2 sm:mb-3">
            Experience Campus Life
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Embark on an interactive virtual journey and discover MITAOE campus.          
            </p>
        </div>

        {/* Feature Display Context */}
        <div className="text-center mb-6 sm:mb-8">
          {/* <h3 className="text-lg sm:text-2xl font-bold text-[#141D49] mb-4 tracking-tight">
            Navigate the Campus in 3D
          </h3> */}
          
          {/* Custom Designed Icon Badges Row - Shrinks and fits neatly on mobile */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-gray-100 shadow-sm text-[11px] sm:text-sm font-semibold text-[#141D49]">
              <div className="p-1 bg-teal-50 rounded-lg text-teal-600 shrink-0">
                <VideoCameraIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <span>Virtual Fly-Through Experience</span>
            </div>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-gray-100 shadow-sm text-[11px] sm:text-sm font-semibold text-[#141D49]">
              <div className="p-1 bg-purple-50 rounded-lg text-purple-600 shrink-0">
                <MapIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <span>3D Direction Paths</span>
            </div>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-gray-100 shadow-sm text-[11px] sm:text-sm font-semibold text-[#141D49]">
              <div className="p-1 bg-amber-50 rounded-lg text-amber-600 shrink-0">
                <CpuChipIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <span>Real-Time Campus Data</span>
            </div>

          </div>
        </div>

        {/* Premium Unobstructed Video Container Box */}
        {/* Changed aspect ratio to 4:3 on mobile so the video has vertical breathing room */}
        <Link
          href="https://xyz-wheat-sigma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative w-full aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-teal-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          {/* Looping video render */}
          <video
            className="w-full h-full object-cover opacity-95 group-hover:scale-[1.01] transition-transform duration-700"
            src="/3d.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Elegant dark gradient vignetting layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 transition-opacity duration-300" />

          {/* Fully Responsive Compact Action Banner Overlay */}
          {/* Switches to a clean vertical column layout on mobile to prevent layout explosion */}
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/20 shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-teal-600">Interactive Map</span>
              <span className="text-xs sm:text-sm font-bold text-[#141D49] mt-0.5">Ready to explore the digital twin?</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#141D49] hover:bg-[#141D49]/90 px-4 py-2 rounded-lg transition-colors shadow-sm w-full sm:w-auto text-center">
              <span>Click to Explore Now</span>
              <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

      </div>
    </section>
  )
}
