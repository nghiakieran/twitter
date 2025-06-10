export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password is incorrect',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_STRING: 'Name must be a string',
  NAME_LENGTH_MUST_BE_BETWEEN_1_AND_100: 'Name length must be between 1 and 100 characters',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_INVALID: 'Email is invalid',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_STRING: 'Password must be a string',
  PASSWORD_MUST_BE_BETWEEN_6_AND_50: 'Password must be between 6 and 50 characters',
  PASSWORD_MUST_BE_STRONG:
    'Password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_MUST_BE_BETWEEN_6_AND_50: 'Confirm password must be between 6 and 50 characters',
  CONFIRM_PASSWORD_MUST_BE_STRONG:
    'Confirm password must be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.',
  CONFIRM_PASSWORD_MUST_MATCH_PASSWORD: 'Confirm password must match password',
  DATE_OF_BIRTH_MUST_BE_ISO8601: 'Date of birth must be a valid ISO8601 date',
  LOGIN_SUCCESS: 'Login successful',
  REGISTER_SUCCESS: 'Register successful',
  ACCESS_TOKEN_IS_REQUIRED: 'Access token is required'
} as const
