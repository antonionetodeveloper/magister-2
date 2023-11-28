import "@/style/pages/home.css";

import Menu from "@/components/menu";
import Grade from "@/components/main/home/grade";
import Carousel from "@/components/main/home/carousel";
import Schedule from "@/components/main/home/schedule";
import News from "@/components/main/home/news";
import Warnings from "@/components/main/home/warnings";

export default function Home() {
  return (
    <div>
      <Menu />
      <Carousel
        carouselStyle="w-50 d-flex mx-auto my-5"
      />
      <section className="d-flex gap-5 justify-content-center p-5 mobile-home-section">
        <div className="d-flex flex-column gap-3">
          <Grade />
          <Schedule />
        </div>
        <Warnings />
        <News />
      </section>
    </div>
  );
}
