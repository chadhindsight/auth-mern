import HeroGrid from "@/components/HeroGrid/HeroGrid";
import RootLayout from "./layout";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <RootLayout>
      <main>
        <ProfileCard />
        <HeroGrid />
      </main>
    </RootLayout>
  );
}
