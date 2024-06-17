import HeroGrid from "@/components/HeroGrid/HeroGrid";
import RootLayout from "./layout";
export default function Home() {
  return (
    <RootLayout>
      <main>
        <HeroGrid />
      </main>
    </RootLayout>
  );
}
