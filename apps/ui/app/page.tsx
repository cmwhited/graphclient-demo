import { execute } from '../.graphclient';

import { graphql } from '@/gql';
import { EpochesQuery, EpochesQueryVariables } from '@/gql/graphql';

const EpochesData = graphql(`
  query Epoches(
    $first: Int!
    $skip: Int!
    $where: NETWORK__Epoch_filter
    $orderBy: NETWORK__Epoch_orderBy
    $orderDirection: NETWORK__OrderDirection
  ) {
    epoches: NETWORK__epoches(
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      startBlock
      endBlock
      signalledTokens
      totalQueryFees
      totalIndexerRewards
    }
  }
`);

async function retrieveEpochesData(): Promise<EpochesQuery['epoches']> {
  const response = await execute(EpochesData, {
    first: 100,
    skip: 0,
    orderBy: 'endBlock',
    orderDirection: 'desc',
  } as EpochesQueryVariables);

  return response.data?.epoches ?? [];
}

export default async function Home() {
  const epoches = await retrieveEpochesData();

  return (
    <main className="flex min-h-screen flex-col py-24">
      <h1 className="text-xl text-gray-500 dark:text-gray-100 flex">Epoches</h1>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                    id
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Start Block
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    End Block
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Signalled Tokens
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Query Fees
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                    Indexer Rewards
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {epoches.map((epoch) => (
                  <tr key={epoch.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {epoch.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{epoch.startBlock}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{epoch.endBlock}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{epoch.signalledTokens}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{epoch.totalQueryFees}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{epoch.totalIndexerRewards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
