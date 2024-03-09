import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests resulting in a 501 Not Implemented Error.
 *
 * @class
 * @extends HttpException
 */
export default class NotImplementedException extends HttpException {
  /**
   * Creates an instance of NotImplementedException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 501);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'NotImplementedException';
  }
}