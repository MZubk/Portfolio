import { CodeIcon } from "@radix-ui/react-icons";
import logo from "/public/logo.svg";

export default function Footer() {
  return (
    <div className="flex items-center justify-center text-slate-500">
      <i className="text-center">
        <img
          className="h-6 bg-blue-600 rounded-lg border-2 border-blue-900"
          src={logo}
          alt="logo"
        />
      </i>
      <span className="text-center pl-2 font-mono">by MZubk</span>
    </div>
  );
}
