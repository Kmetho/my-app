import { useRouter } from "next/router";
import Head from "next/head";
import BigCard from "@/components/BigCard";
import galleriesData from "../../data/galleries.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      place: galleriesData.find((gallery) => {
        return gallery.id.toString() === params.id;
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = galleriesData.map((gallery) => {
    return {
      params: {
        id: gallery.id.toString(),
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
        <title>{name}</title>
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
