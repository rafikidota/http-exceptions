import HttpException from './http-exception';

export default class BadRequestException extends HttpException {
  constructor(message: string) {
    super(message, 400);
    this.name = 'BadRequestException';
  }
}