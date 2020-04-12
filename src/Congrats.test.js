import React from "react";
import Enzyme, {shallow} from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import {findByTestAttr} from "../test/tetUtils";
import Congrats from "./Congrats";


Enzyme.configure({adapter: new EnzymeAdapter() });


/**
 * Factory function to create a ShallowWrapper for Congrats component.
 * @function setup
 * @param {object} prop - Component props specific to this setup.
 * @returns {ShallowWrapper} 
 */

const setup = (prop={})=>{
    return shallow(<Congrats {...props} />)
}

test("renders without error", ()=>{


});

test("renders no text when 'success' prop is false", ()=>{


});


test("renders non-empty congrats message when 'success' prop is true", ()=>{


})