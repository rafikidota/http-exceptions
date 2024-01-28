import HttpException from './http-exception';

class ForbiddenException extends HttpException {
  constructor(message: string) {
    super(message, 403);
    this.name = 'ForbiddenException';
  }
}

export default ForbiddenException;