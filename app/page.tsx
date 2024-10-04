import { GetCourses } from "@/actions/getCourses";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ReachOut } from "@/components/reach-out";
import { DetailsSection } from "@/components/services";


export default async function Home() {
    const courses = await GetCourses()
    
  return (
    <>
       <Hero  courses = {courses} />
       <DetailsSection />
       <ReachOut />
       <Contact />
    </>
  );
}
