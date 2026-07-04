import Image from "next/image";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import Overview from "./components/Overview";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header></Header>
      <Hero></Hero>
      <Overview></Overview>
      <Footer></Footer>
    </div>
  );
}
