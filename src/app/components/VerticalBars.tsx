export default function VerticalBars() {
  return (
    <>
      {/* Left Vertical Bar */}
      <div className="fixed top-0 left-0 h-full flex flex-col justify-center items-center">
        <div className="w-2 h-16 bg-red-600 mb-2"></div>{" "}
        <div className="w-2 h-16 bg-gray-300 mb-2"></div>{" "}
        <div className="w-2 h-16 bg-black"></div>{" "}
      </div>

      {/* Right Vertical Bar */}
      <div className="fixed top-0 right-0 h-full flex flex-col justify-center items-center">
        <div className="w-2 h-16 bg-red-600 mb-2"></div>{" "}
        <div className="w-2 h-16 bg-gray-300 mb-2"></div>{" "}
        <div className="w-2 h-16 bg-black"></div>{" "}
      </div>
    </>
  );
}
