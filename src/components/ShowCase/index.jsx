import { useContext } from "react";
import { ProductsContext } from "../../Providers/products/product";
import { CartContext } from "../../Providers/cart/cart";
import { Container } from "./styles";

const ShowCase = () => {
  const { addToCart } = useContext(CartContext);
  const { productList } = useContext(ProductsContext);

  return (
    <Container>
      <ul className="card-list">
        {productList.map((item, index) => (
          <div className="card">
            <li key={index}>
              <div className="container-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <span>{item.price.toFixed(2)} R$</span>
                <button onClick={() => addToCart(item)}>
                  Adicionar ao carrinho
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </Container>
  );
};
export default ShowCase;
