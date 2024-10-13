// components/UploadCv.jsx
export default function UploadCv() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/path/to/your-background-image.jpg')`, // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-gray-100/70 shadow-lg"></div>{" "}
      {/* Gray overlay */}
      <div className="relative z-10 text-center">
        <h4 className="uppercase tracking-wider text-sm mb-4 text-black">
          Featured Tours Packages
        </h4>
        <h1 className="text-4xl text-black sm:text-5xl font-bold mb-6">
          Make a Difference <span className="text-red-500">with Your</span>{" "}
          Online Resume!
        </h1>
        <div className="flex justify-center">
          <button
            className="
                bg-black text-white py-2 px-6 rounded 
                border-2 border-transparent transition-all duration-300 ease-in-out 
                hover:border-pink-500 hover:bg-black hover:text-white 
                hover:shadow-[0_0_15px_3px_rgba(255,0,255,0.5)] 
                flex items-center gap-2"
          >
            Upload Your CV
          </button>
        </div>
      </div>
    </section>
  );
}
