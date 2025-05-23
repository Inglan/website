export default function Turbulence() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect
        width="100%"
        height="100%"
        opacity="0.75"
        filter="url(#noiseFilter)"
      />
    </svg>
  );
}
