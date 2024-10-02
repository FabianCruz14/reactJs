// first, we declared a array called players. in who include a 
// simple information like a name, position and height

const players = [
    {name: "Becerra, E", position: "Setter", height: 173, id: 1},
    {name: "Perez, M", position: "Outside Hitter", height: 180, id: 2},
    {name: "Cisneros, R", position: "Setter", height: 168, id: 3},
    {name: "Villanueva, D", position: "Middle Blocker", height: 185, id: 4},
    {name: "Ampudia, Y", position: "Middle Blocker", height: 185, id: 5},
    {name: "Charrin, E", position: "Outside Hitter", height: 180, id: 6},
    {name: "Wilson, D", position: "Opposite", height: 186, id: 7},
    {name: "Lara, J", position: "Outside Hitter", height: 179, id: 8},
    {name: "Alvarez, G", position: "Outside Hitter", height: 182, id: 9},
    {name: "Cruz, F", position: "Libero", height: 175, id: 10},
  
  ]
  
//   then, we created a functional component called App
//   into this component we created a list of players
  
  function App() {

    // declared a lisPlayers and map it with the players array
    const listPlayers = players.map(player=>
      <li key={player.id}
      style={{color: player.position === "Libero" ? "grey" : "white"
      }}
      >
        {player.name}, {player.position}, {player.height}
      </li>
    );

    // returned the list of players in ul
    return (
      <ul>
        {listPlayers}
      </ul>
    );
    
  }
  
  export default App
  