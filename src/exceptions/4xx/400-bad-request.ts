import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests with a 400 Bad Request error.
 *
 * @class
 * @extends HttpException
 */
export default class BadRequestException extends HttpException {
  /**
  * Creates an instance of BadRequestException.
  *
  * @param {string} message - A descriptive message for the exception.
  */
  constructor(message: string) {
    /**
    * A descriptive message for the exception.
    * @type {string}
    */
    super(message, 400);
    /**
    * The name of the exception.
    * @type {string}
    */
    this.name = 'BadRequestException';
  }
}