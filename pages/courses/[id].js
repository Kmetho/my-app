import { useRouter } from "next/router";

const Nextjs = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>welcome to {router.query.id} with Ankita</h1>
    </div>
  );
};

export default Nextjs;
