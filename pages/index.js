import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Section from "@/components/Section";

const sortClick = () => {};

export async function getStaticProps(context) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "fsq3pLskBIyofC13OhJBTij3ACE6h6j19OQTtiF68A98C8A=",
    },
  };

  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?query=flowers&near=Copenhagen",
    options
  );
  const data = await response.json();

  console.log(data.results[0].location.address);

  return {
    props: {
      data: data.results,
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Activities</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <Banner handleOnClick={sortClick} buttonText="Sort by closest" />
        <Image
          className={styles.sparkles}
          src="/static/bg-stars.png"
          alt="sparkles"
          width="1000"
          height="600"
        />
        <div className={"sectionGrid"}>
          <Section title="copenhagen" data={props.data} />
        </div>
      </main>
    </>
  );
}
