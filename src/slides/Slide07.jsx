const nf = (weight = 400) => ({
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: weight,
  fontStyle: 'normal',
})

const rows = [
  {
    number: '99*',
    label: 'Foundations Users',
    labelW: 302,
    top: 236,
    totalW: 378,
    color1: '#39dea7', color2: '#1BC4CA',
  },
  {
    number: '16,000',
    label: 'Middle Users',
    labelW: 302,
    top: 443,
    totalW: 426,
    color1: '#de39c2', color2: '#F8B0F2',
  },
  {
    number: '206,083',
    label: 'End Users',
    labelW: 312,
    top: 650,
    totalW: 1550,
    color1: '#deb739', color2: '#E33B3E',
  },
]

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0c021a' }} />
}

export default function Slide08({ slideNumber }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* "Foundations" — top-left */}
      <p style={{
        position: 'absolute', left: 40, top: 40,
        ...nf(400), fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap',
      }}>
        Foundations
      </p>

      {/* Slide number — top-right */}
      <p style={{ position: 'absolute', right: 40, top: 40, ...nf(400), fontSize: 24, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>
        {slideNumber}
      </p>

      {/* Title */}
      <p style={{
        position: 'absolute', left: '50%', top: 105,
        transform: 'translateX(-50%)',
        width: 678, textAlign: 'center',
        ...nf(500), fontSize: 48, lineHeight: 0.87,
        letterSpacing: '-1.92px', color: '#f0e1f5',
      }}>
        Users We Empower
      </p>

      {/* Rows */}
      {rows.map((row) => (
        <div key={row.label} style={{
          position: 'absolute',
          left: 195, top: row.top,
          width: row.totalW,
          display: 'flex', flexDirection: 'row', gap: 45, alignItems: 'center',
        }}>
          {/* Label column */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 12,
            alignItems: 'flex-end', textAlign: 'right',
            width: row.labelW, flexShrink: 0,
          }}>
            <p style={{
              fontFamily: "'Netflix Sans Cd', 'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500, fontStyle: 'normal',
              fontSize: 96, lineHeight: 1,
              color: '#f5e1e2', whiteSpace: 'nowrap',
            }}>
              {row.number}
            </p>
            <p style={{
              ...nf(700), fontSize: 24, lineHeight: 1,
              color: 'rgba(245,225,226,0.7)', whiteSpace: 'nowrap',
            }}>
              {row.label}
            </p>
          </div>
          {/* Bar */}
          <div style={{
            flex: '1 0 0', height: 156,
            borderRadius: 24,
            background: `linear-gradient(90deg, ${row.color1} 0%, ${row.color2} 100%)`,
          }} />
        </div>
      ))}

      {/* *Placeholder Numbers — bottom-right */}
      <p style={{
        position: 'absolute', right: 30, top: 993,
        fontFamily: "'SF Mono', 'Monaco', monospace",
        fontWeight: 400, fontSize: 48, lineHeight: 'normal',
        color: 'white', textAlign: 'right', whiteSpace: 'nowrap',
      }}>
        *Placeholder Numbers
      </p>

    </div>
  )
}

Slide08.Background = Background
