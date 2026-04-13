import { fuelData } from "./data/dummyData";
import { analyzeFuel } from "./utils/analyzeFuel";
import FuelCard from "./components/FuelCard";
import MetricCard from "./components/MetricCard";

export default function App() {
  const data = fuelData.map(analyzeFuel);

  const alerts = data.filter(d => d.anomaly).length;
  const total = data.reduce((sum, d) => sum + d.actualAmount, 0);

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "20px" }}>
      
      <h1 style={{ color: "lightgreen" }}>
        FuelOps Monitor
      </h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <MetricCard title="Total Spend" value={`R ${total}`} />
        <MetricCard title="Alerts" value={alerts} />
      </div>

      <div style={{ marginTop: "20px" }}>
        {data.map(item => (
          <FuelCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
