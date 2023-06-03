import Head from "next/head";
import Banner from "../components/Banner";
import Section from "../components/Section";
import { fetchData } from "@/lib/fetchData";
import trackLocation from "@/hooks/trackLocation";

export async function getStaticProps(context) {
  const data = await fetchData();

  return {
    props: {
      data: data,
    },
  };
}

export default function Home(props) {
  const { handleTrackLocation, message, latLong, isLocating } = trackLocation();
  const sortClick = () => {
    console.log({ latLong, message });
    handleTrackLocation();
  };

  return (
    <>
      <Head>
        <title>Activities</title>
        <meta name="description" content="flower finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <Banner
          handleOnClick={sortClick}
          buttonText={
            isLocating ? "Locating..." : "Click here to discover nearby flowers"
          }
          errorText={message && "Something went wrong: " + message}
        />
        <div className={"sectionGrid"}>
          <Section title="Copenhagen" data={props.data} />
        </div>
      </main>
    </>
  );
}
