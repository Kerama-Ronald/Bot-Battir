import React from "react";
import BotCard from "./BotCard";

function BotCollection(props) {
  const { bots, onEnlistBot, onViewBotSpecs } = props;

  return (
    <div className="BotCollection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onEnlistBot={onEnlistBot} onViewBotSpecs={onViewBotSpecs} />
      ))}
    </div>
  );
}

export default BotCollection;
