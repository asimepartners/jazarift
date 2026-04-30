import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

const platformCards = [
  {
    label: 'Blog & Deep Research',
    title: 'Subscribe to our blog',
    href: 'https://jazarift.substack.com',
    description: 'Read long-form essays, sector analysis, and founder-focused thinking on African healthcare innovation from the Jaza Rift ecosystem.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 9h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 12.5h12v6H6z" fill="currentColor" opacity="0.16" />
        <path d="M6 12.5h12v6H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Articles & Research',
    title: 'Interact with us on LinkedIn',
    href: 'https://linkedin.com/company/jazarift/posts',
    description: 'Follow our updates, perspectives, ecosystem highlights, and transaction advisory insights across Africa’s health innovation landscape.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8.3" cy="9" r="1.1" fill="currentColor" />
        <path d="M7.5 11.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 16.5v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 13.2c0-1.1.9-2 2-2s2 .9 2 2v3.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Podcasts & Interviews',
    title: 'Engage with our podcasts',
    href: 'https://youtube.com/@jazarift',
    description: 'Watch interviews, market explainers, founder conversations, and practical video content on African healthcare innovation and capital.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="6.5" width="17" height="11" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 9.8l5 2.7-5 2.7V9.8z" fill="currentColor" />
      </svg>
    ),
  },
] as const

export default function Insights() {
  return (
    <AnimatedSection id="insights" className="wf-section">
      <div className="container">
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">Insights</span>
          <div className="wf-hr" />
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-lg-7">
            <FadeUp>
              <h2 className="wf-display">Insights & Research</h2>
            </FadeUp>
          </div>
        </div>

        <StaggerParent className="row g-4 mt-2">
          {platformCards.map((card, i) => (
            <StaggerItem key={card.title} index={i} className="col-md-6 col-lg-4">
              <motion.a
                className="wf-insight-card wf-insight-card-link"
                href={card.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className="wf-insight-platform-icon">{card.icon}</span>
                <span className="wf-insight-badge mt-4">{card.label}</span>
                <h3 className="wf-card-heading mt-3">{card.title}</h3>
                <p className="wf-card-body mt-2">{card.description}</p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
