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
            margin-top: 8px;
        }
        button {
            border-radius: 30px;
            border: 1px solid #0066cc;
            color: #fff;
            background: #0066cc;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 50px;
            cursor: pointer;
            width: 100%;
            font-weight: 500;
            margin: 16px 0;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, "#0066cc")};
            }
        }
    }
`;
