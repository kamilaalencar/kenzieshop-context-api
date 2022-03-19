import { CartProvider } from "./cart/cart";
import { ProductsProvider } from "./products/product";

const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default Providers;
