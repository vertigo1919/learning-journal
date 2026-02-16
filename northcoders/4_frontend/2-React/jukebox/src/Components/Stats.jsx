export function Stats({ playCounts }) {
  const songs = Object.keys(playCounts);

  const totalPlayCounts = Object.values(playCounts).reduce(
    (total, songCount) => (total += songCount),
    0
  );

  return (
    <div className="stats-container">
      <h2>📊 Songs Stats</h2>
      <ul className="stats-list">
        {songs.map((song) => (
          <li key={song} className="stat-item">
            <span>{song}</span>
            <span className="stat-badge">{playCounts[song]} plays</span>
          </li>
        ))}
      </ul>
      <div className="total-count">Total Playcount:{totalPlayCounts}</div>
    </div>
  );
}
