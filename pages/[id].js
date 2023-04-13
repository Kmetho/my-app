import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const City = () => {
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
        <h1>city: {name}</h1>

        <Link href="/">return</Link>
      </main>
    </>
  );
};

export default City;
