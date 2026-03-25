import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="YT's Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="text-3xl font-black tracking-tighter text-foreground">
                YT&apos;s
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Premium streetwear. Made to order. Designed to stand out.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="h-10 w-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-foreground mb-4">Shop</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                All Products
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                New Arrivals
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Best Sellers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Limited Edition
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-foreground mb-4">Info</h3>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shipping
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Returns
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} YT&apos;s. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
