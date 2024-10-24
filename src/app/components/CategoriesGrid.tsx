// components/CategoriesGrid.jsx
import {
  User,
  Monitor,
  BarChart,
  Smartphone,
  HardHat,
  Cpu,
  Building,
  FileText,
} from "lucide-react";

const categories = [
  { name: "Design & Creative", icon: <User />, count: 653 },
  { name: "Design & Development", icon: <Monitor />, count: 658 },
  { name: "Sales & Marketing", icon: <BarChart />, count: 658 },
  { name: "Mobile Application", icon: <Smartphone />, count: 658 },
  { name: "Construction", icon: <HardHat />, count: 658 },
  { name: "Information Technology", icon: <Cpu />, count: 658 },
  { name: "Real Estate", icon: <Building />, count: 658 },
  { name: "Content Writer", icon: <FileText />, count: 658 },
];

export default function CategoriesGrid() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-3xl font-semibold text-primaryBlack mb-8">
        Browse <span className="text-red-500">Top Cat</span>egories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-6xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="text-primaryBlack text-5xl mb-4">
              {category.icon}
            </div>
            <h3 className="text-lg font-medium text-primaryBlack">
              {category.name}
            </h3>
            <span className="text-primaryRed mt-2">({category.count})</span>
          </div>
        ))}
      </div>
      {/* Browse All Sectors Button */}
      <div className="flex justify-center mt-10">
        <button
          className="
              bg-black text-white py-2 px-6 rounded-full
              border-2 border-transparent transition-all duration-300 ease-in-out 
              hover:border-pink-500 hover:bg-black hover:text-white 
              hover:shadow-[0_0_15px_3px_rgba(255,0,255,0.5)] 
              flex items-center gap-2"
        >
          BROWSE ALL SECTORS
        </button>
      </div>
    </section>
  );
}
