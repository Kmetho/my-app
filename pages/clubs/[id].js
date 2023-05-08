import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Dynamic.module.css";
import clubsData from "../../data/clubs.json";
import BigCard from "@/components/BigCard";

export function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      place: clubsData.find((club) => {
        return club.id.toString() === params.id;
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = clubsData.map((club) => {
    return {
      params: {
        id:club.id.toString(),
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
          address={props.place.address}
          imgUrl={props.place.imgUrl}
        />
      </main>
    </>
  );
};

export default Place;
