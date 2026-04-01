const nf = (weight = 400) => ({
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: weight,
  fontStyle: 'normal',
})

// calc() resolved against 1920×1080:
// left: calc(6.25%+36px)    = 0.0625×1920+36 = 156
// top:  calc(31.25%+2.5px)  = 0.3125×1080+2.5 = 340  (with translateY(-50%))
// top:  calc(50%+10px)      = 0.5×1080+10     = 550

const ACCENT = '#e765d4'

const domains = [
  {
    title: 'Domain 1',
    body: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut
      </>
    ),
  },
  {
    title: 'Domain 2',
    body: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut
      </>
    ),
  },
  {
    title: 'Domain 3',
    body: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit, sed do eiusmod tempor incididunt ut
      </>
    ),
  },
]

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#210d16' }} />
}

export default function Slide12({ slideNumber }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* "Foundations" — top-left */}
      <p style={{ position: 'absolute', left: 40, top: 40, ...nf(400), fontSize: 24, lineHeight: 1.1, color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>
        Foundations
      </p>

      {/* Slide number — top-right */}
      <p style={{ position: 'absolute', right: 40, top: 40, ...nf(400), fontSize: 24, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>
        {slideNumber}
      </p>

      {/* Top text block */}
      <div style={{
        position: 'absolute', left: 156, top: 340,
        transform: 'translateY(-50%)',
        width: 794,
        display: 'flex', flexDirection: 'column', gap: 24,
      }}>
        <p style={{ ...nf(700), fontSize: 16, lineHeight: 1.2, color: '#e8bbff', textTransform: 'uppercase', letterSpacing: '-0.32px' }}>
          Infrastructure
        </p>
        <p style={{ ...nf(500), fontSize: 64, lineHeight: 1, color: '#f0e1f5' }}>
          Purpose
        </p>
        <p style={{ ...nf(400), fontSize: 32, lineHeight: 'normal', color: 'rgba(255,255,255,0.7)', letterSpacing: '-1.28px' }}>
          Lorem ipsum dolor sit amet,{' '}
          <span style={{ ...nf(500), color: ACCENT }}>consectetur</span>
          {' '}adipiscing elit, sed do eiusmod tempor{' '}
          <span style={{ color: ACCENT }}>incididunt</span>
          {' '}ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis{' '}
          <span style={{ color: ACCENT }}>nostrud exercitation</span>.
        </p>
      </div>

      {/* Domain cards row */}
      <div style={{
        position: 'absolute', left: 156, top: 550,
        width: 1608,
        display: 'flex', gap: 20, alignItems: 'center',
      }}>
        {domains.map(({ title, body }) => (
          <div key={title} style={{
            flex: '1 0 0', minWidth: 0,
            height: 363,
            backgroundColor: '#45172b',
            borderRadius: 16,
            padding: 32,
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column', gap: 24,
          }}>
            <p style={{ ...nf(500), fontSize: 32, lineHeight: 1, color: '#f5e1e2', letterSpacing: '-0.64px', whiteSpace: 'nowrap' }}>
              {title}
            </p>
            <p style={{ ...nf(400), fontSize: 24, lineHeight: 1, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.96px' }}>
              {body}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

Slide12.Background = Background
