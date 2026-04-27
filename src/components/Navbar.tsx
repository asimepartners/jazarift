import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { useScroll, useTransform, useSpring, motion, springSnappy } from './Motion'

export default function Navbar() {
  const { scrollY } = useScroll()
  const rawOpacity = useTransform(scrollY, [0, 80], [0, 0.96])
  const rawBlur = useTransform(scrollY, [0, 80], [0, 18])
  const bgAlpha = useSpring(rawOpacity, { stiffness: 200, damping: 30 })
  const blurPx = useSpring(rawBlur, { stiffness: 200, damping: 30 })

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={springSnappy}
    >
      <nav className="navbar navbar-expand-lg fixed-top wf-nav" style={{ position: 'fixed' }}>
        {/* Scroll-reactive glass backdrop */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, zIndex: -1,
            backgroundColor: `rgba(10,13,18,${bgAlpha})`,
            backdropFilter: `blur(${blurPx}px)`,
            WebkitBackdropFilter: `blur(${blurPx}px)`,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        />
        <div className="container">
          <a className="navbar-brand wf-brand" href="#">
            <img src="/jaza-rift-blue.png" alt="Jaza Rift Ventures" className="wf-brand-logo" />
          </a>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto me-lg-4 gap-lg-1">
              {[
                { label: 'WHAT WE DO', href: '#ventures' },
                { label: 'VENTURES', href: '#thesis' },
                { label: 'ADVISORY', href: '#framework' },
                { label: 'INNOVATION LAB', href: '#innovation-lab' },
                { label: 'PORTFOLIO', href: '#portfolio' },
                { label: 'INSIGHTS', href: '#insights' },
              ].map((item) => (
                <li className="nav-item" key={item.label}>
                  <motion.a
                    className="nav-link wf-nav-link"
                    href={item.href}
                    whileHover={{ y: -1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.a
              className="btn wf-btn-nav"
              href="http://tinyurl.com/jazarift" target="_blank"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              APPLY
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2.5} className="ms-2" />
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
