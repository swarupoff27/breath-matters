import CanDo from "./components/CanDo";
import Cards from "./components/Cards";
import Different from "./components/Different";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import How from "./components/How";
import KeyFeatures from "./components/KeyFeatures";
import Logos from "./components/Logos";
import Order from "./components/Order";
import Power from "./components/Power";
import SuccessStories from "./components/SuccessStories";
import TransformBreathingCTA from "./components/TransformBreathingCTA";
import What from "./components/What";
import Who from "./components/Who";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <Logos />
      <Power />
      <What />
      <Cards />
      <How />
      <Different />
      <Who />
      <SuccessStories />
      <KeyFeatures />
      <CanDo />
      <Order />
      <FAQs />
      <TransformBreathingCTA />
      <Footer />
    </div>
  );
}
