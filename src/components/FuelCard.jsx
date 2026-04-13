import StatusBadge from "./StatusBadge";

export default function FuelCard({ item }) {
  return (
    <div style={{
      background: "#111",
      padding: "16px",
      marginBottom: "10px",
      borderRadius: "8px",
      color: "white"
    }}>
      <h3>{item.vehicleId}</h3>

      <p>Authorized: R {item.authorizedAmount}</p>
      <p>Actual: R {item.actualAmount}</p>
      <p>Litres: {item.litres}L</p>

      <StatusBadge anomaly={item.anomaly} />
    </div>
  );
}
