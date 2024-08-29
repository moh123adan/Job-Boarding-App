import { Heart } from "lucide-react";

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute top-2 right-4">
          <div className="rounded-full p-1 bg-white flex items-center justify-center">
            <Heart size={20} className="text-red-600" />
          </div>
        </div>

        <div className=" flex grow gap-4 ">
          <div className="content-center">
            <img
              className="size-12"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
              alt=""
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Spotify</div>
              <div className="font-bold text-lg mb-1">Product designer</div>
              <div text-gray-500 text-sm>
                Remote &middot; New York US &middot; Full-time
              </div>
            </div>

            <div className="content-end text-gray-400 text-sm">2 weeks ago</div>
          </div>
        </div>
      </div>
    </>
  );
}
