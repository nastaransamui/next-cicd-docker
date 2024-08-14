module.exports = {
  // extends: ['@commitlint/config-conventional'],
  // built-in commitlint rules
  extends: [],
  // custom commitlint rules
  rules: {
    // here 2 means error, always means always check, 10 means min length of header message. See https://commitlint.js.org/#/reference-rules

    'header-min-length': [2, 'always', 10],
    // here means that header message must start with a capital letter. we din't set any value because i will be using regex to verrify that header message starts with a capital letter.

    'header-case-start-capital': [2, 'always'],
    // Commit message always ends with a period sign .

    'header-end-period': [2, 'always'],
  },

  // plugins array for loading commitlint plugins

  plugins: [
    {
      rules: {
        // verify above rules
        'header-case-start-capital': ({ raw }) => {
          return [
            /^[A-Z]/.test(raw),
            // verify above rules
            'Commit message must start with a capital letter',
          ];
        },
        'header-end-period': ({ header }) => {
          return [
            /\.$/.test(header),
            // error message shown when commit message does not end with a period sign
            'Commit message must end with a period',
          ];
        },
      },
    },
  ],
};
