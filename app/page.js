import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Power from "./components/Power";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <Logos />
      <Power />
      <Cards />
    </div>
  );
}
