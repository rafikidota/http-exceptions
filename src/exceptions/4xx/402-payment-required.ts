import { HttpException } from '../base-expection';

/**
 * Class representing an exception for HTTP requests with a 402 Payment Required error.
 *
 * @class
 * @extends HttpException
 */
export default class PaymentRequiredException extends HttpException {
  /**
   * Creates an instance of PaymentRequiredException.
   *
   * @param {string} message - A descriptive message for the exception.
   */
  constructor(message: string) {
    /**
     * A descriptive message for the exception.
     * @type {string}
     */
    super(message, 402);
    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'PaymentRequiredException';
  }
}
