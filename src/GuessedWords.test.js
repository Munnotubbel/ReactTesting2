import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/tetUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw wrning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {

   // puts wrapper on full scope in describe so that it can be used in every test
    let wrapper = setup({ guessedWords: [] });
    // beforeEach(()=>{
    //     wrapper = setup({ guessedWords: [] });

    // });
  test("renders without error", () => {
    //const wrapper = setup({ guessedWords: [] });
    const component = findByTestAttr(wrapper, "component-guessed-words");

    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {});
  //const wrapper = setup({ guessedWords: [] });
    const instructions = findByTestAttr(wrapper, "guess-instructions");
   
    expect(instructions.text().length).not.toBe(0);
});

describe("if there are words guessed", () => {
    const guessedWords=[
        { guessedWord: "train", letterMatchCount: 3},
        { guessedWord: "agile", letterMatchCount: 1},
        { guessedWord: "party", letterMatchCount: 5}
    ]
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords });
      });
    
  
    test("renders without error", ()=>{
        const component = findByTestAttr(wrapper, "component-guessed-words");

        expect(component.length).toBe(1);
    });
    test("renders 'guessed words' section", ()=>{
     const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
     expect(guessedWordsNode.length).toBe(1);
    });
    test("correct number of guessed words", ()=>{
            const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
            expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});