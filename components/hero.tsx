"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] md:text-[25vw] font-black tracking-tighter text-foreground/5 leading-none">
          YT&apos;s
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Premium Streetwear
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-6 text-balance">
            WEAR YOUR<br /><span className="text-gold">ATTITUDE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Bold designs. Premium quality. Every tee tells a story. 
            Express yourself with YT&apos;s exclusive streetwear collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="uppercase tracking-widest text-sm font-bold group">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="uppercase tracking-widest text-sm font-bold">
              New Drops
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-gold">Scroll</span>
        <div className="w-px h-12 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  )
}
