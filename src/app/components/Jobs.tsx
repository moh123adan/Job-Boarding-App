import JobRow from "./JobRow";

export default function Jobs() {
  return (
    <div className="bg-slate-100 py-4 rounded-3xl w-full">
      <div className="container">
        <h2 className="font-bold mb-4">Recent Jobs</h2>

        <div className="flex flex-col gap-4">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </div>
  );
}
