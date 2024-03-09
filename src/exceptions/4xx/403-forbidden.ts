import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests with a 403 Forbidden error.
 *
 * @class
 * @extends HttpException
 */
export default class ForbiddenException extends HttpException {
  /**
   * Creates an instance of ForbiddenException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 403);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'ForbiddenException';
  }
}
