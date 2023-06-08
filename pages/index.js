import Head from "next/head";
import Banner from "../components/Banner";
import Section from "../components/Section";
import { fetchData } from "@/lib/fetchData";
import trackLocation from "@/hooks/trackLocation";
import { useEffect, useState } from "react";

export async function getStaticProps(context) {
  const data = await fetchData();

  return {
    props: {
      data: data,
    },
  };
}

export default function Home(props) {
  console.log(props);

  const { handleTrackLocation, message, latLong, isLocating } = trackLocation();

  const [fetchedPlaces, setFetchedPlaces] = useState("");

  useEffect(() => {
    async function setPlacesByLocation() {
      if (latLong) {
        try {
          const fetchedData = await fetchData(latLong, 10);
          console.log({ fetchedData });
          setFetchedPlaces(fetchedData);
        } catch (error) {
          console.log({ error });
        }
      }
    }
    setPlacesByLocation();
  }, [latLong]);

  const sortClick = () => {
    console.log({ latLong, message });
    handleTrackLocation();
  };

  return (
    <>
      <Head>
        <title>Flowers, where are you</title>
        <meta name="description" content="flower finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <Banner
          handleOnClick={sortClick}
          buttonText={
            isLocating
              ? "Locating..."
              : "Click here to discover nearby flower boutiques"
          }
          errorText={message && "Something went wrong: " + message}
        />
        <div className={"sectionGrid"}>
          {fetchedPlaces.length > 0 && (
            <Section title="Nearest" data={fetchedPlaces} />
          )}
          <Section title="Copenhagen" data={props.data} />
        </div>
      </main>
    </>
  );
}
