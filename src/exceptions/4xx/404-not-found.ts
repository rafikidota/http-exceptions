import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests resulting in a 404 Not Found error.
 *
 * @class
 * @extends HttpException
 */
export default class NotFoundException extends HttpException {
  /**
   * Creates an instance of NotFoundException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 404);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'NotFoundException';
  }
}