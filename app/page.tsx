import Image from "next/image";
import Responsivenav from "./components/navigation/Responsivenav";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div id='home' >
      <main>
        <Responsivenav/>
        <Hero/>
        <Footer/>

      </main>
     
    </div>
  );
}
