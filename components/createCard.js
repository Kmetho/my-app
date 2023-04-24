import Card from "./Card";

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

export default createCard;
