function Bot(props) {
  const { bot, handleAddToArmy } = props;

  return (
    <div className="bot">
      <h3>{bot.name}</h3>
      <p>{bot.class}</p>
      <p>{`Health: ${bot.health}`}</p>
      <p>{`Damage: ${bot.damage}`}</p>
      <p>{`Armor: ${bot.armor}`}</p>
      <button onClick={() => handleAddToArmy(bot)}>Add to Army</button>
    </div>
  );
}
