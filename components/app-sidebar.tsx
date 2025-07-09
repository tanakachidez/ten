"use client"

import { Home, Info, CreditCard, Phone, Shield } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
  {
    title: "Loan Products",
    url: "/loan-products",
    icon: CreditCard,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Phone,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: Shield,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gold-200">
      <SidebarHeader className="p-6 bg-gradient-to-b from-gold-400 to-gold-500">
        <div className="text-center">
          <h2 className="text-xl font-bold text-black">Goal Getters</h2>
          <p className="text-sm text-black/80">Financial Services</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gold-600 font-semibold">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-gold-50 hover:text-gold-700">
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 bg-gold-50">
        <div className="text-xs text-center text-gray-600">
          <p>Empowering dreams through</p>
          <p className="font-semibold text-gold-600">smart financial solutions</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
