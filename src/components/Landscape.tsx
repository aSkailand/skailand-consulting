import type { SVGProps } from "react";

const INK = "#1E332D";
const PAPER = "#F3EBDD";
const MOSS = "#788A78";
const TERRA = "#B56843";

/** Spruce silhouettes along a baseline. */
function Trees({
  xs,
  base,
  h,
  fill = INK,
}: {
  xs: number[];
  base: number;
  h: number;
  fill?: string;
}) {
  return (
    <g fill={fill}>
      {xs.map((x, i) => {
        const th = h + ((i * 7) % 3) * 12;
        const w = th * 0.3;
        return (
          <path
            key={x}
            d={`M${x} ${base - th}
              L${x + w * 0.4} ${base - th * 0.66} L${x + w * 0.2} ${base - th * 0.66}
              L${x + w * 0.65} ${base - th * 0.42} L${x + w * 0.38} ${base - th * 0.42}
              L${x + w * 0.85} ${base - th * 0.2} L${x + w * 0.55} ${base - th * 0.2}
              L${x + w} ${base} L${x - w} ${base}
              L${x - w * 0.55} ${base - th * 0.2} L${x - w * 0.85} ${base - th * 0.2}
              L${x - w * 0.38} ${base - th * 0.42} L${x - w * 0.65} ${base - th * 0.42}
              L${x - w * 0.2} ${base - th * 0.66} L${x - w * 0.4} ${base - th * 0.66} Z`}
          />
        );
      })}
    </g>
  );
}

function Hatch({
  id,
  color,
  angle,
  gap,
}: {
  id: string;
  color: string;
  angle: number;
  gap: number;
}) {
  return (
    <pattern
      id={id}
      width={gap}
      height={gap}
      patternUnits="userSpaceOnUse"
      patternTransform={`rotate(${angle})`}
    >
      <line x1="0" y1="0" x2="0" y2={gap} stroke={color} strokeWidth="1.1" />
    </pattern>
  );
}

/** Water: broken horizontal strokes. */
function Water({
  x1,
  x2,
  y,
  rows,
  step = 11,
}: {
  x1: number;
  x2: number;
  y: number;
  rows: number;
  step?: number;
}) {
  return (
    <g stroke={INK} strokeLinecap="round">
      {Array.from({ length: rows }).map((_, i) => (
        <line
          key={i}
          x1={x1 + i * 18}
          x2={x2 - i * 18}
          y1={y + i * step}
          y2={y + i * step}
          strokeWidth={i % 2 ? 0.9 : 1.4}
          strokeDasharray={
            i % 3 === 0 ? "70 14 24 14" : i % 3 === 1 ? "36 18" : "110 10"
          }
          opacity={0.85 - i * 0.07}
        />
      ))}
    </g>
  );
}

/** Hero illustration: engraved mountain, fjord and spruce with network arcs. */
export function Landscape(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <Hatch id="h-ink" color={INK} angle={60} gap={4.5} />
        <Hatch id="h-ink2" color={INK} angle={-50} gap={6} />
        <Hatch id="h-moss" color={MOSS} angle={-58} gap={6} />
        <Hatch id="h-moss2" color={MOSS} angle={55} gap={8} />
      </defs>

      {/* distant ranges */}
      <path
        d="M0 290 L70 240 L130 262 L200 215 L270 258 L350 232 L430 290Z"
        fill="url(#h-moss2)"
        stroke={MOSS}
      />
      <path
        d="M560 290 L640 252 L700 230 L790 180 L860 226 L930 206 L1000 258 L1000 290Z"
        fill="url(#h-moss2)"
        stroke={MOSS}
      />
      <path d="M100 290 L190 236 L290 290Z M620 290 L700 242 L800 290Z" fill="url(#h-moss)" />

      {/* main massif */}
      <path
        d="M250 290 L340 200 L400 222 L500 70 L545 130 L590 112 L690 212 L760 290Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M500 70 L545 130 L590 112 L690 212 L760 290 L600 290 L585 215 L540 165 L510 210 L470 290Z"
        fill="url(#h-ink)"
      />
      <path d="M250 290 L340 200 L400 222 L470 290Z" fill="url(#h-ink2)" />
      <path d="M400 222 L500 70 L470 290Z" fill="url(#h-moss)" opacity="0.6" />
      <path
        d="M500 70 L488 108 L504 126 L494 160 M500 70 L520 102 L545 130 M545 130 L540 165 L556 190 M590 112 L600 150 L628 180"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M380 290 L440 236 L520 290Z M600 290 L650 240 L720 290Z" fill="url(#h-ink)" />
      <path
        d="M380 290 L440 236 L520 290 M600 290 L650 240 L720 290"
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
      />

      {/* fjord */}
      <line x1="0" x2="1000" y1="290" y2="290" stroke={INK} strokeWidth="1.2" />
      <Water x1={150} x2={850} y={300} rows={7} />

      {/* forest */}
      <Trees xs={[40, 80, 118, 160, 200, 236]} base={320} h={72} fill={MOSS} />
      <Trees xs={[18, 62, 108, 150, 196, 240, 285]} base={372} h={100} />
      <Trees xs={[770, 812, 850, 892, 935, 975]} base={322} h={70} fill={MOSS} />
      <Trees xs={[730, 775, 820, 862, 905, 950, 992]} base={372} h={100} />
      <path d="M0 372 H300 M700 372 H1000" stroke={INK} strokeWidth="1.5" />
      <path
        d="M0 384 H260 M740 384 H1000 M0 396 H200 M800 396 H1000"
        stroke={INK}
        strokeWidth="0.9"
        strokeDasharray="30 8 6 8"
      />

      {/* network */}
      <g fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round">
        <path d="M190 190 Q 330 20 500 40" />
        <path d="M500 40 Q 670 20 810 185" />
        <path d="M500 40 Q 420 80 360 150" />
        <path d="M500 40 Q 590 95 660 110" />
        <path d="M360 150 Q 300 160 190 190" strokeDasharray="3 6" />
        <path d="M660 110 Q 740 130 810 185" strokeDasharray="3 6" />
      </g>
      <g fill={TERRA}>
        <circle cx="500" cy="40" r="9" />
        <circle cx="190" cy="190" r="6" />
        <circle cx="810" cy="185" r="7" />
        <circle cx="360" cy="150" r="5" />
        <circle cx="660" cy="110" r="5" />
      </g>
    </svg>
  );
}

