import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Section from "@/components/Section";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import galleries from "@/arrays/galleries";
import parks from "@/arrays/parks";

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});
const hanken = Hanken_Grotesk({
  variable: "--hanken-font",
  subsets: ["latin"],
});

const sortClick = () => {
  console.log("hi");
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Activities</title>
        <meta name="description" content="What to do in Paris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main
        className={
          styles.main + " " + hanken.variable + " " + playfair.variable
        }
      >
        <Banner handleOnClick={sortClick} buttonText="Sort by closest" />
        <Image
          className={styles.sparkles}
          src="/static/bg-stars.png"
          alt="sparkles"
          width="1000"
          height="600"
        />
        <Section title="Galleries" array={galleries} />
        <Section title="Parks" array={parks} />
        {/* <Section title="Clubs" />
        <Section title="Bars" />
        <Section title="Coffee shops" />
        <Section title="Attractions" />
        <Section title="Vegan food" /> */}
      </main>
    </>
  );
}
