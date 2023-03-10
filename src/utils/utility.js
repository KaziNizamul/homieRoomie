export default class Utility {
  /**
   * @param {Any} - Any datatype
   * @returns true if it is a falsy value based on the datatype
   */
  static isEmptyElement = ele => !!(!ele || ((ele.constructor === Object) && !Object.keys(ele).length) || ((Array.isArray(ele) && !ele.length)));

  /**
   * @param {Any} - Any datatype
   * @returns true if it is not an Array or if it is an empty array
   */
  static isArrayEmpty = arrayList => (!Array.isArray(arrayList) || !arrayList.length);

  /**
   * @param {Any} - Any datatype
   * @returns
   *  - false if it is not an Array or if it is an empty array
   *  - true if it is an Array or if it is not empty
   */
  static isArrayNotEmpty = arrayList => !this.isArrayEmpty(arrayList);

  /**
   * @param {Any} - Any datatype
   * @returns true if it is not an Object or if it is an empty Object
   * @Note - It will always return true while passing an object which is created using class constructor
   */
  static isObjectNull = obj => (!obj || (obj.constructor !== Object) || !Object.keys(obj).length);

  /**
   * @param {Any} - Any datatype
   * @returns
   * 1. false if it is not an Object or if it is an empty Object
   * 1. true if it is an Object or if it is not empty
   */
  static isObjectNotNull = obj => !this.isObjectNull(obj);

  /**
   * @param {Any} - Any datatype
   * @returns true if it is not a String or if it is an empty String
   */
  static isEmptyStr = str => (!str || (str.constructor !== String) || !str.trim().length);

  /**
   * @param {Any} - Any datatype
   * @returns
   * 1. false if it is not a String or if it is an empty String
   * 1. true if it is a valid and not an empty String
   */
  static isNotEmptyStr = str => !this.isEmptyStr(str);

  /**
   * @param {Any} - Any datatype
   * @returns true if it is an undefined variable
   */
  static isUndefined = obj => obj === undefined;

  /**
   * @param {Any} - Any datatype
   * @returns true if it is an null variable
   */
  static isNull = obj => obj === null;

  /**
   * @param {Any} - Any datatype
   * @returns true if it is not null or undefined variable
   */
  static isDefined = obj => (obj !== null && obj !== undefined);

  /**
   * @param {Any} - Any datatype
   * @returns true if it is a Boolean variable
   */
  static isBoolean = variable => typeof variable === 'boolean';

  /**
   * @param  {Any} of valid number in String or Number type. It can be mixed as well
   * @returns the converted number in Number type or returns 0 if any value other than number is passed
   * @note - Invalid numbers(undefined, null, {}, [], "", "some text", true, false, NaN) will be treated as 0 by default.
   */
}