import HttpException from './exceptions/http-exception';
export type HttpExceptionType = typeof HttpException;

import BadRequestException from './exceptions/4xx/400-bad-request';
export type BadRequestExceptionType = typeof BadRequestException;

import UnauthorizedException from './exceptions/4xx/401-unauthorized';
export type UnauthorizedExceptionType = typeof UnauthorizedException;

import PaymentRequiredException from './exceptions/4xx/402-payment-required';
export type PaymentRequiredExceptionType = typeof PaymentRequiredException;

import ForbiddenException from './exceptions/4xx/403-forbidden';
export type ForbiddenExceptionType = typeof ForbiddenException;

import NotFoundException from './exceptions/4xx/404-not-found';
export type NotFoundExceptionType = typeof NotFoundException;

import MethodNotAllowedException from './exceptions/4xx/405-method-not-allowed';
export type MethodNotAllowedExceptionType = typeof MethodNotAllowedException;

import InternalServerErrorException from './exceptions/5xx/500-internal-server-error';
export type InternalServerErrorExceptionType = typeof InternalServerErrorException;
