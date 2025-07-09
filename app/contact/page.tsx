"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ fullName: "", email: "", phoneNumber: "", message: "" })
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
            <h1 className="text-4xl md:text-5xl font-bold text-center drop-shadow-md">Contact Us</h1>
            <p className="text-center text-lg mt-2 text-black/80">Get in touch with our team</p>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-xl border-2 border-gold-200">
              <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
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
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Saturday: 8:00 AM - 1:00 PM</p>
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
