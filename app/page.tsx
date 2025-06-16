import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import ServicesOverview from '../components/ServicesOverview'
import Testimonials from '../components/Testimonials'
import Process from '../components/Process'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesOverview />
      <Testimonials />
      <Process />
    </>
  )
}