const imgUsersWarmMedium = 'https://www.figma.com/api/mcp/asset/898d5a96-2a9e-4b6e-a203-e3a0ae97fe26'
const imgLegosWarmMedium = 'https://www.figma.com/api/mcp/asset/2a437c80-07b6-41ee-a652-df22fde9d3dc'
const imgLaptopWarmMedium = 'https://www.figma.com/api/mcp/asset/1674f048-7b41-46ce-851e-b59d1d6dd8c1'
const imgSlateAssist = 'https://www.figma.com/api/mcp/asset/cb372385-2bee-43cc-9e81-ff9e1e97bf53'
const imgNotificationItem = 'https://www.figma.com/api/mcp/asset/ec78ea62-b09b-4eb9-ac77-454a87b5d432'
const imgHighSecurityTitles = 'https://www.figma.com/api/mcp/asset/992477bd-aaf7-4cfc-8714-563c1ca86fae'
const imgPersonsData = 'https://www.figma.com/api/mcp/asset/f5a59bc9-4e97-4bed-8c0c-e473e7cd446d'
const imgVendorBusinesses = 'https://www.figma.com/api/mcp/asset/38df7972-9098-444e-97d4-452b80a48c5e'
const imgDataFoundations = 'https://www.figma.com/api/mcp/asset/5fce3f94-13ec-404d-bf9e-ae070755c102'
const imgNotificationsPhone = 'https://www.figma.com/api/mcp/asset/bb5a60fc-c61f-4c99-9f10-7f56487543b4'
const imgAccessManager = 'https://www.figma.com/api/mcp/asset/36079fda-4906-4784-be64-ed88ef39461c'
const imgRolesGranted = 'https://www.figma.com/api/mcp/asset/50dc6e19-6cf6-4e25-aab4-52af2b8162ad'

const F = "'Netflix Sans', 'Helvetica Neue', Arial, sans-serif"

// Rounded card panel
function Card({ left, top, width, height, children }) {
  return (
    <div style={{
      position: 'absolute', left, top, width, height,
      backgroundColor: 'rgba(231,225,245,0.2)',
      borderRadius: 16, overflow: 'hidden',
    }}>
      {children}
    </div>
  )
}

// Image that fills its container
function PanelImg({ src, left, top, width, height }) {
  return (
    <div style={{ position: 'absolute', left, top, width, height }}>
      <img alt="" src={src} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', pointerEvents: 'none', display: 'block',
      }} />
    </div>
  )
}

// Gradient fade-to-dark overlay
function FadeOverlay({ left = 0, bottom = 0, width, height }) {
  return (
    <div style={{
      position: 'absolute', left, bottom, width, height,
      background: 'linear-gradient(to bottom, rgba(56,47,70,0), #382f46 calc(100% - 2px), #382f46)',
    }} />
  )
}

// Two-part panel label: dim prefix + bold suffix
function PanelLabel({ prefix, label, style }) {
  return (
    <p style={{
      fontFamily: F, fontSize: 16, letterSpacing: '-0.32px', whiteSpace: 'nowrap',
      lineHeight: 1, ...style,
    }}>
      <span style={{ fontWeight: 400, color: 'rgba(245,225,226,0.5)' }}>{prefix}</span>
      <span style={{ fontWeight: 500, color: '#f5e1e2' }}>{label}</span>
    </p>
  )
}

function Background() {
  return <div style={{ position: 'absolute', inset: 0, backgroundColor: '#0c021a' }} />
}

