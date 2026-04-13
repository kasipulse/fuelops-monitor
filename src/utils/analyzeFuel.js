export function analyzeFuel(item) {
  const variance = item.actualAmount - item.authorizedAmount;

  return {
    ...item,
    anomaly: Math.abs(variance) > 200,
    variance,
  };
}
