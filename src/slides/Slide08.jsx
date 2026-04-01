const imgVector4814 = 'https://www.figma.com/api/mcp/asset/2eaa614a-f9c4-4a18-b471-66f567525cf1'
const imgVector4815 = 'https://www.figma.com/api/mcp/asset/92bc5e58-a656-4cab-afec-36d88d49bdc4'
const imgVector4816 = 'https://www.figma.com/api/mcp/asset/f709fa78-ecca-4d69-94cc-2dd66f10a407'
const imgVector4817 = 'https://www.figma.com/api/mcp/asset/7d26b56b-640d-48b9-832a-b48924b6bf9e'
const imgVector4818 = 'https://www.figma.com/api/mcp/asset/3d414131-97c8-4f51-9393-893f793f6548'
const imgVector4819 = 'https://www.figma.com/api/mcp/asset/33cbec9d-7691-460e-9154-b020aae117f9'
const imgVector4820 = 'https://www.figma.com/api/mcp/asset/f7a3af12-543f-40fc-9418-2988ee01f38e'
const imgVector4821 = 'https://www.figma.com/api/mcp/asset/a7f565fb-841f-4740-b73a-5bac6c1dbde7'
const imgVector4822 = 'https://www.figma.com/api/mcp/asset/bb13aa37-7e2b-45ac-8e02-f41dcbb69d8c'

const nf = (weight = 400) => ({
  fontFamily: "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: weight,
  fontStyle: 'normal',
})

// calc() resolved against 1920×1080:
// calc(8.33%+15px)   = 105    calc(25%+5px)      = 275
// calc(33.33%+15px)  = 375    calc(50%-8px)       = 532
// calc(54.17%-70px)→970, with translateX(-50%) of 344w → left=798
// calc(16.67%+57px)  = 377    calc(33.33%+20px)   = 660
// calc(41.67%+119px) = 919    calc(50%+9px)       = 969
// calc(25%+50px)     = 530    calc(41.67%+27px)   = 827
// calc(58.33%+46px)  = 676    calc(75%+12px)      = 822
// calc(91.67%+3px)   = 993

function ArcVec({ src, left, top, w, h, transform }) {
  return (
    <div style={{ position: 'absolute', left, top, width: w, height: h }}>
      <div style={{
        position: 'absolute', top: 0, right: -1.5, bottom: 0, left: -1.5,
        transform, transformOrigin: 'center',
      }}>
        <img alt="" src={src} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

function Pill({ label }) {
  return (
    <div style={{
      flexShrink: 0,
      backgroundColor: '#0c021a',
      border: '3px solid #de39c2',
      borderRadius: 12,
      padding: '32px 48px',
      overflow: 'hidden',
    }}>
      <p style={{ ...nf(700), fontSize: 36, lineHeight: 1, color: '#f5e1e2', whiteSpace: 'nowrap' }}>
        {label}
      </p>
    </div>
  )
}

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0c021a' }} />
}

export default function Slide08({ slideNumber }) {
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

      {/* Title */}
      <p style={{
        position: 'absolute', left: 621, top: 105, width: 678,
        ...nf(700), fontSize: 48, lineHeight: 0.87,
        letterSpacing: '-1.92px', color: '#f0e1f5', textAlign: 'center',
      }}>
        Who We Support
      </p>

      {/* Arc connectors — top (pills to center card) */}
      <ArcVec src={imgVector4814} left={377} top={375} w={592} h={158} />
      <ArcVec src={imgVector4815} left={660} top={375} w={309} h={157} />
      <ArcVec src={imgVector4816} left={969} top={375} w={235} h={158} transform="rotate(180deg) scaleY(-1)" />
      <ArcVec src={imgVector4818} left={919} top={375} w={50}  h={158} />
      <ArcVec src={imgVector4817} left={969} top={375} w={500} h={157} transform="rotate(180deg) scaleY(-1)" />

      {/* Arc connectors — bottom (center card to bottom pills) */}
      <ArcVec src={imgVector4819} left={530} top={676} w={439} h={146} transform="scaleY(-1)" />
      <ArcVec src={imgVector4820} left={827} top={677} w={142} h={145} transform="scaleY(-1)" />
      <ArcVec src={imgVector4821} left={970} top={676} w={445} h={146} transform="rotate(180deg)" />
      <ArcVec src={imgVector4822} left={969} top={676} w={173} h={146} transform="rotate(180deg)" />

      {/* Center "Foundations" card */}
      <div style={{
        position: 'absolute', left: 798, top: 532,
        width: 344, height: 144,
        backgroundColor: '#302032',
        border: '3px solid #de39c2',
        borderRadius: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <p style={{ ...nf(500), fontSize: 48, lineHeight: 1, color: '#f5e1e2', textAlign: 'center', width: '100%' }}>
          Foundations
        </p>
      </div>

      {/* Top row — 5 pills */}
      <div style={{
        position: 'absolute', left: '50%', top: 275,
        transform: 'translateX(-50%)',
        display: 'flex', gap: 48, alignItems: 'center',
      }}>
        {['Planning', 'Finance', 'Legal', 'Production', 'Localization'].map((label) => (
          <Pill key={label} label={label} />
        ))}
      </div>

      {/* Bottom row — 4 pills */}
      <div style={{
        position: 'absolute', left: 'calc(50% - 2px)', top: 822,
        transform: 'translateX(-50%)',
        display: 'flex', gap: 48, alignItems: 'center',
      }}>
        {['Promotion', 'Distribution', 'Advertise', 'Build'].map((label) => (
          <Pill key={label} label={label} />
        ))}
      </div>

    </div>
  )
}

Slide08.Background = Background
