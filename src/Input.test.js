import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/tetUtils";
import Input from "./Input";


/**
 * Factory function to create a ShallowWrapper for the GuessWords component.
 * @function - setup
 * @param {onject} initialState - initial state for this setup.
 * @returns {ShallowWrapper}
 */

const setup = (initialState={}) =>{
    //store is running with storeFactory test function
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    //console.log(wrapper.debug());
    return wrapper;
}




describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {

    });
    test("renders input box", () => {

    });
    test("renders the submit button", () => {

    });
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {

    });
    test("does not renders input box", () => {

    });
    test("does not renders the submit button", () => {
        
    });
});
});

describe("update state", () => {
  test("", () => {});
});
