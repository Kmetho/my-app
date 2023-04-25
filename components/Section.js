import createCard from "./createCard";

const GalleriesSection = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      <div>{props.array.map(createCard)}</div>
    </section>
  );
};

export default GalleriesSection;
