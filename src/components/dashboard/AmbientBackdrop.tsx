'use client'

// Editorial backdrop shared by every inner page via AppShell:
// a flat VEIXON-dark sheet with a faint drafting grid (no WebGL, no glow).
export default function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--bg-primary)' }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in srgb, var(--text-primary) 5%, transparent) 1px, transparent 1px),' +
            'linear-gradient(to bottom, color-mix(in srgb, var(--text-primary) 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,.55) 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,.55) 60%, transparent 100%)',
        }}
      />
    </div>
  )
}
