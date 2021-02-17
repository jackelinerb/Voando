import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    place-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 700px;
    align-items: center;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }
        input {
            border-radius: 10px;
            border: 2px solid #000000;
            padding: 16px;
            width: 100%;

            & + input {
                margin-top: 8px;
            }
        }
        button {
            height: 56px;
            border-radius: 10px;
            background: #ffff;
            border: 2px solid #000000;
            padding: 0 16px;
            width: 100%;
            font-weight: 500;
            margin: 0 16px 16px 0;
        }
    }
`;
