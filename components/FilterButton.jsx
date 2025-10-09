export default function FilterButton({ name, id, handleClick, selected }) {
  return (
    <button
      className={`filter-button ${selected ? "selected-filter-button" : ""}`}
      onClick={() => handleClick(id)}
    >
      {name}
    </button>
  );
}
