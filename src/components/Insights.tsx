import { insights } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Insights() {
  const featured = insights.filter((ins) => ins.featured)
  const regular = insights.filter((ins) => !ins.featured)

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
              <h2 className="wf-display">Thinking on African<br />Health Innovation</h2>
            </FadeUp>
          </div>
        </div>

        {/* Featured insight — full width editorial */}
        {featured.map((ins) => (
          <FadeUp key={ins.title}>
            <div className="wf-insight-hero">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <span className="wf-insight-badge">{ins.label}</span>
                  <h3 className="wf-insight-hero-title mt-3">{ins.title}</h3>
                </div>
                <div className="col-lg-4 offset-lg-1 mt-3 mt-lg-0">
                  <p className="wf-card-body">{ins.description}</p>
                  <div className="wf-insight-meta mt-3">Jaza Rift Ventures · {ins.year}</div>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}

        {/* Regular insights */}
        <StaggerParent className="row g-4 mt-4">
          {regular.map((ins, i) => (
            <StaggerItem key={ins.title} index={i} className="col-md-6">
              <motion.div
                className="wf-insight-card"
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className="wf-insight-badge">{ins.label}</span>
                <h3 className="wf-card-heading mt-3">{ins.title}</h3>
                <p className="wf-card-body mt-2">{ins.description}</p>
                <div className="wf-insight-meta mt-3">{ins.year}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
