import { execute } from '@/.graphclient';

import { graphql } from '@/gql';
import { TranscodersQuery } from '@/gql/graphql';

const Transcoders = graphql(`
  query Transcoders {
    subgraphs: NETWORK__subgraphs(
      orderBy: createdAt
      orderDirection: desc
      first: 10
      skip: 0
      where: { active: true }
    ) {
      id
      displayName
      owner {
        id
        defaultDisplayName
      }
    }
    transcoders: LIVEPEER__transcoders {
      id
      totalStake
      rewardCut
      feeShare
      serviceURI
    }
  }
`);

async function retrieveTranscoders(): Promise<{
  subgraphs: TranscodersQuery['subgraphs'];
  transcoders: TranscodersQuery['transcoders'];
}> {
  const response = await execute(Transcoders, {});

  return { subgraphs: response.data?.subgraphs ?? [], transcoders: response.data?.transcoders ?? [] };
}

export default async function TranscodersPage() {
  const { subgraphs, transcoders } = await retrieveTranscoders();

  return (
    <div className="w-full">
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
                    Total Stake
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {transcoders.map((coder) => (
                  <tr key={coder.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                      {coder.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{coder.totalStake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
