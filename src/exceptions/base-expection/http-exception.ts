import isHttpError from '../../util/status-code';
import { InternalServerErrorException } from '../5xx';

/**
 * Class representing a generic HTTP exception.
 *
 * @class
 * @extends Error
 */
export default class HttpException extends Error {
  /**
   * HTTP status code associated with the exception.
   * @type {number}
   */
  public status: number;

  /**
   * Creates an instance of HttpException.
   *
   * @param {string} [message=Something went wrong] - Descriptive message for the exception.
   * @param {number} [status=500] - HTTP status code.
   */
  constructor(message: string = 'Something went wrong', status: number = 500) {
    if (!isHttpError(status)) {
      throw new InternalServerErrorException(`Invalid status code ${status}`);
    }

    /**
     * Descriptive message for the exception.
     * @type {string}
     */
    super(message);

    /**
     * The name of the exception.
     * @type {string}
     */
    this.name = 'HttpException';

    /**
     * HTTP status code associated with the exception.
     * @type {number}
     */
    this.status = status;
  }
}
