import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests resulting in a 502 Bad Gateway Error.
 *
 * @class
 * @extends HttpException
 */
export default class BadGatewayException extends HttpException {
  /**
   * Creates an instance of BadGatewayException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 502);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'BadGatewayException';
  }
}
