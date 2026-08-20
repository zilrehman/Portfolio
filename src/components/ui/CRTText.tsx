/**
 * Per-glyph slot text. Mirrors the reference markup exactly; the reference
 * drives it on hover only (`.crt-root:hover .crt-stack`) with no idle animation.
 */
export function CRTText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span aria-label={text} className={`crt-root ${className}`}>
      <span aria-hidden="true" className="crt-wrap">
        {text.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="crt-cell"
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="crt-stack">
              <span className="crt-glyph">{char === " " ? " " : char}</span>
              <span className="crt-glyph">{char === " " ? " " : char}</span>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
