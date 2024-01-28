import HttpException from './http-exception';

class BadRequestException extends HttpException {
  constructor(message: string) {
    super(message, 400);
    this.name = 'BadRequestException';
  }
}

export default BadRequestException;