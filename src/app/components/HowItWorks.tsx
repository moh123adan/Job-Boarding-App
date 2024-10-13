// components/HowItWorks.jsx
import { Search, ClipboardCheck, UserCheck } from "lucide-react";

const steps = [
  {
    icon: <Search size={40} />,
    title: "1. Search a job",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
  },
  {
    icon: <ClipboardCheck size={40} />,
    title: "2. Apply for job",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <UserCheck size={40} />,
    title: "3. Get your job",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100/60 shadow-sm">
      <div className="text-center mb-12">
        <h4 className="uppercase tracking-wider text-sm text-red-500">
          Apply Process
        </h4>
        <h2 className="text-4xl font-bold text-black">How it works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-lg shadow-md text-center"
          >
            <div className="text-red-500 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
