import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests resulting in a 401 Unauthorized error.
 *
 * @class
 * @extends HttpException
 */
export default class UnauthorizedException extends HttpException {
  /**
   * Creates an instance of UnauthorizedException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 401);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'UnauthorizedException';
  }
}
