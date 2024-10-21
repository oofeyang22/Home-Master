import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Goals from "@/components/goals/Goals";
import Stories from "@/components/stories/Stories";
import Companies from "@/components/companies/Companies";
import Statement from "@/components/statement/Statement";
import Activities from "@/components/activities/Activities";
import Pricing from "@/components/pricing/Pricing";
import Ratings from "@/components/ratings/Ratings";
import Percent from "@/components/percent/Percent";
import Carousel from "@/components/carousel/Carousel";
import Dive from "@/components/dive/Dive";
import Contact from "@/components/contact/Contact";
import Copyright from "@/components/copyright/Copyright";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Goals/>
      <Stories/>
      <Companies/>
      <Statement/>
      <Activities/>
      <Pricing/>
      <Percent/>
      <Carousel/>
      <Dive/>
      <Contact/>
      <Copyright/>
    </div>
  );
}
/*
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
<IoMdCheckmarkCircleOutline />
import { MdArrowOutward } from "react-icons/md";
<MdArrowOutward />
import { PiBroom } from "react-icons/pi";
<PiBroom />
import { IoIosArrowBack } from "react-icons/io";
<IoIosArrowBack />
import { IoIosArrowForward } from "react-icons/io";
<IoIosArrowForward />*/