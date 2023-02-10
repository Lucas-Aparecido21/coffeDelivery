import { Header } from "../../components/Header";
import { Orders } from "./Components/Orders";

import {
  Container,
  ContainerOrders,
  DivButton,
  DivCodCliente,
  DivCodPedido,
  DivCodValor,
  DivDatapedido,
  DivInfo,
  DivStatus,
  DivOrders,
  DivSubtitulo,
} from "./styles";

export function Order() {
  return (
    <>
      <Header />
      <DivSubtitulo>
        <h1>Pedidos realizados</h1>
      </DivSubtitulo>
      <Container>
        <section>
          <ContainerOrders>
            <DivInfo>
              <DivCodPedido>
                <p>Código do pedido</p>
              </DivCodPedido>
              <DivDatapedido>Data do pedido</DivDatapedido>
              <DivCodCliente>
                <p>Cliente</p>
              </DivCodCliente>
              <DivCodValor>
                <p>Valor total</p>
              </DivCodValor>
              <DivStatus>Status</DivStatus>
              <DivButton>
                <p>Alterar</p>
                <p>Excluir</p>
                <p>Consultar</p>
              </DivButton>
            </DivInfo>

            <DivOrders>
              <Orders />
              <Orders />

              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
              <Orders />
            </DivOrders>
          </ContainerOrders>
        </section>
      </Container>
    </>
  );
}