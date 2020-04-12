
/**
 * Return node(s) with the fiven data-test attribute.
 * @param {ShallowWrapper} wrapper - enzyme shalow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} 
 */

export const findByTestAttr = (wrapper, val) =>{
    return wrapper.find(`[data-test="${val}"]`)
}