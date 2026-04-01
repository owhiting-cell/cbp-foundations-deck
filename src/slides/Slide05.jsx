const imgLaptop = 'https://www.figma.com/api/mcp/asset/d0b5f852-b90c-48af-a02c-f3016196bee5'
const imgBox    = 'https://www.figma.com/api/mcp/asset/99502e91-0bd3-4c62-93de-ccc6c9a99d0a'

// Resolved against 1920×1080:
// col lefts: 40, calc(16.67%+91)=411, calc(33.33%+143)=783, calc(58.33%+33)=1153, calc(75%+85)=1525
// header top: calc(16.67%+30)=210, h=235
// app row tops: calc(41.67%+15)=465, calc(50%+25)=565, calc(58.33%+35)=665,
//               calc(66.67%+45)=765, calc(75%+55)=865
// legend: calc(83.33%-26)=1574, calc(75%+51)=861

const FONT = "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif"
const TILE_W = 355
const TILE_H = 80

const columns = [
  {
    title: 'Media\nPlatforms',
    color: '#39dea7', color2: '#1BC4CA',
    left: 40,
    apps: [
      { name: 'AMP',   icon: 'laptop', top: 465 },
      { name: 'BAARN', icon: 'box',    top: 565 },
      { name: 'GOUDA', icon: 'box',    top: 665 },
    ],
  },
  {
    title: 'Content\nProtection\n& Access',
    color: '#de39c2', color2: '#F8B0F2',
    left: 411,
    apps: [
      { name: 'Access Manager',       icon: 'laptop', top: 465 },
      { name: 'Title Classification', icon: 'laptop', top: 565 },
    ],
  },
  {
    title: 'Content Data\nFoundations',
    color: '#deb739', color2: '#E33B3E',
    left: 783,
    apps: [
      { name: 'Talent',                  icon: 'laptop', top: 465 },
      { name: 'Vendor',                  icon: 'laptop', top: 565 },
      { name: 'Locations',               icon: 'laptop', top: 665 },
      { name: 'Primary Data Management', icon: 'box',    top: 765, dashed: true },
      { name: 'Data Hub',                icon: 'box',    top: 865, dashed: true },
    ],
  },
  {
    title: 'Information\nDiscovery',
    color: '#97f8ff', color2: '#1B87CA',
    left: 1153,
    apps: [
      { name: 'Notifications', icon: 'laptop', top: 465 },
      { name: 'App Chat',      icon: 'laptop', top: 565 },
      { name: 'Entity Search', icon: 'laptop', top: 665 },
    ],
  },
  {
    title: 'Developer\nProductivity',
    color: '#78de39', color2: '#89AC80',
    left: 1525,
    apps: [
      { name: 'Conductor', icon: 'box', top: 465 },
      { name: 'Link',      icon: 'box', top: 565 },
    ],
  },
]

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0c021a' }} />
}

// Two-color conic gradient: blends c1→c2 around the full perimeter
const strokeBg = (c1, c2) =>
  `conic-gradient(from 180deg at 50% 50%, ${c1} 0deg, ${c2} 180deg, ${c1} 360deg)`

function CategoryCard({ title, color, color2, left }) {
  return (
    <div style={{
      position: 'absolute',
      left, top: 210, width: TILE_W, height: 235,
      background: strokeBg(color, color2),
      padding: 3,
      borderRadius: 27,
    }}>
      <div style={{
        width: '100%', height: '100%',
        backgroundColor: '#302032',
        borderRadius: 24,
        padding: 40,
        overflow: 'hidden',
      }}>
        <p style={{
          fontFamily: FONT,
          fontWeight: 500,
          fontSize: 48,
          lineHeight: 1,
          color: '#f5e1e2',
          fontStretch: 'condensed',
          whiteSpace: 'pre-wrap',
        }}>
          {title}
        </p>
      </div>
    </div>
  )
}

function AppTile({ name, icon, color, color2, left, top, dashed }) {
  const inner = (
    <div style={{
      width: '100%', height: '100%',
      backgroundColor: '#302032',
      borderRadius: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      paddingLeft: 24,
      paddingRight: 16,
      overflow: 'hidden',
    }}>
      <p style={{
        flex: '1 0 0',
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1,
        color: '#f5e1e2',
      }}>
        {name}
      </p>
      <img
        alt=""
        src={icon === 'laptop' ? imgLaptop : imgBox}
        style={{ width: 54, height: 54, flexShrink: 0, display: 'block' }}
      />
    </div>
  )

  if (dashed) {
    // Dashed future items keep a simple border (gradient dashes aren't feasible in CSS)
    return (
      <div style={{
        position: 'absolute',
        left, top, width: TILE_W, height: TILE_H,
        border: `2px dashed ${color}66`,
        borderRadius: 24,
        display: 'flex', alignItems: 'center',
        gap: 36, paddingLeft: 24, paddingRight: 16,
        overflow: 'hidden',
      }}>
        <p style={{ flex: '1 0 0', fontFamily: FONT, fontWeight: 700, fontSize: 24, lineHeight: 1, color: '#f5e1e2' }}>
          {name}
        </p>
        <img alt="" src={icon === 'laptop' ? imgLaptop : imgBox} style={{ width: 54, height: 54, flexShrink: 0, display: 'block' }} />
      </div>
    )
  }

  return (
    <div style={{
      position: 'absolute',
      left, top, width: TILE_W, height: TILE_H,
      background: strokeBg(color, color2),
      padding: 2,
      borderRadius: 26,
    }}>
      {inner}
    </div>
  )
}

export default function Slide06({ slideNumber }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Header labels */}
      <p style={{
        position: 'absolute', left: 40, top: 40,
        fontFamily: FONT, fontWeight: 400, fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap',
      }}>
        Foundations
      </p>
      <p style={{
        position: 'absolute', right: 40, top: 40,
        fontFamily: FONT, fontWeight: 400, fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap',
      }}>
        {slideNumber}
      </p>

      {/* Centered title — (1920−678)/2 = 621 */}
      <p style={{
        position: 'absolute', left: 621, top: 66, width: 678,
        fontFamily: FONT, fontWeight: 500, fontSize: 48, lineHeight: 0.87,
        letterSpacing: '-1.92px',
        color: '#f0e1f5',
        textAlign: 'center',
      }}>
        CBPF Services
      </p>

      {/* Category header cards + app tiles per column */}
      {columns.map(({ title, color, color2, left, apps }) => (
        <div key={title}>
          <CategoryCard title={title} color={color} color2={color2} left={left} />
          {apps.map(({ name, icon, top, dashed }) => (
            <AppTile
              key={name}
              name={name}
              icon={icon}
              color={color}
              color2={color2}
              left={left}
              top={top}
              dashed={dashed}
            />
          ))}
        </div>
      ))}

      {/* Legend — left: calc(83.33%−26)=1574, top: calc(75%+51)=861 */}
      <div style={{
        position: 'absolute', left: 1574, top: 861,
        backgroundColor: '#302032',
        borderRadius: 24,
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 23,
      }}>
        {[
          { icon: 'laptop', label: 'Has a front-end' },
          { icon: 'box',    label: 'Back-end service' },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
            <img
              alt=""
              src={icon === 'laptop' ? imgLaptop : imgBox}
              style={{ width: 54, height: 54, flexShrink: 0, display: 'block' }}
            />
            <p style={{
              fontFamily: FONT, fontWeight: 400, fontSize: 24, lineHeight: 'normal',
              color: 'white', whiteSpace: 'nowrap',
            }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

Slide06.Background = Background
