import { Modal, Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

export default function ModalCadastroUsuario(props) {
    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="">
                        <Form.Label for="codigo">Marca</Form.Label>
                        <Form.Control as="select" required>
                            <option value="" selected disabled>Escolha...</option>
                            <option value="AF">Funcionário</option>
                            <option value="AX">Administração</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Login</Label>
                        <Form.Control name="login" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Senha</Label>
                        <Form.Control name="senha" type="password" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleCloseListener} block>
                    Efetuar cadastro
                </Button>
            </Modal.Footer>
        </Modal>
    );
}