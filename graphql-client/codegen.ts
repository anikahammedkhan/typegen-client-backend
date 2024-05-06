import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:9999/graphql",
  documents: ['src/**/*.graphql'],
  generates: {
    "src/gql/generated/types.ts": {
      preset: undefined,
      plugins: [
        { typescript: {} }, // Generate TypeScript types
        { typescriptOperations: {} }, // Generate TypeScript types for GraphQL operations
        { typescriptReactApollo: {} }, // Generate React Apollo components
      ]
    }
  }
};

export default config;
