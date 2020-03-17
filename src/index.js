import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";

import './index.css';
import routes from "./router";

const ToggleContext = React.createContext()

function App() {
    const routeResult = useRoutes(routes);
    return (
        <ToggleContext.Provider value={"test"}>
            <div className="App">
                <center>
                    <A href="/">Game</A> | <A href="/scores">Scores</A>
                </center>
                {routeResult}
            </div>
        </ToggleContext.Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);