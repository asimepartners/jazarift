import { fourCs, threeTs, diligenceCards } from '@/data/content'
import { AnimatedSection, FadeUp, SlideLeft, StaggerParent, StaggerItem } from './Motion'

export default function Framework() {
  return (
    <AnimatedSection id="framework" className="wf-section wf-section-grey">
      <div className="container">
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">Our Framework</span>
          <div className="wf-hr" />
        </div>

        {/* Hero row with 4C badges */}
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6">
            <FadeUp>
              <h2 className="wf-display">How We<br />Invest</h2>
            </FadeUp>
            <FadeUp index={1}>
              <p className="wf-prose mt-3">
                We evaluate all investments through our 3Ts framework 
                a rigorous but founder-friendly approach powered by our 4Cs.
              </p>
            </FadeUp>
          </div>
          <div className="col-lg-5 offset-lg-1 mt-4 mt-lg-0">
            <SlideLeft>
              <div className="d-flex flex-wrap gap-3 justify-content-lg-end">
                {fourCs.map((c) => (
                  <div key={c.label} className="wf-4c-pill">
                    <strong>{c.code}</strong>
                    <span>{c.label}</span>
                  </div>
                ))}
              </div>
            </SlideLeft>
          </div>
        </div>

        {/* 3Ts cards */}
        <StaggerParent className="row g-4 mt-5">
          {threeTs.map((t, i) => (
            <StaggerItem key={t.title} index={i} className="col-lg-4">
              <div className="wf-tt-card">
                <div className="wf-tt-num">{t.code}</div>
                <div className="wf-tt-divider" />
                <h3 className="wf-card-heading">{t.title}</h3>
                <p className="wf-card-body">{t.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerParent>

        {/* Diligence cards */}
        <StaggerParent className="row g-4 mt-4">
          {diligenceCards.map((d, i) => (
            <StaggerItem key={d.title} index={i} className="col-md-6">
              <div className="wf-diligence-card">
                <span className="wf-eyebrow">{d.label}</span>
                <h3 className="wf-card-heading mt-3">{d.title}</h3>
                <p className="wf-card-body mt-2">{d.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
