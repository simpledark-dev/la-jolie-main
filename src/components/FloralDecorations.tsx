/** Elegant floral SVG decorations — teardrop petals radiating from center */

function Petal({ angle, length = 18, width = 9, className = "" }: { angle: number; length?: number; width?: number; className?: string }) {
  return (
    <path
      d={`M0,0 Q${width},-${length * 0.6} 0,-${length} Q-${width},-${length * 0.6} 0,0Z`}
      transform={`rotate(${angle})`}
      stroke="currentColor"
      strokeWidth="0.6"
      fill="currentColor"
      fillOpacity="0.04"
      strokeLinecap="round"
      className={className}
    />
  );
}

export function FloralBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 6-petal flower */}
      <g transform="translate(60,60)">
        <Petal angle={0} />
        <Petal angle={60} />
        <Petal angle={120} />
        <Petal angle={180} />
        <Petal angle={240} />
        <Petal angle={300} />
        <circle r="5" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
        <circle r="1" cx="-1.5" cy="-0.5" fill="currentColor" fillOpacity="0.15" />
        <circle r="1" cx="1.5" cy="-0.5" fill="currentColor" fillOpacity="0.15" />
        <circle r="1" cy="1.5" fill="currentColor" fillOpacity="0.15" />
      </g>
    </svg>
  );
}

export function FloralPeony({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Layered peony — outer + inner petals */}
      <g transform="translate(70,70)">
        {/* Outer petals — larger, wider */}
        <Petal angle={0} length={32} width={14} />
        <Petal angle={72} length={32} width={14} />
        <Petal angle={144} length={32} width={14} />
        <Petal angle={216} length={32} width={14} />
        <Petal angle={288} length={32} width={14} />
        {/* Inner petals — offset 36° */}
        <Petal angle={36} length={22} width={10} />
        <Petal angle={108} length={22} width={10} />
        <Petal angle={180} length={22} width={10} />
        <Petal angle={252} length={22} width={10} />
        <Petal angle={324} length={22} width={10} />
        <circle r="7" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
        <circle r="1.2" cx="-2" cy="-1" fill="currentColor" fillOpacity="0.14" />
        <circle r="1.2" cx="2" cy="-1" fill="currentColor" fillOpacity="0.14" />
        <circle r="1.2" cy="2" fill="currentColor" fillOpacity="0.14" />
      </g>
    </svg>
  );
}

export function FloralWildflower({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 5-petal flower */}
      <g transform="translate(50,50)">
        <Petal angle={0} length={20} width={10} />
        <Petal angle={72} length={20} width={10} />
        <Petal angle={144} length={20} width={10} />
        <Petal angle={216} length={20} width={10} />
        <Petal angle={288} length={20} width={10} />
        <circle r="5" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.08" />
        <circle r="1" cx="-1.5" cy="0" fill="currentColor" fillOpacity="0.18" />
        <circle r="1" cx="1.5" cy="0" fill="currentColor" fillOpacity="0.18" />
        <circle r="1" cy="1.5" fill="currentColor" fillOpacity="0.18" />
      </g>
    </svg>
  );
}

export function FloralScatter({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Flower 1 — top-left, 5 petals */}
      <g transform="translate(55,50)">
        <Petal angle={0} length={14} width={7} />
        <Petal angle={72} length={14} width={7} />
        <Petal angle={144} length={14} width={7} />
        <Petal angle={216} length={14} width={7} />
        <Petal angle={288} length={14} width={7} />
        <circle r="4" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.07" />
      </g>

      {/* Flower 2 — bottom-right, 6 petals */}
      <g transform="translate(248,148)">
        <Petal angle={0} length={12} width={6} />
        <Petal angle={60} length={12} width={6} />
        <Petal angle={120} length={12} width={6} />
        <Petal angle={180} length={12} width={6} />
        <Petal angle={240} length={12} width={6} />
        <Petal angle={300} length={12} width={6} />
        <circle r="3.5" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.07" />
      </g>

      {/* Flower 3 — center-right, 8 petals */}
      <g transform="translate(200,85)">
        <Petal angle={0} length={10} width={4} />
        <Petal angle={45} length={10} width={4} />
        <Petal angle={90} length={10} width={4} />
        <Petal angle={135} length={10} width={4} />
        <Petal angle={180} length={10} width={4} />
        <Petal angle={225} length={10} width={4} />
        <Petal angle={270} length={10} width={4} />
        <Petal angle={315} length={10} width={4} />
        <circle r="3" stroke="currentColor" strokeWidth="0.4" fill="currentColor" fillOpacity="0.07" />
      </g>

      {/* Flower 4 — bottom-left, tiny 5-petal */}
      <g transform="translate(90,158)">
        <Petal angle={0} length={9} width={4.5} />
        <Petal angle={72} length={9} width={4.5} />
        <Petal angle={144} length={9} width={4.5} />
        <Petal angle={216} length={9} width={4.5} />
        <Petal angle={288} length={9} width={4.5} />
        <circle r="2.5" stroke="currentColor" strokeWidth="0.4" fill="currentColor" fillOpacity="0.07" />
      </g>

      {/* Scattered dots */}
      <circle cx="135" cy="55" r="1.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="160" cy="175" r="1.2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="280" cy="65" r="1" fill="currentColor" fillOpacity="0.08" />
      <circle cx="38" cy="135" r="1.3" fill="currentColor" fillOpacity="0.09" />
      <circle cx="270" cy="38" r="1.4" fill="currentColor" fillOpacity="0.07" />
    </svg>
  );
}
