import { useContext } from "react";
import { CartContext } from "../../Providers/cart/cart";
import { Container } from "./styles";

const CardCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const sumPrice = cart.reduce((acc, value) => {
    return value.price + acc;
  }, 0);

  return (
    <Container>
      <ul className="card-list">
        {cart.map((item, index) => {
          return (
            <div className="content" key={index}>
              <div className="container-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="info">
                <h2>{item.name}</h2>
                <span>R$ {item.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(item, index)}>
                  Remover Produto
                </button>
              </div>
            </div>
          );
        })}
      </ul>

      <div className="details">
        <div className="higher">
          <h2>Resumo do Pedido</h2>
        </div>
        <div className="bottom">
          {cart.length === 1 ? (
            <p>{cart.length} Produto</p>
          ) : (
            <p>{cart.length} Produtos</p>
          )}
          <span>R$ {sumPrice.toFixed(2)} </span>
          <button>Finalizar o pedido</button>
        </div>
      </div>
    </Container>
  );
};

export default CardCart;
