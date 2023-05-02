function YourBotArmy(props) {
    const { bots, handleRemoveFromArmy, handleDischarge } = props;
  
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        {bots.map(bot => (
          <div key={bot.id} className="bot">
            <h3>{bot.name}</h3>
            <p>{bot.class}</p>
            <p>{`Health: ${bot.health}`}</p>
            <p>{`Damage: ${bot.damage}`}</p>
            <p>{`Armor: ${bot.armor}`}</p>
            <button onClick={() => handleRemoveFromArmy(bot)}>Remove from Army</button>
            <button onClick={() => handleDischarge(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    );
  }
  