import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"
import { Users, User, Sun, GraduationCap, Briefcase, Building } from "lucide-react"

const loanProducts = [
  {
    title: "Group Enterprise Loans",
    description: "For women in groups of 4–8 from the same community or workplace.",
    details: "Co-guaranteed lending for small businesses (poultry, tailoring, retail, farming).",
    repayment: "2–3 months at 15% flat interest",
    icon: Users,
    image: "/images/group-enterprise-loans.jpg",
    color: "bg-green-100 text-green-700 border-green-300",
  },
  {
    title: "Individual Enterprise Loans",
    description: "For women entrepreneurs with larger, established businesses.",
    details: "Perfect for scaling existing businesses and expanding operations.",
    repayment: "2–3 months at 15% flat interest",
    icon: User,
    image: "/images/individual-loans.jpg",
    color: "bg-blue-100 text-blue-700 border-blue-300",
  },
  {
    title: "Solar Loans",
    description: "Covers 50% of solar product costs (panels, inverters, batteries).",
    details: "Remaining 50% is a loan repaid over 3 months at 15% flat interest.",
    repayment: "3 months at 15% flat interest",
    icon: Sun,
    image: "/images/solar-loans.jpg",
    color: "bg-yellow-100 text-yellow-700 border-yellow-300",
  },
  {
    title: "School Fees Loans",
    description: "Educational financing for parents.",
    details: "Support your children's education with flexible payment terms.",
    repayment: "3 months at competitive interest",
    icon: GraduationCap,
    image: "/images/school-loans.jpg",
    color: "bg-purple-100 text-purple-700 border-purple-300",
  },
  {
    title: "Private Sector Salary-Based Loans",
    description: "For private sector employees with steady income.",
    details: "Quick approval process for employed individuals in private companies.",
    repayment: "3 to 6 months",
    icon: Briefcase,
    image: "/images/private-sector-loans.jpg",
    color: "bg-indigo-100 text-indigo-700 border-indigo-300",
  },
  {
    title: "Civil Servants Loans (SSB)",
    description: "Tailored for government employees.",
    details: "Special rates and terms designed specifically for civil servants.",
    repayment: "3 to 6 months",
    icon: Building,
    image: "/images/civil-servants-loan.jpg",
    color: "bg-red-100 text-red-700 border-red-300",
  },
]

export default function LoanProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-white">
      <header className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-black py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">Loan Products</h1>
          <p className="text-lg mt-2 text-black/80">Choose the perfect financial solution for your needs</p>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/grid">
            {loanProducts.map((product, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <Card className="overflow-hidden transition-all duration-500 border-2 border-gold-200 bg-white group/card hover:border-gold-400 hover:shadow-2xl hover:scale-105 hover:z-10 relative group-hover/grid:opacity-50 hover:!opacity-100 hover:!scale-105">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${product.color} border-2 shadow-lg transition-all duration-300 group-hover/card:scale-110`}
                      >
                        <product.icon className="h-4 w-4 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover/card:from-black/30"></div>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-gold-50 to-gold-100 border-b border-gold-200 transition-all duration-300 group-hover/card:from-gold-100 group-hover/card:to-gold-200">
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-3 transition-all duration-300 group-hover/card:text-gray-800">
                      <div className="p-2 bg-gold-500 rounded-full transition-all duration-300 group-hover/card:bg-gold-600 group-hover/card:scale-110">
                        <product.icon className="h-5 w-5 text-black" />
                      </div>
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-medium transition-colors duration-300 group-hover/card:text-gray-700">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 transition-all duration-300 group-hover/card:bg-gold-50/50">
                    <p className="text-gray-700 mb-6 leading-relaxed transition-colors duration-300 group-hover/card:text-gray-800">
                      {product.details}
                    </p>
                    <div className="bg-gradient-to-r from-gold-100 to-gold-200 p-4 rounded-lg border-2 border-gold-300 shadow-inner transition-all duration-300 group-hover/card:from-gold-200 group-hover/card:to-gold-300 group-hover/card:border-gold-400 group-hover/card:shadow-lg">
                      <p className="text-sm font-bold text-gray-900 mb-2">Repayment Terms:</p>
                      <p className="text-gold-700 font-bold text-lg transition-colors duration-300 group-hover/card:text-gold-800">
                        {product.repayment}
                      </p>
                    </div>
                  </CardContent>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold-400/20 via-gold-500/20 to-gold-400/20 blur-xl"></div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Additional Information */}
          <ScrollAnimation animation="fadeIn" delay={800}>
            <section className="mt-16 bg-gradient-to-r from-gold-100 via-gold-200 to-gold-100 rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-gold-400">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Goal Getters?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Quick Approval", desc: "Fast processing and approval of loan applications" },
                  { title: "Competitive Rates", desc: "Affordable interest rates at 15% flat" },
                  { title: "Flexible Terms", desc: "Repayment periods from 2-6 months" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center bg-white p-6 rounded-xl shadow-lg border-2 border-gold-300 hover:shadow-xl transition-shadow"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-black font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollAnimation>
        </div>
      </main>
    </div>
  )
}
