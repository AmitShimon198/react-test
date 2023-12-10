import { render } from "react-dom";
import "./styles.css";

import App from "./App";
import CountryContextProvider from "components/CountryContextProvider";
const rootElement = document.getElementById("root");
render(
    <CountryContextProvider>
        <App />
    </CountryContextProvider>
    , rootElement);
