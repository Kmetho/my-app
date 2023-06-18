import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Dynamic.module.css";
import BigCard from "@/components/BigCard";
import { fetchData } from "@/lib/fetchData";

export async function getStaticProps(staticProps) {
  const data = await fetchData();
  const params = staticProps.params;

  return {
    props: {
      place: data.find((object) => {
        return object.id.toString() === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchData();
  const paths = data.map((object) => {
    return {
      params: {
        id: object.id.toString(),
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
        <meta name="description" content="flower finder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <BigCard
          name={props.place.name}
          address={props.place.address}
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
