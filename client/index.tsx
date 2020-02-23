import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//@ts-ignore
if (module.hot) {
    //@ts-ignore
    module.hot.accept("./App", function() {
        const App = require("./App").default;
        ReactDOM.render(<App />, document.body);
    });
}
ReactDOM.render(<App />, document.body);
