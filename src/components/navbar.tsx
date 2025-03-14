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
    <nav className="w-full fixed z-50 py-4 bg-gradient-to-r from-black to-gray-900 border-b border-gray-800">
      <div className="container px-4 md:px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-white font-bold text-xl">
          NextStack
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          {
            !userId ? (
              <div className="flex items-center space-x-3">
              <Link href="/sign-in">
              <Button variant="outline" className="text-gray-700 cursor-pointer">
                Log In
              </Button>
              </Link>
              <Link href="/sign-up">
              <Button variant="outline" className="text-gray-700 cursor-pointer">
                Sign Up
              </Button>
              </Link>
            </div>
            ):(
              <UserButton/>
            )
          }
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {
            !userId? (
              <div className="flex flex-col space-y-3 pt-2">
              <Link href="/sign-in">
              <Button variant="outline" className="text-gray-700 cursor-pointer">
                Log In
              </Button>
              </Link>
              <Link href="/sign-up">
              <Button variant="outline" className="text-gray-700 cursor-pointer">
                Sign Up
              </Button>
              </Link>
            </div>
            ):(
              <UserButton/>
            )
          }
          </div>
        </div>
      )}
    </nav>
  )
}

