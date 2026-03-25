"use client"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-black tracking-tighter text-foreground/3 leading-none">
          YT&apos;s
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Our Story
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-8">
            BORN FROM<br /><span className="text-gold">THE STREETS</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            YT&apos;s started with one simple belief: clothing should be an expression of who you are. 
            Every design is crafted to make a statement, using only premium materials that feel 
            as good as they look.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From underground beginnings to global recognition, we remain committed to 
            authenticity, quality, and the culture that inspires us every day.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 border border-border bg-card">
            <span className="text-5xl font-black text-gold mb-4 block">01</span>
            <h3 className="text-sm uppercase tracking-widest font-bold text-foreground mb-3">Premium Quality</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Only the finest materials. Heavyweight cotton that lasts.
            </p>
          </div>
          <div className="text-center p-8 border border-border bg-card">
            <span className="text-5xl font-black text-gold mb-4 block">02</span>
            <h3 className="text-sm uppercase tracking-widest font-bold text-foreground mb-3">Original Designs</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every piece is an original. No copies, no compromises.
            </p>
          </div>
          <div className="text-center p-8 border border-border bg-card">
            <span className="text-5xl font-black text-gold mb-4 block">03</span>
            <h3 className="text-sm uppercase tracking-widest font-bold text-foreground mb-3">Print On Demand</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Made to order. Less waste, more value for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
