interface ArrowUpProps {
  width?: number
  height?: number
}

export const ArrowUp = ({ width = 20, height = 20 }: ArrowUpProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
)
