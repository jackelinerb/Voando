import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    place-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 700px;
    align-items: center;
    margin-top: 8px;

    & + div {
        margin-top: 8px;
    }
    input {
        border-radius: 10px;
        border: 2px solid #000000;
        padding: 16px;
        width: 100%;
    }
`;
