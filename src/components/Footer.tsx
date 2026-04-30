import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon, Linkedin01Icon, NewTwitterIcon } from '@hugeicons/core-free-icons'
import { offices } from '@/data/content'
import { FadeIn, motion } from './Motion'

export default function Footer() {
  return (
    <FadeIn>
      <footer className="wf-ft">

        {/* ── CTA band ── */}
        <div className="wf-ft-cta">
          <div className="container">
            <div className="wf-ft-cta-inner">
              <div className="wf-ft-cta-text">
                <p className="wf-ft-eyebrow">Ready to build?</p>
                <h2 className="wf-ft-headline">
                  Let's back Africa's<br />
                  <span className="wf-ft-headline-accent">Next Breakthrough.</span>
                </h2>
              </div>
              <motion.a
                href="mailto:connect@jazarift.vc"
                className="wf-ft-cta-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Get in Touch
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="wf-ft-body">
          <div className="container">
            <div className="wf-ft-grid">

              {/* Brand col */}
              <div className="wf-ft-col wf-ft-col--brand">
                <a href="#" className="wf-ft-brand">
                  <img src="/jaza-rift-blue.png" alt="Jaza Rift Ventures" className="wf-ft-logo" />
                </a>
                <p className="wf-ft-desc">
                  An investment holding, transaction advisory and innovation lab for healthcare in Africa.
                </p>
                <div className="wf-ft-socials">
                  <a href="https://linkedin.com/company/jazarift" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="wf-ft-social">
                    <HugeiconsIcon icon={Linkedin01Icon} size={14} strokeWidth={1.5} />
                  </a>
                  <a href="https://x.com/JazaRift" target="_blank" rel="noreferrer" aria-label="X" className="wf-ft-social">
                    <HugeiconsIcon icon={NewTwitterIcon} size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* Nav col */}
              <div className="wf-ft-col">
                <p className="wf-ft-col-label">Navigate</p>
                <nav className="wf-ft-nav">
                  {['Thesis', 'Portfolio', 'Framework', 'Insights', 'Apply'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="wf-ft-link">{item}</a>
                  ))}
                </nav>
              </div>

              {/* Offices col */}
              <div className="wf-ft-col">
                <p className="wf-ft-col-label">Offices</p>
                {offices.map((o) => (
                  <div key={o.city} className="wf-ft-office">
                    <span className="wf-ft-office-city">{o.city}</span>
                    {o.lines.map((l) => (
                      <span key={l} className="wf-ft-office-line">{l}</span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Contact col 
              <div className="wf-ft-col">
                <p className="wf-ft-col-label">Contact</p>
                <a href="mailto:connect@jazarift.vc" className="wf-ft-contact-link">connect@jazarift.vc</a>
              </div>*/}

            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="wf-ft-bar">
          <div className="container">
            <div className="wf-ft-bar-inner">
              <span className="wf-ft-copy">© {new Date().getFullYear()} Jaza Rift Ventures. All rights reserved.</span>
              <div className="wf-ft-legal">
                <a href="/privacy.html" target="_blank" rel="noreferrer" className="wf-ft-legal-link">Privacy</a>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </FadeIn>
  )
}
