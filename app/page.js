import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import FutureDirectionsSection from "../components/FutureDirectionsSection";
import Emergo from "../components/Emergo";
import SubscriptionSection from "../components/SubscriptionSection";
import TechnologiesSection from "../components/TechnologiesSection";
import DataPreparationSection from "../components/DataPreparationSection";

export default function Home() {
  return (
    <>
      <Emergo />
      <FeaturesSection />
      <TechnologiesSection />
      <DataPreparationSection />
      <FutureDirectionsSection />
      <FAQSection />
      <SubscriptionSection />
    </>
  );
}
