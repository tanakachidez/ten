import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"
import { Target, Eye, Heart, Shield, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
      <header className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-black py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center drop-shadow-md">About Us</h1>
          <p className="text-center text-lg mt-2 text-black/80">Learn more about our mission, vision, and values</p>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Mission Section */}
          <ScrollAnimation animation="slideRight">
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gold-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-gold-50 to-gold-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gold-500 rounded-full">
                      <Target className="h-8 w-8 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">MISSION</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To provide the best, affordable and smart financial solutions that empower and addresses the needs
                    of employees and small to medium enterprises in Zimbabwe.
                  </p>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image src="/images/mission.webp" alt="Our Mission" fill className="object-cover" />
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Vision Section */}
          <ScrollAnimation animation="slideLeft" delay={200}>
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gold-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto order-2 lg:order-1">
                  <Image src="/images/vision.jpg" alt="Our Vision" fill className="object-cover" />
                </div>
                <div className="p-8 lg:p-12 bg-gradient-to-bl from-gold-50 to-gold-100 order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gold-500 rounded-full">
                      <Eye className="h-8 w-8 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">VISION</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be a leading financial institution in the provision of affordable and smart financial solution to
                    employed individuals and SMEs in Zimbabwe.
                  </p>
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Values Section */}
          <ScrollAnimation animation="slideUp" delay={400}>
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gold-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-gold-50 to-gold-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gold-500 rounded-full">
                      <Heart className="h-8 w-8 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">VALUES</h2>
                  </div>
                  <div className="space-y-4 mb-6">
                    {["Commitment", "Respect", "Transparency"].map((value, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm border border-gold-200"
                      >
                        <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                        <span className="text-lg font-semibold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 bg-gold-100 p-4 rounded-lg border-l-4 border-gold-500">
                    Goal Getters is a learning institute and encourages a system of continuous improvement.
                  </p>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image src="/images/values.jpg" alt="Our Values" fill className="object-cover" />
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Client Protection Principles with Background */}
          <ScrollAnimation animation="fadeIn" delay={600}>
            <section className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gold-300">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image src="/images/goal-getters-logo.jpg" alt="Goal Getters Logo" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gold-500 rounded-full">
                    <Shield className="h-8 w-8 text-black" />
                  </div>
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                    THE CLIENT PROTECTION PRINCIPLES (CPPs)
                  </h2>
                </div>
                <p className="text-lg text-gold-200 mb-8 bg-black/30 p-4 rounded-lg border-l-4 border-gold-500">
                  All aspects of Goal Getters' operations are guided by these principles:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Appropriate product design and delivery",
                    "Prevention of over-indebtedness",
                    "Transparency",
                    "Responsible Pricing",
                    "Fair and Respectful treatment of clients",
                    "Privacy of client data",
                    "Mechanism of complaint resolution",
                  ].map((principle, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gold-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-3 h-3 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-800 font-medium">{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Additional Info */}
          <ScrollAnimation animation="slideUp" delay={800}>
            <section className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-gold-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
                  <h3 className="text-xl font-bold text-gold-400 mb-4">Contact Information</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="h-5 w-5 text-gold-400" />
                    <span className="text-gray-300">info@goalgetters.co.zw</span>
                  </div>
                </div>
                <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
                  <h3 className="text-xl font-bold text-gold-400 mb-4">Quick Links</h3>
                  <div className="flex flex-wrap gap-4">
                    <a href="/about" className="text-gold-300 hover:text-gold-400 font-medium transition-colors">
                      About Us
                    </a>
                    <a
                      href="/loan-products"
                      className="text-gold-300 hover:text-gold-400 font-medium transition-colors"
                    >
                      Loan Products
                    </a>
                    <a href="/contact" className="text-gold-300 hover:text-gold-400 font-medium transition-colors">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gold-500/30 text-center">
                <p className="text-gold-400 font-bold text-xl">
                  "Empowering dreams through smart financial solutions."
                </p>
              </div>
            </section>
          </ScrollAnimation>
        </div>
      </main>
    </div>
  )
}
