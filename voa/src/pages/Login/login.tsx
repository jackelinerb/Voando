import React, { useState } from "react";
import Axios from "axios";
import moment from "moment";
import { Form } from "@unform/web";
import { Container, Content } from "./style";

interface State {
    email: string;
    senha: string;
    lat: string;
    lon: string;
    v: string;
    lct: string;
}

async function validation(props: any) {
    Axios({
        method: "get",
        url: "https://webservice.voelivre.com.br/v2/account/authenticate",
        data: {
            lgn: props.email,
            sna: props.senha,
            lat: props.lat,
            lon: props.lon,
            v: props.v,
            lct: moment().format("YYYY-MM-DD, HH:MM"),
        },
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            alert(err.data.msr.msg);
            console.log(err);
        });
}

const Login: React.FC = () => {
    const [values, setValues] = useState<State>({
        email: "",
        senha: "",
        lat: "0",
        lon: "0",
        v: "WEB",
        lct: "",
    });

    function handleSubmit(): void {
        setValues({ ...values, lct: moment().format("YYYY-MM-DD, HH:MM") });
        validation(values);
    }
    return (
        <Container>
            <Content>
                <Form onSubmit={handleSubmit}>
                    <h1>Qual é o seu e-mail?</h1>
                    <input
                        id="email"
                        placeholder="Digite seu e-mail"
                        onChange={(e) => {
                            setValues({ ...values, email: e.target.value });
                        }}
                    />
                    <input
                        id="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => {
                            setValues({ ...values, senha: e.target.value });
                        }}
                    />
                    <button type="submit">Continuar</button>
                </Form>
            </Content>
        </Container>
    );
};
export default Login;
