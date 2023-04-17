import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Banner from "../components/banner";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";

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
        <title>Where to move</title>
        <meta name="description" content="Where to move" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main
        className={
          styles.main + " " + hanken.variable + " " + playfair.variable
        }
      >
        <div>
          <Banner handleOnClick={sortClick} buttonText="Sort by closest" />
        </div>
        <Image
          className={styles.sparkles}
          src="/static/bg-stars.png"
          alt="sparkles"
          width="1000"
          height="600"
        />
      </main>
    </>
  );
}
