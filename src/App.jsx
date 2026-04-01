import { useState, useEffect, useRef } from 'react'
import './App.css'
import Slide01 from './slides/Slide01.jsx'
import Slide02 from './slides/Slide02.jsx'
import Slide03 from './slides/Slide03.jsx'
import Slide04 from './slides/Slide04.jsx'
import Slide05 from './slides/Slide05.jsx'
import Slide06 from './slides/Slide06.jsx'
import Slide07 from './slides/Slide07.jsx'
import Slide08 from './slides/Slide08.jsx'
import Slide09 from './slides/Slide09.jsx'
import Slide10 from './slides/Slide10.jsx'
import Slide11 from './slides/Slide11.jsx'
import Slide12 from './slides/Slide12.jsx'

const SLIDE_W = 1920
const SLIDE_H = 1080

const slides = [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [canvasStyle, setCanvasStyle] = useState({})
  const stageRef = useRef(null)

  // Fit the 1920×1080 canvas inside the viewport, centered, no clipping
  useEffect(() => {
    function update() {
      const s = Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H)
      const x = (window.innerWidth - SLIDE_W * s) / 2
      const y = (window.innerHeight - SLIDE_H * s) / 2
      setCanvasStyle({ transform: `translate(${x}px, ${y}px) scale(${s})` })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Auto-focus the stage so arrow keys are captured immediately
  useEffect(() => {
    stageRef.current?.focus()
  }, [])

  function onKey(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      setCurrent((c) => Math.min(c + 1, slides.length - 1))
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      setCurrent((c) => Math.max(c - 1, 0))
    }
  }

  if (slides.length === 0) {
    return (
      <div className="slide-stage" ref={stageRef}>
        <div className="slide-canvas placeholder" style={canvasStyle}>
          <p>No slides yet.<br />Add slides to <code>src/slides/</code> and register them in <code>App.jsx</code>.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="slide-stage" ref={stageRef} tabIndex={0} onKeyDown={onKey} style={{ outline: 'none' }}>
      {/* All backgrounds mounted — images stay cached, no load flash on switch */}
      {slides.map((Slide, i) => {
        const Bg = Slide.Background
        return Bg ? (
          <div key={i} className="slide-bg" style={{ opacity: i === current ? 1 : 0 }}>
            <Bg />
          </div>
        ) : null
      })}

      {/* All canvases mounted — pointer-events disabled on hidden slides */}
      {slides.map((Slide, i) => (
        <div
          key={i}
          className="slide-canvas"
          style={{ ...canvasStyle, opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <Slide slideNumber={i + 1} />
        </div>
      ))}

    </div>
  )
}
