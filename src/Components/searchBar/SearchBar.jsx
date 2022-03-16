export default function SearchBar({ products }) {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
    </div>
  );
}
