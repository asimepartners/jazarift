import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Thesis from './components/Thesis'
import InnovationLabs from './components/InnovationLabs'
import Portfolio from './components/Portfolio'
import Francophone from './components/Francophone'
import Insights from './components/Insights'
import ApplyCta from './components/ApplyCta'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Thesis />
        <InnovationLabs />
        <Portfolio />
        <Francophone />
        <Insights />
        <ApplyCta />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
