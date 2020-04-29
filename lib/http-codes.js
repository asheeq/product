'use strict';

module.exports = {
  CONTINUE: {
    code: 100,
    msg: 'Continue'
  },
  SWITCHING_PROTOCOLS: {
    code: 101,
    msg: 'Switching Protocols'
  },
  PROCESSING: {
    code: 102,
    msg: 'Processing'
  },

  OK: {
    code: 200,
    msg: 'OK'
  },
  CREATED: {
    code: 201,
    msg: 'Created'
  },
  ACCEPTED: {
    code: 202,
    msg: 'Accepted'
  },
  NON_AUTHORITATIVE_INFORMATION: {
    code: 203,
    msg: 'Non Authoritative Information'
  },
  NO_CONTENT: {
    code: 204,
    msg: 'No Content'
  },
  RESET_CONTENT: {
    code: 205,
    msg: 'Reset Content'
  },
  PARTIAL_CONTENT: {
    code: 206,
    msg: 'Partial Content'
  },
  MULTI_STATUS: {
    code: 207,
    msg: 'Multi-Status'
  },

  MULTIPLE_CHOICES: {
    code: 300,
    msg: 'Multiple Choices'
  },
  MOVED_PERMANENTLY: {
    code: 301,
    msg: 'Moved Permanently'
  },
  MOVED_TEMPORARILY: {
    code: 302,
    msg: 'Moved Temporarily'
  },
  SEE_OTHER: {
    code: 303,
    msg: 'See Other'
  },
  NOT_MODIFIED: {
    code: 304,
    msg: 'Not Modified'
  },
  USE_PROXY: {
    code: 305,
    msg: 'Use Proxy'
  },
  TEMPORARY_REDIRECT: {
    code: 307,
    msg: 'Temporary Redirect'
  },
  PERMANENT_REDIRECT: {
    code: 308,
    msg: 'Permanent Redirect'
  },

  BAD_REQUEST: {
    code: 400,
    msg: 'Bad Request'
  },
  UNAUTHORIZED: {
    code: 401,
    msg: 'Unauthorized'
  },
  PAYMENT_REQUIRED: {
    code: 402,
    msg: 'Payment Required'
  },
  FORBIDDEN: {
    code: 403,
    msg: 'Forbidden'
  },
  NOT_FOUND: {
    code: 404,
    msg: 'Not Found'
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    msg: 'Method Not Allowed'
  },
  NOT_ACCEPTABLE: {
    code: 406,
    msg: 'Not Acceptable'
  },
  PROXY_AUTHENTICATION_REQUIRED: {
    code: 407,
    msg: 'Proxy Authentication Required'
  },
  REQUEST_TIMEOUT: {
    code: 408,
    msg: 'Request Timeout'
  },
  CONFLICT: {
    code: 409,
    msg: 'Conflict'
  },
  GONE: {
    code: 410,
    msg: 'Gone'
  },
  LENGTH_REQUIRED: {
    code: 411,
    msg: 'Length Required'
  },
  PRECONDITION_FAILED: {
    code: 412,
    msg: 'Precondition Failed'
  },
  REQUEST_TOO_LONG: {
    code: 413,
    msg: 'Request Entity Too Large'
  },
  REQUEST_URI_TOO_LONG: {
    code: 414,
    msg: 'Request-URI Too Long'
  },
  UNSUPPORTED_MEDIA_TYPE: {
    code: 415,
    msg: 'Unsupported Media Type'
  },
  REQUESTED_RANGE_NOT_SATISFIABLE: {
    code: 416,
    msg: 'Requested Range Not Satisfiable'
  },
  EXPECTATION_FAILED: {
    code: 417,
    msg: 'Expectation Failed'
  },
  IM_A_TEAPOT: {
    code: 418,
    msg: 'I\'m a teapot'
  },
  INSUFFICIENT_SPACE_ON_RESOURCE: {
    code: 419,
    msg: 'Insufficient Space on Resource'
  },
  METHOD_FAILURE: {
    code: 420,
    msg: 'Method Failure'
  },
  UNPROCESSABLE_ENTITY: {
    code: 422,
    msg: 'Unprocessable Entity'
  },
  LOCKED: {
    code: 423,
    msg: 'Locked'
  },
  FAILED_DEPENDENCY: {
    code: 424,
    msg: 'Failed Dependency'
  },
  PRECONDITION_REQUIRED: {
    code: 428,
    msg: 'Precondition Required'
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    msg: 'Too Many Requests'
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE: {
    code: 431,
    msg: 'Request Header Fields Too Large'
  },

  INTERNAL_SERVER_ERROR: {
    code: 500,
    msg: 'Internal Server Error'
  },
  NOT_IMPLEMENTED: {
    code: 501,
    msg: 'Not Implemented'
  },
  BAD_GATEWAY: {
    code: 502,
    msg: 'Bad Gateway'
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    msg: 'Service Unavailable'
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    msg: 'Gateway Timeout'
  },
  HTTP_VERSION_NOT_SUPPORTED: {
    code: 505,
    msg: 'HTTP Version Not Supported'
  },
  INSUFFICIENT_STORAGE: {
    code: 507,
    msg: 'Insufficient Storage'
  },
  NETWORK_AUTHENTICATION_REQUIRED: {
    code: 511,
    msg: 'Network Authentication Required'
  }
};
