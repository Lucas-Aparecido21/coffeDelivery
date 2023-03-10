import styled from "styled-components";

export const Divisor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  width: 84%;
  margin-top: 108px;
  font-family: "Baloo 2", sans-serif;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
`;

export const ContainerCep = styled.nav`
  width: 65%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-card"]};
  margin-top: 1rem;
  .Separador1 {
    display: flex;
    gap: 1rem;
  }

  .Separador2 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  div {
    width: 90%;
    height: 80%;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 20px;
    font-weight: 100;
    font-family: "Roboto", sans-serif;
  }

  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
    font-weight: 600;
  }

  svg {
    color: ${(props) => props.theme["yellow-base"]};
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const BaseInput = styled.input`
  all: unset;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  height: 40px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  padding-left: 12px;
  height: 50px;
  border-radius: 8px;
  ::placeholder {
    color: ${(props) => props.theme["base-label"]};

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
  }
`;

export const CepInput = styled(BaseInput)`
  grid-area: "cep";
  margin-top: 24px;
  width: 200px;
`;

export const RuaInput = styled(BaseInput)`
  grid-area: "rua";
  width: 89%;
  margin-top: 10px;
`;

export const NumeroInput = styled(BaseInput)`
  grid-area: "numero";
  margin-top: 10px;
  width: 140px;
`;

export const ComplementoInput = styled(BaseInput)`
  grid-area: "complemento";
  margin-top: 10px;
  width: 280px;
`;

export const BairroInput = styled(BaseInput)`
  grid-area: "bairro";
  margin-top: 10px;
  width: 280px;
`;

export const CidadeInput = styled(BaseInput)`
  grid-area: "cidade";
  margin-top: 10px;
  width: 250px;
`;

export const UFInput = styled(BaseInput)`
  grid-area: "uf";
  margin-top: 10px;
  width: 50px;
`;

export const DivFpg = styled.div`
  width: 90%;
  height: 80%;

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }

  div h2 {
    display: flex;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  div p {
    display: flex;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
  }

  div button {
    width: 90%;
    margin-top: 3rem;
    gap: 1.5rem;
  }

  button {
    all: unset;
    width: 80px;
    height: 40px;
    border-radius: 8px;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    text-align: center;
    border: 1px solid transparent;
    justify-content: space-between;
  }

  button:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    transition: all 0.3s;
  }
  button:active {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const DivInicial = styled.div`
  display: flex;
  height: 10px;
  h1 {
    bottom: 38px;
  }
`;

export const DivNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const ContainerInfo = styled.nav`
  width: 65%;
  height: 250px;
  margin-top: 28px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivInfo = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const DivName = styled.div`
  display: flex;
  gap: 12px;
`;

export const InputNome = styled(BaseInput)`
  margin-top: 20px;
  width: 40%;
`;

export const InputSNome = styled(BaseInput)`
  width: 40%;
  margin-top: 20px;
`;

export const InputCel = styled(BaseInput)`
  margin-top: 12px;
  width: 40%;
`;

export const DivBotao = styled.div`
  display: flex;
  width: 1000px;
  justify-content: center;
`;

export const Confirmar = styled.button`
  margin-top: 2rem;
  width: 580px;
  height: 80px;
  background-color: ${(props) => props.theme["yellow-base"]};
  color: #fafafa;
  font-size: 18px;
  border: none;
  border-radius: 14px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
    transition: all 0.2s;
  }
`;

export const Titulo = styled.h1`
  margin-top: 10rem;
  font-family: "Baloo 2", sans-serif;
  width: 30%;
  display: flex;
  justify-content: center;
`;
