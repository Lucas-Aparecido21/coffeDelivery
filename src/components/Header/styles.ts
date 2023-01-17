import styled from "styled-components";

export const ContainerGrid = styled.div`
  width: 100%;
  height: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  background: #fafafa;
  div {
    width: 13rem;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContainerCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  button svg {
    width: 100%;
    height: 18px;
  }
`;

export const ContainerLogo = styled.main`
  display: flex;
  width: 575px;
  justify-self: center;

  img {
    display: flex;
    align-items: center;
  }

  @media (max-width: 700px) {
    img {
    }
  }
`;

export const Locale = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 38px;
  font-size: 12px;
  width: 145px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 8px;

  img {
    padding: 0 8px;
    align-self: center;
    display: flex;
  }
`;

export const Checkout = styled.button`
  all: unset;
  width: 38px;
  height: 38px;
  cursor: pointer;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-base"]};
  border-radius: 8px;

  img {
    padding: 0 8px;
  }
`;
