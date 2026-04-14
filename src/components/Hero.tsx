import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { heroContent, heroStats } from '@/data/content'
import { FadeUp, BlurIn, StaggerParent, StaggerItem, motion, useScroll, useTransform, useSpring } from './Motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const rawY1 = useTransform(scrollY, [0, 600], [0, -120])
  const rawY2 = useTransform(scrollY, [0, 600], [0, -60])
  const orb1Y = useSpring(rawY1, { stiffness: 80, damping: 20 })
  const orb2Y = useSpring(rawY2, { stiffness: 60, damping: 20 })

  return (
    <section className="wf-hero position-relative overflow-hidden">
      {/* Animated gradient mesh — orbs parallax on scroll */}
      <div className="wf-hero-mesh" aria-hidden="true">
        <motion.div className="wf-mesh-orb wf-mesh-orb-1" style={{ y: orb1Y }} />
        <motion.div className="wf-mesh-orb wf-mesh-orb-2" style={{ y: orb2Y }} />
        <div className="wf-mesh-orb wf-mesh-orb-3" />
      </div>

      {/* Dot grid pattern */}
      <div className="wf-hero-dots" aria-hidden="true" />

      {/* Floating accent ring */}
      <div className="wf-hero-ring" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Centered editorial layout */}
        <div className="wf-hero-center">
          <BlurIn>
            <motion.div
              className="wf-hero-badge"
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span className="wf-hero-badge-dot" />
              Healthcare · Venture Capital · Africa
            </motion.div>
          </BlurIn>

          <FadeUp>
            <h1 className="wf-hero-h1">
              Healthcare venture<br />
              capital for <span className="wf-hero-accent">Africa</span>
            </h1>
          </FadeUp>

          <FadeUp index={1}>
            <p className="wf-hero-sub">{heroContent.subheadline}</p>
          </FadeUp>

          <FadeUp index={2}>
            <div className="wf-hero-actions">
              <motion.a
                className="wf-btn wf-btn-primary-hero"
                href={heroContent.ctaPrimary.href}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {heroContent.ctaPrimary.label}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2.5} className="ms-2" />
              </motion.a>
              <motion.a
                className="wf-btn wf-btn-ghost"
                href={heroContent.ctaSecondary.href}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {heroContent.ctaSecondary.label}
              </motion.a>
            </div>
          </FadeUp>
        </div>

        {/* Stats ticker bar */}
        <StaggerParent className="wf-hero-stats-bar">
          {heroStats.map((s, i) => (
            <StaggerItem key={s.label} index={i} className="wf-hero-stat-cell">
              <span className="wf-stat-num">{s.value}</span>
              <span className="wf-stat-text">{s.label}</span>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>

      {/* Scroll indicator */}
      <FadeUp index={4}>
        <div className="wf-hero-scroll">
          <div className="wf-hero-scroll-line" />
        </div>
      </FadeUp>
    </section>
  )
}
