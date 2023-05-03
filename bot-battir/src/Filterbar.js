function FilterBar(props) {
    const { handleFilter } = props;
  
    return (
      <div className="filter-bar">
        <label>Filter by class:</label>
        <select onChange={event => handleFilter(event.target.value)}>
          <option value="">All</option>
          <option value="Assassin">Assassin</option>
          <option value="Tank">Tank</option>
          <option value="Support">Support</option>
          <option value="Sniper">Sniper</option>
          <option value="Fighter">Fighter</option>
</select>
</div>
);
}


  