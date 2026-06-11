import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Install } from "@/components/landing/install";
import { Themes } from "@/components/landing/themes";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { getLatestRelease } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const release = await getLatestRelease();

  return (
    <>
      <Navbar />
      <main>
        <Hero version={release.version} releaseUrl={release.url} />
        <Features />
        <Install version={release.version} releaseUrl={release.url} />
        <Themes />
        <Faq />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
