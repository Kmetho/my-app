import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Dynamic.module.css";
import restaurantsData from "../../data/restaurants.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      place: restaurantsData.find((restaurant) => {
        return restaurant.id.toString() === params.id;
      }),
    },
  };
}
export function getStaticPaths() {
  return {
    paths: [{ params: { id: "40" } }],
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
        <title>{name}</title>
        <meta name="description" content="Where to move" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <div className={styles.bigCard + " glass"}>
          <h3 className={styles.name}>{props.place.name}</h3>
          <Image
            className={styles.image}
            src={props.place.imgUrl}
            width="260"
            height="160"
            alt={props.place.name}
          />
          <p className={styles.address}>{props.place.address}</p>
        </div>

        <Link className={styles.return} href="/">
          <p>return</p>
        </Link>
      </main>
    </>
  );
};

export default Place;
