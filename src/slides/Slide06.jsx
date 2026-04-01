const imgGoogleShape172 = 'https://www.figma.com/api/mcp/asset/86c14923-50a8-4e25-a4d7-e03ed97f6727'
const imgGoogleShape173 = 'https://www.figma.com/api/mcp/asset/2894ec13-7f8b-45d6-938c-6e387159f9eb'
const imgArrow1 = 'https://www.figma.com/api/mcp/asset/f08f0b66-5ff1-4211-8422-84de7fa18a95'
const imgArrow2 = 'https://www.figma.com/api/mcp/asset/896d5510-d087-4254-ad1d-0249e599a341'
const imgArrow3 = 'https://www.figma.com/api/mcp/asset/5592d836-0d90-4983-9ae7-7ddc76393a37'
const imgArrow4 = 'https://www.figma.com/api/mcp/asset/6eec6e6a-f706-4af7-82eb-65a69b383c0a'

const nf = (weight = 400) => ({
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: weight,
  fontStyle: 'normal',
})

// calc() values resolved against 1920×1080:
// calc(16.67%+83.6px)  = 403.86   calc(25%+15.3px)  = 285.3
// calc(50%+68.03px)    = 1028.03  calc(25%+15.31px) = 285.31
// calc(8.33%+88px)     = 247.94   calc(33.33%+50px) = 409.96
// calc(41.67%+39px)    = 839.06   calc(33.33%+50px) = 409.96
// calc(66.67%+131px)   = 1411.06  calc(33.33%+50px) = 409.96
// calc(33.33%+36px)    = 675.94   calc(25%+18px)    = 288
// calc(66.67%+18px)    = 1298.06  calc(25%+18px)    = 288
// calc(33.33%+33px)    = 672.94   calc(75%+12px)    = 822
// calc(66.67%+19px)    = 1299.06  calc(75%+12px)    = 822

// Arrowhead image sizes (inset percentages × container width):
// w=3: left=-636.4%×3=-19.09px, right=-100%×3=-3px → image ~25×44px
// w=2: left=-1004.59%×2=-20.09px, right=-150%×2=-3px → image ~25×44px

function ArcRing({ src, left, top }) {
  const size = 539.276
  return (
    <div style={{ position: 'absolute', left, top, width: size, height: size }}>
      {/* slight overflow to match Figma's inset-[0_-0.74%_-1.48%_-0.74%] */}
      <div style={{ position: 'absolute', top: 0, right: -4, bottom: -8, left: -4 }}>
        <img alt="" src={src} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

// Top arrows (no rotation) — small arrowhead at the crossing point of two arcs
function TopArrow({ left, src, containerW = 3 }) {
  const top = 288
  const insetLeft = -(containerW * 6.364)
  const insetRight = -containerW
  return (
    <div style={{ position: 'absolute', left, top, width: containerW, height: 0 }}>
      <div style={{ position: 'absolute', top: -22.09, right: insetRight, bottom: -22.09, left: insetLeft }}>
        <img alt="" src={src} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

// Bottom arrows (rotated 180°) — arrowhead pointing back
function BottomArrow({ left, src, containerW = 3, insetLeftMult = 6.364, insetRightMult = 1 }) {
  const top = 822
  const insetLeft = -(containerW * insetLeftMult)
  const insetRight = -(containerW * insetRightMult)
  return (
    <div style={{ position: 'absolute', left, top, width: containerW, height: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ transform: 'rotate(180deg)', flexShrink: 0 }}>
        <div style={{ position: 'relative', width: containerW, height: 0 }}>
          <div style={{ position: 'absolute', top: -22.09, right: insetRight, bottom: -22.09, left: insetLeft }}>
            <img alt="" src={src} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

const strokeBg = (c1, c2) =>
  `conic-gradient(from 180deg at 50% 50%, ${c1} 0deg, ${c2} 180deg, ${c1} 360deg)`

function Circle({ left, top, borderColor, borderColor2, title, subtitle, subtitleWidth = 194 }) {
  return (
    <div style={{
      position: 'absolute', left, top,
      width: 312, height: 312,
      background: strokeBg(borderColor, borderColor2),
      padding: 3,
      borderRadius: 999,
    }}>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 999,
        backgroundColor: '#302032',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '51px 28px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'center', width: '100%' }}>
          <p style={{ ...nf(500), fontSize: 48, lineHeight: 1, color: '#f5e1e2', textAlign: 'center', width: 'min-content', minWidth: '100%' }}>
            {title}
          </p>
          <p style={{ ...nf(400), fontSize: 24, lineHeight: 1, color: '#f5e1e2', textAlign: 'center', width: subtitleWidth }}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0c021a' }} />
}

export default function Slide07({ slideNumber }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* "Foundations" — top-left */}
      <p style={{ position: 'absolute', left: 40, top: 40, ...nf(400), fontSize: 24, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>
        Foundations
      </p>

      {/* Slide number — top-right */}
      <p style={{ position: 'absolute', right: 40, top: 40, ...nf(400), fontSize: 24, lineHeight: 1.1, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>
        {slideNumber}
      </p>

      {/* Arc rings (overlapping circle outlines) */}
      <ArcRing src={imgGoogleShape173} left={403.86} top={285.3} />
      <ArcRing src={imgGoogleShape172} left={1028.03} top={285.31} />

      {/* Top arrowheads */}
      <TopArrow left={675.94} src={imgArrow1} containerW={3} />
      <TopArrow left={1298.06} src={imgArrow3} containerW={3} />

      {/* Bottom arrowheads (rotated 180°) */}
      <BottomArrow left={672.94} src={imgArrow2} containerW={3} insetLeftMult={6.364} insetRightMult={1} />
      <BottomArrow left={1299.06} src={imgArrow4} containerW={2} insetLeftMult={10.0459} insetRightMult={1.5} />

      {/* Three circles */}
      <Circle left={247.94} top={409.96} borderColor="#39dea7" borderColor2="#1BC4CA" title="Foundations" subtitle="Platform, PM, Eng & XD" />
      <Circle left={839.06} top={409.96} borderColor="#de39c2" borderColor2="#F8B0F2" title="Middle Users" subtitle="Product Teams, PM, Eng & XD" />
      <Circle left={1411.06} top={409.96} borderColor="#deb739" borderColor2="#E33B3E" title="End Users" subtitle="Product and workflow users" />

    </div>
  )
}

Slide07.Background = Background
