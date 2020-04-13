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

const setup = (initialState = {}) => {
  //store is running with storeFactory test function
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  //console.log(wrapper.debug());
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders the submit button", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-btn");
      expect(submitBtn.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {});
    test("does not renders input box", () => {});
    test("does not renders the submit button", () => {});
  });
});

describe("update state", () => {
  test("", () => {});
});
