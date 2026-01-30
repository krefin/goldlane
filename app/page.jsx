import HeroSection from "./hero/page";
import KarakteristikSection from "./karakteristik/page";
import LatarBelakangSection from "./latar-belakang/page";
import ManfaatSection from "./manfaat/page";
import MekanismeTransaksiSection from "./mekasnisme/page";
import RegulasiSection from "./regulasi/page";
import TentangSection from "./tentang/page";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <LatarBelakangSection />
      <TentangSection />
      <KarakteristikSection />
      <MekanismeTransaksiSection />
      <ManfaatSection />
      <RegulasiSection />
    </main>
  );
}
