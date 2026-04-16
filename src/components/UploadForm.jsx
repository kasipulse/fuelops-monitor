import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UploadForm() {
  const [vehicleId, setVehicleId] = useState("");
  const [authorizedAmount, setAuthorizedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");
  const [litres, setLitres] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a receipt image");
      return;
    }

    try {
      // Upload to Firebase Storage
      const storageRef = ref(storage, `receipts/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);

      const imageUrl = await getDownloadURL(storageRef);

      // Save to Firestore
      await addDoc(collection(db, "fuelRecords"), {
        vehicleId,
        authorizedAmount: Number(authorizedAmount),
        actualAmount: Number(actualAmount),
        litres: Number(litres),
        receiptUrl: imageUrl,
        createdAt: new Date()
      });

      alert("Uploaded successfully!");

      // Reset form
      setVehicleId("");
      setAuthorizedAmount("");
      setActualAmount("");
      setLitres("");
      setFile(null);

    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      
      <input
        placeholder="Vehicle ID"
        value={vehicleId}
        onChange={(e) => setVehicleId(e.target.value)}
      />

      <input
        placeholder="Authorized Amount"
        value={authorizedAmount}
        onChange={(e) => setAuthorizedAmount(e.target.value)}
      />

      <input
        placeholder="Actual Amount"
        value={actualAmount}
        onChange={(e) => setActualAmount(e.target.value)}
      />

      <input
        placeholder="Litres"
        value={litres}
        onChange={(e) => setLitres(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button type="submit">Upload Receipt</button>
    </form>
  );
}
