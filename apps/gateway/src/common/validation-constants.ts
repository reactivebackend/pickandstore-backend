export const validationConstants = {
  USERNAME_MIN_LENGTH: 6,
  USERNAME_MAX_LENGTH: 30,
  USERNAME_PATTERN: '^[a-zA-Z0-9_-]*$',

  PASSWORD_MIN_LENGTH: 6,
  PASSWORD_MAX_LENGTH: 20,
  PASSWORD_PATTERN:
    '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&\'()*+,\\-./:;<=>?@\\[\\]^_`{|}~]).+$',

  EMAIL_PATTERN: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  TERMS_AGREED_PATTERN: '^(true|false)$',
};
