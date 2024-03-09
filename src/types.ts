import {
  HttpException,
  BadRequestException,
  UnauthorizedException,
  PaymentRequiredException,
  ForbiddenException,
  NotFoundException,
  MethodNotAllowedException,
  UnsupportedMediaTypeException,
  InternalServerErrorException,
  NotImplementedException,
} from './exceptions';

export type HttpExceptionType = typeof HttpException;
export type BadRequestExceptionType = typeof BadRequestException;
export type UnauthorizedExceptionType = typeof UnauthorizedException;
export type PaymentRequiredExceptionType = typeof PaymentRequiredException;
export type ForbiddenExceptionType = typeof ForbiddenException;
export type NotFoundExceptionType = typeof NotFoundException;
export type MethodNotAllowedExceptionType = typeof MethodNotAllowedException;
export type UnsupportedMediaTypeExceptionType =
  typeof UnsupportedMediaTypeException;
export type InternalServerErrorExceptionType =
  typeof InternalServerErrorException;
export type NotImplementedExceptionExceptionType =
  typeof NotImplementedException;
