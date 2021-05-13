import { Modal, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

const Checkbox = styled(Form.Check)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`;
export default function ModalCadastroProduto(props) {
    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de Produtos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Label for="codigo">Categoria</Label>
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

                    <Label for="codigo">Preço</Label>
                    <Form.Control as="select" required>
                        <option value="" selected disabled>Escolha...</option>
                        <option>10,00</option>
                        <option>20,00</option>
                        <option>30,00</option>
                        <option>40,00</option>
                        <option>50,00</option>
                    </Form.Control>

                    <Form.Group controlId="">
                        <Label for="codigo">Quantidade</Label>
                        <Form.Control name="quantidade" type="number" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <hr />


                    <Form.Group controlId="">
                        <Label for="codigo">Descrição</Label>
                        <Form.Control name="descrição" />
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

                    <hr />


                    <Label for="codigo">Marca</Label>
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

                    <Label for="codigo">Fornecedor</Label>
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
                    Efetuar cadastro
                </Button>
            </Modal.Footer>
        </Modal>
    )
}