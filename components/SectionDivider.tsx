/** Minimal divider between sections */
export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <span
        style={{
          width: "60px",
          height: "0.5px",
          background: "#3d2510",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  )
}
