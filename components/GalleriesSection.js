import Card from "./Card";
import galleries from "@/arrays/galleries";

function createCard(thisObject) {
  return (
    <Card
      key={thisObject.id}
      id={thisObject.id}
      name={thisObject.name}
      imgUrl={thisObject.imgUrl}
      href={thisObject.href}
    />
  );
}
console.log(galleries)

const GalleriesSection = (props) => {
  
  return (
    <section>
      <h2>{props.title}</h2>
      <div>
      {galleries.map(createCard)}</div>
    </section>
  );
};

export default GalleriesSection;
