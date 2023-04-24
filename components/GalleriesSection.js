import createCard from "./createCard";
import galleries from "@/arrays/galleries";

const GalleriesSection = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      <div>{galleries.map(createCard)}</div>
    </section>
  );
};

export default GalleriesSection;
