import Image from "next/image";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <Hero></Hero>
      <Overview></Overview>
      <About></About>
      <Projects></Projects>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
}
