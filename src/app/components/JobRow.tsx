export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm md:flex">
        <div className=" flex gap-4">
          <div className="content-center">
            <img
              className="size-12"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
              alt=""
            />
          </div>
          <div className="grow">
            <div className="text-gray-500 text-sm">Spotify</div>
            <div className="font-bold text-lg mb-1">Product designer</div>
            <div text-gray-500 text-sm>
              Remote &middot; New York US &middot; Full-time
            </div>
          </div>
        </div>
        <div className="content-end text-gray-400 text-sm">2 weeks ago</div>
      </div>
    </>
  );
}
