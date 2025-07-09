"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Eye, Edit, Trash2, MessageSquare, Save, Home, Info, Phone } from "lucide-react"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ username: "", password: "" })

  // Content state management
  const [homeContent, setHomeContent] = useState({
    heroTitle: "Goal Getters Financial Services",
    heroSubtitle: "Helps you to live your dream",
    address: "No. 2, East wing, First Floor of 6491A Clyde Road Eastlea, Harare",
    phone: "+263713014547",
    email: "info@goalgetters.co.zw",
  })

  const [aboutContent, setAboutContent] = useState({
    mission:
      "To provide the best, affordable and smart financial solutions that empower and addresses the needs of employees and small to medium enterprises in Zimbabwe.",
    vision:
      "To be a leading financial institution in the provision of affordable and smart financial solution to employed individuals and SMEs in Zimbabwe.",
    values: ["Commitment", "Respect", "Transparency"],
    valuesDescription: "Goal Getters is a learning institute and encourages a system of continuous improvement.",
  })

  const [contactContent, setContactContent] = useState({
    pageTitle: "Contact Us",
    pageSubtitle: "Get in touch with our team",
    formTitle: "Send us a Message",
    formDescription: "Fill out the form below and we'll get back to you as soon as possible.",
    businessHours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 8:00 AM - 1:00 PM",
    },
  })

  // Mock data for demonstration
  const mockMessages = [
    {
      id: 1,
      fullName: "John Doe",
      email: "john@example.com",
      phoneNumber: "+263712345678",
      message: "I'm interested in a group enterprise loan for my farming business.",
      date: "2024-01-15",
      status: "unread",
    },
    {
      id: 2,
      fullName: "Mary Smith",
      email: "mary@example.com",
      phoneNumber: "+263723456789",
      message: "Can you provide more information about solar loans?",
      date: "2024-01-14",
      status: "read",
    },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple demo login - in production, this would be properly secured
    if (loginData.username === "admin" && loginData.password === "password") {
      setIsLoggedIn(true)
    } else {
      alert("Invalid credentials. Use username: admin, password: password")
    }
  }

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSaveContent = (contentType: string) => {
    // In a real application, this would save to a database
    alert(`${contentType} content saved successfully!`)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
        <header className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-black py-8 shadow-lg">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center drop-shadow-md">Admin Login</h1>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-md mx-auto mt-12">
            <Card className="animate-fadeIn shadow-xl border-2 border-gold-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
                <CardDescription className="text-center">Please login to access the admin dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      value={loginData.username}
                      onChange={handleLoginChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-bold shadow-lg"
                  >
                    Login
                  </Button>
                </form>
                <div className="mt-4 p-3 bg-gold-50 rounded text-sm text-gray-600 border border-gold-200">
                  <p>
                    <strong>Demo Credentials:</strong>
                  </p>
                  <p>Username: admin</p>
                  <p>Password: password</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
      <header className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-black py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">Admin Dashboard</h1>
              <p className="text-lg mt-2 text-black/80">Manage your website content and messages</p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsLoggedIn(false)}
              className="border-2 border-black text-black hover:bg-black/10 bg-white/20 font-bold shadow-lg"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="messages" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-gold-100 border-2 border-gold-300">
              <TabsTrigger
                value="messages"
                className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-black"
              >
                <MessageSquare className="h-4 w-4" />
                Messages
              </TabsTrigger>
              <TabsTrigger
                value="content"
                className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-black"
              >
                <Edit className="h-4 w-4" />
                Content Editor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="space-y-6">
              <Card className="animate-fadeIn shadow-xl border-2 border-gold-200">
                <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-gold-600" />
                    Contact Messages
                  </CardTitle>
                  <CardDescription>View and manage messages from the contact form</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {mockMessages.map((message) => (
                      <div
                        key={message.id}
                        className="border-2 border-gold-200 rounded-lg p-4 hover:bg-gold-50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{message.fullName}</h3>
                            <p className="text-sm text-gray-600">
                              {message.email} • {message.phoneNumber}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={message.status === "unread" ? "default" : "secondary"}
                              className={message.status === "unread" ? "bg-gold-500 text-black" : ""}
                            >
                              {message.status}
                            </Badge>
                            <span className="text-xs text-gray-500">{message.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{message.message}</p>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gold-300 hover:bg-gold-50 bg-transparent"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" className="bg-gold-500 hover:bg-gold-600 text-black">
                            Reply
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700 border-red-300 hover:bg-red-50 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              {/* Home Page Content Editor */}
              <Card className="animate-fadeIn shadow-xl border-2 border-gold-200">
                <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-gold-600" />
                    Home Page Content
                  </CardTitle>
                  <CardDescription>Edit the main content displayed on the home page</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="heroTitle">Hero Title</Label>
                      <Input
                        id="heroTitle"
                        value={homeContent.heroTitle}
                        onChange={(e) => setHomeContent({ ...homeContent, heroTitle: e.target.value })}
                        className="mt-1 border-gold-200 focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                      <Input
                        id="heroSubtitle"
                        value={homeContent.heroSubtitle}
                        onChange={(e) => setHomeContent({ ...homeContent, heroSubtitle: e.target.value })}
                        className="mt-1 border-gold-200 focus:border-gold-400"
                      />
                    </div>
                  </div>
                  <Separator />
                  <h4 className="font-semibold text-gray-900">Contact Information</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={homeContent.address}
                        onChange={(e) => setHomeContent({ ...homeContent, address: e.target.value })}
                        className="mt-1 border-gold-200 focus:border-gold-400"
                        rows={2}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={homeContent.phone}
                          onChange={(e) => setHomeContent({ ...homeContent, phone: e.target.value })}
                          className="mt-1 border-gold-200 focus:border-gold-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          value={homeContent.email}
                          onChange={(e) => setHomeContent({ ...homeContent, email: e.target.value })}
                          className="mt-1 border-gold-200 focus:border-gold-400"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSaveContent("Home Page")}
                    className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-bold shadow-lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Home Page Content
                  </Button>
                </CardContent>
              </Card>

              {/* About Page Content Editor */}
              <Card className="animate-fadeIn shadow-xl border-2 border-gold-200">
                <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-gold-600" />
                    About Page Content
                  </CardTitle>
                  <CardDescription>Edit mission, vision, and values content</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Label htmlFor="mission">Mission Statement</Label>
                    <Textarea
                      id="mission"
                      value={aboutContent.mission}
                      onChange={(e) => setAboutContent({ ...aboutContent, mission: e.target.value })}
                      className="mt-1 border-gold-200 focus:border-gold-400"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="vision">Vision Statement</Label>
                    <Textarea
                      id="vision"
                      value={aboutContent.vision}
                      onChange={(e) => setAboutContent({ ...aboutContent, vision: e.target.value })}
                      className="mt-1 border-gold-200 focus:border-gold-400"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="valuesDescription">Values Description</Label>
                    <Textarea
                      id="valuesDescription"
                      value={aboutContent.valuesDescription}
                      onChange={(e) => setAboutContent({ ...aboutContent, valuesDescription: e.target.value })}
                      className="mt-1 border-gold-200 focus:border-gold-400"
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label>Core Values</Label>
                    <div className="mt-2 space-y-2">
                      {aboutContent.values.map((value, index) => (
                        <Input
                          key={index}
                          value={value}
                          onChange={(e) => {
                            const newValues = [...aboutContent.values]
                            newValues[index] = e.target.value
                            setAboutContent({ ...aboutContent, values: newValues })
                          }}
                          className="border-gold-200 focus:border-gold-400"
                        />
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSaveContent("About Page")}
                    className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-bold shadow-lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save About Page Content
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Page Content Editor */}
              <Card className="animate-fadeIn shadow-xl border-2 border-gold-200">
                <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gold-600" />
                    Contact Page Content
                  </CardTitle>
                  <CardDescription>Edit contact page text and information</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pageTitle">Page Title</Label>
                      <Input
                        id="pageTitle"
                        value={contactContent.pageTitle}
                        onChange={(e) => setContactContent({ ...contactContent, pageTitle: e.target.value })}
                        className="mt-1 border-gold-200 focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pageSubtitle">Page Subtitle</Label>
                      <Input
                        id="pageSubtitle"
                        value={contactContent.pageSubtitle}
                        onChange={(e) => setContactContent({ ...contactContent, pageSubtitle: e.target.value })}
                        className="mt-1 border-gold-200 focus:border-gold-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="formTitle">Contact Form Title</Label>
                    <Input
                      id="formTitle"
                      value={contactContent.formTitle}
                      onChange={(e) => setContactContent({ ...contactContent, formTitle: e.target.value })}
                      className="mt-1 border-gold-200 focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="formDescription">Contact Form Description</Label>
                    <Textarea
                      id="formDescription"
                      value={contactContent.formDescription}
                      onChange={(e) => setContactContent({ ...contactContent, formDescription: e.target.value })}
                      className="mt-1 border-gold-200 focus:border-gold-400"
                      rows={2}
                    />
                  </div>
                  <Separator />
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weekdays">Weekdays</Label>
                      <Input
                        id="weekdays"
                        value={contactContent.businessHours.weekdays}
                        onChange={(e) =>
                          setContactContent({
                            ...contactContent,
                            businessHours: { ...contactContent.businessHours, weekdays: e.target.value },
                          })
                        }
                        className="mt-1 border-gold-200 focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="saturday">Saturday</Label>
                      <Input
                        id="saturday"
                        value={contactContent.businessHours.saturday}
                        onChange={(e) =>
                          setContactContent({
                            ...contactContent,
                            businessHours: { ...contactContent.businessHours, saturday: e.target.value },
                          })
                        }
                        className="mt-1 border-gold-200 focus:border-gold-400"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSaveContent("Contact Page")}
                    className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-black font-bold shadow-lg"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Contact Page Content
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
