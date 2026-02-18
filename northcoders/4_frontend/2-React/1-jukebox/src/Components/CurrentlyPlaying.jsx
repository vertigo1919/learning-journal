export function CurrentlyPlaying({ song }) {
  return (
    <div className="currently-playing">
      <span className="cp-label">Currently playing:</span>
      <span className="cp-title">{song.title}</span>
    </div>
  );
}
