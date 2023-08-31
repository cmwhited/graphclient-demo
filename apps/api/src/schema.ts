import { FastifyReply, FastifyRequest } from 'fastify';
import { createSchema } from 'graphql-yoga';

export type Account = {
  id: string;
  email: string;
};
const accounts = Array.from({ length: 20 }).map<Account>((_, idx) => ({
  id: idx.toString(),
  email: `test${idx}@test.com`,
}));
const accountMap = new Map<string, Account>(accounts.map((a) => [a.id, a]));

export const schema = createSchema<{
  req: FastifyRequest;
  reply: FastifyReply;
}>({
  typeDefs: /* GraphQL */ `
    type Query {
      account(id: ID!): Account
      accounts: [Account!]
    }

    type Account {
      id: ID!
      email: String!
    }
  `,
  resolvers: {
    Query: {
      account: async function (_root: {}, args: { id: string }): Promise<Account | null> {
        return accountMap.get(args.id) ?? null;
      },
      accounts: async function (): Promise<Array<Account>> {
        return accounts;
      },
    },
  },
});
