export default function FilterButton({ name, id, handleClick, selected }) {
  console.log("odabran je: ", id + " i to je ", selected);
  return (
    <button
      className={`filter-button ${selected ? "selected-filter-button" : ""}`}
      onClick={() => handleClick(id)}
    >
      {name}
    </button>
  );
}
