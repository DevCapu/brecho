import styled from "styled-components";
import React, { useState } from "react";
import ModalMovimentacaoDeProduto from "./Modals/ModalMovimentacaoDeProduto";

const Section = styled.section`
    display: flex ;
    flex-direction: column;
    align-self: center;
    width: 100%;
`;

const Cartao = styled(Section)`
    background-color: #f1f0f1;
    border-radius: 5px;
    padding: 1.7rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--sombra);
    background-color: #fcf8f3;
}
`;


const Titulo = styled.h1`
    font-size: 25px;
    display: flex;
    font-weight: bold;
`;

const GrupoDeBotoes = styled.div`
    display: flex;
`;

const Botao = styled.div`
    display: block;
    background-color:#ece9db;
    border-radius: 5px 5px 5px 5px;
    margin: 0.5rem auto;
    max-width: 20rem;
    padding: 0.5rem;
    box-sizing: border-box;
    color:#3f0d2b;
    font-size: 15px;
    text-align: center;
    margin-right: 1rem;
    border: 0px solid #4a3a00;
    box-shadow: 0px 0px 5px #2e2300;
    font-style: normal;
    text-shadow: 0px -1px 1px #222222;
    cursor: pointer;
`;

export default function Main() {
    const [showModalEntrada, setShowEntradaProduto] = useState(false);
    const [showModalSaida, setShowSaidaProduto] = useState(false);


    const handleCloseModalEntrada = () => setShowEntradaProduto(false);
    const handleShowModalEntrada = () => setShowEntradaProduto(true);

    const handleCloseModalSaida = () => setShowSaidaProduto(false);
    const handleShowModalSaida = () => setShowSaidaProduto(true);


    return (
        <main className="segundo--container">
            <Section>
                <Cartao>
                    <Titulo>Movimentação de Produtos</Titulo>
                    <GrupoDeBotoes>
                        <Botao onClick={handleShowModalEntrada}>Entrada</Botao>
                        <Botao onClick={handleShowModalSaida}>Saída</Botao>
                    </GrupoDeBotoes>
                </Cartao>
                <Cartao>
                    <Titulo> Novo Cadastro </Titulo>
                    <GrupoDeBotoes>
                        <Botao><a href="#modal3">Produto</a></Botao>
                        <Botao><a href="#modal4">Fornecedor</a></Botao>
                        <Botao><a href="#modal5">Usuário</a></Botao>
                    </GrupoDeBotoes>
                </Cartao>
                <Cartao>
                    <Titulo> Gerar Relatório </Titulo>
                    <GrupoDeBotoes>

                        <Botao><a href="#modal6">Estoque</a></Botao>
                        <Botao><a href="#modal7">Venda</a></Botao>
                    </GrupoDeBotoes>
                </Cartao>

                <Cartao>
                    <Titulo> Atualizar Dados</Titulo>
                    <GrupoDeBotoes>

                        <Botao><a href="#modal8">Fornecedor</a></Botao>
                        <Botao><a href="#modal9">Usuário</a></Botao>
                    </GrupoDeBotoes>
                </Cartao>
            </Section>
            <ModalMovimentacaoDeProduto show={showModalEntrada} onCloseListener={handleCloseModalEntrada} />
            <ModalMovimentacaoDeProduto show={showModalSaida} saida={true} onCloseListener={handleCloseModalSaida} />
        </main >
    );
}