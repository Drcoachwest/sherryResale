import { CATEGORIES } from "../../app/shared/CATEGORIES";
import { Col, Row } from "reactstrap";
import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  return (
    <Row className="ms-auto">{CATEGORIES.map((category) => {
      return (
        <Col md='3'className='m-4'key={category.id}>
          <CategoryCard category={category} />
          </Col>
      )
    })}</Row>
  )
};

export default CategoriesList;