// The torn-paper edge is the original site's signature divider (05-brand-reference §4).
// Used sparingly: under the home hero and above the footer.
const PATH =
  'M0 22 L38 18 L71 23 L104 16 L139 20 L171 13 L210 19 L246 15 L281 21 L318 14 L350 18 L389 11 L426 17 L458 13 L497 20 L532 15 L570 19 L604 12 L641 18 L679 14 L713 21 L752 16 L787 20 L825 13 L861 18 L896 12 L934 19 L969 15 L1006 21 L1043 14 L1078 18 L1116 11 L1151 17 L1188 13 L1224 20 L1259 15 L1297 19 L1333 12 L1370 18 L1405 14 L1440 19 L1440 40 L0 40 Z';

export default function TornEdge({ color = 'var(--white)', flip = false, className = '' }) {
  return (
    <svg
      className={`torn-edge ${className}`}
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <path d={PATH} fill={color} />
    </svg>
  );
}
