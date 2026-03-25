"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="YT's Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-foreground">
              YT&apos;s
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#drops" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Drops
            </Link>
            <Link href="#collection" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Collection
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-gold text-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="uppercase tracking-widest text-xs font-bold">
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#drops" 
                className="text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Drops
              </Link>
              <Link 
                href="#collection" 
                className="text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link 
                href="#about" 
                className="text-lg uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button className="uppercase tracking-widest text-xs font-bold mt-4 w-full">
                Shop Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
