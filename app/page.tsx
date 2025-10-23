import Image from "next/image";
import Responsivenav from "./components/navigation/Responsivenav";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/Footer";
import Reviews from "./components/reviews/Reviews";

export default function Home() {
  return (
    <div id='home' >
      <main>
        <Responsivenav/>
        <Hero/>
        <Reviews/>
        <Footer/>

      </main>
     
    </div>
  );
}
