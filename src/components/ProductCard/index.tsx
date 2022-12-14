import { Product } from "../../types";
import * as Styled from "./styles";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Styled.CardContainer>
      <img src={product.image} alt={product.description} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </Styled.CardContainer>
  );
};
export default ProductCard;
