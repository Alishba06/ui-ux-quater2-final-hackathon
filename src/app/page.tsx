import CardTwo from "./components/Card2";
import Cards from "./components/Cards";
import CHero from "./components/CenterHero";
import Feauter from "./components/Feautres";
import Hero from "./components/HeroSection";
import Email from "./components/information";
import SearchBarHomePage from "./searchBar";

export default function Home() {
  // const categories = [
  //   { _id: "1", name: "Chairs" },
  //   { _id: "2", name: "Tables" },
  //   { _id: "3", name: "Tableware" },
  //   { _id: "4", name: "Cutlery" },
  // ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <SearchBarHomePage categories={categories} />  */}
      <Hero />
      <CHero />
      <Cards />
      <CardTwo />
      <Email />
      <Feauter />
    </div>
  );
}
