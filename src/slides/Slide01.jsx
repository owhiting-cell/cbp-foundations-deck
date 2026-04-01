import sparkleVideo from '../assets/sparkle.mp4'

const imgEllipse6619 = 'https://www.figma.com/api/mcp/asset/9fd8ba5f-b712-4f19-bc88-bab78e3272dd'
const imgEllipse6615 = 'https://www.figma.com/api/mcp/asset/73843ef7-c463-4833-b7f6-ba6a41b09f57'
const imgEllipse6618 = 'https://www.figma.com/api/mcp/asset/9282ece6-9f3a-4db9-84de-686da398babf'
const imgEllipse6616 = 'https://www.figma.com/api/mcp/asset/75cf5ebc-af11-4dec-ae96-75db9d802251'
const imgEllipse6617 = 'https://www.figma.com/api/mcp/asset/402da172-8137-49eb-9bbe-950310d0abee'
const imgUnion = 'https://www.figma.com/api/mcp/asset/b158c29c-46d1-4cc9-aeeb-d3f4ac0876c1'
const imgNetflixLogotype = 'https://www.figma.com/api/mcp/asset/4a5f180c-c104-4409-bf45-a6f70f19db04'
const imgNetflixLogotype1 = 'https://www.figma.com/api/mcp/asset/df8bb3d4-7e66-49b2-9989-d88a7bf2a151'

const authors = [
  'Nat Jones',
  'Jeremy Tatelman',
  'Alisa Boreyko',
  'Jordan Kolasinski',
  'Lynette Bian',
  'Owen Whiting',
]

// Each ellipse: outer container sized in vw/vh (% of 1920×1080 origin),
// inner image extends beyond it via negative inset percentages.
function Ellipse({ src, left, top, width, height, insetV, insetH, blendMode }) {
  return (
    <div style={{
      position: 'absolute',
      left, top, width, height,
      overflow: 'visible',
      mixBlendMode: blendMode,
    }}>
      <div style={{
        position: 'absolute',
        top: `${insetV}%`,
        right: `${insetH}%`,
        bottom: `${insetV}%`,
        left: `${insetH}%`,
      }}>
        <img alt="" src={src} style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

// Full-viewport background — renders outside the scaled canvas
function Background() {
  return (
    <div style={{ position: 'absolute', inset: 0, backgroundColor: '#3360e9', overflow: 'hidden' }}>
      {/* Pixel positions converted to vw/vh (1920×1080 origin) */}
      <Ellipse src={imgEllipse6619}
        left="14.17vw" top="10.19vh" width="61.82vw" height="73.80vh"
        insetV={-52.47} insetH={-35.23} />
      <Ellipse src={imgEllipse6615}
        left="20.52vw" top="-9.07vh" width="83.85vw" height="43.15vh"
        insetV={-143.39} insetH={-41.5} />
      <Ellipse src={imgEllipse6618}
        left="-22.92vw" top="44.72vh" width="33.33vw" height="43.15vh"
        insetV={-89.74} insetH={-65.34} />
      <Ellipse src={imgEllipse6616}
        left="25.63vw" top="70.00vh" width="61.82vw" height="73.80vh"
        insetV={-83.84} insetH={-56.29} />
      <Ellipse src={imgEllipse6617}
        left="68.18vw" top="-29.63vh" width="61.82vw" height="41.11vh"
        insetV={-150.5} insetH={-56.29} blendMode="color-dodge" />
      {/* Sparkle video overlay */}
      <video
        src={sparkleVideo}
        autoPlay loop muted playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
          mixBlendMode: 'plus-lighter',
        }}
      />
    </div>
  )
}

// Slide content — renders inside the 1920×1080 scaled canvas
export default function Slide01({ date = 'March 26, 2026' }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Dark rounded overlay */}
      <img alt="" src={imgUnion} style={{
        position: 'absolute', left: 40, top: 40, width: 1840, height: 1000,
        display: 'block',
      }} />

      {/* Date */}
      <p style={{
        position: 'absolute', left: 94, top: 87, width: 264,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 500, fontSize: 20, lineHeight: 1.1,
        color: 'white', opacity: 0.7,
      }}>
        {date}
      </p>

      {/* Title */}
      <p style={{
        position: 'absolute', left: 88, top: 378, width: 1434,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 700, fontSize: 180, lineHeight: 0.82,
        letterSpacing: '-7.2px', color: 'white',
      }}>
        CBP Foundations
      </p>

      {/* Subtitle */}
      <p style={{
        position: 'absolute', left: 97, top: 543, width: 1434,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 100, fontSize: 64, lineHeight: 0.82,
        letterSpacing: '-2.56px', color: 'white',
      }}>
        In a Nutshell
      </p>

      {/* XD label */}
      <p style={{
        position: 'absolute', left: 1634, top: 702,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 500, fontSize: 32, lineHeight: 0.91,
        letterSpacing: '-0.96px', color: 'white', whiteSpace: 'nowrap',
      }}>
        XD
      </p>

      {/* Authors list */}
      <div style={{
        position: 'absolute', left: 1634, top: 756,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 500, fontSize: 20, color: 'white', whiteSpace: 'nowrap',
      }}>
        {authors.map((name) => (
          <p key={name} style={{ lineHeight: 1.5 }}>{name}</p>
        ))}
      </div>

      {/* Netflix logo — bottom-left (left: 2.55%, bottom: 3.89% of 1920×1080) */}
      <div style={{
        position: 'absolute',
        left: 49,
        bottom: 42,
        width: 185,
        height: 50,
        maskImage: `url('${imgNetflixLogotype}')`,
        WebkitMaskImage: `url('${imgNetflixLogotype}')`,
        maskSize: '100% 100%',
        WebkitMaskSize: '100% 100%',
        maskPosition: '0 0',
        WebkitMaskPosition: '0 0',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
      }}>
        <img alt="Netflix" src={imgNetflixLogotype1} style={{
          display: 'block', width: '100%', height: '100%',
        }} />
      </div>
    </div>
  )
}

Slide01.Background = Background
