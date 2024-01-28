class HttpException extends Error {
  /**
   * @param {string} message - exception message.
   * @param {number} [status=500] - http status code.
   */
  public status: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'HttpException';
    this.status = status || 500;
  }
}

export default HttpException;