import CardTwo from "./components/Card2";
import Cards from "./components/Cards";
import CHero from "./components/CenterHero";
import Feauter from "./components/Feautres";
import Hero from "./components/HeroSection";
import Email from "./components/information";


export default function Home() {
  return (
   <div className="flex flex-col justify-center items-center">
     <Hero />
     <CHero />
     <Cards />
     <CardTwo />
     <Email />
     <Feauter />
   </div>
  );
}
