"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Featured() {
  return (
    <section id="drops" className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-background overflow-hidden">
            <Image
              src="/products/featured.jpg"
              alt="Featured Drop"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-gold text-foreground text-xs uppercase tracking-widest px-4 py-2 font-bold">
                Limited Edition
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Featured Drop
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-background mb-6">
              THE ICON<br />SERIES
            </h2>
            <p className="text-lg text-background/70 leading-relaxed mb-8">
              Our most ambitious collection yet. Premium heavyweight cotton, 
              hand-finished details, and designs that push boundaries. 
              Limited to 100 pieces worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="uppercase tracking-widest text-sm font-bold group bg-gold text-foreground hover:bg-gold/90">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="uppercase tracking-widest text-sm font-bold border-background/30 text-background hover:bg-background/10">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-background/20">
              <div>
                <span className="text-3xl md:text-4xl font-black text-gold">100</span>
                <p className="text-xs uppercase tracking-widest text-background/60 mt-1">Limited Pieces</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black text-gold">300g</span>
                <p className="text-xs uppercase tracking-widest text-background/60 mt-1">Premium Cotton</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-black text-gold">24</span>
                <p className="text-xs uppercase tracking-widest text-background/60 mt-1">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
