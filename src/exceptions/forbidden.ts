import HttpException from './http-exception';

export default class ForbiddenException extends HttpException {
  constructor(message: string) {
    super(message, 403);
    this.name = 'ForbiddenException';
  }
}