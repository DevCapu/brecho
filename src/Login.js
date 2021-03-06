import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    border: 1px solid rgba(141, 133, 122, 0.596);
    border-radius: 10px;
    position: relative;
    background-color: #e9dec5;
    box-shadow: 0 15px 20px #4e3a1b;
`

const FormImage = styled.img`
    width: 250px;
    height: 250px;
    margin: 10px;
`

const Avatar = styled(FormImage)`
    padding: 3px;
    background: rgb(83, 25, 61);
    border-radius: 50%;
`

const Welcome = styled.div`
    font-size: 35px;
    color: #501037;
    margin-bottom: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
`

const Field = styled.span`
    width: auto;
    height: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 300;
    margin: 5px 0 16px;
`

const LabelImage = styled(FormImage)`
    width: 30px;
    opacity: 0.2;
`

const Input = styled.input`
    width: 120%;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 10px;
    border: 1px solid #660b3d;
    font-size: 20px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
`

const Botao = styled.button`
    width: 100%;
    height: 60px;
    border-radius: 15px;
    font-size: 22px;
    font-weight: bold;
    background: #631a4b;
    color: #f7e9f0;`

export default function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <Form class="form-box">
                <section class="acesso__logo">
                    <Avatar class="avatar" src="logo.png" alt="user login" />
                </section>
                <section class="acesso">
                    <Welcome>Acesso Restrito</Welcome>
                    <Field>
                        <label for="user-name">
                            <LabelImage src="user-icon.svg" alt="User name" />
                        </label>
                        <Input type="text" placeholder="Username" pattern="[a-zA-Z0-9]+" title="Login com caracteres alfanum??ricos"
                            required onChange={(event) => setLogin(event.target.value)} />
                    </Field>

                    <Field>
                        <label for="user-password">
                            <LabelImage src="pass-icon.svg" alt="User password" />
                        </label>
                        <Input type="password" placeholder="Password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$"
                            title="M??nimo 4 caracteres, pelo menos 1 letra e 1 n??mero" required
                            onChange={(event) => setPassword(event.target.value)} />
                    </Field>
                    <Link to="/">
                        <Botao>Login</Botao>
                    </Link>
                </section>
            </Form>
            <script src="./js/app.js" type="module"></script>
        </Container>
    );
}