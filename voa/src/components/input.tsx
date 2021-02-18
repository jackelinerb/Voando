import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Content } from "../pages/Inicio/style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        });
    }, [fieldName, registerField]);
    return (
        <Content>
            <input ref={inputRef} {...rest} />
        </Content>
    );
};
export default Input;
