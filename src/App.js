import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Players from "./components/Players/Players";
import playerList from "../src/playerList"
import "./App.css";


const displayPlayers = (player) => {
  return <Players
    key={player.id}
    image={player.image}
    name={player.name}
    profession={player.profession}
    position={player.position}
    nationality={player.nationality}
  />
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {playerList.map(displayPlayers)}
        <Footer />
      </div>
    )
  }
}
export default App;


