import React from "react";

function BotSpecs(props) {
  const { bot, onEnlistBot, onGoBack } = props;

  function handleEnlistClick() {
    onEnlistBot(bot);
  }

  function handleGoBack() {
    onGoBack();
  }

  return (
    <div className="BotSpecs">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlistClick}>Enlist</button>
      <button onClick={handleGoBack}>Back</button>
    </div>
  );
}

export default BotSpecs;
