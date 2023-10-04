import Photo from "components/Photo";
import About from "components/About";
import Contact from "components/Contact";
import Skills from "components/Skills";

export default function Aside() {
  return (
    <div className="flex">
      <div className="flex flex-col p-2 border_primary">
        <div className="px-2 pb-2 hidden lg:block">
          <Photo />
        </div>
        <div className="flex p-2 m-1 items-center justify-between bg_base border_primary">
          <Contact />
          <div className="lg:hidden block">
            <Photo />
          </div>
        </div>
        <div className="flex p-1 m-1 bg_base border_primary">
          <About />
        </div>
        <div className="flex p-4 m-1 bg_base border_primary">
          <div className="flex-grow">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
