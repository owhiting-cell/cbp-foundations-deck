const nf = (weight = 400) => ({
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: weight,
  fontStyle: 'normal',
})

// calc() resolved against 1920×1080:
// left: calc(31.25%+21px) = 0.3125×1920+21 = 621
// top: calc(87.5%+69px)   = 0.875×1080+69  = 1014

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#210d16' }} />
}

export default function Slide11({ slideNumber }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* "Foundations" — top-left */}
      <p style={{ position: 'absolute', left: 40, top: 40, ...nf(400), fontSize: 24, lineHeight: 1.1, color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>
        Foundations
      </p>

      {/* Slide number — bottom-left */}
      <p style={{ position: 'absolute', left: 40, top: 1014, ...nf(400), fontSize: 24, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>
        {slideNumber}
      </p>

      {/* Left text block — vertically centered */}
      <div style={{
        position: 'absolute', left: 40, top: '50%',
        transform: 'translateY(-50%)',
        width: 483,
        display: 'flex', flexDirection: 'column', gap: 36,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p style={{
            ...nf(700), fontSize: 16, lineHeight: 1.2,
            color: '#e8bbff', textTransform: 'uppercase',
            letterSpacing: '-0.32px', width: '100%',
          }}>
            Media Platforms
          </p>
          <p style={{
            ...nf(500), fontSize: 64, lineHeight: 1,
            color: '#f0e1f5', width: '100%',
          }}>
            Media Platform Service 1
          </p>
        </div>
        <p style={{
          ...nf(400), fontSize: 32, lineHeight: 'normal',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '-1.28px', width: '100%',
        }}>
          Short description of the app or service.
        </p>
      </div>

      {/* Right panel — placeholder */}
      <div style={{
        position: 'absolute',
        left: 621, top: 40,
        width: 1259, height: 1000,
        backgroundColor: '#45172b',
        borderRadius: 24,
        padding: '22px 23px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Inner placeholder area */}
        <div style={{
          flex: '1 0 0',
          minHeight: 0,
          backgroundColor: 'rgba(255,255,255,0.6)',
          border: '4px dashed white',
          borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <p style={{
            fontFamily: "'SF Mono', 'Monaco', monospace",
            fontWeight: 400, fontSize: 24, lineHeight: 1.1,
            color: 'black', whiteSpace: 'nowrap',
          }}>
            Swap out with design
          </p>
        </div>
      </div>

    </div>
  )
}

Slide11.Background = Background
