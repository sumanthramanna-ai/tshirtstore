import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Collection } from "@/components/collection"
import { Featured } from "@/components/featured"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <Collection />
      <About />
      <Newsletter />
      <Footer />
    </main>
  )
}
