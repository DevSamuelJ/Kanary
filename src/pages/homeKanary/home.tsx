import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function Home() {
  return (
    <section className="bg-blue-400">
      <div className='py-8 px-10'>
        <Header />
        <Main />
      </div>
      <Footer />
    </section>
  )
}

