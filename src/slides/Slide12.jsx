const F = "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif"

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#210d16' }} />
}

export default function Slide13({ slideNumber }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Header */}
      <p style={{
        position: 'absolute', left: 40, top: 40,
        fontFamily: F, fontWeight: 400, fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap',
      }}>Foundations</p>

      {/* Slide number — top-right */}
      <p style={{
        position: 'absolute', right: 40, top: 40,
        fontFamily: F, fontWeight: 400, fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap',
      }}>
        {slideNumber}
      </p>

      {/* Centered title */}
      <p style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        top: 66, width: 678,
        fontFamily: F, fontWeight: 500, fontSize: 48, lineHeight: 0.87,
        color: '#f0e1f5', textAlign: 'center', letterSpacing: '-1.92px',
      }}>Detail View</p>

      {/* Main card */}
      <div style={{
        position: 'absolute', left: 40, top: 148, width: 1840, height: 1000,
        backgroundColor: '#45172b', borderRadius: 24, overflow: 'hidden',
        padding: '22px 23px', boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Placeholder area */}
        <div style={{
          flex: 1,
          backgroundColor: 'rgba(255,255,255,0.6)',
          border: '4px dashed white',
          borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <p style={{
            fontFamily: "'SF Mono', 'Fira Code', monospace",
            fontWeight: 400, fontSize: 24, lineHeight: 1.1,
            color: 'black', whiteSpace: 'nowrap',
          }}>Swap out with design</p>
        </div>
      </div>
    </div>
  )
}

Slide13.Background = Background
