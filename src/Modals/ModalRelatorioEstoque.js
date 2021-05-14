import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from 'axios'

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

const Checkbox = styled(Form.Check)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`;

export default function ModalRelatorioEstoque(props) {
    let meses;

    axios({
        method: 'get',
        baseURL: "bla",

    }).then(response => {
        meses = response.data
    })

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Gerar relatório de estoque</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Label for="codigo">Ano</Label>
                                <Form.Control as="select" required>
                                    {meses.forEach(mes => (
                                        <option value="" selected disabled>{mes}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                            <Col>
                                <Label for="codigo">Mês</Label>
                                <Form.Control as="select" required>
                                    <option value="" selected disabled>Escolha...</option>
                                    <option>Janeiro</option>
                                    <option>Fevereiro</option>
                                    <option>Março</option>
                                    <option>Abril</option>
                                    <option>Maio</option>
                                    <option>Junho</option>
                                    <option>Julho</option>
                                    <option>Agosto</option>
                                    <option>Setembro</option>
                                    <option>Outubro</option>
                                    <option>Novembro</option>
                                    <option>Dezembro</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Label for="codigo">Dia</Label>
                                <Form.Control name="quantidade" type="number" />
                                <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <hr />

                    <Label for="categoria">Categoria</Label>
                    <Form.Control as="select" required>
                        <option value="" selected disabled>Escolha...</option>
                        <option value="AG">Todos</option>
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

                    <hr />

                    <Form.Label for="codigo">Tamanho</Form.Label>
                    {["P", "M", "G", "GG"].map(size => (
                        <Checkbox
                            name="paymentMethod"
                            required
                            type="checkbox"
                            label={"Tamanho " + size}
                            id={`size-${size.toLowerCase()}`} />
                    ))}

                    <hr />

                    <Form.Group controlId="">
                        <Label for="codigo">Descrição</Label>
                        <Form.Control name="cor" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Modelo</Label>
                        <Form.Control name="modelo" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Cor</Label>
                        <Form.Control name="cor" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleCloseListener} block>
                    Gerar relatório
            </Button>
            </Modal.Footer>
        </Modal>
    );
}