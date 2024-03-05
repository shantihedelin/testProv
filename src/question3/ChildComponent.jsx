function ChildComponent({setColor}) {
  return (
    <div className="pet">
      <label htmlFor="petSelect">Choose a pet</label>
      <select
        onChange={(e) => setColor(e.target.value)}
        name="pet"
        id="petSelect"
        required
      >
        <option value="">Please choose a color</option>
        <option value="green">Green</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}

export default ChildComponent;
