import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import HeaderVideo from "@/components/HeaderVideo";
import SeriesContainer from "@/components/SeriesContainer";

export default function Home() {
  /**
   * all video/image source should be replaced once vimeo setup
   * down below 6 constance
   */

  return (
    <PageWrapper>
      <main className="snap-y">
        <HeaderVideo />
        <SeriesContainer />
      </main>
    </PageWrapper>
  );
}
