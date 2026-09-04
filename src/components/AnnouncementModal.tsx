import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, springGentle } from './Motion'

const ARTICLE_URL =
  'https://techlabari.com/european-insurer-alan-makes-first-african-bet-buying-senegals-tanel/'

const TITLE =
  'European Insurer Alan Makes First African Bet, Buying Senegal’s Tanel'

const HEADER_COPY =
  "Tanel's exit to Alan - our first exit - showcases our thesis: back outstanding African teams with global appeal who can create alpha returns and impact"

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  if (!mounted || !isOpen) {
    return null
  }

  return createPortal(
    <div className="wf-announce-overlay" role="presentation">
      <button
        type="button"
        className="wf-announce-backdrop"
        aria-label="Dismiss announcement"
        onClick={() => setIsOpen(false)}
      />

      <motion.div
        className="wf-announce-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wf-announce-title"
        style={{ width: 'min(92vw, 680px)', maxHeight: '88vh' }}
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={springGentle}
      >
        <button
          type="button"
          className="wf-announce-close"
          aria-label="Close announcement"
          onClick={() => setIsOpen(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.5 6.5l11 11M17.5 6.5l-11 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <header className="wf-announce-header">
          <p className="wf-announce-header-text">{HEADER_COPY}</p>
        </header>

        <div className="wf-announce-media">
          <img
            src="/alan-tanel-announcement.webp"
            alt="Alan and Tanel leadership teams together after the acquisition announcement"
          />
        </div>

        <div className="wf-announce-body">
          <span className="wf-announce-eyebrow">Announcement</span>
          <h2 id="wf-announce-title" className="wf-announce-title">
            {TITLE}
          </h2>
          <a
            className="wf-announce-link"
            href={ARTICLE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Read more
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>,
    document.body,
  )
}
