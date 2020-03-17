import React from "react";
import { shallow } from "enzyme";
import Game from "./game";

describe("Game", () => {
    it("renders without crashing", () => {
        shallow(<Game />);
    });

    it("initially displays a card container", () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.find('.card-container')).toHaveLength(1);
    });

    it('it has a Play button', () => {
        const wrapper = shallow(<Game />);
        expect(wrapper.find('.play-button')).toHaveLength(1);
    });

    it('Play button should display the correct text', () => {
        const wrapper = shallow(<Game />);
        const buttonText = 'Play';
        expect(wrapper.find('.play-button').contains(buttonText)).toEqual(true);
    });
});