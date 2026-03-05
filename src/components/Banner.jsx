const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  const WavePattern = ({ color }) => (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 500 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 20, 40, 60, 80].map((offset, i) => (
        <ellipse
          key={i}
          cx="420"
          cy={offset + 30}
          rx={120 + i * 18}
          ry={120 + i * 18}
          fill="none"
          stroke={color}
          strokeWidth="1.2"
        />
      ))}
      {[0, 20, 40, 60, 80].map((offset, i) => (
        <ellipse
          key={`b${i}`}
          cx="80"
          cy={170 - offset}
          rx={80 + i * 14}
          ry={80 + i * 14}
          fill="none"
          stroke={color}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );

  return (
    <div style={{ display: "flex", gap: "16px", padding: "24px 16px", background: "#f3f4f6" }}>
      {/* In-Progress Card */}
      <div
        style={{
          flex: 1,
          borderRadius: "16px",
          padding: "40px 32px",
          background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 40%, #4c1d95 100%)",
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "160px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(109,40,217,0.3)",
        }}
      >
        <WavePattern color="#c4b5fd" />
        <p
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "12px",
            letterSpacing: "0.02em",
            opacity: 0.95,
          }}
        >
          In-Progress
        </p>
        <p
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: 1,
            margin: 0,
          }}
        >
          {inProgressCount}
        </p>
      </div>

      {/* Resolved Card */}
      <div
        style={{
          flex: 1,
          borderRadius: "16px",
          padding: "40px 32px",
          background: "linear-gradient(135deg, #059669 0%, #047857 40%, #065f46 100%)",
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "160px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(4,120,87,0.3)",
        }}
      >
        <WavePattern color="#6ee7b7" />
        <p
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "12px",
            letterSpacing: "0.02em",
            opacity: 0.95,
          }}
        >
          Resolved
        </p>
        <p
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: 1,
            margin: 0,
          }}
        >
          {resolvedCount}
        </p>
      </div>
    </div>
  );
};

export default Banner;