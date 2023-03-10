import { PencilSimple, Scroll, Trash } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ClienteProps } from "../..";
import * as api from "../../../../services/api";
import { Modal } from "../Modal";
import {
  DivButton,
  DivCodCliente,
  DivCodValor,
  DivCPF,
  DivNome,
  DivOrders,
} from "./styles";

interface CadastroProps {
  c: ClienteProps;
}

export function Cadastro({ c }: CadastroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  function ConsultaCliente() {
    localStorage.setItem("idCliente", c.cpf);
  }

  function AlteraCliente() {
    localStorage.setItem("idCliente", c.cpf);
  }
  if (isDelete) {
    api.deleteClienteByCpf(c.cpf);
    window.location.reload();
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDelete={isDelete}
        setIsDelete={setIsDelete}
      />
      <DivOrders>
        <>
          <DivCPF>
            <p>{c.cpf}</p>
          </DivCPF>
          <DivNome>
            <p>{c.nome}</p>
          </DivNome>
          <DivCodCliente>
            <p>{c.telefone}</p>
          </DivCodCliente>
          <DivCodValor>{c.cep}</DivCodValor>
        </>

        <DivButton>
          <NavLink
            to="/AlterarCliente"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button id="alterar" onClick={AlteraCliente}>
              <PencilSimple />
            </button>
          </NavLink>
          <button onClickCapture={() => setIsOpen(true)} id="excluir">
            <Trash />
          </button>
          <NavLink
            to="/ConsultarCliente"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button id="consultar" onClick={ConsultaCliente}>
              <Scroll />
            </button>
          </NavLink>
        </DivButton>
      </DivOrders>
    </>
  );
}
