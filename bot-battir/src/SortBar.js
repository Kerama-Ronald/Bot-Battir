function SortBar(props) {
    const { handleSort } = props;
  
    return (
      <div className="sort-bar">
        <label>Sort by:</label>
        <select onChange={event => handleSort(event.target.value)}>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    );
  }
  