export default function Slide03() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>

      {/* ── Top row of panels ── */}

      {/* Information Discovery / Notifications — notification item */}
      <Card left={40} top={40} width={445} height={320}>
        <PanelImg src={imgNotificationItem} left={39} top={36} width={365} height={211} />
        <PanelLabel
          prefix="Information Discovery / "
          label="Notifications"
          style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            bottom: 20, textAlign: 'center',
          }}
        />
      </Card>

      {/* Information Discovery / Notifications — phone */}
      <Card left={505} top={40} width={445} height={405}>
        <PanelLabel
          prefix="Information Discovery / "
          label="Notifications"
          style={{ position: 'absolute', left: 94, top: 24 }}
        />
        <PanelImg src={imgNotificationsPhone} left={65} top={40} width={298} height={371} />
        <FadeOverlay width={445} height={112} />
      </Card>

      {/* Access / Access Manager */}
      <Card left={970} top={39} width={565} height={320}>
        <PanelLabel
          prefix="Access / "
          label="Access Manager"
          style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            top: 24, textAlign: 'center',
          }}
        />
        <PanelImg src={imgAccessManager} left={32} top={62} width={502} height={258} />
        <FadeOverlay width={565} height={84} />
      </Card>

      {/* Roles Granted */}
      <Card left={1551} top={41} width={330} height={320}>
        <p style={{
          position: 'absolute', left: 24, top: 24,
          fontFamily: F, fontWeight: 500, fontSize: 48, lineHeight: 1,
          color: 'rgba(255,255,255,0)', whiteSpace: 'nowrap',
        }}>356K*</p>
        <p style={{
          position: 'absolute', left: 26, top: 72,
          fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: 1.3,
          color: 'rgba(255,243,253,0.7)', letterSpacing: '-0.32px', width: 135,
        }}>Roles Granted</p>
        <PanelImg src={imgRolesGranted} left={24} top={114} width={196} height={206} />
        <FadeOverlay width={270} height={143} />
      </Card>

      {/* ── Middle section ── */}

      {/* Information Discovery / Slate Assist — large panel */}
      <Card left={40} top={381} width={445} height={660}>
        <PanelLabel
          prefix="Information Discovery / "
          label="Slate Assist"
          style={{ position: 'absolute', left: 98, top: 24 }}
        />
        <PanelImg src={imgSlateAssist} left={0} top={61} width={406} height={593} />
      </Card>

      {/* 100+ Applications Supported */}
      <Card left={971} top={380} width={443} height={150}>
        <p style={{
          position: 'absolute', left: 137, top: 15,
          fontFamily: F, fontWeight: 500, fontSize: 96, lineHeight: 1,
          whiteSpace: 'nowrap',
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 236 96\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-21.902 -5.2402 20.658 -7.6452 269.73 79.402)\\'><stop stop-color=\\'rgba(248,167,140,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(252,195,196,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(255,224,252,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>100+</p>
        <div style={{ position: 'absolute', left: 27, top: '50%', transform: 'translateY(-50%)' }}>
          <img alt="" src={imgLaptopWarmMedium} style={{ display: 'block', width: 96, height: 96 }} />
        </div>
        <p style={{
          position: 'absolute', left: 145, top: 106,
          fontFamily: F, fontWeight: 400, fontSize: 24, lineHeight: 1.2,
          color: 'rgba(255,243,253,0.7)', letterSpacing: '-0.48px', width: 289,
        }}>Applications Supported</p>
      </Card>

      {/* 39 High Security Titles Protected */}
      <Card left={1434} top={380} width={447} height={320}>
        <p style={{
          position: 'absolute', left: 24, top: 24,
          fontFamily: F, fontWeight: 500, fontSize: 48, lineHeight: 1,
          whiteSpace: 'nowrap',
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 59 48\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-5.4755 -2.6201 5.1645 -3.8226 67.433 39.701)\\'><stop stop-color=\\'rgba(218,140,248,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(225,182,240,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(232,225,231,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>39</p>
        <p style={{
          position: 'absolute', left: 95, top: 28,
          fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: 1.3,
          color: 'rgba(255,243,253,0.7)', letterSpacing: '-0.32px', width: 179,
        }}>High Security Titles Protected</p>
        <FadeOverlay width={270} height={92} />
        <PanelImg src={imgHighSecurityTitles} left={24} top={100} width={352} height={220} />
        <FadeOverlay width={447} height={110} />
      </Card>

      {/* ── Lower-middle row ── */}

      {/* 5 Foundational Services */}
      <Card left={504} top={465} width={446} height={150}>
        <p style={{
          position: 'absolute', left: 137, top: 12,
          fontFamily: F, fontWeight: 500, fontSize: 96, lineHeight: 1,
          whiteSpace: 'nowrap',
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 59 96\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-5.4755 -5.2402 5.1645 -7.6452 67.433 79.402)\\'><stop stop-color=\\'rgba(248,167,140,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(252,195,196,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(255,224,252,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>5</p>
        <div style={{ position: 'absolute', left: 27, top: '50%', transform: 'translateY(-50%)' }}>
          <img alt="" src={imgLegosWarmMedium} style={{ display: 'block', width: 96, height: 96 }} />
        </div>
        <p style={{
          position: 'absolute', left: 137, top: 101,
          fontFamily: F, fontWeight: 400, fontSize: 24, lineHeight: 1.2,
          color: 'rgba(255,243,253,0.7)', letterSpacing: '-0.48px', width: 246,
        }}>Foundational Services</p>
      </Card>

      {/* 206K End Users with Access */}
      <Card left={970} top={550} width={445} height={150}>
        <p style={{
          position: 'absolute', left: 31, top: 15,
          fontFamily: F, fontWeight: 500, fontSize: 96, lineHeight: 1,
          whiteSpace: 'nowrap',
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 242 96\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-22.459 -5.2402 21.183 -7.6452 276.59 79.402)\\'><stop stop-color=\\'rgba(248,167,140,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(252,195,196,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(255,224,252,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>206K</p>
        <div style={{ position: 'absolute', left: 322, top: '50%', transform: 'translateY(-50%)' }}>
          <img alt="" src={imgUsersWarmMedium} style={{ display: 'block', width: 96, height: 96 }} />
        </div>
        <p style={{
          position: 'absolute', left: 31, top: 106,
          fontFamily: F, fontWeight: 400, fontSize: 24, lineHeight: 1.2,
          color: 'rgba(255,243,253,0.7)', letterSpacing: '-0.48px', width: 289,
        }}>End Users with Access</p>
      </Card>

      {/* ── Bottom row ── */}

      {/* 170K+ External Vendor Businesses */}
      <Card left={505} top={635} width={444} height={406}>
        <p style={{
          position: 'absolute', left: 37, top: 24,
          fontFamily: F, fontWeight: 500, fontSize: 48, lineHeight: 1,
          whiteSpace: 'nowrap',
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 151 48\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-14.014 -2.6201 13.218 -3.8226 172.58 39.701)\\'><stop stop-color=\\'rgba(218,140,248,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(225,182,240,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(232,225,231,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>170K+</p>
        <p style={{
          position: 'absolute', left: 200, top: 29,
          fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: 1.3,
          color: 'rgba(255,243,253,0.7)', letterSpacing: '-0.32px', width: 118,
        }}>External Vendor Businesses</p>
        <PanelImg src={imgVendorBusinesses} left={40} top={88} width={368} height={320} />
        <FadeOverlay width={444} height={7} />
      </Card>

      {/* 1.4M+ Persons Data Entities */}
      <Card left={968} top={720} width={331} height={320}>
        <p style={{
          position: 'absolute', left: 24, top: 24,
          fontFamily: F, fontWeight: 500, fontSize: 48, lineHeight: 1,
          whiteSpace: 'nowrap',
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 145 48\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-13.457 -2.6201 12.692 -3.8226 165.73 39.701)\\'><stop stop-color=\\'rgba(218,140,248,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(225,182,240,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(232,225,231,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>1.4M+</p>
        <p style={{
          position: 'absolute', left: 176, top: 29,
          fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: 1.3,
          color: 'rgba(255,243,253,0.7)', letterSpacing: '-0.32px', width: 118,
        }}>Persons Data Entities</p>
        <FadeOverlay width={270} height={92} />
        <FadeOverlay width={288} height={92} />
        <PanelImg src={imgPersonsData} left={24} top={88} width={277} height={232} />
        <FadeOverlay width={331} height={112} />
      </Card>

      {/* Data Foundations / Persons */}
      <Card left={1319} top={720} width={562} height={320}>
        <PanelImg src={imgDataFoundations} left={31} top={21} width={500} height={227} />
        <PanelLabel
          prefix="Data Foundations / "
          label="Persons"
          style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            top: 280, textAlign: 'center',
          }}
        />
      </Card>

      {/* Footnote */}
      <p style={{
        position: 'absolute', left: 1639, top: 1040,
        fontFamily: F, fontWeight: 400, fontSize: 24, lineHeight: 1,
        color: 'white', whiteSpace: 'nowrap',
      }}>*Placeholder number</p>

    </div>
  )
}

Slide03.Background = Background
