export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
        <div>
          <img
            className="size-12"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
            alt=""
          />
        </div>
        <div>
          <div>Spotify</div>
          <div>Product designer</div>
          <div>Remote &middot; New York US &middot; Full-time</div>
        </div>
        <div className="content-end">2 weeks ago</div>
      </div>
    </>
  );
}
