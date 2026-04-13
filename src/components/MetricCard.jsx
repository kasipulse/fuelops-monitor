export default function MetricCard({ title, value }) {
  return (
    <div style={{
      background: "#111",
      padding: "16px",
      borderRadius: "8px",
      color: "white"
    }}>
      <p style={{ color: "gray" }}>{title}</p>
      <h2 style={{ color: "lightgreen" }}>{value}</h2>
    </div>
  );
}
