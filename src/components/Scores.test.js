import React from "react";
import { shallow } from "enzyme";
import Scores from "./scores";

describe("Scores", () => {
    it("renders without crashing", () => {
        shallow(<Scores />);
    });
});