import React from "react";
import Game from "./components/game";
import Scores from "./components/scores";

const routes = {
    "/": () => <Game />,
    "/scores": () => <Scores />,
};

export default routes;