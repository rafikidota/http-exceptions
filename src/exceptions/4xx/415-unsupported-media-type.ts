import HttpException from '../http-exception';

/**
 * Class representing an exception for HTTP requests with a 405 Unsupported Media Type error.
 *
 * @class
 * @extends HttpException
 */
export default class UnsupportedMediaTypeException extends HttpException {
  /**
  * Creates an instance of UnsupportedMediaTypeException.
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
    this.name = 'UnsupportedMediaTypeException';
  }
}