/** Wide panorama strip used as a framed divider. */
export function Panorama(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 240"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      {...props}
    >
      <defs>
        <Hatch id="p-ink" color={INK} angle={60} gap={4.5} />
        <Hatch id="p-moss" color={MOSS} angle={-58} gap={6} />
      </defs>
      <path
        d="M0 150 L80 100 L150 128 L230 80 L330 130 L420 108 L520 150Z"
        fill="url(#p-moss)"
        stroke={MOSS}
      />
      <path
        d="M560 150 L640 118 L720 92 L800 60 L880 112 L960 86 L1050 128 L1120 108 L1200 150Z"
        fill="url(#p-moss)"
        stroke={MOSS}
      />
      <path
        d="M160 150 L260 70 L300 90 L380 40 L460 110 L520 150Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M380 40 L460 110 L520 150 L400 150 L370 110Z M160 150 L260 70 L300 90 L250 150Z"
        fill="url(#p-ink)"
      />
      <path
        d="M680 150 L760 90 L820 50 L900 100 L960 70 L1040 150Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M820 50 L900 100 L960 70 L1040 150 L880 150 L840 110Z" fill="url(#p-ink)" />
      <path
        d="M380 40 L372 66 L386 84 M820 50 L812 76 L828 92"
        fill="none"
        stroke={INK}
        strokeWidth="1.2"
      />
      <line x1="0" x2="1200" y1="150" y2="150" stroke={INK} />
      <Water x1={120} x2={1080} y={160} rows={6} step={12} />
      <Trees xs={[30, 70, 110, 150, 190]} base={178} h={62} fill={MOSS} />
      <Trees xs={[14, 56, 100, 142, 184, 226]} base={232} h={95} />
      <Trees xs={[1010, 1050, 1090, 1130, 1170]} base={178} h={62} fill={MOSS} />
      <Trees xs={[990, 1032, 1074, 1116, 1158, 1196]} base={232} h={95} />
      <path d="M0 232 H260 M940 232 H1200" stroke={INK} strokeWidth="1.5" />
    </svg>
  );
}

/** Small network-arc ornament. */
export function Ornament(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <g fill="none" stroke={TERRA} strokeWidth="1.5" strokeLinecap="round">
        <path d="M10 50 Q 40 8 80 10 Q 120 8 150 50" />
        <path d="M80 10 Q 60 20 45 46" />
        <path d="M80 10 Q 100 20 115 46" />
        <path d="M45 46 L10 50 M115 46 L150 50" strokeDasharray="2 5" />
      </g>
      <g fill={TERRA}>
        <circle cx="80" cy="10" r="6" />
        <circle cx="10" cy="50" r="4" />
        <circle cx="150" cy="50" r="4" />
        <circle cx="45" cy="46" r="3.5" />
        <circle cx="115" cy="46" r="3.5" />
      </g>
    </svg>
  );
}
