import { useRouter } from "next/router";
import Link from "next/link";

const City = () => {
  const router = useRouter();
  let name = router.query.id;
  return (
    <>
      <div>
        <h1>city: {name}</h1>
        <Link href="/">return</Link>
      </div>
    </>
  );
};

export default City;
