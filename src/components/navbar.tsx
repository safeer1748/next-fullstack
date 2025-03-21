"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth, UserButton } from "@clerk/nextjs"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {userId}=useAuth()
  return (
    <nav className="w-full fixed z-50 py-4 ">
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between max-w-[100rem]">
        {/* Logo/Brand */}
        <Link href="/" className="font-bold text-xl">
          NextStack
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 ">
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-black transition-colors">
              Contact
            </Link>
          </div>
          {
            !userId ? (
              <div className="flex items-center space-x-3">
              <Link href="/sign-in">
              <Button  className="text-white cursor-pointer">
                Sign In
              </Button>
              </Link>
            </div>
            ):(
              <div className="flex items-center space-x-3">
              <Link href="/todos">
              <Button variant="outline" className="text-gray-800 border border-gray-500 cursor-pointer">
                Todos
              </Button>
              </Link>
              <UserButton/>
            </div>
              
            )
          }
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer text-gray-800 hover:text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container px-4 py-4 bg-white flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {
            !userId? (
              <div className="flex flex-col space-y-3 pt-2">
              <Link href="/sign-in">
              <Button  className="text-white cursor-pointer">
                Sign In
              </Button>
              </Link>
            </div>
            ):(
              <div className="flex flex-col space-y-3 pt-2">
              <Link href="/todos">
              <Button variant="outline" className="text-gray-800 border border-gray-500 cursor-pointer">
                Todos
              </Button>
              </Link>
              <UserButton/>
            </div>
              
            )
          }
          </div>
        </div>
      )}
    </nav>
  )
}

