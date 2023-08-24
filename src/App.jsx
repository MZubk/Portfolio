import Article from "./Components/Articles/Articles";
import Aside from "./Components/Aside/Aside";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";

export default function App() {
  return (
    <>
      <div className="flex flex-col ">
        <header className="pt-8 mb-4 bg-gray-900 border-b-2 border-zinc-800">
          <Header />
        </header>
        <div className="m-4">
          <main className="flex flex-col lg:flex-row flex-1">
            <aside className="h-fit w-full mr-4 mb-5 sm:mb-4 lg:w-80 bg-gray-900">
              <Aside />
            </aside>
            <article className="flex-1 px-4 pt-4 mb-4 border-2 border-zinc-800 bg-gray-950">
              <Projects />
              <Article />
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
