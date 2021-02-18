import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./style";
import faceimg from "../../assets/icon_facebook.svg";
import Googleimg from "../../assets/icon_google.svg";
import Emailimg from "../../assets/icon_mail.svg";

const Inicio: React.FC = () => {
    return (
        <Container>
            <Content>
                <form>
                    <h1>Economize em sua viagem</h1>
                    <button>
                        {" "}
                        <img src={faceimg} alt="facebook" />
                        Facebook{" "}
                    </button>
                    <button>
                        {" "}
                        <img src={Googleimg} alt="google" /> Google{" "}
                    </button>
                    <button>
                        {" "}
                        <img src={Emailimg} alt="email" /> E-mail{" "}
                    </button>
                    <a href="">Entrar sem e-mail</a>
                    <p>
                        Ao prosseguir você aceita nossos{" "}
                        <Link to="">Termos e condições </Link>e{" "}
                        <Link to="">Politica de Privacidade</Link>
                    </p>
                </form>
            </Content>
        </Container>
    );
};
export default Inicio;
