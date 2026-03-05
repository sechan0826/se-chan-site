import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MixWorks from "@/components/MixWorks";
import PricingPlans from "@/components/PricingPlans";
import MasteringOption from "@/components/MasteringOption";
import Workflow from "@/components/Workflow";
import DataGuide from "@/components/DataGuide";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MixWorks />
      <PricingPlans />
      <MasteringOption />
      <Workflow />
      <DataGuide />
      <About />
      <Footer />
    </div>
  );
}
