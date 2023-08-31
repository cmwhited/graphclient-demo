import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './.graphclient/schema.graphql',
  documents: ['app/**/*.{tsx,ts}', 'components/**/*.{tsx,ts}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        // generate fragment is now `unmaskFragmentData` instead of `useFragment` default.
        // `useFragment` is treated as a react hook by eslint and complains about it not being used
        // in a hook-like fashion.
        fragmentMasking: { unmaskFunctionName: 'unmaskFragmentData' },
      },
      config: {
        enumsAsTypes: true,
        dedupeFragments: true,
        scalars: {
          BigInt: 'string',
          BigDecimal: 'string',
          Bytes: 'string',
          NETWORK__BigDecimal: 'string',
          NETWORK__Bytes: 'string',
        },
      },
    } as CodegenConfig['generates'][string],
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix gql', 'prettier --write gql'],
  },
};

export default config;
