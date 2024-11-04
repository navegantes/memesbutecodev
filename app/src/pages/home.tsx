import { Testimonials } from "../components/Home/Testimonials";
import { OurCommunity } from "../components/Home/OurCommunity";
import { ShowBusiness } from "../components/Home/ShowBusiness";

export function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <OurCommunity />
      <Testimonials />
      <ShowBusiness />
    </main>
  );
}
