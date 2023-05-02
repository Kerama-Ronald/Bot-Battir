function BotSpecs(props) {
    const { bot, handleAddToArmy } = props;
  
    return (
      <div className="bot-specs">
        <h2>{bot.name}</h2>
        <p>{bot.class}</p>
        <p>{`Health: ${bot.health}`}</p>
        <p>{`Damage: ${bot.damage}`}</p>
        <p>{`Armor: ${bot.armor}`}</p>
        <button onClick={() => handleAddToArmy(bot)}>Add to Army</button>
      </div>
    );
  }
  