import styled from "styled-components";
import React, { useEffect, useState } from "react";

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
    box-shadow: var(--sombra);
    background-color: #fcf8f3;
}
`;


const Titulo = styled.h1`
    font-size: 25px;
    margin-bottom: 0.5rem;
    display: flex;
    font-weight: bold;
`;

const Botao = styled.button`
    display: block;
    background-color:#ece9db;
    border-radius: 5px 5px 5px 5px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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
`;

function Main() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <main className="segundo--container">
            <Section>
                <Cartao>
                    <Titulo>Movimentação de Produtos</Titulo>
                    <form className="flex flex--coluna">
                        <Botao onClick={handleShow}>Entrada</Botao>
                        <Botao><a href="#modal2">Saída</a></Botao>
                    </form>
                </Cartao>
                <Cartao>
                    <Titulo> Novo Cadastro </Titulo>
                    <form className="flex flex--coluna">
                        <Botao><a href="#modal3">Produto</a></Botao>
                        <Botao><a href="#modal4">Fornecedor</a></Botao>
                        <Botao><a href="#modal5">Usuário</a></Botao>
                    </form>
                </Cartao>
                <Cartao>
                    <Titulo> Gerar Relatório </Titulo>
                    <form className="flex flex--coluna">

                        <Botao><a href="#modal6">Estoque</a></Botao>
                        <Botao><a href="#modal7">Venda</a></Botao>
                    </form>
                </Cartao>

                <Cartao>
                    <Titulo> Atualizar Dados</Titulo>
                    <form className="flex flex--coluna">

                        <Botao><a href="#modal8">Fornecedor</a></Botao>
                        <Botao><a href="#modal9">Usuário</a></Botao>
                    </form>
                </Cartao>
            </Section>
        </main >
    );
}

export default Main;