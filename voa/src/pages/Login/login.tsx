import React from "react";
import { Container, Content } from "./style";

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <form>
                    <h1>Qual é o seu e-mail?</h1>
                    <input placeholder="Digite seu e-mail" />
                    <input type="password" placeholder="Digite sua senha" />
                    <button type="submit">Continuar</button>
                </form>
            </Content>
        </Container>
    );
};
export default Login;
