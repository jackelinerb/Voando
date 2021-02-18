import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import GlobalStyle from "./styles/global";
import ToastContainer from "./components/ToastContainer";

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <ToastContainer />
        <GlobalStyle />
    </>
);
export default App;
