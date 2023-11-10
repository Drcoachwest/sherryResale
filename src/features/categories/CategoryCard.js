import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CategoryCard = (props) => {
  return (
    <Card>
      <CardImg
        width="100%"
        src={props.category.image}
        alt={props.category.name}
      />
      <CardImgOverlay>
        <CardTitle>{props.category.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CategoryCard;
