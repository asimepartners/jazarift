import { HugeiconsIcon } from '@hugeicons/react'
import { ChartIncreaseIcon, Briefcase01Icon, TestTube01Icon } from '@hugeicons/core-free-icons'
import { AnimatedSection, FadeUp, BlurIn, StaggerParent, StaggerItem, motion } from './Motion'

const pillars = [
  {
    number: '01',
    label: 'Ventures',
    title: 'Jaza Rift Ventures',
    body: 'An investment holding company solely focused on healthcare in Africa. We support reslient founders and entrepreneurs from pre-Seed to Series A with targeted capital and hands-on support in digital health, medtech, biotech and assistive technologies.',
    icon: ChartIncreaseIcon,
    href: '#portfolio',
  },
  {
    number: '02',
    label: 'Advisory',
    title: 'Jaza Rift Advisory',
    body: 'A healthcare-focused strategy, financial & business advisory firm covering both Francophone and Anglophone Africa. We serve PE, VC, and impact investors with due diligence, valuation, investment structuring, and transaction execution.',
    icon: Briefcase01Icon,
    href: '#framework',
  },
  {
    number: '03',
    label: 'Innovation Lab',
    title: 'Innovation Lab',
    body: 'A pan-African healthcare innovation team partnering with Global Health actors to drive innovations across the healthcare spectrum in Africa. We implement healthcare focused innovation programs, offer Corporate VC-as-a-Service and run hackathons, ideation labs, and human-centered design programs.',
    icon: TestTube01Icon,
    href: '#thesis',
  },
]

export default function WhatWeDo() {
  return (
    <AnimatedSection id="ventures" className="wf-whatwedo">
      <div className="container">

        {/* Header */}
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">What We Do</span>
          <div className="wf-hr" />
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-lg-5">
            <FadeUp>
              <h2 className="wf-display">
                One Platform for<br />
                <span className="wf-display-accent">Healthcare Transformation</span>
              </h2>
            </FadeUp>
          </div>
          <div className="col-lg-5 offset-lg-2 mt-4 mt-lg-0 d-flex align-items-end">
            <BlurIn>
              <p className="wf-prose">
                Jaza Rift operates at the intersection of capital, advisory expertise, and disruptive innovation creating an integrated ecosystem for healthcare impact across Africa. Vision: We envision a future where healthcare in Africa is a cornerstone of economic prosperity. Aligned to SDG3, our vision is anchored in the belief that through strategic investments, sector-focused value creation, and corporate partnerships, we can create sustainable impact, and achieve a state where healthcare is affordable, accessible and of quality for all. Mission: catalyze positive change in healthcare in Africa through targeted investments, a network of advisors  and coaches and a comprehensive scaling methodology for digital health, medtech, and biotech innovations and inventions. 
              </p>
            </BlurIn>
          </div>
        </div>

        {/* Pillars */}
        <StaggerParent className="wf-pillars">
          {pillars.map((p, i) => (
            <StaggerItem key={p.number} index={i} className="wf-pillar">
              <motion.div
                className="wf-pillar-inner"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                {/* Icon */}
                <div className="wf-pillar-top">
                  <span className="wf-pillar-icon">
                    <HugeiconsIcon icon={p.icon} size={22} strokeWidth={1.5} color="currentColor" />
                  </span>
                </div>

                {/* Title */}
                <h3 className="wf-pillar-title">{p.title}</h3>

                {/* Body */}
                <p className="wf-pillar-body">{p.body}</p>

                {/* CTA */}
                <a href={p.href} className="wf-pillar-link">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>

      </div>
    </AnimatedSection>
  )
}
