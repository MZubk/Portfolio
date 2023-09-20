import html from "../../assets/icons/icons8-html-5.svg";
import css from "../../assets/icons/icons8-css3.svg";
import scss from "../../assets/icons/icons8-sass-avatar.svg";
import tailwind from "../../assets/icons/icons8-tailwindcss.svg";
import react from "../../assets/icons/icons8-react-native.svg";
import figma from "../../assets/icons/icons8-figma.svg";

export default function Skills() {
  return (
    <div className="flex flex-col">
      <div className="pb-3">
        <h3 className="font-bold">Habilidade:</h3>
      </div>
      <div className="flex flex-col relative">
        <ul className="font-bold  ">
          <li className="flex px-1 mb-2 items-center justify-between bg-orange-800 border-2 border-orange-700">
            <span>HTML</span>
            <i>
              <img src={html} alt="HTML logo" />
            </i>
          </li>
          <li className="flex px-1 mb-2 items-center justify-between bg-blue-800 border-2 border-blue-700">
            CSS <img src={css} alt="CSS logo" />
          </li>
          <li className="flex px-1 mb-2 items-center justify-between bg-rose-800 border-2 border-rose-700">
            SCSS <img src={scss} alt="SCSS logo" />
          </li>
          <li className="flex px-1 mb-2 items-center justify-between bg-cyan-800 border-2 border-cyan-700">
            Tailwind <img src={tailwind} alt="Tailwind logo" />
          </li>
          <li className="flex px-1 mb-2 items-center justify-between bg-sky-800 border-2 border-sky-700">
            React <img src={react} alt="React logo" />
          </li>
          <li className="flex px-1 mb-2 items-center justify-between bg-violet-800 border-2 border-violet-700">
            Figma <img src={figma} alt="Figma logo" />
          </li>
        </ul>
      </div>
    </div>
  );
}
