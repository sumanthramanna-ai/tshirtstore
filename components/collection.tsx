"use client"

import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Raw Energy Tee",
    price: 45,
    image: "/products/tee-1.jpg",
    tag: "New"
  },
  {
    name: "Urban Legend Tee",
    price: 45,
    image: "/products/tee-2.jpg",
  },
  {
    name: "Street Code Tee",
    price: 50,
    image: "/products/tee-3.jpg",
    tag: "Best Seller"
  },
  {
    name: "Night Shift Tee",
    price: 45,
    image: "/products/tee-4.jpg",
  },
]

export function Collection() {
  return (
    <section id="collection" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              The Collection
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground">
              LATEST<br /><span className="text-gold">DROPS</span>
            </h2>
          </div>
          <Button variant="ghost" className="uppercase tracking-widest text-xs font-bold group self-start md:self-auto">
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
