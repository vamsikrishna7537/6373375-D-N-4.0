import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = parseFloat(rupees) / 90;
    setEuro(converted.toFixed(2));
  };

  return (
    <div>
      <h3>Currency Converter (INR to Euro)</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter Rupees"
        />
        <button type="submit">Convert</button>
      </form>
      {euro && (
        <p>
          <strong>Euro: €{euro}</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
