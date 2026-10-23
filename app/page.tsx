import Hero from "@/components/home/Hero";
import Kerncijfers from "@/components/home/Kerncijfers";
import Bewerkingen from "@/components/home/Bewerkingen";
import EenHuis from "@/components/home/EenHuis";
import MachineHighlight from "@/components/home/MachineHighlight";
import Materialen from "@/components/home/Materialen";
import Werkvoorbeelden from "@/components/home/Werkvoorbeelden";
import Omstempelen from "@/components/home/Omstempelen";
import Familie from "@/components/home/Familie";
import HalTeaser from "@/components/home/HalTeaser";
import Werkwijze from "@/components/home/Werkwijze";
import BladIndex from "@/components/home/BladIndex";
import Bereikbaarheid from "@/components/home/Bereikbaarheid";

export default function Home() {
  return (
    <main>
      <Hero />
      <Kerncijfers />
      <Bewerkingen />
      <EenHuis />
      <MachineHighlight />
      <Materialen />
      <Werkvoorbeelden />
      <Omstempelen />
      <Familie />
      <HalTeaser />
      <Werkwijze />
      <BladIndex />
      <Bereikbaarheid />
    </main>
  );
}
