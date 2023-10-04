import Article from "components/Articles";
import Aside from "components/Aside";
import BtnScrollToUp from "components/BtnScrollToUp";
import Footer from "components/Footer";
import Header from "components/Header";
import Projects from "components/Projects";

export default function App() {
  return (
    <>
      <div className="flex flex-col">
        <header className="pt-8 mb-4 bg-gradient-to-tr from-slate-900 from-80% via-gray-800 to-slate-900 border-b-2 border-zinc-800">
          <Header />
        </header>
        <div className="m-4">
          <main className="flex flex-col lg:flex-row flex-1">
            <aside className="h-fit w-full mr-4 mb-5 sm:mb-4 lg:w-80 bg-gray-900">
              <Aside />
            </aside>
            <article className="flex-1 px-4 pt-4 mb-4 border-2 border-zinc-800 bg-gray-900">
              <Projects />
              <Article />
              <BtnScrollToUp />
            </article>
          </main>
        </div>
        <div className="p-4 border-t-2 border-zinc-800 bg-gray-950">
          <Footer />
        </div>
      </div>
    </>
  );
}
