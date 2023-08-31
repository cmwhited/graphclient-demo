/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query Epoches(\n    $first: Int!\n    $skip: Int!\n    $where: NETWORK__Epoch_filter\n    $orderBy: NETWORK__Epoch_orderBy\n    $orderDirection: NETWORK__OrderDirection\n  ) {\n    epoches: NETWORK__epoches(\n      first: $first\n      skip: $skip\n      where: $where\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n    ) {\n      id\n      startBlock\n      endBlock\n      signalledTokens\n      totalQueryFees\n      totalIndexerRewards\n    }\n  }\n':
    types.EpochesDocument,
  '\n  query Transcoders {\n    subgraphs: NETWORK__subgraphs(\n      orderBy: createdAt\n      orderDirection: desc\n      first: 10\n      skip: 0\n      where: { active: true }\n    ) {\n      id\n      displayName\n      owner {\n        id\n        defaultDisplayName\n      }\n    }\n    transcoders: LIVEPEER__transcoders {\n      id\n      totalStake\n      rewardCut\n      feeShare\n      serviceURI\n    }\n  }\n':
    types.TranscodersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Epoches(\n    $first: Int!\n    $skip: Int!\n    $where: NETWORK__Epoch_filter\n    $orderBy: NETWORK__Epoch_orderBy\n    $orderDirection: NETWORK__OrderDirection\n  ) {\n    epoches: NETWORK__epoches(\n      first: $first\n      skip: $skip\n      where: $where\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n    ) {\n      id\n      startBlock\n      endBlock\n      signalledTokens\n      totalQueryFees\n      totalIndexerRewards\n    }\n  }\n',
): (typeof documents)['\n  query Epoches(\n    $first: Int!\n    $skip: Int!\n    $where: NETWORK__Epoch_filter\n    $orderBy: NETWORK__Epoch_orderBy\n    $orderDirection: NETWORK__OrderDirection\n  ) {\n    epoches: NETWORK__epoches(\n      first: $first\n      skip: $skip\n      where: $where\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n    ) {\n      id\n      startBlock\n      endBlock\n      signalledTokens\n      totalQueryFees\n      totalIndexerRewards\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Transcoders {\n    subgraphs: NETWORK__subgraphs(\n      orderBy: createdAt\n      orderDirection: desc\n      first: 10\n      skip: 0\n      where: { active: true }\n    ) {\n      id\n      displayName\n      owner {\n        id\n        defaultDisplayName\n      }\n    }\n    transcoders: LIVEPEER__transcoders {\n      id\n      totalStake\n      rewardCut\n      feeShare\n      serviceURI\n    }\n  }\n',
): (typeof documents)['\n  query Transcoders {\n    subgraphs: NETWORK__subgraphs(\n      orderBy: createdAt\n      orderDirection: desc\n      first: 10\n      skip: 0\n      where: { active: true }\n    ) {\n      id\n      displayName\n      owner {\n        id\n        defaultDisplayName\n      }\n    }\n    transcoders: LIVEPEER__transcoders {\n      id\n      totalStake\n      rewardCut\n      feeShare\n      serviceURI\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
