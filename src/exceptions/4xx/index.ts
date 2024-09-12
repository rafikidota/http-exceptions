import BadRequestException from './400-bad-request';
import UnauthorizedException from './401-unauthorized';
import PaymentRequiredException from './402-payment-required';
import ForbiddenException from './403-forbidden';
import NotFoundException from './404-not-found';
import MethodNotAllowedException from './405-method-not-allowed';
import UnsupportedMediaTypeException from './415-unsupported-media-type';

export {
  BadRequestException,
  UnauthorizedException,
  PaymentRequiredException,
  ForbiddenException,
  NotFoundException,
  MethodNotAllowedException,
  UnsupportedMediaTypeException,
};
