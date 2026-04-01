const imgUnion = 'https://www.figma.com/api/mcp/asset/10de13df-38a0-4c21-aea5-19ba84360b8c'
const imgTimeline = 'https://www.figma.com/api/mcp/asset/d0997288-75b0-48a5-a2dd-6465a5d68b31'

// calc(p% + offset) resolved against 1920×1080 canvas
// left/top helpers: f(percent, offset) = percent * dim + offset
// 6.25%*1920 = 120, 12.5%*1080 = 135, 25%*1920 = 480, 25%*1080 = 270
// 31.25%*1920 = 600, 37.5%*1920 = 720, 37.5%*1080 = 405
// 50%*1080 = 540, 75%*1080 = 810, 93.75%*1920 = 1800

const agendaItems = [
  { section: 'Intro',     title: 'Mission and Team',      sectionTop: 288,  titleTop: 316  },
  { section: 'Section 2', title: 'Product Walkthrough',   sectionTop: 455,  titleTop: 483  },
  { section: 'Section 3', title: 'Product Walkthrough',   sectionTop: 622,  titleTop: 650  },
  { section: 'Section 4', title: 'Looking to the Future', sectionTop: 789,  titleTop: 817  },
]

function Background() {
  return (
    <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0c021a' }} />
  )
}

export default function Slide02({ slideNumber }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Header — "Foundations" label */}
      <p style={{
        position: 'absolute', left: 40, top: 40,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 400, fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap',
      }}>
        Foundations
      </p>

      {/* Slide number — top-right */}
      <p style={{
        position: 'absolute', right: 40, top: 40,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 400, fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap',
      }}>
        {slideNumber}
      </p>

      {/* "Agenda" title — calc(6.25%+36px)=156, calc(12.5%+90px)=225 */}
      <p style={{
        position: 'absolute', left: 156, top: 225, width: 483,
        fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 500, fontSize: 96, lineHeight: 1.3,
        color: '#f0e1f5',
      }}>
        Agenda
      </p>

      {/* Stacked rounded cards — calc(37.5%+5px)=725, calc(12.5%+115px)=250 */}
      <img alt="" src={imgUnion} style={{
        position: 'absolute', left: 725, top: 250, width: 1086, height: 651,
        display: 'block',
      }} />

      {/* Vertical timeline line with dots — calc(31.25%+70px)=670, calc(25%+19px)=289 */}
      <img alt="" src={imgTimeline} style={{
        position: 'absolute', left: 670, top: 289, width: 16, height: 515,
        display: 'block',
      }} />

      {/* Agenda items text — left: calc(37.5%+41px)=761 */}
      {agendaItems.map(({ section, title, sectionTop, titleTop }) => (
        <div key={section}>
          <p style={{
            position: 'absolute', left: 761, top: sectionTop, width: 297,
            fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: 700, fontSize: 16, lineHeight: 1.2,
            letterSpacing: '-0.32px', textTransform: 'uppercase',
            color: '#e8bbff',
          }}>
            {section}
          </p>
          <p style={{
            position: 'absolute', left: 761, top: titleTop,
            fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
            fontWeight: 500, fontSize: 32, lineHeight: 1,
            letterSpacing: '-0.64px',
            color: '#f5e1e2', whiteSpace: 'nowrap',
          }}>
            {title}
          </p>
        </div>
      ))}
    </div>
  )
}

Slide02.Background = Background
