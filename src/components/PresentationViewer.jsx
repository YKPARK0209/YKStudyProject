import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './PresentationViewer.css'

export default function PresentationViewer({ slides, title }) {
  const [current, setCurrent] = useState(0)
  const [uiVisible, setUiVisible] = useState(false)
  const hideTimer = useRef(null)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const navigate = useNavigate()

  const revealUi = useCallback(() => {
    setUiVisible(true)
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setUiVisible(false), 2500)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        setCurrent(c => Math.min(c + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft') {
        setCurrent(c => Math.max(c - 1, 0))
      } else if (e.key === 'Escape') {
        navigate('/')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slides.length, navigate])

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) setCurrent(c => Math.min(c + 1, slides.length - 1))
      else setCurrent(c => Math.max(c - 1, 0))
    } else {
      revealUi()
    }
    touchStartX.current = null
    touchStartY.current = null
  }, [slides.length, revealUi])

  const Slide = slides[current]

  return (
    <div className="viewer" onMouseMove={revealUi} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Slide />

      <nav className={`v-nav${uiVisible ? ' v-nav--on' : ''}`}>
        <button className="v-btn" onClick={() => navigate('/')} title="홈 (Esc)">⌂</button>
        <div className="v-controls">
          <button className="v-btn v-btn--lg" onClick={() => setCurrent(c => Math.max(c - 1, 0))} disabled={current === 0}>‹</button>
          <span className="v-counter">{current + 1} <em>/</em> {slides.length}</span>
          <button className="v-btn v-btn--lg" onClick={() => setCurrent(c => Math.min(c + 1, slides.length - 1))} disabled={current === slides.length - 1}>›</button>
        </div>
        <span className="v-title">{title}</span>
      </nav>

      <div className={`v-dots${uiVisible ? ' v-dots--on' : ''}`}>
        {slides.map((_, i) => (
          <button key={i} className={`v-dot${i === current ? ' v-dot--active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </div>
  )
}
