export default function StatusBadge({ anomaly }) {
  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "6px",
        background: anomaly ? "red" : "green",
        color: "white",
        fontSize: "12px",
      }}
    >
      {anomaly ? "REVIEW" : "OK"}
    </span>
  );
}
