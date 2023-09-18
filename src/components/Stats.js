export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start Adding Some Items To Your Packing List 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPacked / numItems) * 100, 2);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything ready to go ✈️"
          : `🎒 you have ${numItems} items on your list , and you already packed ${numPacked}
          (${packedPercent > 0 ? packedPercent : 0}%)`}
      </em>
    </footer>
  );
}
