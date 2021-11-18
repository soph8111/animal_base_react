export default function FilterButtons() {
  return (
    <p>
      Filter:
      <button className="filter" data-action="filter" data-filter="cat">
        Only Cats
      </button>
      <button className="filter" data-action="filter" data-filter="dog">
        Only Dogs
      </button>
      <button className="filter" data-action="filter" data-filter="*">
        all
      </button>
    </p>
  );
}
