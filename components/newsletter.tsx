"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-gold-light">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Stay Updated
          </p>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
            JOIN THE CREW
          </h2>

          <p className="text-lg text-foreground/70 leading-relaxed mb-10">
            Be the first to know about new drops, exclusive offers, 
            and limited editions. No spam, just heat.
          </p>

          {submitted ? (
            <div className="p-6 border border-foreground/20 bg-card">
              <p className="text-lg font-bold uppercase tracking-widest text-foreground">
                You&apos;re In
              </p>
              <p className="text-foreground/70 mt-2">Welcome to the crew.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border-border text-foreground placeholder:text-foreground/50 focus:border-gold"
                required
              />
              <Button 
                type="submit"
                className="uppercase tracking-widest text-xs font-bold bg-foreground text-background hover:bg-foreground/90"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
