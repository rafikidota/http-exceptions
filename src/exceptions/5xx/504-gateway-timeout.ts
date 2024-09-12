import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests resulting in a 504 Gateway Timeout Error.
 *
 * @class
 * @extends HttpException
 */
export default class GatewayTimeoutException extends HttpException {
  /**
   * Creates an instance of GatewayTimeoutException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 504);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'GatewayTimeoutException';
  }
}
