import React from "react";

const offices = [
  { id: 1, name: "Skyline Towers", rent: 75000, address: "MG Road" },
  { id: 2, name: "TechHub", rent: 58000, address: "Whitefield" },
  { id: 3, name: "WorkNest", rent: 64000, address: "Indiranagar" },
  { id: 4, name: "CoWorkZone", rent: 55000, address: "HSR Layout" }
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
     
      <h1>Office Space Rental Listings</h1>

     
      <img
        src="https://unsplash.com/photos/group-of-people-using-laptop-computer-QckxruozjRg"
        alt="Office Space"
        width="600"
      />


      <div style={{ marginTop: "20px" }}>
        {offices.map((office) => (
          <div
            key={office.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px"
            }}
          >
            <h2>{office.name}</h2>
            <p>
              <strong>Address:</strong> {office.address}
            </p>
            <p>
              <strong>Rent:</strong>{" "}
              <span
                style={{
                  color: office.rent < 60000 ? "red" : "green",
                  fontWeight: "bold"
                }}
              >
                ₹{office.rent}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
