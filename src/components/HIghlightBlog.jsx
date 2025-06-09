export default function HighlightBlog() {
  // const imageUrl = `https://picsum.photos/500/300`;
  return (
    <>
      <img
        src="https://fastly.picsum.photos/id/201/500/300.jpg?hmac=v0GEqa-YATYYy9hkxWbMmoxVAp_JtNKUSpkfKBtwuBE"
        alt="card image"
      />
      <div className="info">
        <p className="date">Summer, 2025</p>
        <h1>Card title should be a bit big</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut laoreet cursus, enim erat dictum urna, nec placerat elit erat
          at dui.
        </p>
      </div>
    </>
  );
}
