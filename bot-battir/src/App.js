import React, { useState, useEffect } from 'react';
import Botcollection from './components/Botcollection';
import Yourbotarmy from './components/Yourbotarmy';
import Sortbar from './components/Sortbar';
import Filterbar from './components/Filterbar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('')
      .then((response) => response.json())
      .then((data) => setBots(data.bots));
  }, []);

  const addToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    // Remove the bot from the backend
    fetch(`data/bots/${bot.id}.json`, { method: 'DELETE' });

    // Remove the bot from the army if it is there
    setArmy(army.filter((b) => b.id !== bot.id));

    // Remove the bot from the list of all bots
    setBots(bots.filter((b) => b.id !== bot.id));
  };

  const sortBots = (property) => {
    const sortedBots = [...bots].sort((a, b) => b[property] - a[property]);
    setBots(sortedBots);
  };

  const filterBots = (type) => {
    const filteredBots = type === 'all' ? bots : bots.filter((b) => b.type === type);
    setBots(filteredBots);
  };

  return (
    <div className="App">
      <h1>Bot Army</h1>
      <div className="filters">
        <Sortbar sortBots={sortBots} />
        <Filterbar filterBots={filterBots} />
      </div>
      <Botcollection bots={bots} addToArmy={addToArmy} dischargeBot={dischargeBot} />
      <Yourbotarmy army={army} removeFromArmy={removeFromArmy} />
    </div>
  );
}

export default App;
