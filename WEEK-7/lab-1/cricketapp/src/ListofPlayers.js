import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 90 },
    { name: "Rahul", score: 65 },
    { name: "Gill", score: 75 },
    { name: "Pant", score: 68 },
    { name: "Jadeja", score: 55 },
    { name: "Kohli", score: 80 },
    { name: "Bumrah", score: 45 },
    { name: "Shami", score: 95 },
    { name: "Surya", score: 78 },
    { name: "Hardik", score: 60 }
  ];

  // ES6 arrow function to filter scores < 70
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h2>Players with score below 70</h2>
      {filteredPlayers.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
}

export default ListofPlayers;
