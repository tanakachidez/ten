"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { saveMessage } from "@/lib/messages-store"
import { getContactContent, type ContactContent } from "@/lib/content-store"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  })
  
  const [content, setContent] = useState<ContactContent | null>(null)

  useEffect(() => {
    try {
      setContent(getContactContent())
    } catch (error) {
      console.error("Error loading contact content:", error)
    }
  }, [])

  // Use fallback values if content hasn't loaded yet
  const displayContent = content || {
    pageTitle: "Contact Us",
    pageSubtitle: "Get in touch with our team",
    formTitle: "Send us a Message",
    formDescription: "Fill out the form below and we'll get back to you as soon as possible.",
    businessHours: {
      weekdays: "Monday - Friday: 8:00 AM - 4:30 PM"
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save the message to our storage
    try {
      saveMessage(formData)
      console.log("Message saved:", formData)
      alert("Thank you for your message! We will get back to you soon.")
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" })
    } catch (error) {
      console.error("Error saving message:", error)
      alert("There was an error sending your message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
      <header className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-black py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-center drop-shadow-md">{displayContent.pageTitle}</h1>
            <p className="text-center text-lg mt-2 text-black/80">{displayContent.pageSubtitle}</p>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-xl border-2 border-gold-200">
              <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                <CardTitle className="text-2xl text-gray-900">{displayContent.formTitle}</CardTitle>
                <CardDescription>
                  {displayContent.formDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-1 border-gold-200 focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 border-gold-200 focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="mt-1 border-gold-200 focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1 border-gold-200 focus:border-gold-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-bold shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-xl border-2 border-gold-200">
                <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                  <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
                    <MapPin className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Address</p>
                      <p className="text-gray-700 leading-relaxed">
                        No. 2, East wing, First Floor of 6491A Clyde Road Eastlea, Harare
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
                    <Phone className="h-6 w-6 text-gold-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <p className="text-gray-700 text-lg font-medium">+263713014547</p>
                      <p className="text-gray-700 text-lg font-medium">+263789573321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
                    <Mail className="h-6 w-6 text-gold-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <p className="text-gray-700 font-medium">info@goalgetters.co.zw</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gold-50 rounded-lg border border-gold-200">
                    <Clock className="h-6 w-6 text-gold-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                      <p className="text-gray-700">{displayContent.businessHours.weekdays}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Location */}
              <Card className="shadow-xl border-2 border-gold-200">
                <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                  <CardTitle className="text-xl text-gray-900">Our Location</CardTitle>
                  <CardDescription>No. 2, East wing, First Floor of 6491A Clyde Road Eastlea, Harare</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-gold-200 relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.552617044877!2d31.07731361486898!3d-17.81632348379244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e87e8b8247%3A0xfde689dd132f6639!2sNo.%206491A%20Clyde%20Rd%2C%20Eastlea%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1627565370868!5m2!1sen!2sus"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Goal Getters Financial Services Location - 6491A Clyde Road Eastlea, Harare"
                      className="rounded-lg"
                    ></iframe>
                    
                    {/* Custom location marker overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                        <div className="w-2 h-6 bg-red-600 -mt-1 rounded-b-full"></div>
                        <div className="mt-1 bg-white/90 px-3 py-1 rounded-full shadow-lg text-xs font-medium text-gray-800">
                          Goal Getters Financial Services
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Additional Contact Info */}
              <Card className="shadow-xl border-2 border-gold-200">
                <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                  <CardTitle className="text-xl text-gray-900">Why Contact Us?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-gray-700">Quick loan approval process</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-gray-700">Personalized financial solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-gray-700">Expert financial guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-gray-700">Competitive interest rates</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
