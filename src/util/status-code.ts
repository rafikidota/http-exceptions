/**
 * HTTP status code list that are considered errors.
 * @type {Set<number>}
 */
const HTTP_ERROR_STATUS_CODES: Set<number> = new Set([
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
  415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500,
  501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
]);

/**
 * Verify if the HTTP status code is valid.
 *
 * @param {number} status - HTTP Status Code.
 * @returns {boolean} - true  if it is a valid status code, false otherwise.
 */
export default function isHttpError(status: number): boolean {
  return HTTP_ERROR_STATUS_CODES.has(status);
}
