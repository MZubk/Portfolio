import { CodeIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="flex items-center justify-center text-slate-500">
      <i className="text-center">
        <CodeIcon />
      </i>
      <span className="text-center pl-2 font-mono">by MZubk</span>
    </div>
  );
}
