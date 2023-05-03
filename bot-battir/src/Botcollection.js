function BotCollection(props) {
    const { bots, handleAddToArmy } = props;
  
    return (
      <div className="bot-collection">
        {bots.map(bot => (
          <Bot key={bot.id} bot={bot} handleAddToArmy={handleAddToArmy} />
        ))}
      </div>
    );
  }
 
  