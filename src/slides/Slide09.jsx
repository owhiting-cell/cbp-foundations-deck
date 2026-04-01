// Geometry scaled from Figma (1183×765 bounding box → slide usable area 40–1880 × 148–913)
// x_scale = 1840/1183 ≈ 1.555  |  y_scale = 1.0 (heights match exactly)
//
// Figma shapes (relative to bounding box origin):
//   Panel  (rect1): x=0,   y=20,  w=356, h=745
//   Bar    (rect2): x=387, y=0,   w=796, h=132   ← dynamic: Y moves, width expands
//   Bridge (rect3): x=329, y=61,  w=97,  h=34    ← moves with bar
//
// Slide coordinates (bounding box origin → x=40, y=148):
//   Panel:  x=40,  y=168, w=554, h=745  (right edge=594, bottom=913)
//   Bar:    x=642, y=dynamic, w=dynamic, h=132
//   Bridge: x=552, y=barTop+61, w=151, h=34

const nf = (weight = 400) => ({
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: weight,
  fontStyle: 'normal',
})

const sections = [
  { num: '01', title: 'Media Platforms' },
  { num: '02', title: 'Content Protection & Access' },
  { num: '03', title: 'Content Data Foundations' },
  { num: '04', title: 'Information Discovery' },
  { num: '05', title: 'Developer Productivity' },
]

// Layout constants matching Slide09 text positions
const TEXT_TOP = 168
const ROW_H = 96 * 0.87   // ≈ 83.52px
const GAP = 80
const BAR_PAD_V = 14      // vertical padding above/below the active row inside the bar

const BG = '#f0e1f5'

// Panel (fixed)
const PANEL_X = 40
const PANEL_Y = 168
const PANEL_W = 554
const PANEL_H = 745
const PANEL_R = 40
const PANEL_BOTTOM = PANEL_Y + PANEL_H   // 913
const PRX = PANEL_X + PANEL_W            // panel right edge: 594

// Inner corner radius for the concave notch corners
const INNER_R = 16

// Horizontal bar (dynamic)
const BAR_X = 642
const BAR_H = 132
const BAR_R = 24
const BAR_MAX_RIGHT = 1880

// Bridge connector (moves with bar)
const BRIDGE_X = 552
const BRIDGE_W = 151
const BRIDGE_Y_OFFSET = 61   // below bar top
const BRIDGE_H = 34
const BRIDGE_R = 12

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: BG }} />
}

// activeIndex — which section row is highlighted (0-based)
// pillRight   — right edge of the horizontal bar in slide-space px (driven by text width later)
export default function Slide10({ activeIndex = 0, pillRight = BAR_MAX_RIGHT, slideNumber }) {
  const barTop = TEXT_TOP + activeIndex * (ROW_H + GAP) - BAR_PAD_V
  const barWidth = pillRight - BAR_X
  const bridgeY = barTop + BRIDGE_Y_OFFSET

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient spans the full panel height so the bar color reflects its vertical position */}
          <linearGradient
            id="s10grad"
            x1={PANEL_X} y1={148} x2={PANEL_X} y2={PANEL_BOTTOM}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#5568E8" />
            <stop offset="100%" stopColor="#D36BA0" />
          </linearGradient>
        </defs>

        {/* Left panel — fixed */}
        <rect
          x={PANEL_X} y={PANEL_Y}
          width={PANEL_W} height={PANEL_H}
          rx={PANEL_R}
          fill="url(#s10grad)"
        />

        {/* Horizontal bar — moves with activeIndex, width driven by text */}
        <rect
          x={BAR_X} y={barTop}
          width={barWidth} height={BAR_H}
          rx={BAR_R}
          fill="url(#s10grad)"
        />

        {/* Bridge connector — closes the gap between panel right edge and bar left edge */}
        <rect
          x={BRIDGE_X} y={bridgeY}
          width={BRIDGE_W} height={BRIDGE_H}
          rx={BRIDGE_R}
          fill="url(#s10grad)"
        />

        {/* Inner corner radii at notch/bridge junctions — background wedges with concave arcs */}
        {/* Upper notch bottom-left  (PRX, bridgeY):         opens NE — arc from north to east */}
        <path d={`M ${PRX} ${bridgeY} L ${PRX} ${bridgeY - INNER_R} A ${INNER_R} ${INNER_R} 0 0 1 ${PRX + INNER_R} ${bridgeY} Z`} fill={BG} />
        {/* Upper notch bottom-right (BAR_X, bridgeY):       opens NW — arc from west to north */}
        <path d={`M ${BAR_X} ${bridgeY} L ${BAR_X - INNER_R} ${bridgeY} A ${INNER_R} ${INNER_R} 0 0 1 ${BAR_X} ${bridgeY - INNER_R} Z`} fill={BG} />
        {/* Lower notch top-left    (PRX, bridgeY+BRIDGE_H): opens SE — arc from east to south */}
        <path d={`M ${PRX} ${bridgeY + BRIDGE_H} L ${PRX + INNER_R} ${bridgeY + BRIDGE_H} A ${INNER_R} ${INNER_R} 0 0 1 ${PRX} ${bridgeY + BRIDGE_H + INNER_R} Z`} fill={BG} />
        {/* Lower notch top-right   (BAR_X, bridgeY+BRIDGE_H): opens SW — arc from south to west */}
        <path d={`M ${BAR_X} ${bridgeY + BRIDGE_H} L ${BAR_X} ${bridgeY + BRIDGE_H + INNER_R} A ${INNER_R} ${INNER_R} 0 0 1 ${BAR_X - INNER_R} ${bridgeY + BRIDGE_H} Z`} fill={BG} />
      </svg>

      {/* "Foundations" — top-left */}
      <p style={{
        position: 'absolute', left: 40, top: 40,
        ...nf(400), fontSize: 24, lineHeight: 1.1,
        color: 'rgba(33,13,22,0.62)', whiteSpace: 'nowrap',
      }}>
        Foundations
      </p>

      {/* Slide number — top-right */}
      <p style={{
        position: 'absolute', right: 40, top: 40,
        ...nf(400), fontSize: 24, lineHeight: 1.1,
        color: 'rgba(33,13,22,0.62)', whiteSpace: 'nowrap',
      }}>
        {slideNumber}
      </p>

      {/* "Foundations Problem Spaces" — on top of left panel */}
      <p style={{
        position: 'absolute', left: 80, top: 209,
        width: 279,
        ...nf(700), fontSize: 40, lineHeight: '85.055%',
        color: 'white',
        zIndex: 2,
      }}>
        Foundations Problem Spaces
      </p>

      {/* Section text rows */}
      <div style={{
        position: 'absolute', left: 679, top: TEXT_TOP,
        display: 'flex', flexDirection: 'column', gap: GAP,
        zIndex: 2,
      }}>
        {sections.map((s, i) => {
          const isActive = i === activeIndex
          return (
            <div key={s.num} style={{ display: 'flex', gap: 17, alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: "'SF Mono', 'Monaco', monospace",
                fontWeight: 400, fontSize: 32, lineHeight: 0.87,
                letterSpacing: '-1.28px',
                color: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(33,13,22,0.4)',
                flexShrink: 0, whiteSpace: 'nowrap',
              }}>
                {s.num}
              </span>
              <span style={{
                ...nf(500), fontSize: 96, lineHeight: 0.87,
                letterSpacing: '-3.84px',
                color: isActive ? 'white' : 'rgba(33,13,22,0.62)',
                whiteSpace: 'nowrap',
              }}>
                {s.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Slide10.Background = Background
