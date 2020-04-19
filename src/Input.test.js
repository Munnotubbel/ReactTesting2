import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input,{UnconnectedInput} from "./Input";

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
    .dive().dive();
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
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not renders the submit button", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-btn");
      expect(submitBtn.length).toBe(0);
    });
  });
});

describe("update state", () => {
  test("", () => {});
});


describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
});

describe("'guessWord' action creator call",()=>{
  test("calls 'guessWord' when button is clicked",()=>{
    const guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock,
    };

    //set up app component with guessWordMock as the guessWord prop
    const wrapper = shallow(<UnconnectedInput {...props} />);

    //simulate click
    const submitButton = findByTestAttr(wrapper, "submit-btn");
    submitButton.simulate("click");

    //check to see if mick ran
    const guessWordCallCount = guessWordMock.mock.calls.length;

    expect(guessWordCallCount).toBe(1);
  })
})