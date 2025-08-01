import React from "react";

function IndianPlayers() {
  // Declare two arrays
  const T20players = ["Rohit", "Virat", "Gill", "Pant", "Surya"];
  const RanjiTrophy = ["Pujara", "Rahane", "Prithvi", "Sarfaraz", "Baba Indrajith"];


  const allPlayers = [...T20players, ...RanjiTrophy];

 
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>All Indian Players</h2>
      <p><strong>Odd Team:</strong> {oddTeam.join(", ")}</p>
      <p><strong>Even Team:</strong> {evenTeam.join(", ")}</p>
    </div>
  );
}

export default IndianPlayers;
