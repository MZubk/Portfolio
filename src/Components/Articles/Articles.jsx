import data from "./repos.json";
import Card from "../Cards/Card";

export default function Article() {
  return (
    <div className="sm:mt-0 grid gap-x-3 m-auto max-w-2x1 sm:grid-cols-1 lg:grid-cols-3">
      {data.map((repos, index) => (
        <Card key={index} {...repos} />
      ))}
    </div>
  );
}
