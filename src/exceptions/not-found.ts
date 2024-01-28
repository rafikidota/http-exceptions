import HttpException from './http-exception';

class NotFoundException extends HttpException {
  constructor(message: string) {
    super(message, 404);
    this.name = 'NotFoundException';
  }
}

export default NotFoundException;