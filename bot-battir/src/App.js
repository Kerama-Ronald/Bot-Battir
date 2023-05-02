

import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then(response => response.json())
      .then(data => setBots(data.bots))
      .catch(error => console.error("Error fetching bots:", error));
  }, []);

  // logic for enlisting and releasing bots

  // logic for filtering and sorting

  return (
    <div className="App">
      <BotCollection />
      <YourBotArmy />
    </div>
  );
}

export default App;


