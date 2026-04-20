import Image from "next/image";
import Banner from "./components/header/Banner";
import Explore from "./components/Explore";
import LiveSection from "./components/LiveSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
<div>
  <Banner/>
  <Explore/>
  <LiveSection />
  
</div>
  );
}
