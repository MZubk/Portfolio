import Photo from "../Photo/Photo";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

export default function Aside() {
  return (
    <div className="flex">
      <div className="flex flex-col p-2 border-2 border-zinc-800">
        <div className="px-2 pb-2 hidden lg:block">
          <Photo />
        </div>
        <div className="flex p-2 m-1 items-center justify-between bg-neutral-950 border-2 border-amber-950">
          <Contact />
          <div className="lg:hidden block">
            <Photo />
          </div>
        </div>
        <div className="flex p-1 m-1 bg-neutral-950 border-2 border-zinc-800">
          <About />
        </div>
        <div className="flex p-4 m-1 bg-neutral-950 border-2 border-zinc-800">
          <div className="flex-grow">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
