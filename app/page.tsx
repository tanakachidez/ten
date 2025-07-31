"use client"

import { Slideshow } from "@/components/slideshow"
import { MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { getHomeContent, type HomeContent } from "@/lib/content-store"

const slideshowImages = [
  "/images/home-page-hero.webp",
  "/images/home-page-farming.jpg",
  "/images/home-page-vegetables.jpg",
]

export default function HomePage() {
  const [content, setContent] = useState<HomeContent | null>(null)

  useEffect(() => {
    try {
      setContent(getHomeContent())
    } catch (error) {
      console.error("Error loading home content:", error)
    }
  }, [])

  // Use fallback values if content hasn't loaded yet
  const displayContent = content || {
    heroTitle: "Goal Getters Financial Services",
    heroSubtitle: "Helps you to live your dream",
    address: "No. 2, East wing, First Floor of 6491A Clyde Road Eastlea, Harare",
    phone: "+263713014547, +263789573321",
    email: "info@goalgetters.co.zw",
  }

  useEffect(() => {
    async function fetchContent() {
      const homeContent = await getHomeContent()
      setContent(homeContent)
    }

    fetchContent()
  }, [])

  if (!content) {
    return null // or a loading spinner, etc.
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          <Slideshow images={slideshowImages} className="h-full w-full" />
        </div>

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl animate-fadeIn">
              {displayContent.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gold-300 drop-shadow-xl animate-fadeIn">
              {displayContent.heroSubtitle}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gold-500/10 rounded-lg p-8 border border-gold-500/20">
            <h3 className="text-2xl font-bold text-gold-400 mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-4 bg-gold-500/5 rounded-lg border border-gold-500/20">
                <MapPin className="h-6 w-6 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gold-300 mb-2">Address:</p>
                  <p className="text-gray-300 leading-relaxed">
                    {displayContent.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gold-500/5 rounded-lg border border-gold-500/20">
                <Phone className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <p className="font-semibold text-gold-300 mb-2">Phone:</p>
                  {displayContent.phone.split(',').map((phone, index) => (
                    <p key={index} className="text-gray-300 text-lg">{phone.trim()}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gold-500/5 rounded-lg border border-gold-500/20">
                <Mail className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <p className="font-semibold text-gold-300 mb-2">Email:</p>
                  <p className="text-gray-300">{displayContent.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gold-500/30 text-center">
            <p className="text-gray-400 mb-3">© 2025 Goal Getters Financial Services. All rights reserved.</p>
            <p className="text-gold-400 font-bold text-lg">"Empowering dreams through smart financial solutions."</p>
            <p className="text-gray-300 mt-4">Contact us: {displayContent.phone} | {displayContent.email}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
