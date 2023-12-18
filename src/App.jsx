import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

export default function Main() {
  return (
    <main className="text-right font-amiri w-full flex justify-center flex-wrap xl:container  ">


      <Header />
      <Content/>
      <Footer/>
    </main>
  )
}