import { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState([
    {
      name: "Caixa de Som Bluetooth JBL PartyBox 100 160W ",
      price: 2408,
      img: "https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwea745023/JBL_PartyBox_100_Hero_0057.png?sw=537&sfrm=png",
    },
    {
      name: "Caixa de Som Bluetooth JBL PartyBox On-The-Go",
      price: 1995,
      img: "https://m.media-amazon.com/images/I/61u7tf8twDS._AC_SY450_.jpg",
    },
    {
      name: "Caixa de Som Bluetooth JBL Boombox 2 80W Preta",
      price: 2650,
      img: "https://m.media-amazon.com/images/I/616HRJahivS._AC_SY450_.jpg",
    },
    {
      name: "Headset Gamer JBL - Quantum 100 Over Ear Preto",
      price: 195,
      img: "https://a-static.mlcdn.com.br/618x463/headset-gamer-jbl-quantum-100/magazineluiza/225496500/7030713625cd68ae97de9c00c40af2c0.jpg",
    },
    {
      name: "Headset Gamer JBL Quantum ONE Over Ear Preto",
      price: 1450,
      img: "https://a-static.mlcdn.com.br/618x463/headset-gamer-jbl-quantum-one/magazineluiza/225497100/d82c85284125b5393e305cb0a3f4c05b.jpg",
    },
    {
      name: "Caixa de Som Portátil JBL Pulse 4 Prova D'água",
      price: 1259,
      img: "https://dju62cr0hx23m.cloudfront.net/Custom/Content/Products/99/70/997020_caixa-de-som-portatil-jbl-pulse-4-original-prova-d-agua_z2_637625708250444844.jpg",
    },
    {
      name: "SOUNDBAR 218W 5.1 JBL 51BLKBR BT C/SUB",
      price: 4999,
      img: "https://m.media-amazon.com/images/I/41CNIt9RdEL._AC_SX679_.jpg",
    },
    {
      name: "Caixa De Som Jbl Soundgear Bluetooth Portátil Preto",
      price: 855,
      img: "https://m.media-amazon.com/images/I/41sx6h2j9wL._AC_.jpg",
    },
  ]);
  return (
    <ProductsContext.Provider value={{ productList }}>
      {children}
    </ProductsContext.Provider>
  );
};
