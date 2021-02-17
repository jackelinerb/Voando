import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./style";

const Inicio: React.FC = () => {
    return (
        <Container>
            <Content>
                <form>
                    <h1>Economize em sua viagem</h1>
                    <button> Facebook </button>
                    <button> Google </button>
                    <button> Email </button>
                    <a href="">Entrar sem e-mail</a>
                    <p>
                        Ao prossegui você aceita esses{" "}
                        <Link to="">Termos e condições </Link>e{" "}
                        <Link to="">politica de privacidade</Link>
                    </p>
                </form>
            </Content>
        </Container>
    );
};
export default Inicio;
