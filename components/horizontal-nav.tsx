"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info, CreditCard, Phone, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "/about", icon: Info },
  { title: "Loan Products", href: "/loan-products", icon: CreditCard },
  { title: "Contact", href: "/contact", icon: Phone },
  { title: "Admin", href: "/admin", icon: Shield },
]

export function HorizontalNav() {
  const pathname = usePathname()

  return (
    <nav className="bg-gradient-to-r from-gold-400 to-gold-500 shadow-lg border-b-2 border-gold-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="text-black font-bold text-xl">Goal Getters</div>
            <div className="hidden md:block text-black/80 text-sm">Financial Services</div>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                    isActive ? "bg-black/20 text-black shadow-md" : "text-black/80 hover:bg-black/10 hover:text-black",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="hidden sm:block">{item.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
