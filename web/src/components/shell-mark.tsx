export function ShellMark() {
  return (
    <svg
      className="shell-mark"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M83 56c-3 20-21 33-41 29C20 81 8 59 15 39 23 16 51 7 72 21c18 12 21 38 7 54-11 13-32 15-44 3-11-11-9-31 4-39 12-7 28-1 32 12 4 12-5 25-17 26-11 1-20-9-18-19 2-9 13-14 21-9 7 4 8 14 2 20-5 5-14 2-15-4-1-6 6-11 11-7 4 3 2 10-2 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {Array.from({ length: 14 }).map((_, index) => {
        const angle = index * 24 - 150;
        return (
          <path
            d="M50 52 C54 38 62 27 75 18"
            key={angle}
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.5"
            transform={`rotate(${angle} 50 52)`}
          />
        );
      })}
    </svg>
  );
}
