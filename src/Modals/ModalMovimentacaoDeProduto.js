import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styled from "styled-components";


const Checkbox = styled(Form.Check)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`;
export default function ModalMovimentacaoDeProduto(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.onCloseListener}>
                <Modal.Header closeButton>
                    {props.saida ? <Modal.Title>Saída de Produto</Modal.Title> : <Modal.Title>Entrada de Produto</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {props.saida ? (
                            <>
                                <Form.Group controlId="">
                                    <Form.Label for="codigo">Código do Produto</Form.Label>
                                    <Form.Control name="codigo" pattern="[a-zA-Z0-9]+" type="email" placeholder="Insira o código" required={true} />
                                    <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                                    <Form.Text className="text-muted">Código com caracteres alfanuméricos.</Form.Text>
                                    <Button className="mt-8" variant="primary" size="sm" block>Buscar</Button>
                                </Form.Group>
                                <hr />
                            </>
                        ) : null}
                        <Form.Group controlId="">
                            <Form.Label for="codigo">Categoria</Form.Label>
                            <Form.Control as="select" required>
                                <option value="" selected disabled>Escolha...</option>
                                <option value="AF">Calça</option>
                                <option value="AX">Camiseta</option>
                                <option value="AL">Vestido</option>
                                <option value="DZ">Biquini</option>
                                <option value="AS">Sapato</option>
                                <option value="AD">Bolsa</option>
                                <option value="AO">Cinto</option>
                                <option value="AI">Shorts</option>
                                <option value="AQ">Saia</option>
                                <option value="AG">Lenço</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="">
                            <Form.Label for="codigo">Preco</Form.Label>
                            <Form.Control as="select" required>
                                <option value="" selected disabled>Escolha...</option>
                                <option>10,00</option>
                                <option>20,00</option>
                                <option>30,00</option>
                                <option>40,00</option>
                                <option>50,00</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="">
                            <Form.Label for="codigo">Preço</Form.Label>
                            <Form.Control type="number" value="0" required />
                            <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                        </Form.Group>

                        <hr />

                        <Form.Group controlId="">
                            <Form.Label for="codigo">Forncecedor</Form.Label>
                            <Form.Control as="select" required>
                                <option value="" selected disabled>Escolha...</option>
                                <option value="AX">Look</option>
                                <option value="AL">Belissima</option>
                                <option value="DZ">Camila`s Fashion</option>
                                <option value="AS">Amanda</option>
                                <option value="AD">Dandara</option>
                                <option value="AO">Outlet</option>
                                <option value="AI">Louney</option>
                                <option value="AF">Outras</option>
                            </Form.Control>
                        </Form.Group>

                        <hr />

                        <Form.Group controlId="">
                            <Form.Label for="codigo">Marca</Form.Label>
                            <Form.Control as="select" required>
                                <option value="" selected disabled>Escolha...</option>
                                <option value="AX">Tommy</option>
                                <option value="AL">Calvin Klein</option>
                                <option value="DZ">Levis</option>
                                <option value="AS">Adidas</option>
                                <option value="AD">Nike</option>
                                <option value="AO">Asics</option>
                                <option value="AI">Under Armour</option>
                                <option value="AF">Outras</option>
                            </Form.Control>
                        </Form.Group>

                        <hr />

                        <Form.Label for="codigo">Tamanho</Form.Label>
                        {["P", "M", "G", "GG"].map(size => (
                            <Checkbox
                                name="paymentMethod"
                                required
                                type="radio"
                                label={size}
                                id={`size-${size.toLowerCase()}`} />
                        ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleCloseListener} block>
                        Efetuar {props.saida ? 'saída' : 'entrada'}
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

