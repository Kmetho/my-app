import { useRouter } from "next/router";
import Head from "next/head";

const Page = () => {
  const router = useRouter();
  let name = router.query.id;
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Where to move" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../static/icon.png" />
      </Head>
      <main>
        <h1>{name}</h1>
      </main>
    </>
  );
};

export default Page;
