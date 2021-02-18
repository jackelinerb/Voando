import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { Container, Toast } from "./style";

const ToastContainer: React.FC = () => {
    return (
        <Container>
            <Toast type="sucess">
                <FiAlertCircle size={20} />
                <div>
                    <strong> Sucesso</strong>
                    <p>UHUL</p>
                </div>
                <button>
                    <FiXCircle size={18} />
                </button>
            </Toast>
            <Toast type="error">
                <FiAlertCircle size={20} />
                <div>
                    <strong>Erro</strong>
                    <p> Nenhuma credencial válida foi informada</p>
                </div>
                <button>
                    <FiXCircle size={18} />
                </button>
            </Toast>
        </Container>
    );
};
export default ToastContainer;
