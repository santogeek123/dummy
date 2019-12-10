import React from 'react';
import { shallow } from 'enzyme';
import Header from "./index";

const setUp = (props = {}) => {
    const component = shallow(<Header  {...props} />);
    return component
}

describe("my-test", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })


    it("checking header wrapper", () => {
        // console.log(component.debug())
        const wrapper = component.find("[data-test='header-wrap']")
        expect(wrapper.length).toEqual(1);
    })
})
