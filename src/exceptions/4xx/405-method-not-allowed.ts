import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests with a 405 Method Not Allowed error.
 *
 * @class
 * @extends HttpException
 */
export default class MethodNotAllowedException extends HttpException {
  /**
  * Creates an instance of MethodNotAllowedException.
  *
  * @param {string} message - A descriptive message for the exception.
  */
  constructor(message: string) {
    /**
    * A descriptive message for the exception.
    * @type {string}
    */
    super(message, 405);
    /**
    * The name of the exception.
    * @type {string}
    */
    this.name = 'MethodNotAllowedException';
  }
}