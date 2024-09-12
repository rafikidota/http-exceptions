import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests resulting in a 503 Service Unavailable Error.
 *
 * @class
 * @extends HttpException
 */
export default class ServiceUnavailableException extends HttpException {
  /**
   * Creates an instance of ServiceUnavailableException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 503);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'ServiceUnavailableException';
  }
}
