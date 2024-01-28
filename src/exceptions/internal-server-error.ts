import HttpException from './http-exception';

class InternalServerErrorException extends HttpException {
  constructor(message: string) {
    super(message, 500);
    this.name = 'InternalServerErrorException';
  }
}

export default InternalServerErrorException;