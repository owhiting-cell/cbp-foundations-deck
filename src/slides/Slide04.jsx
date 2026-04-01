const imgEllipse6620 = 'https://www.figma.com/api/mcp/asset/f67fbb1d-286a-4e69-a84a-8777c51d7fc3'
const imgLine = 'https://www.figma.com/api/mcp/asset/11cfacd6-20ba-4a49-8743-e99119a2899f'
const imgStylizedBullets = 'https://www.figma.com/api/mcp/asset/7c5efe95-aca3-4ad9-be7e-7a847fc92c4d'
const imgStylizedBullets1 = 'https://www.figma.com/api/mcp/asset/6c111f94-39d1-4712-9d99-78dafb215482'
const imgStylizedBullets2 = 'https://www.figma.com/api/mcp/asset/c7ddb1e9-786d-4916-9dbe-2df623817800'
const imgStylizedBullets3 = 'https://www.figma.com/api/mcp/asset/4973eb75-835d-485b-9571-4e49a1142850'

const nf = (weight = 400) => ({
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: weight,
  fontStyle: 'normal',
})

const strokeBg = (c1, c2) =>
  `conic-gradient(from 180deg at 50% 50%, ${c1} 0deg, ${c2} 180deg, ${c1} 360deg)`

const cards = [
  {
    borderColor: '#39dea7', borderColor2: '#1BC4CA',
    title: 'Media Platforms',
    description: 'Core infrastructure powering the Netflix content lifecycle',
    bulletType: 'media', // 3-dot custom
    bullets: ['Asset Intelligence', 'Media Pipelines', 'Storage & Processing'],
  },
  {
    borderColor: '#de39c2', borderColor2: '#F8B0F2',
    title: 'Content Protection & Access',
    description: 'Access management and content pipeline protection across CBP and Ads',
    bulletImg: imgStylizedBullets,
    bulletImgH: 76,
    bullets: ['Access & Permissioning', 'Pre-Release Content Protection'],
  },
  {
    borderColor: '#deb739', borderColor2: '#E33B3E',
    title: 'Content Data Foundations',
    description: 'Connected ecosystem that transforms Netflix data into a strategic asset',
    bulletImg: imgStylizedBullets1,
    bulletImgH: 77,
    bullets: ['Data Unification', 'Talent, Vendor, & Location Data'],
  },
  {
    borderColor: '#97f8ff', borderColor2: '#1B87CA',
    title: 'Information Discovery',
    description: 'Connect siloed data and help teams make decisions efficiently',
    bulletImg: imgStylizedBullets2,
    bulletImgH: 77,
    bullets: ['Cross-CBP Search & AI Enablement', 'Notifications'],
  },
  {
    borderColor: '#78de39', borderColor2: '#89AC80',
    title: 'Developer Productivity',
    description: 'Opinionated dev tools and automated workflows that reduce operational toil',
    bulletImg: imgStylizedBullets3,
    bulletImgH: 108,
    bullets: ['Enterprise Developer Paved Road', 'Workflow Solutions'],
  },
]

function MediaBullets({ items }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      {/* 3 dots + connecting line */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        justifyContent: 'space-between', paddingTop: 7, paddingBottom: 7,
        position: 'relative', alignSelf: 'stretch', flexShrink: 0,
      }}>
        {items.map((_, i) => (
          <div key={i} style={{ position: 'relative', flexShrink: 0, width: 16, height: 16 }}>
            <img alt="" src={imgEllipse6620} style={{
              position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%',
            }} />
          </div>
        ))}
        {/* Vertical line between dots */}
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          top: 15, bottom: 15, width: 0,
        }}>
          <div style={{ position: 'absolute', top: 0, right: -1, bottom: 0, left: -1 }}>
            <img alt="" src={imgLine} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 15, width: 219,
        ...nf(400), fontSize: 24, lineHeight: 'normal',
        color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.96px',
      }}>
        {items.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  )
}

function ImageBullets({ img, imgH, items }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <img alt="" src={img} style={{ display: 'block', flexShrink: 0, width: 16, height: imgH }} />
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 15, flex: '1 0 0',
        ...nf(400), fontSize: 24, lineHeight: 'normal',
        color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.96px',
      }}>
        {items.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  )
}

function Card({ borderColor, borderColor2, title, description, bulletType, bulletImg, bulletImgH, bullets }) {
  return (
    <div style={{
      width: 355, flexShrink: 0,
      background: strokeBg(borderColor, borderColor2),
      padding: 3,
      borderRadius: 27,
    }}>
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-end',
        backgroundColor: '#302032',
        borderRadius: 24,
        padding: '40px 32px',
        overflow: 'hidden',
      }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', width: '100%', flex: '1 0 0', minHeight: 0 }}>
        {/* Title + description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', flexShrink: 0, width: '100%' }}>
          <p style={{
            ...nf(500), fontSize: 48, lineHeight: 1,
            color: '#f5e1e2', width: '100%',
            fontStretch: 'condensed',
          }}>
            {title}
          </p>
          <p style={{
            ...nf(400), fontSize: 24, lineHeight: 'normal',
            color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.96px', width: '100%',
          }}>
            {description}
          </p>
        </div>
        {/* Workstreams */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', flexShrink: 0, width: '100%' }}>
          <p style={{ ...nf(500), fontSize: 24, lineHeight: 'normal', color: 'white', letterSpacing: '-0.96px', width: '100%' }}>
            Workstreams:
          </p>
          {bulletType === 'media'
            ? <MediaBullets items={bullets} />
            : <ImageBullets img={bulletImg} imgH={bulletImgH} items={bullets} />
          }
        </div>
      </div>
      </div>
    </div>
  )
}

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0c021a' }} />
}

export default function Slide04({ slideNumber }) {
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
      <p style={{
        position: 'absolute', right: 40, top: 40,
        ...nf(400), fontSize: 24, lineHeight: 1.1,
        color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap',
      }}>
        {slideNumber}
      </p>

      {/* Heading — centered */}
      <p style={{
        position: 'absolute', left: '50%', top: 66,
        transform: 'translateX(-50%)',
        width: 678, textAlign: 'center',
        ...nf(500), fontSize: 48, lineHeight: 0.87,
        letterSpacing: '-1.92px', color: '#f0e1f5',
      }}>
        CBPF Problem Spaces
      </p>

      {/* 5 cards — calc(16.67%+26px) ≈ 206px from top */}
      <div style={{
        position: 'absolute',
        left: 40, top: 210, width: 1840, height: 575,
        display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'stretch',
      }}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>

      {/* AI Enablement bar — calc(75%-5px) ≈ 805px from top */}
      <div style={{
        position: 'absolute',
        left: 40, top: 805, width: 1840, height: 142,
        background: strokeBg('#dac5f8', '#b89ee8'),
        padding: 3,
        borderRadius: 27,
      }}>
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
          backgroundColor: '#302032',
          borderRadius: 24,
          padding: '0 40px',
          overflow: 'hidden',
        }}>
          <p style={{
            ...nf(500), fontSize: 48, lineHeight: 1,
            color: '#f5e1e2', textAlign: 'center', width: '100%',
          }}>
            AI Enablement
          </p>
        </div>
      </div>

      {/* *WIP — bottom-right */}
      <p style={{
        position: 'absolute', right: 30, top: 993,
        fontFamily: "'SF Mono', 'Monaco', monospace",
        fontWeight: 400, fontSize: 48, lineHeight: 'normal',
        color: 'white', textAlign: 'right',
      }}>
        *WIP
      </p>

    </div>
  )
}

Slide04.Background = Background
