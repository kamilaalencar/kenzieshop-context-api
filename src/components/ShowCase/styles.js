import styled from "styled-components";

export const Container = styled.div`
  .card-list {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    @media (min-width: 500px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  .card {
    width: 270px;
    height: 300px;
    margin: 15px 10px;
    border: 1px solid var(--color6);
    list-style-type: none;
    @media (min-width: 500px) {
      width: 320px;
      height: 400px;
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 290px;
      @media (min-width: 500px) {
        height: 390px;
      }
      .container-img {
        width: 100%;
        height: 230px;
        border-bottom: 1px solid var(--color6);
        img {
          margin-top: 30px;
          width: 150px;
          height: 120px;
          @media (min-width: 500px) {
            width: 200px;
            height: 170px;
          }
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        h2 {
          font-size: 15px;
          margin: 10px;
          font-weight: bold;
        }
        span {
          font-size: 13px;
          margin: 10px;
          font-weight: bold;
        }
        button {
          background-color: var(--color2);
          color: var(--color7);
          font-size: 14px;
          font-weight: bold;
          width: 250px;
          height: 40px;
          border: 2px solid var(--color2);
          border-radius: 4px;
          margin-left: 10px;
          :hover {
            background-color: var(--color7);
            color: var(--color2);
          }
          @media (min-width: 500px) {
            width: 300px;
          }
        }
      }
    }
  }
`;
