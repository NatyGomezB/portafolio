import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'
import { getProjects } from '@/lib/projects'

export default async function HomePage() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-bg">
      <Navigation />
      <Hero />
      <Marquee />
      <FeaturedProjects projects={projects} />
      <Footer />
    </main>
  )
}
