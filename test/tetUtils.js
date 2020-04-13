
import checkPropTypes from "check-prop-types";
import {createStore} from "redux";

import rootReducer from "../src/reducers"


/**
 * Create a testing store with imported reducers, middelware, and initial state.
 * globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function - store Factory
 * @returns {Store} - Reduy store.
 */

export const storeFactory = (initialState) =>{
    return createStore(rootReducer, initialState)
}

/**
 * Return node(s) with the fiven data-test attribute.
 * @param {ShallowWrapper} wrapper - enzyme shalow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} 
 */

export const findByTestAttr = (wrapper, val) =>{
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps= (component, conformingProps) =>{
    const propError = checkPropTypes(
        component.checkPropTypes,
        conformingProps,
        "prop",
        component.name );
    
    expect(propError).toBeUndefined()
}