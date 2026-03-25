"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  name: string
  price: number
  image: string
  tag?: string
}

export function ProductCard({ name, price, image, tag }: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Tag */}
        {tag && (
          <div className="absolute top-4 left-4">
            <span className="bg-gold text-foreground text-xs uppercase tracking-widest px-3 py-1 font-bold">
              {tag}
            </span>
          </div>
        )}

        {/* Quick Add */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full uppercase tracking-widest text-xs font-bold">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Bag
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-sm uppercase tracking-wider font-medium text-foreground">{name}</h3>
        <span className="text-sm text-muted-foreground">${price}</span>
      </div>
    </div>
  )
}
