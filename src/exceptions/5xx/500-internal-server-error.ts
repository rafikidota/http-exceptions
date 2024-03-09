import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests resulting in a 500 Internal Server Error.
 *
 * @class
 * @extends HttpException
 */
export default class InternalServerErrorException extends HttpException {
  /**
   * Creates an instance of InternalServerErrorException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 500);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'InternalServerErrorException';
  }
}
