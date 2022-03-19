import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 100px;
    cursor: pointer;
    @media (min-width: 500px) {
      width: 150px;
    }
  }
  .nav {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: transparent;
      border: transparent;
      font-size: 18px;
      cursor: pointer;
    }
    .count_cart {
      width: 20px;
      height: 20px;
      background: var(--color4);
      border-radius: 50px;
      color: var(--color7);
      margin: 0;
      font-size: 15px;
      font-weight: bold;
    }
    .entrar {
      display: flex;
      align-items: center;
    }
  }
`;
