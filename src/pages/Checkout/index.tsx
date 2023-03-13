// import { useState } from "react";
import React, { useEffect } from "react";
import { cpf as cpfValidacao } from "cpf-cnpj-validator";

import { Header } from "../../components/Header";
import {
  Container,
  ContainerCep,
  ContainerFpg,
  ContainerCheckout,
  ContainerInfo,
  CepInput,
  RuaInput,
  NumeroInput,
  ComplementoInput,
  BairroInput,
  CidadeInput,
  UFInput,
  DivFpg,
  DivInicial,
  DivValor,
  DivNav,
  DivButton,
  ButtonConfirm,
  ButtonHome,
  DivTeste,
  DivInfo,
  InputNome,
  InputSNome,
  InputCel,
  DivName,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  UserCircle,
} from "phosphor-react";

import { CartListCheckout } from "./Components/Cart";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import * as api from "../../services/api";
import { PedidoProps } from "../../../src/@types";
import { Modal } from "./Components/Modal";
import { ModalConfirm } from "./Components/ModalConfirm";
import Swal from "sweetalert2";

interface Cliente {
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
  rua: string;
  cidade: string;
  bairro: string;
  uf: string;
  numero: string;
  complemento?: string | undefined;
}

export function Checkout() {
  let { setFormPag, formPag } = useCart();
  const DELIVERY_PRICE = 3.5;
  const { cartItems, cartItemsTotal } = useCart();
  const savedCliente = localStorage.getItem("cliente");
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const { setCartItems } = useCart();
  const [pedido] = useState<PedidoProps>({} as PedidoProps);
  const { id, setId } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [cliente, setCliente] = useState<Cliente>(
    ({} as Cliente) || savedCliente
  );

  const [valueNav, setValueNav] = useState("/Checkout");

  const ConsultaCEP = async (event: any) => {
    const cep = event.target.value;
    try {
      const { data } = await api.viaCep(cep);

      setCliente({
        ...cliente,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf,
      });
      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "O CEP digitado não foi localizado!",
      });
    }
  };

  function saveToLocalStorageCliente() {
    localStorage.setItem("cliente", JSON.stringify(cliente));
    saveToLocalStorageClienteToSucess();
  }

  useEffect(() => {
    const savedCliente = localStorage.getItem("cliente");
    if (savedCliente !== null) {
      setCliente(JSON.parse(savedCliente));
    }
  }, []);

  if (!savedCliente) {
    cliente.cpf = "";
    cliente.nome = "";
    cliente.telefone = "";
    cliente.cep = 0;
    cliente.uf = "";
    cliente.numero = "";
    cliente.rua = "";
    cliente.cidade = "";
    cliente.bairro = "";
    cliente.complemento = "";
  }

  function saveToLocalStorageClienteToSucess() {
    localStorage.setItem("clienteSucess", JSON.stringify(cliente));
  }

  useEffect(() => {
    const savedClienteToSucess = localStorage.getItem("clienteSucess");
    if (savedClienteToSucess !== null) {
      setCliente(JSON.parse(savedClienteToSucess));
    }
  }, []);

  async function createPedido() {
    pedido.entrega = DELIVERY_PRICE;
    pedido.valor = cartTotal;
    pedido.pagamento = formPag;

    const { data } = await api.postCreatePedido(pedido, cliente.cpf);

    createItens(data.id);
  }

  async function createItens(pedidoId: number) {
    await api.postCreateItens({ itens: id }, pedidoId);
  }

  function createCliente() {
    api.postCreateCliente(cliente);
  }

  const ConsultaCPF = async (event: any) => {
    saveToLocalStorageCliente();
    const cpf = event.target.value;

    try {
      const { data } = await api.getClientByCpf(cpf);
      setCliente((prevState) => {
        return {
          ...prevState,
          bairro: data.bairro,
          cidade: data.cidade,
          rua: data.rua,
          numero: data.numero,
          uf: data.uf,
          nome: data.nome,
          complemento: data.complemento,
          telefone: data.telefone,
          cep: data.cep,
        };
      });
    } catch (error) {
      if (cpfValidacao.isValid(cpf)) {
        Swal.fire({
          title: "O cadastro do cliente não foi localizado!",
          text: "Deseja iniciar o cadastro agora?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Não",
          confirmButtonText: "Sim, quero cadastrar!",
        }).then((result) => {
          if (result.isConfirmed) {
            setIsOpen(true);
            localStorage.setItem("cpf", cliente.cpf);
          }
        });
        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "O CPF não é valido!",
      });
    }
  };

  function handleClick() {
    if (!cliente.cpf) {
      Swal.fire({
        icon: "error",
        title: "O CPF não pode ser vazio",
      });
      return;
    }

    if (cartItemsTotal === 0) {
      alert("Insira algum item no carrinho antes de concluir a compra");
    } else {
      createPedido();
      createCliente();
      setCartItems([]);
      setValueNav("/sucess");
      localStorage.removeItem("cliente");
      setId([]);
    }
  }
  return (
    <>
      <Header />

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ModalConfirm
        isOpenConfirm={isOpenConfirm}
        setIsOpenConfirm={setIsOpenConfirm}
        isOpen={isOpen}
        setisOpen={setIsOpen}
      />
      <Container>
        <section>
          <div>
            <h1 style={{ display: "flex", top: "14px", left: "42px" }}>
              Complete seu pedido
            </h1>
          </div>
          <ContainerInfo>
            <DivInfo>
              <h2>
                <UserCircle />
                Informações pessoais
              </h2>
              <form action="">
                <DivName>
                  <InputNome
                    placeholder="CPF (somente números)"
                    name="cpf"
                    type="number"
                    value={cliente.cpf || ""}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        [e.target.name]: e.target.value,
                      })
                    }
                    onBlur={ConsultaCPF}
                  />

                  <InputSNome
                    placeholder="Nome"
                    name="nome"
                    value={cliente.nome || ""}
                    onBlur={saveToLocalStorageCliente}
                  />
                </DivName>
                <InputCel
                  placeholder="Celular"
                  name="telefone"
                  value={cliente.telefone || ""}
                />
              </form>
            </DivInfo>
          </ContainerInfo>

          <ContainerCep>
            <div>
              <h2>
                <MapPinLine />
                Endereço de entrega
              </h2>
              <p>
                Informe o endereço de entrega onde deseja receber seu pedido
              </p>

              <form>
                <CepInput
                  placeholder="CEP (somente números)"
                  name="cep"
                  type="text"
                  onBlur={ConsultaCEP}
                  value={cliente.cep || ""}
                ></CepInput>

                <RuaInput
                  placeholder="Rua"
                  name="rua"
                  type="text"
                  value={cliente.rua || ""}
                ></RuaInput>
                <div className="Separador1">
                  <NumeroInput
                    placeholder="Número"
                    name="numero"
                    type="text"
                    value={cliente.numero || ""}
                  ></NumeroInput>
                  <ComplementoInput
                    placeholder="Complemento (opcional)"
                    name="complemento"
                    type="text"
                    value={cliente.complemento || ""}
                  ></ComplementoInput>
                </div>
                <div className="Separador2">
                  <BairroInput
                    placeholder="Bairro"
                    name="bairro"
                    type="text"
                    value={cliente.bairro || ""}
                  ></BairroInput>
                  <CidadeInput
                    placeholder="Cidade"
                    name="cidade"
                    type="text"
                    value={cliente.cidade || ""}
                  ></CidadeInput>
                  <UFInput
                    placeholder="UF"
                    name="uf"
                    type="text"
                    value={cliente.uf}
                  ></UFInput>
                </div>
              </form>
            </div>
          </ContainerCep>

          <ContainerFpg>
            <DivFpg>
              <div>
                <h2>
                  <CurrencyDollar /> Pagamento
                </h2>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
              <div style={{ display: "flex", gap: "18px" }}>
                <button
                  style={{
                    border:
                      formPag === "Cartão de Crédito"
                        ? `2px solid #4B2995`
                        : "2px solid transparent",
                  }}
                  onClick={() => setFormPag((formPag = "Cartão de Crédito"))}
                >
                  <CreditCard /> CARTÃO DE CRÉDITO
                </button>
                <button
                  style={{
                    border:
                      formPag === "Cartão de Débito"
                        ? `2px solid #4B2995`
                        : "2px solid transparent",
                  }}
                  onClick={() => setFormPag((formPag = "Cartão de Débito"))}
                >
                  <Bank /> CARTÃO DE DÉBITO
                </button>
                <button
                  style={{
                    border:
                      formPag === "Dinheiro"
                        ? `2px solid #4B2995`
                        : "2px solid transparent",
                  }}
                  onClick={() => setFormPag((formPag = "Dinheiro"))}
                >
                  <Money /> DINHEIRO
                </button>
              </div>
            </DivFpg>
          </ContainerFpg>
        </section>

        <ContainerCheckout>
          <DivInicial>
            <h1>Cafés Selecionados</h1>
          </DivInicial>
          <DivTeste>
            {cartItems.map((item) => (
              <CartListCheckout key={item.id} coffee={item} />
            ))}
          </DivTeste>
          <DivNav>
            <DivValor>
              <div className="div1">
                <p>Total de itens</p>
                <span>R${cartItemsTotal.toFixed(2)}</span>
              </div>
              <div className="div2">
                <p>Entrega</p>
                <span>R${DELIVERY_PRICE.toFixed(2)}</span>
              </div>
              <div className="div3">
                <h2>Total</h2>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
            </DivValor>
          </DivNav>
          <DivButton>
            <NavLink to="/">
              <ButtonHome> CONTINUAR COMPRANDO</ButtonHome>
            </NavLink>

            <NavLink to={valueNav} onClickCapture={handleClick}>
              <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
            </NavLink>
          </DivButton>
        </ContainerCheckout>
      </Container>
    </>
  );
}
