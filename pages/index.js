import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Section from "@/components/Section";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import galleriesData from "../data/galleries.json";
import parksData from "../data/parks.json";
import coffeeShopsData from "../data/coffee-shops.json";
import clubsData from "../data/clubs.json";
import barsData from "../data/bars.json";
import restaurantsData from "../data/restaurants.json";

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});
const hanken = Hanken_Grotesk({
  variable: "--hanken-font",
  subsets: ["latin"],
});

const sortClick = () => {};

export async function getStaticProps(context) {
  return {
    props: {
      galleries: galleriesData,
      parks: parksData,
      coffeeShops: coffeeShopsData,
      clubs: clubsData,
      bars: barsData,
      restaurants: restaurantsData,
    },
  };
}

export default function Home(props) {
  console.log(props);
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
        <div className={"sectionGrid"}>
          <Section title="Galleries" array={props.galleries} />
          <Section title="Parks" array={props.parks} />
          <Section title="Clubs" array={props.clubs} />
          <Section title="Bars" array={props.bars} />
          <Section title="Coffee shops" array={props.coffeeShops} />
          {/* <Section title="Attractions" array={props.attractions} /> */}
          <Section title="Restaurants" array={props.restaurants} />
        </div>
      </main>
    </>
  );
}
