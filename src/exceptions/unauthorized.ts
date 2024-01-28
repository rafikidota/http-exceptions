import HttpException from './http-exception';

class UnauthorizedException extends HttpException {
  constructor(message: string) {
    super(message, 401);
    this.name = 'UnauthorizedException';
  }
}

export default UnauthorizedException;