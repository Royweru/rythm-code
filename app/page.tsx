import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ReachOut } from "@/components/reach-out";
import { DetailsSection } from "@/components/services";


export default function Home() {
  return (
    <>
       <Hero />
       <DetailsSection />
       <ReachOut />
       <Contact />
    </>
  );
}
