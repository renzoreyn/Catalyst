import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Install } from "@/components/landing/install";
import { Themes } from "@/components/landing/themes";
import { Faq } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Install />
        <Themes />
        <Faq />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
