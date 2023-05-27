import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Section from "../components/Section";
import { fetchData } from "@/lib/fetchData";

const sortClick = () => {};

export async function getStaticProps(context) {
  const data = await fetchData();

  return {
    props: {
      data: data,
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Activities</title>
        <meta name="description" content="flower finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <Banner handleOnClick={sortClick} buttonText="Sort by closest" />
        <div className={"sectionGrid"}>
          <Section title="Copenhagen" data={props.data} />
        </div>
      </main>
    </>
  );
}
