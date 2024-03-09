import HttpException from './exceptions/http-exception';
export type HttpExceptionType = typeof HttpException;

import BadRequestException from './exceptions/4xx/bad-request';
export type BadRequestExceptionType = typeof BadRequestException;

import PaymentRequiredException from './exceptions/4xx/payment-required';
export type PaymentRequiredExceptionType = typeof PaymentRequiredException;

import NotFoundException from './exceptions/4xx/not-found';
export type NotFoundExceptionType = typeof NotFoundException;

import MethodNotAllowedException from './exceptions/4xx/method-not-allowed';
export type MethodNotAllowedExceptionType = typeof MethodNotAllowedException;

import ForbiddenException from './exceptions/4xx/forbidden';
export type ForbiddenExceptionType = typeof ForbiddenException;

import UnauthorizedException from './exceptions/4xx/unauthorized';
export type UnauthorizedExceptionType = typeof UnauthorizedException;

import InternalServerErrorException from './exceptions/5xx/internal-server-error';
export type InternalServerErrorExceptionType = typeof InternalServerErrorException;
