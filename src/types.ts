import HttpException from './exceptions/http-exception';
import BadRequestException from './exceptions/4xx/400-bad-request';
import UnauthorizedException from './exceptions/4xx/401-unauthorized';
import PaymentRequiredException from './exceptions/4xx/402-payment-required';
import ForbiddenException from './exceptions/4xx/403-forbidden';
import NotFoundException from './exceptions/4xx/404-not-found';
import MethodNotAllowedException from './exceptions/4xx/405-method-not-allowed';
import UnsupportedMediaTypeException from './exceptions/4xx/415-unsupported-media-type';
import InternalServerErrorException from './exceptions/5xx/500-internal-server-error';

export type HttpExceptionType = typeof HttpException;
export type BadRequestExceptionType = typeof BadRequestException;
export type UnauthorizedExceptionType = typeof UnauthorizedException;
export type PaymentRequiredExceptionType = typeof PaymentRequiredException;
export type ForbiddenExceptionType = typeof ForbiddenException;
export type NotFoundExceptionType = typeof NotFoundException;
export type MethodNotAllowedExceptionType = typeof MethodNotAllowedException;
export type UnsupportedMediaTypeExceptionType = typeof UnsupportedMediaTypeException;
export type InternalServerErrorExceptionType = typeof InternalServerErrorException;
