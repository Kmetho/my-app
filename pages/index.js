import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Section from "@/components/Section";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import galleries from "../data/galleries.json";
import parks from "../data/parks.json";
import coffeeShops from "../data/coffee-shops.json";
import clubs from "../data/clubs.json";
import bars from "../data/bars.json";
import veganFood from "../data/vegan-food.json";

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

export async function getStaticProps(context) {
  return {
    props: {
      galleries,
      parks,
      coffeeShops,
      clubs,
      bars,
      veganFood,
    },
  };
}

export default function Home(props) {
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
        <Section title="Clubs" array={clubs} />
        <Section title="Bars" array={bars} />
        <Section title="Coffee shops" array={coffeeShops} />
        {/* <Section title="Attractions" array={attractions} /> */}
        <Section title="Vegan food" array={veganFood} />
      </main>
    </>
  );
}
