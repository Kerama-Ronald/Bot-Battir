import React, { useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortBy, setSortBy] = useState(null);

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

