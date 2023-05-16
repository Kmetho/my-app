import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Dynamic.module.css";
import BigCard from "@/components/BigCard";

export async function getStaticProps(staticProps) {
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
  let data = await response.json();
  data = data.results;

  const params = staticProps.params;

  return {
    props: {
      place: data.find((object) => {
        return object.fsq_id.toString() === params.id;
      }),
    },
  };
}
export async function getStaticPaths() {
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
  let data = await response.json();
  data = data.results;

  const paths = data.map((object) => {
    return {
      params: {
        id: object.fsq_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const Place = (props) => {
  const router = useRouter();
  let name = router.query.id;

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{props.place.name}</title>
        <meta name="description" content="Where to move" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <BigCard
          name={props.place.name}
          address={props.place.location.address}
          imgUrl={
            props.place.imgUrl ||
            "https://images.unsplash.com/photo-1503954230032-c850298b9df3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </main>
    </>
  );
};

export default Place;
