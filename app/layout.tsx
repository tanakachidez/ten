import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { HorizontalNav } from "@/components/horizontal-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Goal Getters Financial Services",
  description: "Helps you to live your dream - Smart financial solutions for Zimbabwe",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HorizontalNav />
        <main>{children}</main>
      </body>
    </html>
  )
}
