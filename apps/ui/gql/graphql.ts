/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: string; output: string };
  LIVEPEER__BigDecimal: { input: any; output: any };
  LIVEPEER__Bytes: { input: any; output: any };
  /** 8 bytes signed integer */
  LIVEPEER__Int8: { input: any; output: any };
  NETWORK__BigDecimal: { input: string; output: string };
  NETWORK__Bytes: { input: string; output: string };
  /** 8 bytes signed integer */
  NETWORK__Int8: { input: any; output: any };
};

export type Livepeer__BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Livepeer__Block_Height = {
  hash?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** BondEvent entities are created for every emitted Bond event. */
export type Livepeer__BondEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__BondEvent';
  /** Additional amount added to bonded amount */
  additionalAmount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Delegator's current total bonded amount */
  bondedAmount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the Delegator that bonded */
  delegator: Livepeer__Delegator;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the Delegator's new delegate */
  newDelegate: Livepeer__Transcoder;
  /** Reference to the Delegator's old delegate */
  oldDelegate: Livepeer__Transcoder;
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in, used to sort */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__BondEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  additionalAmount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  additionalAmount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  additionalAmount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  additionalAmount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  additionalAmount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  additionalAmount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  additionalAmount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  additionalAmount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__BondEvent_Filter>>>;
  bondedAmount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  bondedAmount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newDelegate?: InputMaybe<Scalars['String']['input']>;
  newDelegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  newDelegate_contains?: InputMaybe<Scalars['String']['input']>;
  newDelegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_gt?: InputMaybe<Scalars['String']['input']>;
  newDelegate_gte?: InputMaybe<Scalars['String']['input']>;
  newDelegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newDelegate_lt?: InputMaybe<Scalars['String']['input']>;
  newDelegate_lte?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newDelegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldDelegate?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  oldDelegate_contains?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_gt?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_gte?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldDelegate_lt?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_lte?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_not?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldDelegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldDelegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__BondEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__BondEvent_OrderBy =
  | 'additionalAmount'
  | 'bondedAmount'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'id'
  | 'newDelegate'
  | 'newDelegate__activationRound'
  | 'newDelegate__active'
  | 'newDelegate__deactivationRound'
  | 'newDelegate__feeShare'
  | 'newDelegate__id'
  | 'newDelegate__lastActiveStakeUpdateRound'
  | 'newDelegate__pendingFeeShare'
  | 'newDelegate__pendingPricePerSegment'
  | 'newDelegate__pendingRewardCut'
  | 'newDelegate__pricePerSegment'
  | 'newDelegate__rewardCut'
  | 'newDelegate__serviceURI'
  | 'newDelegate__status'
  | 'newDelegate__totalStake'
  | 'newDelegate__totalVolumeETH'
  | 'newDelegate__totalVolumeUSD'
  | 'oldDelegate'
  | 'oldDelegate__activationRound'
  | 'oldDelegate__active'
  | 'oldDelegate__deactivationRound'
  | 'oldDelegate__feeShare'
  | 'oldDelegate__id'
  | 'oldDelegate__lastActiveStakeUpdateRound'
  | 'oldDelegate__pendingFeeShare'
  | 'oldDelegate__pendingPricePerSegment'
  | 'oldDelegate__pendingRewardCut'
  | 'oldDelegate__pricePerSegment'
  | 'oldDelegate__rewardCut'
  | 'oldDelegate__serviceURI'
  | 'oldDelegate__status'
  | 'oldDelegate__totalStake'
  | 'oldDelegate__totalVolumeETH'
  | 'oldDelegate__totalVolumeUSD'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** Broadcasters pay transcoders to do the work of transcoding in exchange for fees */
export type Livepeer__Broadcaster = {
  __typename?: 'LIVEPEER__Broadcaster';
  /** Amount of funds deposited */
  deposit: Scalars['LIVEPEER__BigDecimal']['output'];
  /** ETH address of a broadcaster */
  id: Scalars['ID']['output'];
  /** Amount of funds in reserve */
  reserve: Scalars['LIVEPEER__BigDecimal']['output'];
};

export type Livepeer__Broadcaster_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Broadcaster_Filter>>>;
  deposit?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  deposit_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Broadcaster_Filter>>>;
  reserve?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  reserve_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__Broadcaster_OrderBy = 'deposit' | 'id' | 'reserve';

/** BurnEvent entities are created for every emitted Burn event. */
export type Livepeer__BurnEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__BurnEvent';
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
  /** Amount of tokens burned */
  value: Scalars['LIVEPEER__BigDecimal']['output'];
};

export type Livepeer__BurnEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__BurnEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__BurnEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__BurnEvent_OrderBy =
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to'
  | 'value';

/** Protocol data accumulated and condensed into day stats */
export type Livepeer__Day = {
  __typename?: 'LIVEPEER__Day';
  /** The date beginning at 12:00am UTC */
  date: Scalars['Int']['output'];
  /** Timestamp rounded to current day by dividing by 86400 */
  id: Scalars['ID']['output'];
  /** Participation rate during the day (totalActiveStake/totalSupply) */
  participationRate: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total active stake during the day */
  totalActiveStake: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total Livepeer token supply during the day */
  totalSupply: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Fees generated this day in ETH */
  volumeETH: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Fees generated this day in USD */
  volumeUSD: Scalars['LIVEPEER__BigDecimal']['output'];
};

export type Livepeer__Day_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Day_Filter>>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Day_Filter>>>;
  participationRate?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  participationRate_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalActiveStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalActiveStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeETH?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeETH_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__Day_OrderBy =
  | 'date'
  | 'id'
  | 'participationRate'
  | 'totalActiveStake'
  | 'totalSupply'
  | 'volumeETH'
  | 'volumeUSD';

/** Bonded accounts who have delegated their stake towards a transcoder candidate */
export type Livepeer__Delegator = {
  __typename?: 'LIVEPEER__Delegator';
  /** Amount of Livepeer Token a delegator currently has bonded */
  bondedAmount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** ETH address of the delegate (the one whom the delegator has bonded to) */
  delegate?: Maybe<Livepeer__Transcoder>;
  /** Amount of Livepeer Token the delegator has delegated */
  delegatedAmount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Amount of fees a delegator has collected */
  fees: Scalars['LIVEPEER__BigDecimal']['output'];
  /** ETH address of a delegator */
  id: Scalars['ID']['output'];
  /** Last round that the delegator claimed reward and fee pool shares */
  lastClaimRound?: Maybe<Livepeer__Round>;
  /** Amount of Livepeer Token a delegator has bonded over its lifetime separate from rewards */
  principal: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Round the delegator becomes bonded and delegated to its delegate */
  startRound: Scalars['BigInt']['output'];
  /** Amount of Livepeer Token a delegator has unbonded over its lifetime */
  unbonded: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Unbonding locks associated with the delegator */
  unbondingLocks?: Maybe<Array<Livepeer__UnbondingLock>>;
  /** Amount of fees withdrawn */
  withdrawnFees: Scalars['LIVEPEER__BigDecimal']['output'];
};

/** Bonded accounts who have delegated their stake towards a transcoder candidate */
export type Livepeer__DelegatorUnbondingLocksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__UnbondingLock_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__UnbondingLock_Filter>;
};

export type Livepeer__Delegator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Delegator_Filter>>>;
  bondedAmount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  bondedAmount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  bondedAmount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatedAmount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  delegatedAmount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  delegatedAmount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  delegatedAmount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  delegatedAmount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  delegatedAmount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  delegatedAmount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  delegatedAmount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  fees?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  fees_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastClaimRound?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_?: InputMaybe<Livepeer__Round_Filter>;
  lastClaimRound_contains?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_gt?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_gte?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastClaimRound_lt?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_lte?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_not?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastClaimRound_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastClaimRound_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Delegator_Filter>>>;
  principal?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  principal_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  principal_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  principal_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  principal_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  principal_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  principal_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  principal_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  startRound?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unbonded?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  unbonded_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  unbonded_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  unbonded_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  unbonded_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  unbonded_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  unbonded_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  unbonded_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  unbondingLocks_?: InputMaybe<Livepeer__UnbondingLock_Filter>;
  withdrawnFees?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  withdrawnFees_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  withdrawnFees_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  withdrawnFees_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  withdrawnFees_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  withdrawnFees_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  withdrawnFees_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  withdrawnFees_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__Delegator_OrderBy =
  | 'bondedAmount'
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'delegatedAmount'
  | 'fees'
  | 'id'
  | 'lastClaimRound'
  | 'lastClaimRound__endBlock'
  | 'lastClaimRound__id'
  | 'lastClaimRound__initialized'
  | 'lastClaimRound__length'
  | 'lastClaimRound__mintableTokens'
  | 'lastClaimRound__movedStake'
  | 'lastClaimRound__newStake'
  | 'lastClaimRound__participationRate'
  | 'lastClaimRound__startBlock'
  | 'lastClaimRound__totalActiveStake'
  | 'lastClaimRound__totalSupply'
  | 'lastClaimRound__volumeETH'
  | 'lastClaimRound__volumeUSD'
  | 'principal'
  | 'startRound'
  | 'unbonded'
  | 'unbondingLocks'
  | 'withdrawnFees';

/** DepositFundedEvent entities are created for every emitted DepositFunded event. */
export type Livepeer__DepositFundedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__DepositFundedEvent';
  /** Amount of broadcasting fees deposited */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Reference to the broadcaster that deposited the broadcasting fees */
  sender: Livepeer__Broadcaster;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__DepositFundedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__DepositFundedEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__DepositFundedEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Livepeer__Broadcaster_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__DepositFundedEvent_OrderBy =
  | 'amount'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'sender'
  | 'sender__deposit'
  | 'sender__id'
  | 'sender__reserve'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** EarningsClaimedEvent entities are created for every emitted EarningsClaimed event. */
export type Livepeer__EarningsClaimedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__EarningsClaimedEvent';
  /** Reference to the delegator's delegate */
  delegate: Livepeer__Transcoder;
  /** Reference to the delegator that claimed its earnings */
  delegator: Livepeer__Delegator;
  /** Last round that the delegator's pending stake was computed from */
  endRound: Livepeer__Round;
  /** Fees claimed by the delegator */
  fees: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reward tokens claimed by the delegator */
  rewardTokens: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** First round that the delegator's pending stake was computed from */
  startRound: Scalars['BigInt']['output'];
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__EarningsClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__EarningsClaimedEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endRound?: InputMaybe<Scalars['String']['input']>;
  endRound_?: InputMaybe<Livepeer__Round_Filter>;
  endRound_contains?: InputMaybe<Scalars['String']['input']>;
  endRound_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  endRound_ends_with?: InputMaybe<Scalars['String']['input']>;
  endRound_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endRound_gt?: InputMaybe<Scalars['String']['input']>;
  endRound_gte?: InputMaybe<Scalars['String']['input']>;
  endRound_in?: InputMaybe<Array<Scalars['String']['input']>>;
  endRound_lt?: InputMaybe<Scalars['String']['input']>;
  endRound_lte?: InputMaybe<Scalars['String']['input']>;
  endRound_not?: InputMaybe<Scalars['String']['input']>;
  endRound_not_contains?: InputMaybe<Scalars['String']['input']>;
  endRound_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  endRound_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  endRound_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endRound_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  endRound_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  endRound_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endRound_starts_with?: InputMaybe<Scalars['String']['input']>;
  endRound_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fees?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  fees_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__EarningsClaimedEvent_Filter>>>;
  rewardTokens?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  rewardTokens_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startRound?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  startRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__EarningsClaimedEvent_OrderBy =
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'endRound'
  | 'endRound__endBlock'
  | 'endRound__id'
  | 'endRound__initialized'
  | 'endRound__length'
  | 'endRound__mintableTokens'
  | 'endRound__movedStake'
  | 'endRound__newStake'
  | 'endRound__participationRate'
  | 'endRound__startBlock'
  | 'endRound__totalActiveStake'
  | 'endRound__totalSupply'
  | 'endRound__volumeETH'
  | 'endRound__volumeUSD'
  | 'fees'
  | 'id'
  | 'rewardTokens'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'startRound'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

export type Livepeer__Event = {
  id: Scalars['ID']['output'];
  round: Livepeer__Round;
  timestamp: Scalars['Int']['output'];
  transaction: Livepeer__Transaction;
};

export type Livepeer__Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Event_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Event_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__Event_OrderBy =
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** MintEvent entities are created for every emitted Mint event. */
export type Livepeer__MintEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__MintEvent';
  /** Amount of tokens minted */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Token smart contract address */
  to: Scalars['String']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__MintEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__MintEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__MintEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__MintEvent_OrderBy =
  | 'amount'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'to'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** NewRoundEvent entities are created for every emitted NewRound event. */
export type Livepeer__NewRoundEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__NewRoundEvent';
  /** Block hash for the round */
  blockHash: Scalars['String']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__NewRoundEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__NewRoundEvent_Filter>>>;
  blockHash?: InputMaybe<Scalars['String']['input']>;
  blockHash_contains?: InputMaybe<Scalars['String']['input']>;
  blockHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  blockHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  blockHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockHash_gt?: InputMaybe<Scalars['String']['input']>;
  blockHash_gte?: InputMaybe<Scalars['String']['input']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  blockHash_lt?: InputMaybe<Scalars['String']['input']>;
  blockHash_lte?: InputMaybe<Scalars['String']['input']>;
  blockHash_not?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  blockHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  blockHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__NewRoundEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__NewRoundEvent_OrderBy =
  | 'blockHash'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** Defines the order direction, either ascending or descending */
export type Livepeer__OrderDirection = 'asc' | 'desc';

/** ParameterUpdateEvent entities are created for every emitted ParameterUpdate event. */
export type Livepeer__ParameterUpdateEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__ParameterUpdateEvent';
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Parameter that was updated */
  param: Scalars['String']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__ParameterUpdateEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__ParameterUpdateEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__ParameterUpdateEvent_Filter>>>;
  param?: InputMaybe<Scalars['String']['input']>;
  param_contains?: InputMaybe<Scalars['String']['input']>;
  param_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  param_ends_with?: InputMaybe<Scalars['String']['input']>;
  param_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  param_gt?: InputMaybe<Scalars['String']['input']>;
  param_gte?: InputMaybe<Scalars['String']['input']>;
  param_in?: InputMaybe<Array<Scalars['String']['input']>>;
  param_lt?: InputMaybe<Scalars['String']['input']>;
  param_lte?: InputMaybe<Scalars['String']['input']>;
  param_not?: InputMaybe<Scalars['String']['input']>;
  param_not_contains?: InputMaybe<Scalars['String']['input']>;
  param_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  param_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  param_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  param_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  param_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  param_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  param_starts_with?: InputMaybe<Scalars['String']['input']>;
  param_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__ParameterUpdateEvent_OrderBy =
  | 'id'
  | 'param'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** PauseEvent entities are created for every emitted Pause event. */
export type Livepeer__PauseEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__PauseEvent';
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__PauseEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__PauseEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__PauseEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__PauseEvent_OrderBy =
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** Stake weighted poll */
export type Livepeer__Poll = {
  __typename?: 'LIVEPEER__Poll';
  /** Block at which the poll ends and votes can no longer be submitted */
  endBlock: Scalars['BigInt']['output'];
  /** Poll address */
  id: Scalars['ID']['output'];
  /** IPFS multihash for the proposal */
  proposal: Scalars['String']['output'];
  /** Minimum amount of participation (total stake including inactive stake) required for a poll to pass */
  quorum: Scalars['BigInt']['output'];
  /** Minimum amount of yes votes required for a poll to pass */
  quota: Scalars['BigInt']['output'];
  /** Poll tally */
  tally?: Maybe<Livepeer__PollTally>;
  /** Votes belonging to a poll */
  votes?: Maybe<Array<Livepeer__Vote>>;
};

/** Stake weighted poll */
export type Livepeer__PollVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Vote_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__Vote_Filter>;
};

export type Livepeer__PollChoice = 'No' | 'Yes';

/** PollCreatedEvent entities are created for every emitted PollCreated event. */
export type Livepeer__PollCreatedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__PollCreatedEvent';
  /** Ethereum block in which this poll ends */
  endBlock: Scalars['BigInt']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the poll that was created */
  poll: Livepeer__Poll;
  /** IPFS content hash representing proposal */
  proposal: Scalars['LIVEPEER__Bytes']['output'];
  /** The minimum amount of stake-weighted votes for this poll's outcome to be considered valid */
  quorum: Scalars['BigInt']['output'];
  /** The minimum amount of stake-weighted 'yes' votes needed for the poll to pass */
  quota: Scalars['BigInt']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__PollCreatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__PollCreatedEvent_Filter>>>;
  endBlock?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__PollCreatedEvent_Filter>>>;
  poll?: InputMaybe<Scalars['String']['input']>;
  poll_?: InputMaybe<Livepeer__Poll_Filter>;
  poll_contains?: InputMaybe<Scalars['String']['input']>;
  poll_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_ends_with?: InputMaybe<Scalars['String']['input']>;
  poll_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_gt?: InputMaybe<Scalars['String']['input']>;
  poll_gte?: InputMaybe<Scalars['String']['input']>;
  poll_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poll_lt?: InputMaybe<Scalars['String']['input']>;
  poll_lte?: InputMaybe<Scalars['String']['input']>;
  poll_not?: InputMaybe<Scalars['String']['input']>;
  poll_not_contains?: InputMaybe<Scalars['String']['input']>;
  poll_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poll_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poll_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poll_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_starts_with?: InputMaybe<Scalars['String']['input']>;
  poll_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_contains?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_gt?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_gte?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['LIVEPEER__Bytes']['input']>>;
  proposal_lt?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_lte?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_not?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['LIVEPEER__Bytes']['input']>>;
  quorum?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quota?: InputMaybe<Scalars['BigInt']['input']>;
  quota_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quota_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quota_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quota_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quota_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quota_not?: InputMaybe<Scalars['BigInt']['input']>;
  quota_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__PollCreatedEvent_OrderBy =
  | 'endBlock'
  | 'id'
  | 'poll'
  | 'poll__endBlock'
  | 'poll__id'
  | 'poll__proposal'
  | 'poll__quorum'
  | 'poll__quota'
  | 'proposal'
  | 'quorum'
  | 'quota'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** Stake weighted tally associated with a poll */
export type Livepeer__PollTally = {
  __typename?: 'LIVEPEER__PollTally';
  /** Poll address */
  id: Scalars['ID']['output'];
  /** Stake voted no */
  no?: Maybe<Scalars['LIVEPEER__BigDecimal']['output']>;
  /** Stake voted yes */
  yes?: Maybe<Scalars['LIVEPEER__BigDecimal']['output']>;
};

export type Livepeer__PollTally_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__PollTally_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  no?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  no_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  no_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  no_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  no_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  no_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  no_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  no_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__PollTally_Filter>>>;
  yes?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  yes_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  yes_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  yes_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  yes_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  yes_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  yes_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  yes_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__PollTally_OrderBy = 'id' | 'no' | 'yes';

export type Livepeer__Poll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Poll_Filter>>>;
  endBlock?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Poll_Filter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quorum?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quota?: InputMaybe<Scalars['BigInt']['input']>;
  quota_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quota_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quota_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quota_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quota_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quota_not?: InputMaybe<Scalars['BigInt']['input']>;
  quota_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tally?: InputMaybe<Scalars['String']['input']>;
  tally_?: InputMaybe<Livepeer__PollTally_Filter>;
  tally_contains?: InputMaybe<Scalars['String']['input']>;
  tally_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tally_ends_with?: InputMaybe<Scalars['String']['input']>;
  tally_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tally_gt?: InputMaybe<Scalars['String']['input']>;
  tally_gte?: InputMaybe<Scalars['String']['input']>;
  tally_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tally_lt?: InputMaybe<Scalars['String']['input']>;
  tally_lte?: InputMaybe<Scalars['String']['input']>;
  tally_not?: InputMaybe<Scalars['String']['input']>;
  tally_not_contains?: InputMaybe<Scalars['String']['input']>;
  tally_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tally_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tally_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tally_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tally_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tally_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tally_starts_with?: InputMaybe<Scalars['String']['input']>;
  tally_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Array<Scalars['String']['input']>>;
  votes_?: InputMaybe<Livepeer__Vote_Filter>;
  votes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  votes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  votes_not?: InputMaybe<Array<Scalars['String']['input']>>;
  votes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  votes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Livepeer__Poll_OrderBy =
  | 'endBlock'
  | 'id'
  | 'proposal'
  | 'quorum'
  | 'quota'
  | 'tally'
  | 'tally__id'
  | 'tally__no'
  | 'tally__yes'
  | 'votes';

/** Represents a transcoder's rewards and fees to be distributed to delegators */
export type Livepeer__Pool = {
  __typename?: 'LIVEPEER__Pool';
  /** Transcoder associated with the pool */
  delegate: Livepeer__Transcoder;
  /** Transcoder's fee share during the earnings pool's round */
  feeShare: Scalars['BigInt']['output'];
  /** Fees collected in the pool */
  fees?: Maybe<Scalars['LIVEPEER__BigDecimal']['output']>;
  /** Unique identifer for the pool (formed using the transcoder's address and round number) */
  id: Scalars['ID']['output'];
  /** Transcoder's reward cut during the earnings pool's round */
  rewardCut: Scalars['BigInt']['output'];
  /** Total reward tokens collected in the pool */
  rewardTokens?: Maybe<Scalars['LIVEPEER__BigDecimal']['output']>;
  /** Round associated with the pool */
  round: Livepeer__Round;
  /** Transcoder's total stake during the earnings pool's round */
  totalStake: Scalars['LIVEPEER__BigDecimal']['output'];
};

export type Livepeer__Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Pool_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeShare?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  fees_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  fees_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Pool_Filter>>>;
  rewardCut?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardCut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokens?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  rewardTokens_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__Pool_OrderBy =
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'feeShare'
  | 'fees'
  | 'id'
  | 'rewardCut'
  | 'rewardTokens'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'totalStake';

/** Livepeer protocol global parameters */
export type Livepeer__Protocol = {
  __typename?: 'LIVEPEER__Protocol';
  /** Current round the protocol is in */
  currentRound?: Maybe<Livepeer__Round>;
  /** ID is set to 0 */
  id: Scalars['ID']['output'];
  /** Per round inflation rate */
  inflation: Scalars['BigInt']['output'];
  /** Change in inflation rate per round until the target bonding rate is achieved */
  inflationChange: Scalars['BigInt']['output'];
  /** Round that was last initialized */
  lastInitializedRound?: Maybe<Livepeer__Round>;
  /** Round when round length was last updated */
  lastRoundLengthUpdateRound?: Maybe<Livepeer__Round>;
  /** Block when round length was last updated */
  lastRoundLengthUpdateStartBlock: Scalars['BigInt']['output'];
  /** Time in blocks delegators have to review transcoder information without changes */
  lockPeriod: Scalars['BigInt']['output'];
  /** Max number of rounds that a caller can claim earnings for at once */
  maxEarningsClaimsRounds: Scalars['Int']['output'];
  /** Total active transcoders */
  numActiveTranscoders: Scalars['Int']['output'];
  /** Ratio of total active stake to total supply */
  participationRate: Scalars['LIVEPEER__BigDecimal']['output'];
  /** True if the protocol is paused */
  paused: Scalars['Boolean']['output'];
  /** Transcoders pending activation */
  pendingActivation: Array<Livepeer__Transcoder>;
  /** Transcoders pending deactivation */
  pendingDeactivation: Array<Livepeer__Transcoder>;
  /** Total rounds */
  roundCount: Scalars['Int']['output'];
  /** Round length in blocks */
  roundLength: Scalars['BigInt']['output'];
  /** Lock period of a round as a % of round length */
  roundLockAmount: Scalars['BigInt']['output'];
  /** Target bonding rate (participation) that determines whether inflation should increase or decrease */
  targetBondingRate: Scalars['BigInt']['output'];
  /** The total amount of active LPT staked */
  totalActiveStake: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total number of delegators on the network */
  totalDelegators: Scalars['BigInt']['output'];
  /** Livepeer Token supply */
  totalSupply: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total broadcaster fees transcoders have accumulated in ETH */
  totalVolumeETH: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total broadcaster fees transcoders have accumulated in USD */
  totalVolumeUSD: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Time in blocks needed to wait to unstake */
  unbondingPeriod: Scalars['BigInt']['output'];
  /** Total winning tickets */
  winningTicketCount: Scalars['Int']['output'];
};

/** Livepeer protocol global parameters */
export type Livepeer__ProtocolPendingActivationArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Transcoder_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__Transcoder_Filter>;
};

/** Livepeer protocol global parameters */
export type Livepeer__ProtocolPendingDeactivationArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Transcoder_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__Transcoder_Filter>;
};

export type Livepeer__Protocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Protocol_Filter>>>;
  currentRound?: InputMaybe<Scalars['String']['input']>;
  currentRound_?: InputMaybe<Livepeer__Round_Filter>;
  currentRound_contains?: InputMaybe<Scalars['String']['input']>;
  currentRound_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_gt?: InputMaybe<Scalars['String']['input']>;
  currentRound_gte?: InputMaybe<Scalars['String']['input']>;
  currentRound_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentRound_lt?: InputMaybe<Scalars['String']['input']>;
  currentRound_lte?: InputMaybe<Scalars['String']['input']>;
  currentRound_not?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentRound_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentRound_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentRound_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  inflation?: InputMaybe<Scalars['BigInt']['input']>;
  inflationChange?: InputMaybe<Scalars['BigInt']['input']>;
  inflationChange_gt?: InputMaybe<Scalars['BigInt']['input']>;
  inflationChange_gte?: InputMaybe<Scalars['BigInt']['input']>;
  inflationChange_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inflationChange_lt?: InputMaybe<Scalars['BigInt']['input']>;
  inflationChange_lte?: InputMaybe<Scalars['BigInt']['input']>;
  inflationChange_not?: InputMaybe<Scalars['BigInt']['input']>;
  inflationChange_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inflation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  inflation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  inflation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inflation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  inflation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  inflation_not?: InputMaybe<Scalars['BigInt']['input']>;
  inflation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastInitializedRound?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_?: InputMaybe<Livepeer__Round_Filter>;
  lastInitializedRound_contains?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_gt?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_gte?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastInitializedRound_lt?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_lte?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_not?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastInitializedRound_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastInitializedRound_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_?: InputMaybe<Livepeer__Round_Filter>;
  lastRoundLengthUpdateRound_contains?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_gt?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_gte?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastRoundLengthUpdateRound_lt?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_lte?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_not?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastRoundLengthUpdateRound_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateRound_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRoundLengthUpdateStartBlock?: InputMaybe<Scalars['BigInt']['input']>;
  lastRoundLengthUpdateStartBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastRoundLengthUpdateStartBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastRoundLengthUpdateStartBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastRoundLengthUpdateStartBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastRoundLengthUpdateStartBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastRoundLengthUpdateStartBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastRoundLengthUpdateStartBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxEarningsClaimsRounds?: InputMaybe<Scalars['Int']['input']>;
  maxEarningsClaimsRounds_gt?: InputMaybe<Scalars['Int']['input']>;
  maxEarningsClaimsRounds_gte?: InputMaybe<Scalars['Int']['input']>;
  maxEarningsClaimsRounds_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxEarningsClaimsRounds_lt?: InputMaybe<Scalars['Int']['input']>;
  maxEarningsClaimsRounds_lte?: InputMaybe<Scalars['Int']['input']>;
  maxEarningsClaimsRounds_not?: InputMaybe<Scalars['Int']['input']>;
  maxEarningsClaimsRounds_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numActiveTranscoders?: InputMaybe<Scalars['Int']['input']>;
  numActiveTranscoders_gt?: InputMaybe<Scalars['Int']['input']>;
  numActiveTranscoders_gte?: InputMaybe<Scalars['Int']['input']>;
  numActiveTranscoders_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numActiveTranscoders_lt?: InputMaybe<Scalars['Int']['input']>;
  numActiveTranscoders_lte?: InputMaybe<Scalars['Int']['input']>;
  numActiveTranscoders_not?: InputMaybe<Scalars['Int']['input']>;
  numActiveTranscoders_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Protocol_Filter>>>;
  participationRate?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  participationRate_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  paused?: InputMaybe<Scalars['Boolean']['input']>;
  paused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  paused_not?: InputMaybe<Scalars['Boolean']['input']>;
  paused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  pendingActivation?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingActivation_?: InputMaybe<Livepeer__Transcoder_Filter>;
  pendingActivation_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingActivation_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingActivation_not?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingActivation_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingActivation_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingDeactivation?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingDeactivation_?: InputMaybe<Livepeer__Transcoder_Filter>;
  pendingDeactivation_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingDeactivation_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingDeactivation_not?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingDeactivation_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  pendingDeactivation_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  roundCount?: InputMaybe<Scalars['Int']['input']>;
  roundCount_gt?: InputMaybe<Scalars['Int']['input']>;
  roundCount_gte?: InputMaybe<Scalars['Int']['input']>;
  roundCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  roundCount_lt?: InputMaybe<Scalars['Int']['input']>;
  roundCount_lte?: InputMaybe<Scalars['Int']['input']>;
  roundCount_not?: InputMaybe<Scalars['Int']['input']>;
  roundCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  roundLength?: InputMaybe<Scalars['BigInt']['input']>;
  roundLength_gt?: InputMaybe<Scalars['BigInt']['input']>;
  roundLength_gte?: InputMaybe<Scalars['BigInt']['input']>;
  roundLength_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  roundLength_lt?: InputMaybe<Scalars['BigInt']['input']>;
  roundLength_lte?: InputMaybe<Scalars['BigInt']['input']>;
  roundLength_not?: InputMaybe<Scalars['BigInt']['input']>;
  roundLength_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  roundLockAmount?: InputMaybe<Scalars['BigInt']['input']>;
  roundLockAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  roundLockAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  roundLockAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  roundLockAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  roundLockAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  roundLockAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  roundLockAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetBondingRate?: InputMaybe<Scalars['BigInt']['input']>;
  targetBondingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  targetBondingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  targetBondingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  targetBondingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  targetBondingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  targetBondingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  targetBondingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalActiveStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalActiveStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalDelegators?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegators_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegators_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegators_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegators_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegators_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegators_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegators_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeETH?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeETH_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  unbondingPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unbondingPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  winningTicketCount?: InputMaybe<Scalars['Int']['input']>;
  winningTicketCount_gt?: InputMaybe<Scalars['Int']['input']>;
  winningTicketCount_gte?: InputMaybe<Scalars['Int']['input']>;
  winningTicketCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  winningTicketCount_lt?: InputMaybe<Scalars['Int']['input']>;
  winningTicketCount_lte?: InputMaybe<Scalars['Int']['input']>;
  winningTicketCount_not?: InputMaybe<Scalars['Int']['input']>;
  winningTicketCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Livepeer__Protocol_OrderBy =
  | 'currentRound'
  | 'currentRound__endBlock'
  | 'currentRound__id'
  | 'currentRound__initialized'
  | 'currentRound__length'
  | 'currentRound__mintableTokens'
  | 'currentRound__movedStake'
  | 'currentRound__newStake'
  | 'currentRound__participationRate'
  | 'currentRound__startBlock'
  | 'currentRound__totalActiveStake'
  | 'currentRound__totalSupply'
  | 'currentRound__volumeETH'
  | 'currentRound__volumeUSD'
  | 'id'
  | 'inflation'
  | 'inflationChange'
  | 'lastInitializedRound'
  | 'lastInitializedRound__endBlock'
  | 'lastInitializedRound__id'
  | 'lastInitializedRound__initialized'
  | 'lastInitializedRound__length'
  | 'lastInitializedRound__mintableTokens'
  | 'lastInitializedRound__movedStake'
  | 'lastInitializedRound__newStake'
  | 'lastInitializedRound__participationRate'
  | 'lastInitializedRound__startBlock'
  | 'lastInitializedRound__totalActiveStake'
  | 'lastInitializedRound__totalSupply'
  | 'lastInitializedRound__volumeETH'
  | 'lastInitializedRound__volumeUSD'
  | 'lastRoundLengthUpdateRound'
  | 'lastRoundLengthUpdateRound__endBlock'
  | 'lastRoundLengthUpdateRound__id'
  | 'lastRoundLengthUpdateRound__initialized'
  | 'lastRoundLengthUpdateRound__length'
  | 'lastRoundLengthUpdateRound__mintableTokens'
  | 'lastRoundLengthUpdateRound__movedStake'
  | 'lastRoundLengthUpdateRound__newStake'
  | 'lastRoundLengthUpdateRound__participationRate'
  | 'lastRoundLengthUpdateRound__startBlock'
  | 'lastRoundLengthUpdateRound__totalActiveStake'
  | 'lastRoundLengthUpdateRound__totalSupply'
  | 'lastRoundLengthUpdateRound__volumeETH'
  | 'lastRoundLengthUpdateRound__volumeUSD'
  | 'lastRoundLengthUpdateStartBlock'
  | 'lockPeriod'
  | 'maxEarningsClaimsRounds'
  | 'numActiveTranscoders'
  | 'participationRate'
  | 'paused'
  | 'pendingActivation'
  | 'pendingDeactivation'
  | 'roundCount'
  | 'roundLength'
  | 'roundLockAmount'
  | 'targetBondingRate'
  | 'totalActiveStake'
  | 'totalDelegators'
  | 'totalSupply'
  | 'totalVolumeETH'
  | 'totalVolumeUSD'
  | 'unbondingPeriod'
  | 'winningTicketCount';

/** RebondEvent entities are created for every emitted Rebond event. */
export type Livepeer__RebondEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__RebondEvent';
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  delegate: Livepeer__Transcoder;
  /** Reference to the delegator that rebonded */
  delegator: Livepeer__Delegator;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
  unbondingLockId: Scalars['Int']['output'];
};

export type Livepeer__RebondEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__RebondEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__RebondEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unbondingLockId?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unbondingLockId_lt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_lte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Livepeer__RebondEvent_OrderBy =
  | 'amount'
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to'
  | 'unbondingLockId';

/** ReserveClaimedEvent entities are created for every emitted ReserveClaimed event. */
export type Livepeer__ReserveClaimedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__ReserveClaimedEvent';
  /** Amount of funds claimed by claimant from the reserve for the reserve holder */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the claimant */
  claimant: Livepeer__Transcoder;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the reserve holder */
  reserveHolder: Livepeer__Broadcaster;
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__ReserveClaimedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__ReserveClaimedEvent_Filter>>>;
  claimant?: InputMaybe<Scalars['String']['input']>;
  claimant_?: InputMaybe<Livepeer__Transcoder_Filter>;
  claimant_contains?: InputMaybe<Scalars['String']['input']>;
  claimant_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  claimant_ends_with?: InputMaybe<Scalars['String']['input']>;
  claimant_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimant_gt?: InputMaybe<Scalars['String']['input']>;
  claimant_gte?: InputMaybe<Scalars['String']['input']>;
  claimant_in?: InputMaybe<Array<Scalars['String']['input']>>;
  claimant_lt?: InputMaybe<Scalars['String']['input']>;
  claimant_lte?: InputMaybe<Scalars['String']['input']>;
  claimant_not?: InputMaybe<Scalars['String']['input']>;
  claimant_not_contains?: InputMaybe<Scalars['String']['input']>;
  claimant_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  claimant_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  claimant_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimant_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  claimant_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  claimant_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimant_starts_with?: InputMaybe<Scalars['String']['input']>;
  claimant_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__ReserveClaimedEvent_Filter>>>;
  reserveHolder?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_?: InputMaybe<Livepeer__Broadcaster_Filter>;
  reserveHolder_contains?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_ends_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_gt?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_gte?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserveHolder_lt?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_lte?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_contains?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserveHolder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_starts_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__ReserveClaimedEvent_OrderBy =
  | 'amount'
  | 'claimant'
  | 'claimant__activationRound'
  | 'claimant__active'
  | 'claimant__deactivationRound'
  | 'claimant__feeShare'
  | 'claimant__id'
  | 'claimant__lastActiveStakeUpdateRound'
  | 'claimant__pendingFeeShare'
  | 'claimant__pendingPricePerSegment'
  | 'claimant__pendingRewardCut'
  | 'claimant__pricePerSegment'
  | 'claimant__rewardCut'
  | 'claimant__serviceURI'
  | 'claimant__status'
  | 'claimant__totalStake'
  | 'claimant__totalVolumeETH'
  | 'claimant__totalVolumeUSD'
  | 'id'
  | 'reserveHolder'
  | 'reserveHolder__deposit'
  | 'reserveHolder__id'
  | 'reserveHolder__reserve'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** ReserveFundedEvent entities are created for every emitted ReserveFunded event. */
export type Livepeer__ReserveFundedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__ReserveFundedEvent';
  /** Amount of funds added to reserve */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to reserve holder */
  reserveHolder: Livepeer__Broadcaster;
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__ReserveFundedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__ReserveFundedEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__ReserveFundedEvent_Filter>>>;
  reserveHolder?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_?: InputMaybe<Livepeer__Broadcaster_Filter>;
  reserveHolder_contains?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_ends_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_gt?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_gte?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserveHolder_lt?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_lte?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_contains?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reserveHolder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_starts_with?: InputMaybe<Scalars['String']['input']>;
  reserveHolder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__ReserveFundedEvent_OrderBy =
  | 'amount'
  | 'id'
  | 'reserveHolder'
  | 'reserveHolder__deposit'
  | 'reserveHolder__id'
  | 'reserveHolder__reserve'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** RewardEvent entities are created for every emitted Reward event. */
export type Livepeer__RewardEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__RewardEvent';
  /** Reference to the delegate that claimed its inflationary token reward */
  delegate: Livepeer__Transcoder;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Amount of inflationary token rewards claimed */
  rewardTokens: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__RewardEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__RewardEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__RewardEvent_Filter>>>;
  rewardTokens?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  rewardTokens_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  rewardTokens_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__RewardEvent_OrderBy =
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'id'
  | 'rewardTokens'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** The Livepeer protocol is round based and each round is represented by some number of Ethereum blocks. */
export type Livepeer__Round = {
  __typename?: 'LIVEPEER__Round';
  /** End block for the round */
  endBlock: Scalars['BigInt']['output'];
  /** Round number */
  id: Scalars['ID']['output'];
  /** Whether the round was initialized */
  initialized: Scalars['Boolean']['output'];
  /** Number of blocks this round lasts for */
  length: Scalars['BigInt']['output'];
  /** Mintable tokens for the round */
  mintableTokens: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total stake moved from one delegate to another during the round */
  movedStake: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total amount of new stake introduced during the round */
  newStake: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Participation rate during the round (totalActiveStake/totalSupply) */
  participationRate: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Pools associated with the round */
  pools?: Maybe<Array<Livepeer__Pool>>;
  /** Start block for the round */
  startBlock: Scalars['BigInt']['output'];
  /** Total active stake during the round */
  totalActiveStake: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total Livepeer token supply during the round */
  totalSupply: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Fees generated this round in ETH */
  volumeETH: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Fees generated this round in USD */
  volumeUSD: Scalars['LIVEPEER__BigDecimal']['output'];
};

/** The Livepeer protocol is round based and each round is represented by some number of Ethereum blocks. */
export type Livepeer__RoundPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Pool_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__Pool_Filter>;
};

export type Livepeer__Round_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Round_Filter>>>;
  endBlock?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  initialized?: InputMaybe<Scalars['Boolean']['input']>;
  initialized_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  initialized_not?: InputMaybe<Scalars['Boolean']['input']>;
  initialized_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  length?: InputMaybe<Scalars['BigInt']['input']>;
  length_gt?: InputMaybe<Scalars['BigInt']['input']>;
  length_gte?: InputMaybe<Scalars['BigInt']['input']>;
  length_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  length_lt?: InputMaybe<Scalars['BigInt']['input']>;
  length_lte?: InputMaybe<Scalars['BigInt']['input']>;
  length_not?: InputMaybe<Scalars['BigInt']['input']>;
  length_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintableTokens?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  mintableTokens_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  mintableTokens_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  mintableTokens_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  mintableTokens_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  mintableTokens_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  mintableTokens_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  mintableTokens_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  movedStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  movedStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  movedStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  movedStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  movedStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  movedStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  movedStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  movedStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  newStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  newStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  newStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  newStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  newStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  newStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  newStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  newStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Round_Filter>>>;
  participationRate?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  participationRate_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  participationRate_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  pools_?: InputMaybe<Livepeer__Pool_Filter>;
  startBlock?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalActiveStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalActiveStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalActiveStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalSupply?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeETH?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeETH_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__Round_OrderBy =
  | 'endBlock'
  | 'id'
  | 'initialized'
  | 'length'
  | 'mintableTokens'
  | 'movedStake'
  | 'newStake'
  | 'participationRate'
  | 'pools'
  | 'startBlock'
  | 'totalActiveStake'
  | 'totalSupply'
  | 'volumeETH'
  | 'volumeUSD';

/** ServiceURIUpdateEvent entities are created for every emitted ServiceURIUpdate event. */
export type Livepeer__ServiceUriUpdateEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__ServiceURIUpdateEvent';
  /** Address of sender */
  addr: Scalars['String']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Service URI endpoint for the caller */
  serviceURI: Scalars['String']['output'];
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__ServiceUriUpdateEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  addr?: InputMaybe<Scalars['String']['input']>;
  addr_contains?: InputMaybe<Scalars['String']['input']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addr_ends_with?: InputMaybe<Scalars['String']['input']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addr_gt?: InputMaybe<Scalars['String']['input']>;
  addr_gte?: InputMaybe<Scalars['String']['input']>;
  addr_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addr_lt?: InputMaybe<Scalars['String']['input']>;
  addr_lte?: InputMaybe<Scalars['String']['input']>;
  addr_not?: InputMaybe<Scalars['String']['input']>;
  addr_not_contains?: InputMaybe<Scalars['String']['input']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addr_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addr_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addr_starts_with?: InputMaybe<Scalars['String']['input']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__ServiceUriUpdateEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__ServiceUriUpdateEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI?: InputMaybe<Scalars['String']['input']>;
  serviceURI_contains?: InputMaybe<Scalars['String']['input']>;
  serviceURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_gt?: InputMaybe<Scalars['String']['input']>;
  serviceURI_gte?: InputMaybe<Scalars['String']['input']>;
  serviceURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceURI_lt?: InputMaybe<Scalars['String']['input']>;
  serviceURI_lte?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__ServiceUriUpdateEvent_OrderBy =
  | 'addr'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'serviceURI'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** SetCurrentRewardTokensEvent entities are created for every emitted SetCurrentRewardTokens event. */
export type Livepeer__SetCurrentRewardTokensEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__SetCurrentRewardTokensEvent';
  /** Current inflation during the round */
  currentInflation: Scalars['BigInt']['output'];
  /** Number of mintable tokens for the round */
  currentMintableTokens: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__SetCurrentRewardTokensEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__SetCurrentRewardTokensEvent_Filter>>>;
  currentInflation?: InputMaybe<Scalars['BigInt']['input']>;
  currentInflation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentInflation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentInflation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentInflation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentInflation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentInflation_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentInflation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentMintableTokens?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  currentMintableTokens_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  currentMintableTokens_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  currentMintableTokens_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  currentMintableTokens_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  currentMintableTokens_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  currentMintableTokens_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  currentMintableTokens_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__SetCurrentRewardTokensEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__SetCurrentRewardTokensEvent_OrderBy =
  | 'currentInflation'
  | 'currentMintableTokens'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** Transaction entities are created for each Ethereum transaction that contains an interaction within Livepeer contracts. */
export type Livepeer__Transaction = {
  __typename?: 'LIVEPEER__Transaction';
  /** Block transaction was mined in */
  blockNumber: Scalars['BigInt']['output'];
  /** The events emitted within this transaction */
  events?: Maybe<Array<Livepeer__Event>>;
  /** The sending party of the transaction */
  from: Scalars['String']['output'];
  /** Cost per unit of gas specified for the transaction */
  gasPrice: Scalars['BigInt']['output'];
  /** Amount of gas used in the transaction */
  gasUsed: Scalars['BigInt']['output'];
  /** Ethereum transaction hash */
  id: Scalars['ID']['output'];
  /** Timestamp for transaction */
  timestamp: Scalars['Int']['output'];
  /** The receiving party of the transaction */
  to: Scalars['String']['output'];
};

/** Transaction entities are created for each Ethereum transaction that contains an interaction within Livepeer contracts. */
export type Livepeer__TransactionEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Event_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__Event_Filter>;
};

export type Livepeer__Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  events_?: InputMaybe<Livepeer__Event_Filter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Transaction_Filter>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__Transaction_OrderBy =
  | 'blockNumber'
  | 'events'
  | 'from'
  | 'gasPrice'
  | 'gasUsed'
  | 'id'
  | 'timestamp'
  | 'to';

/** Perform transcoding work for the network. The transcoders with the most delegated stake are elected as active transcoders that process transcode jobs for the network. */
export type Livepeer__Transcoder = {
  __typename?: 'LIVEPEER__Transcoder';
  /** Round in which the transcoder became active - 0 if inactive */
  activationRound: Scalars['BigInt']['output'];
  /** Whether or not the transcoder is active */
  active: Scalars['Boolean']['output'];
  /** Round in which the transcoder will become inactive */
  deactivationRound: Scalars['BigInt']['output'];
  /** Delegator that registered this transcoder */
  delegator?: Maybe<Livepeer__Delegator>;
  /** Delegators bonded to the transcoder */
  delegators?: Maybe<Array<Livepeer__Delegator>>;
  /** % of fees paid to delegators by transcoder */
  feeShare: Scalars['BigInt']['output'];
  /** Transcoder's ETH address */
  id: Scalars['ID']['output'];
  /** Round for which the stake was last updated while the transcoder is active */
  lastActiveStakeUpdateRound: Scalars['BigInt']['output'];
  /** Last round that the transcoder called reward */
  lastRewardRound?: Maybe<Livepeer__Round>;
  /** Pending fee share for next round if the transcoder is active */
  pendingFeeShare?: Maybe<Scalars['BigInt']['output']>;
  /** Pending price per segment for next round if the transcoder is active */
  pendingPricePerSegment?: Maybe<Scalars['BigInt']['output']>;
  /** Pending block reward cut for next round if the transcoder is active */
  pendingRewardCut?: Maybe<Scalars['BigInt']['output']>;
  /** Pools associated with the transcoder */
  pools?: Maybe<Array<Livepeer__Pool>>;
  /** Price per segment for a stream */
  pricePerSegment?: Maybe<Scalars['BigInt']['output']>;
  /** % of block reward cut paid to transcoder by a delegator */
  rewardCut: Scalars['BigInt']['output'];
  /** Service URI endpoint that can be used to send off-chain requests */
  serviceURI?: Maybe<Scalars['String']['output']>;
  /** Status of the transcoder */
  status: Livepeer__TranscoderStatus;
  /** Total tokens delegated toward a transcoder (including their own) */
  totalStake: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total fees generated by the transcoder in ETH (before distribution to delegators) */
  totalVolumeETH: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Total fees generated by the transcoder in USD (before distribution to delegators) */
  totalVolumeUSD: Scalars['LIVEPEER__BigDecimal']['output'];
};

/** Perform transcoding work for the network. The transcoders with the most delegated stake are elected as active transcoders that process transcode jobs for the network. */
export type Livepeer__TranscoderDelegatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__Delegator_Filter>;
};

/** Perform transcoding work for the network. The transcoders with the most delegated stake are elected as active transcoders that process transcode jobs for the network. */
export type Livepeer__TranscoderPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Pool_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Livepeer__Pool_Filter>;
};

/** TranscoderActivatedEvent entities are created for every emitted TranscoderActivated event. */
export type Livepeer__TranscoderActivatedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__TranscoderActivatedEvent';
  /** Future round in which the delegate will become active */
  activationRound: Scalars['BigInt']['output'];
  /** Reference to the delegate that will be active */
  delegate: Livepeer__Transcoder;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__TranscoderActivatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  activationRound?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activationRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderActivatedEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderActivatedEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__TranscoderActivatedEvent_OrderBy =
  | 'activationRound'
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** Transcoder data accumulated and condensed into day stats */
export type Livepeer__TranscoderDay = {
  __typename?: 'LIVEPEER__TranscoderDay';
  /** The date beginning at 12:00am UTC */
  date: Scalars['Int']['output'];
  /** Combination of the transcoder address and the timestamp rounded to current day by dividing by 86400 */
  id: Scalars['ID']['output'];
  /** Transcoder associated with the day */
  transcoder: Livepeer__Transcoder;
  /** Fees generated this day in ETH */
  volumeETH: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Fees generated this day in USD */
  volumeUSD: Scalars['LIVEPEER__BigDecimal']['output'];
};

export type Livepeer__TranscoderDay_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderDay_Filter>>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderDay_Filter>>>;
  transcoder?: InputMaybe<Scalars['String']['input']>;
  transcoder_?: InputMaybe<Livepeer__Transcoder_Filter>;
  transcoder_contains?: InputMaybe<Scalars['String']['input']>;
  transcoder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transcoder_ends_with?: InputMaybe<Scalars['String']['input']>;
  transcoder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transcoder_gt?: InputMaybe<Scalars['String']['input']>;
  transcoder_gte?: InputMaybe<Scalars['String']['input']>;
  transcoder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transcoder_lt?: InputMaybe<Scalars['String']['input']>;
  transcoder_lte?: InputMaybe<Scalars['String']['input']>;
  transcoder_not?: InputMaybe<Scalars['String']['input']>;
  transcoder_not_contains?: InputMaybe<Scalars['String']['input']>;
  transcoder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transcoder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transcoder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transcoder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transcoder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transcoder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transcoder_starts_with?: InputMaybe<Scalars['String']['input']>;
  transcoder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volumeETH?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeETH_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__TranscoderDay_OrderBy =
  | 'date'
  | 'id'
  | 'transcoder'
  | 'transcoder__activationRound'
  | 'transcoder__active'
  | 'transcoder__deactivationRound'
  | 'transcoder__feeShare'
  | 'transcoder__id'
  | 'transcoder__lastActiveStakeUpdateRound'
  | 'transcoder__pendingFeeShare'
  | 'transcoder__pendingPricePerSegment'
  | 'transcoder__pendingRewardCut'
  | 'transcoder__pricePerSegment'
  | 'transcoder__rewardCut'
  | 'transcoder__serviceURI'
  | 'transcoder__status'
  | 'transcoder__totalStake'
  | 'transcoder__totalVolumeETH'
  | 'transcoder__totalVolumeUSD'
  | 'volumeETH'
  | 'volumeUSD';

/** TranscoderDeactivatedEvent entities are created for every emitted TranscoderDeactivated event. */
export type Livepeer__TranscoderDeactivatedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__TranscoderDeactivatedEvent';
  /** Future round in which the delegate will become deactive */
  deactivationRound: Scalars['BigInt']['output'];
  /** Reference to the delegate that will become deactive */
  delegate: Livepeer__Transcoder;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__TranscoderDeactivatedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderDeactivatedEvent_Filter>>>;
  deactivationRound?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deactivationRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderDeactivatedEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__TranscoderDeactivatedEvent_OrderBy =
  | 'deactivationRound'
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** TranscoderEvictedEvent entities are created for every emitted TranscoderEvicted event. */
export type Livepeer__TranscoderEvictedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__TranscoderEvictedEvent';
  /** Reference to the delegate that was evicted */
  delegate: Livepeer__Transcoder;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__TranscoderEvictedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderEvictedEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderEvictedEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__TranscoderEvictedEvent_OrderBy =
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** TranscoderResignedEvent entities are created for every emitted TranscoderResigned event. */
export type Livepeer__TranscoderResignedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__TranscoderResignedEvent';
  /** Reference to the delegate that resigned */
  delegate: Livepeer__Transcoder;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__TranscoderResignedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderResignedEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderResignedEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__TranscoderResignedEvent_OrderBy =
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** TranscoderSlashedEvent entities are created for every emitted TranscoderSlashed event. */
export type Livepeer__TranscoderSlashedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__TranscoderSlashedEvent';
  /** Reference to the delegate that was slashed */
  delegate: Livepeer__Transcoder;
  /** Finder that proved a transcoder violated a slashing condition. Null address if there is no finder */
  finder: Scalars['LIVEPEER__Bytes']['output'];
  /** Percentage of penalty awarded to finder. Zero if there is no finder */
  finderReward: Scalars['BigInt']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Percentage of transcoder bond to be slashed */
  penalty: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__TranscoderSlashedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderSlashedEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  finder?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finderReward?: InputMaybe<Scalars['BigInt']['input']>;
  finderReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  finderReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  finderReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finderReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  finderReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  finderReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  finderReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  finder_contains?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finder_gt?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finder_gte?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finder_in?: InputMaybe<Array<Scalars['LIVEPEER__Bytes']['input']>>;
  finder_lt?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finder_lte?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finder_not?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finder_not_contains?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  finder_not_in?: InputMaybe<Array<Scalars['LIVEPEER__Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderSlashedEvent_Filter>>>;
  penalty?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  penalty_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  penalty_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  penalty_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  penalty_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  penalty_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  penalty_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  penalty_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__TranscoderSlashedEvent_OrderBy =
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'finder'
  | 'finderReward'
  | 'id'
  | 'penalty'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

export type Livepeer__TranscoderStatus = 'NotRegistered' | 'Registered';

/** TranscoderUpdateEvent entities are created for every emitted TranscoderUpdate event. */
export type Livepeer__TranscoderUpdateEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__TranscoderUpdateEvent';
  /** Reference to the delegate that was updated */
  delegate: Livepeer__Transcoder;
  /** Delegate's updated fee share */
  feeShare: Scalars['BigInt']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Delegate's updated reward cut */
  rewardCut: Scalars['BigInt']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__TranscoderUpdateEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderUpdateEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  feeShare?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__TranscoderUpdateEvent_Filter>>>;
  rewardCut?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardCut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__TranscoderUpdateEvent_OrderBy =
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'feeShare'
  | 'id'
  | 'rewardCut'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

export type Livepeer__Transcoder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  activationRound?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activationRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  activationRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Transcoder_Filter>>>;
  deactivationRound?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deactivationRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  deactivationRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegators_?: InputMaybe<Livepeer__Delegator_Filter>;
  feeShare?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastActiveStakeUpdateRound?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveStakeUpdateRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveStakeUpdateRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveStakeUpdateRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActiveStakeUpdateRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveStakeUpdateRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveStakeUpdateRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveStakeUpdateRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastRewardRound?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_?: InputMaybe<Livepeer__Round_Filter>;
  lastRewardRound_contains?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_gt?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_gte?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastRewardRound_lt?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_lte?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_not?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastRewardRound_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastRewardRound_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Transcoder_Filter>>>;
  pendingFeeShare?: InputMaybe<Scalars['BigInt']['input']>;
  pendingFeeShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingFeeShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingFeeShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingFeeShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingFeeShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingFeeShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  pendingFeeShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingPricePerSegment?: InputMaybe<Scalars['BigInt']['input']>;
  pendingPricePerSegment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingPricePerSegment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingPricePerSegment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingPricePerSegment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingPricePerSegment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingPricePerSegment_not?: InputMaybe<Scalars['BigInt']['input']>;
  pendingPricePerSegment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingRewardCut?: InputMaybe<Scalars['BigInt']['input']>;
  pendingRewardCut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingRewardCut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingRewardCut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pendingRewardCut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pendingRewardCut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pendingRewardCut_not?: InputMaybe<Scalars['BigInt']['input']>;
  pendingRewardCut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pools_?: InputMaybe<Livepeer__Pool_Filter>;
  pricePerSegment?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerSegment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerSegment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerSegment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pricePerSegment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerSegment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerSegment_not?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerSegment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardCut?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardCut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardCut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  serviceURI?: InputMaybe<Scalars['String']['input']>;
  serviceURI_contains?: InputMaybe<Scalars['String']['input']>;
  serviceURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_gt?: InputMaybe<Scalars['String']['input']>;
  serviceURI_gte?: InputMaybe<Scalars['String']['input']>;
  serviceURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceURI_lt?: InputMaybe<Scalars['String']['input']>;
  serviceURI_lte?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  serviceURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  serviceURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Livepeer__TranscoderStatus>;
  status_in?: InputMaybe<Array<Livepeer__TranscoderStatus>>;
  status_not?: InputMaybe<Livepeer__TranscoderStatus>;
  status_not_in?: InputMaybe<Array<Livepeer__TranscoderStatus>>;
  totalStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeETH?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeETH_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
};

export type Livepeer__Transcoder_OrderBy =
  | 'activationRound'
  | 'active'
  | 'deactivationRound'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'delegators'
  | 'feeShare'
  | 'id'
  | 'lastActiveStakeUpdateRound'
  | 'lastRewardRound'
  | 'lastRewardRound__endBlock'
  | 'lastRewardRound__id'
  | 'lastRewardRound__initialized'
  | 'lastRewardRound__length'
  | 'lastRewardRound__mintableTokens'
  | 'lastRewardRound__movedStake'
  | 'lastRewardRound__newStake'
  | 'lastRewardRound__participationRate'
  | 'lastRewardRound__startBlock'
  | 'lastRewardRound__totalActiveStake'
  | 'lastRewardRound__totalSupply'
  | 'lastRewardRound__volumeETH'
  | 'lastRewardRound__volumeUSD'
  | 'pendingFeeShare'
  | 'pendingPricePerSegment'
  | 'pendingRewardCut'
  | 'pools'
  | 'pricePerSegment'
  | 'rewardCut'
  | 'serviceURI'
  | 'status'
  | 'totalStake'
  | 'totalVolumeETH'
  | 'totalVolumeUSD';

/** UnbondEvent entities are created for every emitted Unbond event. */
export type Livepeer__UnbondEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__UnbondEvent';
  /** Amount unbonded in the transaction */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the delegate unbonded from */
  delegate: Livepeer__Transcoder;
  /** Reference to the Delegator that unbonded */
  delegator: Livepeer__Delegator;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
  /** The unbonding lock ID associated with this transaction, used to optionally rebond the amount */
  unbondingLockId?: Maybe<Scalars['Int']['output']>;
  /** The future round in which the Delegator may withdraw its unbonded stake */
  withdrawRound: Scalars['BigInt']['output'];
};

export type Livepeer__UnbondEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__UnbondEvent_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__UnbondEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unbondingLockId?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unbondingLockId_lt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_lte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdrawRound?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Livepeer__UnbondEvent_OrderBy =
  | 'amount'
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to'
  | 'unbondingLockId'
  | 'withdrawRound';

/** Get an unbonding lock for a delegator */
export type Livepeer__UnbondingLock = {
  __typename?: 'LIVEPEER__UnbondingLock';
  /** Amount being unbonded */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Address of delegate unbonding from */
  delegate: Livepeer__Transcoder;
  /** Delegator address this lock belongs to */
  delegator: Livepeer__Delegator;
  /** Unique unlock identifer */
  id: Scalars['ID']['output'];
  /** unbonding lock id */
  unbondingLockId: Scalars['Int']['output'];
  /** Round number when the unbonding amount will be available for withdrawal */
  withdrawRound: Scalars['BigInt']['output'];
};

export type Livepeer__UnbondingLock_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__UnbondingLock_Filter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<Livepeer__Transcoder_Filter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__UnbondingLock_Filter>>>;
  unbondingLockId?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unbondingLockId_lt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_lte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdrawRound?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawRound_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawRound_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Livepeer__UnbondingLock_OrderBy =
  | 'amount'
  | 'delegate'
  | 'delegate__activationRound'
  | 'delegate__active'
  | 'delegate__deactivationRound'
  | 'delegate__feeShare'
  | 'delegate__id'
  | 'delegate__lastActiveStakeUpdateRound'
  | 'delegate__pendingFeeShare'
  | 'delegate__pendingPricePerSegment'
  | 'delegate__pendingRewardCut'
  | 'delegate__pricePerSegment'
  | 'delegate__rewardCut'
  | 'delegate__serviceURI'
  | 'delegate__status'
  | 'delegate__totalStake'
  | 'delegate__totalVolumeETH'
  | 'delegate__totalVolumeUSD'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'id'
  | 'unbondingLockId'
  | 'withdrawRound';

/** UnpauseEvent entities are created for every emitted Unpause event. */
export type Livepeer__UnpauseEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__UnpauseEvent';
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__UnpauseEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__UnpauseEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__UnpauseEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__UnpauseEvent_OrderBy =
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** Vote data */
export type Livepeer__Vote = {
  __typename?: 'LIVEPEER__Vote';
  /** Vote choice */
  choiceID?: Maybe<Livepeer__PollChoice>;
  /** Voter address + poll address */
  id: Scalars['ID']['output'];
  /** This will be non-zero if voter is an transcoder and any of the its delegators voted */
  nonVoteStake?: Maybe<Scalars['LIVEPEER__BigDecimal']['output']>;
  /** Poll associated with this vote */
  poll?: Maybe<Livepeer__Poll>;
  /** True if the voter was a registered transcoder during the poll period */
  registeredTranscoder?: Maybe<Scalars['Boolean']['output']>;
  /** Stake weighted vote */
  voteStake?: Maybe<Scalars['LIVEPEER__BigDecimal']['output']>;
  /** Vote caster */
  voter: Scalars['String']['output'];
};

/** VoteEvent entities are created for every emitted Vote event. */
export type Livepeer__VoteEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__VoteEvent';
  /** Voter choice. Zero means yes and one means no */
  choiceID: Scalars['BigInt']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the poll this vote was casted in */
  poll: Livepeer__Poll;
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
  /** Address belonging to the voter */
  voter: Scalars['String']['output'];
};

export type Livepeer__VoteEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__VoteEvent_Filter>>>;
  choiceID?: InputMaybe<Scalars['BigInt']['input']>;
  choiceID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  choiceID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  choiceID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  choiceID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  choiceID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  choiceID_not?: InputMaybe<Scalars['BigInt']['input']>;
  choiceID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__VoteEvent_Filter>>>;
  poll?: InputMaybe<Scalars['String']['input']>;
  poll_?: InputMaybe<Livepeer__Poll_Filter>;
  poll_contains?: InputMaybe<Scalars['String']['input']>;
  poll_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_ends_with?: InputMaybe<Scalars['String']['input']>;
  poll_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_gt?: InputMaybe<Scalars['String']['input']>;
  poll_gte?: InputMaybe<Scalars['String']['input']>;
  poll_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poll_lt?: InputMaybe<Scalars['String']['input']>;
  poll_lte?: InputMaybe<Scalars['String']['input']>;
  poll_not?: InputMaybe<Scalars['String']['input']>;
  poll_not_contains?: InputMaybe<Scalars['String']['input']>;
  poll_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poll_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poll_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poll_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_starts_with?: InputMaybe<Scalars['String']['input']>;
  poll_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_gt?: InputMaybe<Scalars['String']['input']>;
  voter_gte?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_lt?: InputMaybe<Scalars['String']['input']>;
  voter_lte?: InputMaybe<Scalars['String']['input']>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__VoteEvent_OrderBy =
  | 'choiceID'
  | 'id'
  | 'poll'
  | 'poll__endBlock'
  | 'poll__id'
  | 'poll__proposal'
  | 'poll__quorum'
  | 'poll__quota'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to'
  | 'voter';

export type Livepeer__Vote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__Vote_Filter>>>;
  choiceID?: InputMaybe<Livepeer__PollChoice>;
  choiceID_in?: InputMaybe<Array<Livepeer__PollChoice>>;
  choiceID_not?: InputMaybe<Livepeer__PollChoice>;
  choiceID_not_in?: InputMaybe<Array<Livepeer__PollChoice>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nonVoteStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  nonVoteStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  nonVoteStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  nonVoteStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  nonVoteStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  nonVoteStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  nonVoteStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  nonVoteStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__Vote_Filter>>>;
  poll?: InputMaybe<Scalars['String']['input']>;
  poll_?: InputMaybe<Livepeer__Poll_Filter>;
  poll_contains?: InputMaybe<Scalars['String']['input']>;
  poll_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_ends_with?: InputMaybe<Scalars['String']['input']>;
  poll_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_gt?: InputMaybe<Scalars['String']['input']>;
  poll_gte?: InputMaybe<Scalars['String']['input']>;
  poll_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poll_lt?: InputMaybe<Scalars['String']['input']>;
  poll_lte?: InputMaybe<Scalars['String']['input']>;
  poll_not?: InputMaybe<Scalars['String']['input']>;
  poll_not_contains?: InputMaybe<Scalars['String']['input']>;
  poll_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poll_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poll_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poll_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poll_starts_with?: InputMaybe<Scalars['String']['input']>;
  poll_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registeredTranscoder?: InputMaybe<Scalars['Boolean']['input']>;
  registeredTranscoder_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  registeredTranscoder_not?: InputMaybe<Scalars['Boolean']['input']>;
  registeredTranscoder_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  voteStake?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  voteStake_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  voteStake_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  voteStake_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  voteStake_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  voteStake_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  voteStake_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  voteStake_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_gt?: InputMaybe<Scalars['String']['input']>;
  voter_gte?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_lt?: InputMaybe<Scalars['String']['input']>;
  voter_lte?: InputMaybe<Scalars['String']['input']>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__Vote_OrderBy =
  | 'choiceID'
  | 'id'
  | 'nonVoteStake'
  | 'poll'
  | 'poll__endBlock'
  | 'poll__id'
  | 'poll__proposal'
  | 'poll__quorum'
  | 'poll__quota'
  | 'registeredTranscoder'
  | 'voteStake'
  | 'voter';

/** WinningTicketRedeemedEvent entities are created for every emitted WinningTicketRedeemed event. */
export type Livepeer__WinningTicketRedeemedEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__WinningTicketRedeemedEvent';
  /** Auxilary data included in ticket used for additional validation */
  auxData: Scalars['LIVEPEER__Bytes']['output'];
  /** Face value of ticket paid to recipient */
  faceValue: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Amount of fees the winning ticket was redeemed for in in USD */
  faceValueUSD: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the recipient of the broadcaster fees */
  recipient: Livepeer__Transcoder;
  /** keccak256 hash commitment to recipient's random value */
  recipientRand: Scalars['BigInt']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Reference to the broadcaster who sent the fees */
  sender: Livepeer__Broadcaster;
  /** Sender's monotonically increasing counter for each ticket */
  senderNonce: Scalars['BigInt']['output'];
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
  /** The winning probability of the ticket */
  winProb: Scalars['BigInt']['output'];
};

export type Livepeer__WinningTicketRedeemedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__WinningTicketRedeemedEvent_Filter>>>;
  auxData?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_contains?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_gt?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_gte?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_in?: InputMaybe<Array<Scalars['LIVEPEER__Bytes']['input']>>;
  auxData_lt?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_lte?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_not?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_not_contains?: InputMaybe<Scalars['LIVEPEER__Bytes']['input']>;
  auxData_not_in?: InputMaybe<Array<Scalars['LIVEPEER__Bytes']['input']>>;
  faceValue?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValueUSD?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValueUSD_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValueUSD_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValueUSD_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  faceValueUSD_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValueUSD_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValueUSD_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValueUSD_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  faceValue_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValue_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValue_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  faceValue_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValue_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValue_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  faceValue_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__WinningTicketRedeemedEvent_Filter>>>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  recipientRand?: InputMaybe<Scalars['BigInt']['input']>;
  recipientRand_gt?: InputMaybe<Scalars['BigInt']['input']>;
  recipientRand_gte?: InputMaybe<Scalars['BigInt']['input']>;
  recipientRand_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipientRand_lt?: InputMaybe<Scalars['BigInt']['input']>;
  recipientRand_lte?: InputMaybe<Scalars['BigInt']['input']>;
  recipientRand_not?: InputMaybe<Scalars['BigInt']['input']>;
  recipientRand_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient_?: InputMaybe<Livepeer__Transcoder_Filter>;
  recipient_contains?: InputMaybe<Scalars['String']['input']>;
  recipient_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipient_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_gt?: InputMaybe<Scalars['String']['input']>;
  recipient_gte?: InputMaybe<Scalars['String']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recipient_lt?: InputMaybe<Scalars['String']['input']>;
  recipient_lte?: InputMaybe<Scalars['String']['input']>;
  recipient_not?: InputMaybe<Scalars['String']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['String']['input']>;
  recipient_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  recipient_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  recipient_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipient_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient_starts_with?: InputMaybe<Scalars['String']['input']>;
  recipient_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  senderNonce?: InputMaybe<Scalars['BigInt']['input']>;
  senderNonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  senderNonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  senderNonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  senderNonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  senderNonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  senderNonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  senderNonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sender_?: InputMaybe<Livepeer__Broadcaster_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  winProb?: InputMaybe<Scalars['BigInt']['input']>;
  winProb_gt?: InputMaybe<Scalars['BigInt']['input']>;
  winProb_gte?: InputMaybe<Scalars['BigInt']['input']>;
  winProb_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  winProb_lt?: InputMaybe<Scalars['BigInt']['input']>;
  winProb_lte?: InputMaybe<Scalars['BigInt']['input']>;
  winProb_not?: InputMaybe<Scalars['BigInt']['input']>;
  winProb_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Livepeer__WinningTicketRedeemedEvent_OrderBy =
  | 'auxData'
  | 'faceValue'
  | 'faceValueUSD'
  | 'id'
  | 'recipient'
  | 'recipientRand'
  | 'recipient__activationRound'
  | 'recipient__active'
  | 'recipient__deactivationRound'
  | 'recipient__feeShare'
  | 'recipient__id'
  | 'recipient__lastActiveStakeUpdateRound'
  | 'recipient__pendingFeeShare'
  | 'recipient__pendingPricePerSegment'
  | 'recipient__pendingRewardCut'
  | 'recipient__pricePerSegment'
  | 'recipient__rewardCut'
  | 'recipient__serviceURI'
  | 'recipient__status'
  | 'recipient__totalStake'
  | 'recipient__totalVolumeETH'
  | 'recipient__totalVolumeUSD'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'sender'
  | 'senderNonce'
  | 'sender__deposit'
  | 'sender__id'
  | 'sender__reserve'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to'
  | 'winProb';

/** WithdrawFeesEvent entities are created for every emitted WithdrawFees event. */
export type Livepeer__WithdrawFeesEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__WithdrawFeesEvent';
  /** Amount of fees withdrawn */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the delegator that withdraw its fees */
  delegator: Livepeer__Delegator;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__WithdrawFeesEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__WithdrawFeesEvent_Filter>>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__WithdrawFeesEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__WithdrawFeesEvent_OrderBy =
  | 'amount'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

/** WithdrawStakeEvent entities are created for every emitted WithdrawStake event. */
export type Livepeer__WithdrawStakeEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__WithdrawStakeEvent';
  /** Amount of stake withdrawn */
  amount: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the delegator that withdraw its stake */
  delegator: Livepeer__Delegator;
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
  /** Unbonding lock ID that was deleted upon withdrawal */
  unbondingLockId?: Maybe<Scalars['Int']['output']>;
};

export type Livepeer__WithdrawStakeEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__WithdrawStakeEvent_Filter>>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Livepeer__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__WithdrawStakeEvent_Filter>>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unbondingLockId?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_gte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  unbondingLockId_lt?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_lte?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not?: InputMaybe<Scalars['Int']['input']>;
  unbondingLockId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Livepeer__WithdrawStakeEvent_OrderBy =
  | 'amount'
  | 'delegator'
  | 'delegator__bondedAmount'
  | 'delegator__delegatedAmount'
  | 'delegator__fees'
  | 'delegator__id'
  | 'delegator__principal'
  | 'delegator__startRound'
  | 'delegator__unbonded'
  | 'delegator__withdrawnFees'
  | 'id'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to'
  | 'unbondingLockId';

/** WithdrawalEvent entities are created for every emitted Withdrawal event. */
export type Livepeer__WithdrawalEvent = Livepeer__Event & {
  __typename?: 'LIVEPEER__WithdrawalEvent';
  /** Deposit amount withdrawn */
  deposit: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Ethereum transaction hash + event log index */
  id: Scalars['ID']['output'];
  /** Reserve amount withdrawn */
  reserve: Scalars['LIVEPEER__BigDecimal']['output'];
  /** Reference to the round the event occured in */
  round: Livepeer__Round;
  /** Reference to the broadcaster withdrawing its deposit and reserve */
  sender: Livepeer__Broadcaster;
  /** Timestamp of the transaction the event was included in */
  timestamp: Scalars['Int']['output'];
  /** Reference to the transaction the event was included in */
  transaction: Livepeer__Transaction;
};

export type Livepeer__WithdrawalEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Livepeer__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Livepeer__WithdrawalEvent_Filter>>>;
  deposit?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  deposit_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Livepeer__WithdrawalEvent_Filter>>>;
  reserve?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_gt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_gte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  reserve_lt?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_lte?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_not?: InputMaybe<Scalars['LIVEPEER__BigDecimal']['input']>;
  reserve_not_in?: InputMaybe<Array<Scalars['LIVEPEER__BigDecimal']['input']>>;
  round?: InputMaybe<Scalars['String']['input']>;
  round_?: InputMaybe<Livepeer__Round_Filter>;
  round_contains?: InputMaybe<Scalars['String']['input']>;
  round_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_gt?: InputMaybe<Scalars['String']['input']>;
  round_gte?: InputMaybe<Scalars['String']['input']>;
  round_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_lt?: InputMaybe<Scalars['String']['input']>;
  round_lte?: InputMaybe<Scalars['String']['input']>;
  round_not?: InputMaybe<Scalars['String']['input']>;
  round_not_contains?: InputMaybe<Scalars['String']['input']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  round_starts_with?: InputMaybe<Scalars['String']['input']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_?: InputMaybe<Livepeer__Broadcaster_Filter>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Livepeer__Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Livepeer__WithdrawalEvent_OrderBy =
  | 'deposit'
  | 'id'
  | 'reserve'
  | 'round'
  | 'round__endBlock'
  | 'round__id'
  | 'round__initialized'
  | 'round__length'
  | 'round__mintableTokens'
  | 'round__movedStake'
  | 'round__newStake'
  | 'round__participationRate'
  | 'round__startBlock'
  | 'round__totalActiveStake'
  | 'round__totalSupply'
  | 'round__volumeETH'
  | 'round__volumeUSD'
  | 'sender'
  | 'sender__deposit'
  | 'sender__id'
  | 'sender__reserve'
  | 'timestamp'
  | 'transaction'
  | 'transaction__blockNumber'
  | 'transaction__from'
  | 'transaction__gasPrice'
  | 'transaction__gasUsed'
  | 'transaction__id'
  | 'transaction__timestamp'
  | 'transaction__to';

export type Livepeer___Block_ = {
  __typename?: 'LIVEPEER___Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['LIVEPEER__Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type Livepeer___Meta_ = {
  __typename?: 'LIVEPEER___Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Livepeer___Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Livepeer___SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

/** A state channel Allocation representing a single Indexer-SubgraphDeployment stake */
export type Network__Allocation = {
  __typename?: 'NETWORK__Allocation';
  /** If the Allocation is active it shows the indexer. If closed, it is null */
  activeForIndexer?: Maybe<Network__Indexer>;
  /** Tokens allocation in this allocation */
  allocatedTokens: Scalars['BigInt']['output'];
  /** NOT IMPLEMENTED - Yearly annualzied return */
  annualizedReturn: Scalars['NETWORK__BigDecimal']['output'];
  /** Timestamp this allocation was closed at */
  closedAt?: Maybe<Scalars['Int']['output']>;
  /** Block hash at which this allocation was closed */
  closedAtBlockHash?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** Block number at which this allocation was closed */
  closedAtBlockNumber?: Maybe<Scalars['Int']['output']>;
  /** Epoch this allocation was closed in */
  closedAtEpoch?: Maybe<Scalars['Int']['output']>;
  /** Timestamp this allocation was created at */
  createdAt: Scalars['Int']['output'];
  /** Block at which this allocation was created */
  createdAtBlockHash: Scalars['NETWORK__Bytes']['output'];
  /** Block number at which this allocation was created */
  createdAtBlockNumber: Scalars['Int']['output'];
  /** Epoch this allocation was created */
  createdAtEpoch: Scalars['Int']['output'];
  /** Creator of the allocation - can be the operator or the indexer */
  creator: Scalars['NETWORK__Bytes']['output'];
  /** Curator rewards deposited to the curating bonding curve */
  curatorRewards: Scalars['BigInt']['output'];
  /** Fees paid out to delegators */
  delegationFees: Scalars['BigInt']['output'];
  /** Effective allocation that is realized upon closing */
  effectiveAllocation: Scalars['BigInt']['output'];
  /** Channel Address */
  id: Scalars['ID']['output'];
  /** Indexer of this allocation */
  indexer: Network__Indexer;
  /** Indexing rewards earned by this allocation by delegators */
  indexingDelegatorRewards: Scalars['BigInt']['output'];
  /** Indexing rewards earned by this allocation by indexers */
  indexingIndexerRewards: Scalars['BigInt']['output'];
  indexingRewardCutAtClose?: Maybe<Scalars['Int']['output']>;
  indexingRewardCutAtStart: Scalars['Int']['output'];
  indexingRewardEffectiveCutAtClose?: Maybe<Scalars['NETWORK__BigDecimal']['output']>;
  indexingRewardEffectiveCutAtStart: Scalars['NETWORK__BigDecimal']['output'];
  /** Indexing rewards earned by this allocation. Includes delegator and indexer rewards */
  indexingRewards: Scalars['BigInt']['output'];
  /** POI submitted with a closed allocation */
  poi?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** Pool in which this allocation was closed */
  poolClosedIn?: Maybe<Network__Pool>;
  queryFeeCutAtClose?: Maybe<Scalars['Int']['output']>;
  queryFeeCutAtStart: Scalars['Int']['output'];
  queryFeeEffectiveCutAtClose?: Maybe<Scalars['NETWORK__BigDecimal']['output']>;
  queryFeeEffectiveCutAtStart: Scalars['NETWORK__BigDecimal']['output'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt']['output'];
  /** Fees this allocation collected from query fees upon closing. Excludes curator reward and protocol tax */
  queryFeesCollected: Scalars['BigInt']['output'];
  /** Status of the allocation */
  status: Network__AllocationStatus;
  /** Subgraph deployment that is being allocated to */
  subgraphDeployment: Network__SubgraphDeployment;
  /** NOT IMPLEMENTED - Return for this allocation */
  totalReturn: Scalars['NETWORK__BigDecimal']['output'];
};

export type Network__AllocationStatus = 'Active' | 'Claimed' | 'Closed' | 'Finalized' | 'Null';

export type Network__Allocation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  activeForIndexer?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_?: InputMaybe<Network__Indexer_Filter>;
  activeForIndexer_contains?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_ends_with?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_gt?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_gte?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  activeForIndexer_lt?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_lte?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_not?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  activeForIndexer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_starts_with?: InputMaybe<Scalars['String']['input']>;
  activeForIndexer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__Allocation_Filter>>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  closedAt?: InputMaybe<Scalars['Int']['input']>;
  closedAtBlockHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  closedAtBlockHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  closedAtBlockHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  closedAtBlockNumber?: InputMaybe<Scalars['Int']['input']>;
  closedAtBlockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  closedAtBlockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  closedAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedAtBlockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  closedAtBlockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  closedAtBlockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  closedAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedAtEpoch?: InputMaybe<Scalars['Int']['input']>;
  closedAtEpoch_gt?: InputMaybe<Scalars['Int']['input']>;
  closedAtEpoch_gte?: InputMaybe<Scalars['Int']['input']>;
  closedAtEpoch_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedAtEpoch_lt?: InputMaybe<Scalars['Int']['input']>;
  closedAtEpoch_lte?: InputMaybe<Scalars['Int']['input']>;
  closedAtEpoch_not?: InputMaybe<Scalars['Int']['input']>;
  closedAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  closedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  closedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  closedAt_not?: InputMaybe<Scalars['Int']['input']>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlockHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  createdAtBlockHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  createdAtBlockHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAtEpoch?: InputMaybe<Scalars['Int']['input']>;
  createdAtEpoch_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAtEpoch_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAtEpoch_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAtEpoch_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAtEpoch_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAtEpoch_not?: InputMaybe<Scalars['Int']['input']>;
  createdAtEpoch_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  creator?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curatorRewards?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegationFees?: InputMaybe<Scalars['BigInt']['input']>;
  delegationFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegationFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegationFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegationFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegationFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegationFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegationFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  effectiveAllocation?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAllocation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAllocation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAllocation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  effectiveAllocation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAllocation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAllocation_not?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_?: InputMaybe<Network__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_gt?: InputMaybe<Scalars['String']['input']>;
  indexer_gte?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_lt?: InputMaybe<Scalars['String']['input']>;
  indexer_lte?: InputMaybe<Scalars['String']['input']>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexingDelegatorRewards?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingIndexerRewards?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingRewardCutAtClose?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtClose_gt?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtClose_gte?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtClose_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingRewardCutAtClose_lt?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtClose_lte?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtClose_not?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingRewardCutAtStart?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtStart_gt?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtStart_gte?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtStart_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingRewardCutAtStart_lt?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtStart_lte?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtStart_not?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingRewardEffectiveCutAtClose?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtClose_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtClose_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  indexingRewardEffectiveCutAtClose_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtClose_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtClose_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  indexingRewardEffectiveCutAtStart?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtStart_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtStart_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  indexingRewardEffectiveCutAtStart_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtStart_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtStart_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  indexingRewards?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Allocation_Filter>>>;
  poi?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  poi_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  poi_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  poolClosedIn?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_?: InputMaybe<Network__Pool_Filter>;
  poolClosedIn_contains?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_gt?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_gte?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolClosedIn_lt?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_lte?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_not?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolClosedIn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolClosedIn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  queryFeeCutAtClose?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtClose_gt?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtClose_gte?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtClose_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  queryFeeCutAtClose_lt?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtClose_lte?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtClose_not?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtClose_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  queryFeeCutAtStart?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtStart_gt?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtStart_gte?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtStart_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  queryFeeCutAtStart_lt?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtStart_lte?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtStart_not?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCutAtStart_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  queryFeeEffectiveCutAtClose?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtClose_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtClose_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtClose_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeEffectiveCutAtClose_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtClose_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtClose_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtClose_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeEffectiveCutAtStart?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtStart_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtStart_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtStart_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeEffectiveCutAtStart_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtStart_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtStart_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCutAtStart_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<Network__AllocationStatus>;
  status_in?: InputMaybe<Array<Network__AllocationStatus>>;
  status_not?: InputMaybe<Network__AllocationStatus>;
  status_not_in?: InputMaybe<Array<Network__AllocationStatus>>;
  subgraphDeployment?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
};

export type Network__Allocation_OrderBy =
  | 'activeForIndexer'
  | 'activeForIndexer__allocatedTokens'
  | 'activeForIndexer__allocationCount'
  | 'activeForIndexer__annualizedReturn'
  | 'activeForIndexer__availableStake'
  | 'activeForIndexer__createdAt'
  | 'activeForIndexer__defaultDisplayName'
  | 'activeForIndexer__delegatedCapacity'
  | 'activeForIndexer__delegatedStakeRatio'
  | 'activeForIndexer__delegatedTokens'
  | 'activeForIndexer__delegationExchangeRate'
  | 'activeForIndexer__delegatorIndexingRewards'
  | 'activeForIndexer__delegatorParameterCooldown'
  | 'activeForIndexer__delegatorQueryFees'
  | 'activeForIndexer__delegatorShares'
  | 'activeForIndexer__firstTransferredToL2At'
  | 'activeForIndexer__firstTransferredToL2AtBlockNumber'
  | 'activeForIndexer__firstTransferredToL2AtTx'
  | 'activeForIndexer__forcedClosures'
  | 'activeForIndexer__geoHash'
  | 'activeForIndexer__id'
  | 'activeForIndexer__idOnL1'
  | 'activeForIndexer__idOnL2'
  | 'activeForIndexer__indexerIndexingRewards'
  | 'activeForIndexer__indexerRewardsOwnGenerationRatio'
  | 'activeForIndexer__indexingRewardCut'
  | 'activeForIndexer__indexingRewardEffectiveCut'
  | 'activeForIndexer__lastDelegationParameterUpdate'
  | 'activeForIndexer__lastTransferredToL2At'
  | 'activeForIndexer__lastTransferredToL2AtBlockNumber'
  | 'activeForIndexer__lastTransferredToL2AtTx'
  | 'activeForIndexer__lockedTokens'
  | 'activeForIndexer__overDelegationDilution'
  | 'activeForIndexer__ownStakeRatio'
  | 'activeForIndexer__queryFeeCut'
  | 'activeForIndexer__queryFeeEffectiveCut'
  | 'activeForIndexer__queryFeeRebates'
  | 'activeForIndexer__queryFeesCollected'
  | 'activeForIndexer__rewardsEarned'
  | 'activeForIndexer__stakedTokens'
  | 'activeForIndexer__stakedTokensTransferredToL2'
  | 'activeForIndexer__stakingEfficiency'
  | 'activeForIndexer__tokenCapacity'
  | 'activeForIndexer__tokensLockedUntil'
  | 'activeForIndexer__totalAllocationCount'
  | 'activeForIndexer__totalReturn'
  | 'activeForIndexer__transferredToL2'
  | 'activeForIndexer__unstakedTokens'
  | 'activeForIndexer__url'
  | 'allocatedTokens'
  | 'annualizedReturn'
  | 'closedAt'
  | 'closedAtBlockHash'
  | 'closedAtBlockNumber'
  | 'closedAtEpoch'
  | 'createdAt'
  | 'createdAtBlockHash'
  | 'createdAtBlockNumber'
  | 'createdAtEpoch'
  | 'creator'
  | 'curatorRewards'
  | 'delegationFees'
  | 'effectiveAllocation'
  | 'id'
  | 'indexer'
  | 'indexer__allocatedTokens'
  | 'indexer__allocationCount'
  | 'indexer__annualizedReturn'
  | 'indexer__availableStake'
  | 'indexer__createdAt'
  | 'indexer__defaultDisplayName'
  | 'indexer__delegatedCapacity'
  | 'indexer__delegatedStakeRatio'
  | 'indexer__delegatedTokens'
  | 'indexer__delegationExchangeRate'
  | 'indexer__delegatorIndexingRewards'
  | 'indexer__delegatorParameterCooldown'
  | 'indexer__delegatorQueryFees'
  | 'indexer__delegatorShares'
  | 'indexer__firstTransferredToL2At'
  | 'indexer__firstTransferredToL2AtBlockNumber'
  | 'indexer__firstTransferredToL2AtTx'
  | 'indexer__forcedClosures'
  | 'indexer__geoHash'
  | 'indexer__id'
  | 'indexer__idOnL1'
  | 'indexer__idOnL2'
  | 'indexer__indexerIndexingRewards'
  | 'indexer__indexerRewardsOwnGenerationRatio'
  | 'indexer__indexingRewardCut'
  | 'indexer__indexingRewardEffectiveCut'
  | 'indexer__lastDelegationParameterUpdate'
  | 'indexer__lastTransferredToL2At'
  | 'indexer__lastTransferredToL2AtBlockNumber'
  | 'indexer__lastTransferredToL2AtTx'
  | 'indexer__lockedTokens'
  | 'indexer__overDelegationDilution'
  | 'indexer__ownStakeRatio'
  | 'indexer__queryFeeCut'
  | 'indexer__queryFeeEffectiveCut'
  | 'indexer__queryFeeRebates'
  | 'indexer__queryFeesCollected'
  | 'indexer__rewardsEarned'
  | 'indexer__stakedTokens'
  | 'indexer__stakedTokensTransferredToL2'
  | 'indexer__stakingEfficiency'
  | 'indexer__tokenCapacity'
  | 'indexer__tokensLockedUntil'
  | 'indexer__totalAllocationCount'
  | 'indexer__totalReturn'
  | 'indexer__transferredToL2'
  | 'indexer__unstakedTokens'
  | 'indexer__url'
  | 'indexingDelegatorRewards'
  | 'indexingIndexerRewards'
  | 'indexingRewardCutAtClose'
  | 'indexingRewardCutAtStart'
  | 'indexingRewardEffectiveCutAtClose'
  | 'indexingRewardEffectiveCutAtStart'
  | 'indexingRewards'
  | 'poi'
  | 'poolClosedIn'
  | 'poolClosedIn__allocation'
  | 'poolClosedIn__claimedFees'
  | 'poolClosedIn__curatorRewards'
  | 'poolClosedIn__id'
  | 'poolClosedIn__totalQueryFees'
  | 'queryFeeCutAtClose'
  | 'queryFeeCutAtStart'
  | 'queryFeeEffectiveCutAtClose'
  | 'queryFeeEffectiveCutAtStart'
  | 'queryFeeRebates'
  | 'queryFeesCollected'
  | 'status'
  | 'subgraphDeployment'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__manifest'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__poweredBySubstreams'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__schema'
  | 'subgraphDeployment__schemaIpfsHash'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__unsignalledTokens'
  | 'totalReturn';

/** Attestation of a dispute */
export type Network__Attestation = {
  __typename?: 'NETWORK__Attestation';
  /** NOT IMPLEMENTED - Gas used by the attested query */
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  /** Concatenation of the requestCID and responseCID */
  id: Scalars['ID']['output'];
  /** R of the indexers signature */
  r: Scalars['String']['output'];
  /** RequestCID */
  requestCID: Scalars['String']['output'];
  /** ResponseCID */
  responseCID: Scalars['String']['output'];
  /** NOT IMPLEMENTED - Bytes of attested query */
  responseNumBytes?: Maybe<Scalars['BigInt']['output']>;
  /** S of the indexers signature */
  s: Scalars['String']['output'];
  /** Subgraph deployment being disputed */
  subgraphDeployment: Network__SubgraphDeployment;
  /** V of the indexers signature */
  v: Scalars['Int']['output'];
};

export type Network__Attestation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__Attestation_Filter>>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Attestation_Filter>>>;
  r?: InputMaybe<Scalars['String']['input']>;
  r_contains?: InputMaybe<Scalars['String']['input']>;
  r_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  r_ends_with?: InputMaybe<Scalars['String']['input']>;
  r_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  r_gt?: InputMaybe<Scalars['String']['input']>;
  r_gte?: InputMaybe<Scalars['String']['input']>;
  r_in?: InputMaybe<Array<Scalars['String']['input']>>;
  r_lt?: InputMaybe<Scalars['String']['input']>;
  r_lte?: InputMaybe<Scalars['String']['input']>;
  r_not?: InputMaybe<Scalars['String']['input']>;
  r_not_contains?: InputMaybe<Scalars['String']['input']>;
  r_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  r_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  r_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  r_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  r_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  r_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  r_starts_with?: InputMaybe<Scalars['String']['input']>;
  r_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestCID?: InputMaybe<Scalars['String']['input']>;
  requestCID_contains?: InputMaybe<Scalars['String']['input']>;
  requestCID_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestCID_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestCID_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestCID_gt?: InputMaybe<Scalars['String']['input']>;
  requestCID_gte?: InputMaybe<Scalars['String']['input']>;
  requestCID_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestCID_lt?: InputMaybe<Scalars['String']['input']>;
  requestCID_lte?: InputMaybe<Scalars['String']['input']>;
  requestCID_not?: InputMaybe<Scalars['String']['input']>;
  requestCID_not_contains?: InputMaybe<Scalars['String']['input']>;
  requestCID_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  requestCID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  requestCID_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestCID_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  requestCID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestCID_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  requestCID_starts_with?: InputMaybe<Scalars['String']['input']>;
  requestCID_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  responseCID?: InputMaybe<Scalars['String']['input']>;
  responseCID_contains?: InputMaybe<Scalars['String']['input']>;
  responseCID_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  responseCID_ends_with?: InputMaybe<Scalars['String']['input']>;
  responseCID_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  responseCID_gt?: InputMaybe<Scalars['String']['input']>;
  responseCID_gte?: InputMaybe<Scalars['String']['input']>;
  responseCID_in?: InputMaybe<Array<Scalars['String']['input']>>;
  responseCID_lt?: InputMaybe<Scalars['String']['input']>;
  responseCID_lte?: InputMaybe<Scalars['String']['input']>;
  responseCID_not?: InputMaybe<Scalars['String']['input']>;
  responseCID_not_contains?: InputMaybe<Scalars['String']['input']>;
  responseCID_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  responseCID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  responseCID_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  responseCID_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  responseCID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  responseCID_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  responseCID_starts_with?: InputMaybe<Scalars['String']['input']>;
  responseCID_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  responseNumBytes?: InputMaybe<Scalars['BigInt']['input']>;
  responseNumBytes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  responseNumBytes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  responseNumBytes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  responseNumBytes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  responseNumBytes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  responseNumBytes_not?: InputMaybe<Scalars['BigInt']['input']>;
  responseNumBytes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  s?: InputMaybe<Scalars['String']['input']>;
  s_contains?: InputMaybe<Scalars['String']['input']>;
  s_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  s_ends_with?: InputMaybe<Scalars['String']['input']>;
  s_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  s_gt?: InputMaybe<Scalars['String']['input']>;
  s_gte?: InputMaybe<Scalars['String']['input']>;
  s_in?: InputMaybe<Array<Scalars['String']['input']>>;
  s_lt?: InputMaybe<Scalars['String']['input']>;
  s_lte?: InputMaybe<Scalars['String']['input']>;
  s_not?: InputMaybe<Scalars['String']['input']>;
  s_not_contains?: InputMaybe<Scalars['String']['input']>;
  s_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  s_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  s_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  s_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  s_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  s_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  s_starts_with?: InputMaybe<Scalars['String']['input']>;
  s_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  v?: InputMaybe<Scalars['Int']['input']>;
  v_gt?: InputMaybe<Scalars['Int']['input']>;
  v_gte?: InputMaybe<Scalars['Int']['input']>;
  v_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  v_lt?: InputMaybe<Scalars['Int']['input']>;
  v_lte?: InputMaybe<Scalars['Int']['input']>;
  v_not?: InputMaybe<Scalars['Int']['input']>;
  v_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Network__Attestation_OrderBy =
  | 'gasUsed'
  | 'id'
  | 'r'
  | 'requestCID'
  | 'responseCID'
  | 'responseNumBytes'
  | 's'
  | 'subgraphDeployment'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__manifest'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__poweredBySubstreams'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__schema'
  | 'subgraphDeployment__schemaIpfsHash'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__unsignalledTokens'
  | 'v';

/** Authorized functions for the Manager */
export type Network__AuthorizedFunction = {
  __typename?: 'NETWORK__AuthorizedFunction';
  /** Function signature (string) */
  id: Scalars['ID']['output'];
  /** Token lock Manager */
  manager: Network__TokenManager;
  /** Hash of the function signature */
  sigHash: Scalars['NETWORK__Bytes']['output'];
  /** The contract address that is authorized to have this function called on itself */
  target: Scalars['NETWORK__Bytes']['output'];
};

export type Network__AuthorizedFunction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__AuthorizedFunction_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  manager?: InputMaybe<Scalars['String']['input']>;
  manager_?: InputMaybe<Network__TokenManager_Filter>;
  manager_contains?: InputMaybe<Scalars['String']['input']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_gt?: InputMaybe<Scalars['String']['input']>;
  manager_gte?: InputMaybe<Scalars['String']['input']>;
  manager_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_lt?: InputMaybe<Scalars['String']['input']>;
  manager_lte?: InputMaybe<Scalars['String']['input']>;
  manager_not?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains?: InputMaybe<Scalars['String']['input']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manager_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with?: InputMaybe<Scalars['String']['input']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Network__AuthorizedFunction_Filter>>>;
  sigHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  sigHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  sigHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  target?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  target_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  target_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
};

export type Network__AuthorizedFunction_OrderBy =
  | 'id'
  | 'manager'
  | 'manager__id'
  | 'manager__masterCopy'
  | 'manager__tokenLockCount'
  | 'manager__tokens'
  | 'sigHash'
  | 'target';

export type Network__BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Network__Block_Height = {
  hash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/** All relevant data for a bridge deposit Transaction in The Graph Network */
export type Network__BridgeDepositTransaction = Network__Transaction & {
  __typename?: 'NETWORK__BridgeDepositTransaction';
  amount?: Maybe<Scalars['BigInt']['output']>;
  blockNumber: Scalars['Int']['output'];
  from?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  id: Scalars['ID']['output'];
  l1Token?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** retryableTicketId is the unique value that allows matching an L2 transaction with its L1 counterpart */
  retryableTicketId?: Maybe<Scalars['String']['output']>;
  /** Whether the deposit was initiated through Arbitrum's gateway router (Only available on L1 networks) */
  routed?: Maybe<Scalars['Boolean']['output']>;
  signer: Network__GraphAccount;
  timestamp: Scalars['Int']['output'];
  to?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** txHash refers to the tx on the chain corresponding to this subgraph deployment */
  txHash: Scalars['NETWORK__Bytes']['output'];
  type: Network__TransactionType;
};

export type Network__BridgeDepositTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__BridgeDepositTransaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  from?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  l1Token?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  l1Token_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__BridgeDepositTransaction_Filter>>>;
  retryableTicketId?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_contains?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_ends_with?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_gt?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_gte?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  retryableTicketId_lt?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_lte?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_not?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_not_contains?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  retryableTicketId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_starts_with?: InputMaybe<Scalars['String']['input']>;
  retryableTicketId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  routed?: InputMaybe<Scalars['Boolean']['input']>;
  routed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  routed_not?: InputMaybe<Scalars['Boolean']['input']>;
  routed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  to?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  txHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
};

export type Network__BridgeDepositTransaction_OrderBy =
  | 'amount'
  | 'blockNumber'
  | 'from'
  | 'id'
  | 'l1Token'
  | 'retryableTicketId'
  | 'routed'
  | 'signer'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__codeRepository'
  | 'signer__createdAt'
  | 'signer__curationApproval'
  | 'signer__defaultDisplayName'
  | 'signer__description'
  | 'signer__developerCreatedAt'
  | 'signer__displayName'
  | 'signer__gnsApproval'
  | 'signer__id'
  | 'signer__image'
  | 'signer__isOrganization'
  | 'signer__metadataHash'
  | 'signer__stakingApproval'
  | 'signer__subgraphQueryFees'
  | 'signer__website'
  | 'timestamp'
  | 'to'
  | 'txHash'
  | 'type';

/** All relevant data for a bridge withdrawal Transaction in The Graph Network */
export type Network__BridgeWithdrawalTransaction = Network__Transaction & {
  __typename?: 'NETWORK__BridgeWithdrawalTransaction';
  amount?: Maybe<Scalars['BigInt']['output']>;
  blockNumber: Scalars['Int']['output'];
  from?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  id: Scalars['ID']['output'];
  l1Token?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  signer: Network__GraphAccount;
  timestamp: Scalars['Int']['output'];
  to?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** transactionIndex is the unique value that allows matching an L2 transaction with its L1 counterpart */
  transactionIndex?: Maybe<Scalars['BigInt']['output']>;
  /** txHash refers to the tx on the chain corresponding to this subgraph deployment */
  txHash?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  type: Network__TransactionType;
};

export type Network__BridgeWithdrawalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__BridgeWithdrawalTransaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  from?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  l1Token?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  l1Token_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  l1Token_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__BridgeWithdrawalTransaction_Filter>>>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  to?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  transactionIndex?: InputMaybe<Scalars['BigInt']['input']>;
  transactionIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transactionIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transactionIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transactionIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transactionIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  transactionIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
};

export type Network__BridgeWithdrawalTransaction_OrderBy =
  | 'amount'
  | 'blockNumber'
  | 'from'
  | 'id'
  | 'l1Token'
  | 'signer'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__codeRepository'
  | 'signer__createdAt'
  | 'signer__curationApproval'
  | 'signer__defaultDisplayName'
  | 'signer__description'
  | 'signer__developerCreatedAt'
  | 'signer__displayName'
  | 'signer__gnsApproval'
  | 'signer__id'
  | 'signer__image'
  | 'signer__isOrganization'
  | 'signer__metadataHash'
  | 'signer__stakingApproval'
  | 'signer__subgraphQueryFees'
  | 'signer__website'
  | 'timestamp'
  | 'to'
  | 'transactionIndex'
  | 'txHash'
  | 'type';

/** Curator with all Signals and metrics */
export type Network__Curator = {
  __typename?: 'NETWORK__Curator';
  /** Graph account of this curator */
  account: Network__GraphAccount;
  /** Amount of active name signals and signals for this user. signalCount + nameSignalCount */
  activeCombinedSignalCount: Scalars['Int']['output'];
  /** Amount of active name signals for this user */
  activeNameSignalCount: Scalars['Int']['output'];
  /** Amount of active signals for this user */
  activeSignalCount: Scalars['Int']['output'];
  /** NOT IMPLEMENTED - Annualized rate of return on curator signal */
  annualizedReturn: Scalars['NETWORK__BigDecimal']['output'];
  /** Total amount of name signals and signals created by this user. signalCount + nameSignalCount */
  combinedSignalCount: Scalars['Int']['output'];
  /** Time this curator was created */
  createdAt: Scalars['Int']['output'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']['output']>;
  /** Eth address of the Curator */
  id: Scalars['ID']['output'];
  /** Total amount of name signals created by this user */
  nameSignalCount: Scalars['Int']['output'];
  /** Subgraphs the curator is curating */
  nameSignals: Array<Network__NameSignal>;
  /** NOT IMPLEMENTED - Summation of realized rewards from all Signals */
  realizedRewards: Scalars['BigInt']['output'];
  /** Total amount of signals created by this user */
  signalCount: Scalars['Int']['output'];
  /** NOT IMPLEMENTED - Signaling efficiency of the curator */
  signalingEfficiency: Scalars['NETWORK__BigDecimal']['output'];
  /** Subgraphs the curator is curating */
  signals: Array<Network__Signal>;
  /** totalNameSignalAverageCostBasis / totalNameSignal */
  totalAverageCostBasisPerNameSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** totalSignalAverageCostBasis / totalSignal */
  totalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** CURRENT summed name signal for all bonding curves */
  totalNameSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** Total curator cost basis of all shares of name pools purchased on all bonding curves */
  totalNameSignalAverageCostBasis: Scalars['NETWORK__BigDecimal']['output'];
  /** CUMULATIVE tokens signalled on all names */
  totalNameSignalledTokens: Scalars['BigInt']['output'];
  /** CUMULATIVE tokens unsignalled on all names */
  totalNameUnsignalledTokens: Scalars['BigInt']['output'];
  /** NOT IMPLEMENTED - Total return of the curator */
  totalReturn: Scalars['NETWORK__BigDecimal']['output'];
  /** CURRENT summed signal for all bonding curves */
  totalSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** Total curator cost basis of all version signal shares purchased on all bonding curves. Includes those purchased through GNS name pools */
  totalSignalAverageCostBasis: Scalars['NETWORK__BigDecimal']['output'];
  /** CUMULATIVE tokens signalled on all the subgraphs */
  totalSignalledTokens: Scalars['BigInt']['output'];
  /** CUMULATIVE tokens unsignalled on all the subgraphs */
  totalUnsignalledTokens: Scalars['BigInt']['output'];
  /** CUMULATIVE withdrawn tokens from deprecated subgraphs */
  totalWithdrawnTokens: Scalars['BigInt']['output'];
};

/** Curator with all Signals and metrics */
export type Network__CuratorNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__NameSignal_Filter>;
};

/** Curator with all Signals and metrics */
export type Network__CuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Signal_Filter>;
};

export type Network__Curator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Network__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activeCombinedSignalCount?: InputMaybe<Scalars['Int']['input']>;
  activeCombinedSignalCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeCombinedSignalCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeCombinedSignalCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeCombinedSignalCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeCombinedSignalCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeCombinedSignalCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeCombinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeNameSignalCount?: InputMaybe<Scalars['Int']['input']>;
  activeNameSignalCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeNameSignalCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeNameSignalCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeNameSignalCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeNameSignalCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeNameSignalCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeNameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeSignalCount?: InputMaybe<Scalars['Int']['input']>;
  activeSignalCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeSignalCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeSignalCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeSignalCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeSignalCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeSignalCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeSignalCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__Curator_Filter>>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  combinedSignalCount?: InputMaybe<Scalars['Int']['input']>;
  combinedSignalCount_gt?: InputMaybe<Scalars['Int']['input']>;
  combinedSignalCount_gte?: InputMaybe<Scalars['Int']['input']>;
  combinedSignalCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  combinedSignalCount_lt?: InputMaybe<Scalars['Int']['input']>;
  combinedSignalCount_lte?: InputMaybe<Scalars['Int']['input']>;
  combinedSignalCount_not?: InputMaybe<Scalars['Int']['input']>;
  combinedSignalCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nameSignals_?: InputMaybe<Network__NameSignal_Filter>;
  or?: InputMaybe<Array<InputMaybe<Network__Curator_Filter>>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalCount?: InputMaybe<Scalars['Int']['input']>;
  signalCount_gt?: InputMaybe<Scalars['Int']['input']>;
  signalCount_gte?: InputMaybe<Scalars['Int']['input']>;
  signalCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  signalCount_lt?: InputMaybe<Scalars['Int']['input']>;
  signalCount_lte?: InputMaybe<Scalars['Int']['input']>;
  signalCount_not?: InputMaybe<Scalars['Int']['input']>;
  signalCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  signalingEfficiency?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalingEfficiency_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalingEfficiency_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalingEfficiency_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signalingEfficiency_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalingEfficiency_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalingEfficiency_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalingEfficiency_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signals_?: InputMaybe<Network__Signal_Filter>;
  totalAverageCostBasisPerNameSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerNameSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerNameSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerNameSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalAverageCostBasisPerNameSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerNameSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerNameSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerNameSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalNameSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalNameSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalNameSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalNameSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalNameSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalNameSignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameSignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameSignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNameSignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameSignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameSignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNameUnsignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalNameUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalNameUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalSignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalSignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnsignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnsignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnsignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnsignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnsignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnsignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWithdrawnTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalWithdrawnTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWithdrawnTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWithdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWithdrawnTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWithdrawnTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWithdrawnTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWithdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__Curator_OrderBy =
  | 'account'
  | 'account__balance'
  | 'account__balanceReceivedFromL1Delegation'
  | 'account__balanceReceivedFromL1Signalling'
  | 'account__codeRepository'
  | 'account__createdAt'
  | 'account__curationApproval'
  | 'account__defaultDisplayName'
  | 'account__description'
  | 'account__developerCreatedAt'
  | 'account__displayName'
  | 'account__gnsApproval'
  | 'account__id'
  | 'account__image'
  | 'account__isOrganization'
  | 'account__metadataHash'
  | 'account__stakingApproval'
  | 'account__subgraphQueryFees'
  | 'account__website'
  | 'activeCombinedSignalCount'
  | 'activeNameSignalCount'
  | 'activeSignalCount'
  | 'annualizedReturn'
  | 'combinedSignalCount'
  | 'createdAt'
  | 'defaultDisplayName'
  | 'id'
  | 'nameSignalCount'
  | 'nameSignals'
  | 'realizedRewards'
  | 'signalCount'
  | 'signalingEfficiency'
  | 'signals'
  | 'totalAverageCostBasisPerNameSignal'
  | 'totalAverageCostBasisPerSignal'
  | 'totalNameSignal'
  | 'totalNameSignalAverageCostBasis'
  | 'totalNameSignalledTokens'
  | 'totalNameUnsignalledTokens'
  | 'totalReturn'
  | 'totalSignal'
  | 'totalSignalAverageCostBasis'
  | 'totalSignalledTokens'
  | 'totalUnsignalledTokens'
  | 'totalWithdrawnTokens';

export type Network__CurrentSubgraphDeploymentRelation = {
  __typename?: 'NETWORK__CurrentSubgraphDeploymentRelation';
  /** Indicates whether this relation is active. This means that the deployment is still the current deployment for the named Subgraph */
  active: Scalars['Boolean']['output'];
  deployment: Network__SubgraphDeployment;
  /** Auxiliary entity used to batch update Subgraph entities when signalling on the deployment changes. ID replicates the deployment ID and adds a counter, to make it easy to reproduce. */
  id: Scalars['ID']['output'];
  subgraph: Network__Subgraph;
};

export type Network__CurrentSubgraphDeploymentRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>>>;
  deployment?: InputMaybe<Scalars['String']['input']>;
  deployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  deployment_contains?: InputMaybe<Scalars['String']['input']>;
  deployment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deployment_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deployment_gt?: InputMaybe<Scalars['String']['input']>;
  deployment_gte?: InputMaybe<Scalars['String']['input']>;
  deployment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deployment_lt?: InputMaybe<Scalars['String']['input']>;
  deployment_lte?: InputMaybe<Scalars['String']['input']>;
  deployment_not?: InputMaybe<Scalars['String']['input']>;
  deployment_not_contains?: InputMaybe<Scalars['String']['input']>;
  deployment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deployment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deployment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deployment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deployment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deployment_starts_with?: InputMaybe<Scalars['String']['input']>;
  deployment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>>>;
  subgraph?: InputMaybe<Scalars['String']['input']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_gt?: InputMaybe<Scalars['String']['input']>;
  subgraph_gte?: InputMaybe<Scalars['String']['input']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_lt?: InputMaybe<Scalars['String']['input']>;
  subgraph_lte?: InputMaybe<Scalars['String']['input']>;
  subgraph_not?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Network__CurrentSubgraphDeploymentRelation_OrderBy =
  | 'active'
  | 'deployment'
  | 'deployment__activeSubgraphCount'
  | 'deployment__createdAt'
  | 'deployment__curatorFeeRewards'
  | 'deployment__deniedAt'
  | 'deployment__deprecatedSubgraphCount'
  | 'deployment__id'
  | 'deployment__indexingDelegatorRewardAmount'
  | 'deployment__indexingIndexerRewardAmount'
  | 'deployment__indexingRewardAmount'
  | 'deployment__ipfsHash'
  | 'deployment__manifest'
  | 'deployment__originalName'
  | 'deployment__poweredBySubstreams'
  | 'deployment__pricePerShare'
  | 'deployment__queryFeeRebates'
  | 'deployment__queryFeesAmount'
  | 'deployment__reserveRatio'
  | 'deployment__schema'
  | 'deployment__schemaIpfsHash'
  | 'deployment__signalAmount'
  | 'deployment__signalledTokens'
  | 'deployment__signalledTokensReceivedOnL2'
  | 'deployment__signalledTokensSentToL2'
  | 'deployment__stakedTokens'
  | 'deployment__subgraphCount'
  | 'deployment__transferredToL2'
  | 'deployment__transferredToL2At'
  | 'deployment__transferredToL2AtBlockNumber'
  | 'deployment__transferredToL2AtTx'
  | 'deployment__unsignalledTokens'
  | 'id'
  | 'subgraph'
  | 'subgraph__active'
  | 'subgraph__codeRepository'
  | 'subgraph__createdAt'
  | 'subgraph__creatorAddress'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__description'
  | 'subgraph__displayName'
  | 'subgraph__entityVersion'
  | 'subgraph__id'
  | 'subgraph__idOnL1'
  | 'subgraph__idOnL2'
  | 'subgraph__image'
  | 'subgraph__initializing'
  | 'subgraph__ipfsMetadataHash'
  | 'subgraph__metadataHash'
  | 'subgraph__migrated'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__nameSignalCount'
  | 'subgraph__nftID'
  | 'subgraph__nftImage'
  | 'subgraph__oldID'
  | 'subgraph__reserveRatio'
  | 'subgraph__signalAmount'
  | 'subgraph__signalledTokens'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__subgraphNumber'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__updatedAt'
  | 'subgraph__versionCount'
  | 'subgraph__website'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens';

/** Delegator stake for a single Indexer */
export type Network__DelegatedStake = {
  __typename?: 'NETWORK__DelegatedStake';
  /** Time this delegator first delegated to an indexer */
  createdAt: Scalars['Int']['output'];
  /** Delegator */
  delegator: Network__Delegator;
  /** Concatenation of Delegator address and Indexer address */
  id: Scalars['ID']['output'];
  /** ID of the delegation on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']['output']>;
  /** ID of the delegation on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']['output']>;
  /** Index the stake is delegated to */
  indexer: Network__Indexer;
  /** Last time this delegator delegated towards this indexer */
  lastDelegatedAt?: Maybe<Scalars['Int']['output']>;
  /** Last time this delegator undelegated from this indexer */
  lastUndelegatedAt?: Maybe<Scalars['Int']['output']>;
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt']['output'];
  /** Epoch the locked tokens get unlocked */
  lockedUntil: Scalars['Int']['output'];
  /** The rate this delegator paid for their shares (calculated using average cost basis). Used for rewards calculations */
  personalExchangeRate: Scalars['NETWORK__BigDecimal']['output'];
  /** Realized rewards from undelegating and realizing a reward */
  realizedRewards: Scalars['NETWORK__BigDecimal']['output'];
  /** Shares owned in the delegator pool. Used to calculate total amount delegated */
  shareAmount: Scalars['BigInt']['output'];
  /** CUMULATIVE tokens delegated */
  stakedTokens: Scalars['BigInt']['output'];
  /** Amount of GRT transferred to L2. Only visible from L1, as there's no events for it on L2 */
  stakedTokensTransferredToL2: Scalars['BigInt']['output'];
  /** Whether the delegation has been transferred from L1 to L2 */
  transferredToL2: Scalars['Boolean']['output'];
  /** Timestamp for the L1 -> L2 Transfer */
  transferredToL2At?: Maybe<Scalars['BigInt']['output']>;
  /** Block number for the L1 -> L2 Transfer */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Transaction hash for the L1 -> L2 Transfer */
  transferredToL2AtTx?: Maybe<Scalars['String']['output']>;
  /** CUMULATIVE tokens undelegated */
  unstakedTokens: Scalars['BigInt']['output'];
};

export type Network__DelegatedStake_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__DelegatedStake_Filter>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Network__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  idOnL1?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_?: InputMaybe<Network__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_gt?: InputMaybe<Scalars['String']['input']>;
  indexer_gte?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_lt?: InputMaybe<Scalars['String']['input']>;
  indexer_lte?: InputMaybe<Scalars['String']['input']>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastDelegatedAt?: InputMaybe<Scalars['Int']['input']>;
  lastDelegatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  lastDelegatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  lastDelegatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastDelegatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  lastDelegatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  lastDelegatedAt_not?: InputMaybe<Scalars['Int']['input']>;
  lastDelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUndelegatedAt?: InputMaybe<Scalars['Int']['input']>;
  lastUndelegatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  lastUndelegatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  lastUndelegatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUndelegatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  lastUndelegatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  lastUndelegatedAt_not?: InputMaybe<Scalars['Int']['input']>;
  lastUndelegatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedUntil?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lockedUntil_lt?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['Int']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__DelegatedStake_Filter>>>;
  personalExchangeRate?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  personalExchangeRate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  personalExchangeRate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  personalExchangeRate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  personalExchangeRate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  personalExchangeRate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  personalExchangeRate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  personalExchangeRate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  realizedRewards?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  realizedRewards_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  realizedRewards_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  realizedRewards_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  realizedRewards_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  realizedRewards_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  shareAmount?: InputMaybe<Scalars['BigInt']['input']>;
  shareAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shareAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shareAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shareAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shareAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shareAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  shareAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokensTransferredToL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__DelegatedStake_OrderBy =
  | 'createdAt'
  | 'delegator'
  | 'delegator__activeStakesCount'
  | 'delegator__createdAt'
  | 'delegator__defaultDisplayName'
  | 'delegator__id'
  | 'delegator__stakesCount'
  | 'delegator__totalRealizedRewards'
  | 'delegator__totalStakedTokens'
  | 'delegator__totalUnstakedTokens'
  | 'id'
  | 'idOnL1'
  | 'idOnL2'
  | 'indexer'
  | 'indexer__allocatedTokens'
  | 'indexer__allocationCount'
  | 'indexer__annualizedReturn'
  | 'indexer__availableStake'
  | 'indexer__createdAt'
  | 'indexer__defaultDisplayName'
  | 'indexer__delegatedCapacity'
  | 'indexer__delegatedStakeRatio'
  | 'indexer__delegatedTokens'
  | 'indexer__delegationExchangeRate'
  | 'indexer__delegatorIndexingRewards'
  | 'indexer__delegatorParameterCooldown'
  | 'indexer__delegatorQueryFees'
  | 'indexer__delegatorShares'
  | 'indexer__firstTransferredToL2At'
  | 'indexer__firstTransferredToL2AtBlockNumber'
  | 'indexer__firstTransferredToL2AtTx'
  | 'indexer__forcedClosures'
  | 'indexer__geoHash'
  | 'indexer__id'
  | 'indexer__idOnL1'
  | 'indexer__idOnL2'
  | 'indexer__indexerIndexingRewards'
  | 'indexer__indexerRewardsOwnGenerationRatio'
  | 'indexer__indexingRewardCut'
  | 'indexer__indexingRewardEffectiveCut'
  | 'indexer__lastDelegationParameterUpdate'
  | 'indexer__lastTransferredToL2At'
  | 'indexer__lastTransferredToL2AtBlockNumber'
  | 'indexer__lastTransferredToL2AtTx'
  | 'indexer__lockedTokens'
  | 'indexer__overDelegationDilution'
  | 'indexer__ownStakeRatio'
  | 'indexer__queryFeeCut'
  | 'indexer__queryFeeEffectiveCut'
  | 'indexer__queryFeeRebates'
  | 'indexer__queryFeesCollected'
  | 'indexer__rewardsEarned'
  | 'indexer__stakedTokens'
  | 'indexer__stakedTokensTransferredToL2'
  | 'indexer__stakingEfficiency'
  | 'indexer__tokenCapacity'
  | 'indexer__tokensLockedUntil'
  | 'indexer__totalAllocationCount'
  | 'indexer__totalReturn'
  | 'indexer__transferredToL2'
  | 'indexer__unstakedTokens'
  | 'indexer__url'
  | 'lastDelegatedAt'
  | 'lastUndelegatedAt'
  | 'lockedTokens'
  | 'lockedUntil'
  | 'personalExchangeRate'
  | 'realizedRewards'
  | 'shareAmount'
  | 'stakedTokens'
  | 'stakedTokensTransferredToL2'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'unstakedTokens';

/** Delegator with all their delegated stakes towards Indexers */
export type Network__Delegator = {
  __typename?: 'NETWORK__Delegator';
  /** Graph account of the delegator */
  account: Network__GraphAccount;
  /** Active DelegatedStake entity count. Active means it still has GRT delegated */
  activeStakesCount: Scalars['Int']['output'];
  /** Time created at */
  createdAt: Scalars['Int']['output'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']['output']>;
  /** Delegator address */
  id: Scalars['ID']['output'];
  /** Stakes of this delegator */
  stakes: Array<Network__DelegatedStake>;
  /** Total DelegatedStake entity count (Active and inactive) */
  stakesCount: Scalars['Int']['output'];
  /** Total realized rewards on all delegated stakes. Realized rewards are added when undelegating and realizing a profit */
  totalRealizedRewards: Scalars['NETWORK__BigDecimal']['output'];
  /** CUMULATIVE staked tokens in DelegatorStakes of this Delegator */
  totalStakedTokens: Scalars['BigInt']['output'];
  /** CUMULATIVE unstaked tokens in DelegatorStakes of this Delegator */
  totalUnstakedTokens: Scalars['BigInt']['output'];
};

/** Delegator with all their delegated stakes towards Indexers */
export type Network__DelegatorStakesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};

export type Network__Delegator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Network__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  activeStakesCount?: InputMaybe<Scalars['Int']['input']>;
  activeStakesCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeStakesCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeStakesCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeStakesCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeStakesCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeStakesCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeStakesCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__Delegator_Filter>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Delegator_Filter>>>;
  stakesCount?: InputMaybe<Scalars['Int']['input']>;
  stakesCount_gt?: InputMaybe<Scalars['Int']['input']>;
  stakesCount_gte?: InputMaybe<Scalars['Int']['input']>;
  stakesCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakesCount_lt?: InputMaybe<Scalars['Int']['input']>;
  stakesCount_lte?: InputMaybe<Scalars['Int']['input']>;
  stakesCount_not?: InputMaybe<Scalars['Int']['input']>;
  stakesCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakes_?: InputMaybe<Network__DelegatedStake_Filter>;
  totalRealizedRewards?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalRealizedRewards_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalRealizedRewards_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalRealizedRewards_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalRealizedRewards_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalRealizedRewards_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalRealizedRewards_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalRealizedRewards_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalStakedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStakedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnstakedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnstakedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__Delegator_OrderBy =
  | 'account'
  | 'account__balance'
  | 'account__balanceReceivedFromL1Delegation'
  | 'account__balanceReceivedFromL1Signalling'
  | 'account__codeRepository'
  | 'account__createdAt'
  | 'account__curationApproval'
  | 'account__defaultDisplayName'
  | 'account__description'
  | 'account__developerCreatedAt'
  | 'account__displayName'
  | 'account__gnsApproval'
  | 'account__id'
  | 'account__image'
  | 'account__isOrganization'
  | 'account__metadataHash'
  | 'account__stakingApproval'
  | 'account__subgraphQueryFees'
  | 'account__website'
  | 'activeStakesCount'
  | 'createdAt'
  | 'defaultDisplayName'
  | 'id'
  | 'stakes'
  | 'stakesCount'
  | 'totalRealizedRewards'
  | 'totalStakedTokens'
  | 'totalUnstakedTokens';

/** Dispute of a query. Includes single query, conflicting attestation, and indexing disputes */
export type Network__Dispute = {
  __typename?: 'NETWORK__Dispute';
  /** Allocation ID. Only for Indexing Disputes */
  allocation?: Maybe<Network__Allocation>;
  /** Attestation. Only for single query and conflicting attestations */
  attestation?: Maybe<Network__Attestation>;
  /** Time dispute was closed at */
  closedAt: Scalars['Int']['output'];
  /** Time dispute was created */
  createdAt: Scalars['Int']['output'];
  /** Fisherman deposit */
  deposit: Scalars['BigInt']['output'];
  /** Fisherman address */
  fisherman: Network__GraphAccount;
  /** Dispute ID */
  id: Scalars['ID']['output'];
  /** Indexer disputed */
  indexer: Network__GraphAccount;
  /** Linked dispute of other Indexer. Only for conflicting attestation */
  linkedDispute?: Maybe<Network__Dispute>;
  /** Status of the dispute. Accepted means the Indexer was slashed */
  status: Network__DisputeStatus;
  /** Subgraph deployment being disputed */
  subgraphDeployment: Network__SubgraphDeployment;
  /** Amount of the slashed tokens that was burned */
  tokensBurned: Scalars['NETWORK__BigDecimal']['output'];
  /** Amount of the slashed tokens that was payed as reward to the fisherman */
  tokensRewarded: Scalars['BigInt']['output'];
  /** Total amount of tokens slashed on the dispute */
  tokensSlashed: Scalars['NETWORK__BigDecimal']['output'];
  /** Type of dispute */
  type: Network__DisputeType;
};

export type Network__DisputeStatus = 'Accepted' | 'Draw' | 'Rejected' | 'Undecided';

export type Network__DisputeType = 'Conflicting' | 'Indexing' | 'SingleQuery';

export type Network__Dispute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  allocation?: InputMaybe<Scalars['String']['input']>;
  allocation_?: InputMaybe<Network__Allocation_Filter>;
  allocation_contains?: InputMaybe<Scalars['String']['input']>;
  allocation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allocation_ends_with?: InputMaybe<Scalars['String']['input']>;
  allocation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocation_gt?: InputMaybe<Scalars['String']['input']>;
  allocation_gte?: InputMaybe<Scalars['String']['input']>;
  allocation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allocation_lt?: InputMaybe<Scalars['String']['input']>;
  allocation_lte?: InputMaybe<Scalars['String']['input']>;
  allocation_not?: InputMaybe<Scalars['String']['input']>;
  allocation_not_contains?: InputMaybe<Scalars['String']['input']>;
  allocation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allocation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allocation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allocation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allocation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocation_starts_with?: InputMaybe<Scalars['String']['input']>;
  allocation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Network__Dispute_Filter>>>;
  attestation?: InputMaybe<Scalars['String']['input']>;
  attestation_?: InputMaybe<Network__Attestation_Filter>;
  attestation_contains?: InputMaybe<Scalars['String']['input']>;
  attestation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  attestation_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestation_gt?: InputMaybe<Scalars['String']['input']>;
  attestation_gte?: InputMaybe<Scalars['String']['input']>;
  attestation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attestation_lt?: InputMaybe<Scalars['String']['input']>;
  attestation_lte?: InputMaybe<Scalars['String']['input']>;
  attestation_not?: InputMaybe<Scalars['String']['input']>;
  attestation_not_contains?: InputMaybe<Scalars['String']['input']>;
  attestation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  attestation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  attestation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  attestation_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  closedAt?: InputMaybe<Scalars['Int']['input']>;
  closedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  closedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  closedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  closedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  closedAt_not?: InputMaybe<Scalars['Int']['input']>;
  closedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deposit?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  deposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fisherman?: InputMaybe<Scalars['String']['input']>;
  fisherman_?: InputMaybe<Network__GraphAccount_Filter>;
  fisherman_contains?: InputMaybe<Scalars['String']['input']>;
  fisherman_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fisherman_ends_with?: InputMaybe<Scalars['String']['input']>;
  fisherman_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fisherman_gt?: InputMaybe<Scalars['String']['input']>;
  fisherman_gte?: InputMaybe<Scalars['String']['input']>;
  fisherman_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fisherman_lt?: InputMaybe<Scalars['String']['input']>;
  fisherman_lte?: InputMaybe<Scalars['String']['input']>;
  fisherman_not?: InputMaybe<Scalars['String']['input']>;
  fisherman_not_contains?: InputMaybe<Scalars['String']['input']>;
  fisherman_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fisherman_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fisherman_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fisherman_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fisherman_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fisherman_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fisherman_starts_with?: InputMaybe<Scalars['String']['input']>;
  fisherman_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_?: InputMaybe<Network__GraphAccount_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_gt?: InputMaybe<Scalars['String']['input']>;
  indexer_gte?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_lt?: InputMaybe<Scalars['String']['input']>;
  indexer_lte?: InputMaybe<Scalars['String']['input']>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedDispute?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_?: InputMaybe<Network__Dispute_Filter>;
  linkedDispute_contains?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_gt?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_gte?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedDispute_lt?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_lte?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_not?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedDispute_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedDispute_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Network__Dispute_Filter>>>;
  status?: InputMaybe<Network__DisputeStatus>;
  status_in?: InputMaybe<Array<Network__DisputeStatus>>;
  status_not?: InputMaybe<Network__DisputeStatus>;
  status_not_in?: InputMaybe<Array<Network__DisputeStatus>>;
  subgraphDeployment?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokensBurned?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensBurned_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensBurned_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensBurned_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  tokensBurned_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensBurned_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensBurned_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensBurned_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  tokensRewarded?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRewarded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRewarded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRewarded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensRewarded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRewarded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRewarded_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRewarded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensSlashed?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensSlashed_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensSlashed_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensSlashed_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  tokensSlashed_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensSlashed_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensSlashed_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  tokensSlashed_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  type?: InputMaybe<Network__DisputeType>;
  type_in?: InputMaybe<Array<Network__DisputeType>>;
  type_not?: InputMaybe<Network__DisputeType>;
  type_not_in?: InputMaybe<Array<Network__DisputeType>>;
};

export type Network__Dispute_OrderBy =
  | 'allocation'
  | 'allocation__allocatedTokens'
  | 'allocation__annualizedReturn'
  | 'allocation__closedAt'
  | 'allocation__closedAtBlockHash'
  | 'allocation__closedAtBlockNumber'
  | 'allocation__closedAtEpoch'
  | 'allocation__createdAt'
  | 'allocation__createdAtBlockHash'
  | 'allocation__createdAtBlockNumber'
  | 'allocation__createdAtEpoch'
  | 'allocation__creator'
  | 'allocation__curatorRewards'
  | 'allocation__delegationFees'
  | 'allocation__effectiveAllocation'
  | 'allocation__id'
  | 'allocation__indexingDelegatorRewards'
  | 'allocation__indexingIndexerRewards'
  | 'allocation__indexingRewardCutAtClose'
  | 'allocation__indexingRewardCutAtStart'
  | 'allocation__indexingRewardEffectiveCutAtClose'
  | 'allocation__indexingRewardEffectiveCutAtStart'
  | 'allocation__indexingRewards'
  | 'allocation__poi'
  | 'allocation__queryFeeCutAtClose'
  | 'allocation__queryFeeCutAtStart'
  | 'allocation__queryFeeEffectiveCutAtClose'
  | 'allocation__queryFeeEffectiveCutAtStart'
  | 'allocation__queryFeeRebates'
  | 'allocation__queryFeesCollected'
  | 'allocation__status'
  | 'allocation__totalReturn'
  | 'attestation'
  | 'attestation__gasUsed'
  | 'attestation__id'
  | 'attestation__r'
  | 'attestation__requestCID'
  | 'attestation__responseCID'
  | 'attestation__responseNumBytes'
  | 'attestation__s'
  | 'attestation__v'
  | 'closedAt'
  | 'createdAt'
  | 'deposit'
  | 'fisherman'
  | 'fisherman__balance'
  | 'fisherman__balanceReceivedFromL1Delegation'
  | 'fisherman__balanceReceivedFromL1Signalling'
  | 'fisherman__codeRepository'
  | 'fisherman__createdAt'
  | 'fisherman__curationApproval'
  | 'fisherman__defaultDisplayName'
  | 'fisherman__description'
  | 'fisherman__developerCreatedAt'
  | 'fisherman__displayName'
  | 'fisherman__gnsApproval'
  | 'fisherman__id'
  | 'fisherman__image'
  | 'fisherman__isOrganization'
  | 'fisherman__metadataHash'
  | 'fisherman__stakingApproval'
  | 'fisherman__subgraphQueryFees'
  | 'fisherman__website'
  | 'id'
  | 'indexer'
  | 'indexer__balance'
  | 'indexer__balanceReceivedFromL1Delegation'
  | 'indexer__balanceReceivedFromL1Signalling'
  | 'indexer__codeRepository'
  | 'indexer__createdAt'
  | 'indexer__curationApproval'
  | 'indexer__defaultDisplayName'
  | 'indexer__description'
  | 'indexer__developerCreatedAt'
  | 'indexer__displayName'
  | 'indexer__gnsApproval'
  | 'indexer__id'
  | 'indexer__image'
  | 'indexer__isOrganization'
  | 'indexer__metadataHash'
  | 'indexer__stakingApproval'
  | 'indexer__subgraphQueryFees'
  | 'indexer__website'
  | 'linkedDispute'
  | 'linkedDispute__closedAt'
  | 'linkedDispute__createdAt'
  | 'linkedDispute__deposit'
  | 'linkedDispute__id'
  | 'linkedDispute__status'
  | 'linkedDispute__tokensBurned'
  | 'linkedDispute__tokensRewarded'
  | 'linkedDispute__tokensSlashed'
  | 'linkedDispute__type'
  | 'status'
  | 'subgraphDeployment'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__manifest'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__poweredBySubstreams'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__schema'
  | 'subgraphDeployment__schemaIpfsHash'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__unsignalledTokens'
  | 'tokensBurned'
  | 'tokensRewarded'
  | 'tokensSlashed'
  | 'type';

/** Epoch aggregate data for network statistics on signaling, rewards, and query fees */
export type Network__Epoch = {
  __typename?: 'NETWORK__Epoch';
  /** Amount of query fees generated that are going to curators during this epoch */
  curatorQueryFees: Scalars['BigInt']['output'];
  /** End block of the epoch */
  endBlock: Scalars['Int']['output'];
  /** Epoch number */
  id: Scalars['ID']['output'];
  /** Rebate amount claimed from the protocol through cobbs douglas during this epoch (Doesn't correlate to the queryFeesCollected for this epoch since there's a 7 day period before claiming) */
  queryFeeRebates: Scalars['BigInt']['output'];
  /** Amount of query fees generated that are going to the rebate pool for indexers during this epoch */
  queryFeesCollected: Scalars['BigInt']['output'];
  /** Signaled tokens during this epoch */
  signalledTokens: Scalars['BigInt']['output'];
  /** Stake deposited during this epoch */
  stakeDeposited: Scalars['BigInt']['output'];
  /** Start block of the epoch */
  startBlock: Scalars['Int']['output'];
  /** Amount of query fees generated that were burnt by the 1% protocol tax during this epoch */
  taxedQueryFees: Scalars['BigInt']['output'];
  /** Total indexing rewards earned in this epoch by delegators */
  totalDelegatorRewards: Scalars['BigInt']['output'];
  /** Total indexing rewards earned in this epoch by indexers */
  totalIndexerRewards: Scalars['BigInt']['output'];
  /** Total amount of query fees generated during this epoch (Includes everything) */
  totalQueryFees: Scalars['BigInt']['output'];
  /** Total indexing rewards earned in this epoch. Includes both delegator and indexer rewards */
  totalRewards: Scalars['BigInt']['output'];
};

export type Network__Epoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__Epoch_Filter>>>;
  curatorQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  curatorQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  curatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock?: InputMaybe<Scalars['Int']['input']>;
  endBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  endBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  endBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  endBlock_not?: InputMaybe<Scalars['Int']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Epoch_Filter>>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakeDeposited?: InputMaybe<Scalars['BigInt']['input']>;
  stakeDeposited_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeDeposited_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeDeposited_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakeDeposited_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeDeposited_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeDeposited_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakeDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startBlock?: InputMaybe<Scalars['Int']['input']>;
  startBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  startBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  startBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  startBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  startBlock_not?: InputMaybe<Scalars['Int']['input']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxedQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  taxedQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  taxedQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  taxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  taxedQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  taxedQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  taxedQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  taxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatorRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexerRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexerRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__Epoch_OrderBy =
  | 'curatorQueryFees'
  | 'endBlock'
  | 'id'
  | 'queryFeeRebates'
  | 'queryFeesCollected'
  | 'signalledTokens'
  | 'stakeDeposited'
  | 'startBlock'
  | 'taxedQueryFees'
  | 'totalDelegatorRewards'
  | 'totalIndexerRewards'
  | 'totalQueryFees'
  | 'totalRewards';

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccount = {
  __typename?: 'NETWORK__GraphAccount';
  /** Graph token balance */
  balance: Scalars['BigInt']['output'];
  /** Balance received due to failed delegation transfer from L1 */
  balanceReceivedFromL1Delegation: Scalars['BigInt']['output'];
  /** Balance received due to failed signal transfer from L1 */
  balanceReceivedFromL1Signalling: Scalars['BigInt']['output'];
  bridgeDepositTransactions: Array<Network__BridgeDepositTransaction>;
  bridgeWithdrawalTransactions: Array<Network__BridgeWithdrawalTransaction>;
  /** Main repository of code for the graph account */
  codeRepository?: Maybe<Scalars['String']['output']>;
  /** Time the account was created */
  createdAt: Scalars['Int']['output'];
  /** Disputes this graph account has created */
  createdDisputes: Array<Network__Dispute>;
  /** Amount this account has approved staking to transfer their GRT */
  curationApproval: Scalars['BigInt']['output'];
  /** Curator fields for this GraphAccount. Null if never curated */
  curator?: Maybe<Network__Curator>;
  /** Default display name is the current default name. Used for filtered queries in the explorer */
  defaultDisplayName?: Maybe<Scalars['String']['output']>;
  /** Default name the graph account has chosen */
  defaultName?: Maybe<Network__GraphAccountName>;
  /** Delegator fields for this GraphAccount. Null if never delegated */
  delegator?: Maybe<Network__Delegator>;
  /** Description of the graph account */
  description?: Maybe<Scalars['String']['output']>;
  /** Time that this graph account became a developer */
  developerCreatedAt?: Maybe<Scalars['Int']['output']>;
  /** Display name. Not unique */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Disputes against this graph account */
  disputesAgainst: Array<Network__Dispute>;
  /** Amount this account has approved the GNS to transfer their GRT */
  gnsApproval: Scalars['BigInt']['output'];
  /** Graph account ID */
  id: Scalars['ID']['output'];
  /** Image URL */
  image?: Maybe<Scalars['String']['output']>;
  /** Indexer fields for this GraphAccount. Null if never indexed */
  indexer?: Maybe<Network__Indexer>;
  /** True if it is an organization. False if it is an individual */
  isOrganization?: Maybe<Scalars['Boolean']['output']>;
  /** IPFS hash with account metadata details */
  metadataHash?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** Name signal transactions created by this GraphAccount */
  nameSignalTransactions: Array<Network__NameSignalTransaction>;
  /** All names this graph account has claimed from all name systems */
  names: Array<Network__GraphAccountName>;
  /** Operator of other Graph Accounts */
  operatorOf: Array<Network__GraphAccount>;
  /** Operators of this Graph Accounts */
  operators: Array<Network__GraphAccount>;
  /** Amount this account has approved curation to transfer their GRT */
  stakingApproval: Scalars['BigInt']['output'];
  /** NOT IMPLEMENTED - Total query fees the subgraphs created by this account have accumulated in GRT */
  subgraphQueryFees: Scalars['BigInt']['output'];
  /** Subgraphs the graph account owns */
  subgraphs: Array<Network__Subgraph>;
  tokenLockWallets: Array<Network__TokenLockWallet>;
  /** Website URL */
  website?: Maybe<Scalars['String']['output']>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountBridgeDepositTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__BridgeDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__BridgeDepositTransaction_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountBridgeWithdrawalTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__BridgeWithdrawalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__BridgeWithdrawalTransaction_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountCreatedDisputesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Dispute_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountDisputesAgainstArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Dispute_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountNameSignalTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__NameSignalTransaction_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountNamesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__GraphAccountName_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountOperatorOfArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountSubgraphsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Subgraph_Filter>;
};

/**
 * An account within the graph network. Contains metadata and all relevant data for this accounts
 * delegating, curating, and indexing.
 */
export type Network__GraphAccountTokenLockWalletsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__TokenLockWallet_Filter>;
};

/**
 * A name chosen by a Graph Account from a Name System such as ENS. This allows Graph Accounts to be
 * recognized by name, rather than just an Ethereum address
 */
export type Network__GraphAccountName = {
  __typename?: 'NETWORK__GraphAccountName';
  /** The graph account that owned the name when it was linked in the graph network */
  graphAccount?: Maybe<Network__GraphAccount>;
  /** Name system concatenated with the unique ID of the name system */
  id: Scalars['ID']['output'];
  /** Name from the system */
  name: Scalars['String']['output'];
  /** Name system for this name */
  nameSystem: Network__NameSystem;
};

export type Network__GraphAccountName_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__GraphAccountName_Filter>>>;
  graphAccount?: InputMaybe<Scalars['String']['input']>;
  graphAccount_?: InputMaybe<Network__GraphAccount_Filter>;
  graphAccount_contains?: InputMaybe<Scalars['String']['input']>;
  graphAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  graphAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  graphAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  graphAccount_gt?: InputMaybe<Scalars['String']['input']>;
  graphAccount_gte?: InputMaybe<Scalars['String']['input']>;
  graphAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  graphAccount_lt?: InputMaybe<Scalars['String']['input']>;
  graphAccount_lte?: InputMaybe<Scalars['String']['input']>;
  graphAccount_not?: InputMaybe<Scalars['String']['input']>;
  graphAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  graphAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  graphAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  graphAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  graphAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  graphAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  graphAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  graphAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  graphAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameSystem?: InputMaybe<Network__NameSystem>;
  nameSystem_in?: InputMaybe<Array<Network__NameSystem>>;
  nameSystem_not?: InputMaybe<Network__NameSystem>;
  nameSystem_not_in?: InputMaybe<Array<Network__NameSystem>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Network__GraphAccountName_Filter>>>;
};

export type Network__GraphAccountName_OrderBy =
  | 'graphAccount'
  | 'graphAccount__balance'
  | 'graphAccount__balanceReceivedFromL1Delegation'
  | 'graphAccount__balanceReceivedFromL1Signalling'
  | 'graphAccount__codeRepository'
  | 'graphAccount__createdAt'
  | 'graphAccount__curationApproval'
  | 'graphAccount__defaultDisplayName'
  | 'graphAccount__description'
  | 'graphAccount__developerCreatedAt'
  | 'graphAccount__displayName'
  | 'graphAccount__gnsApproval'
  | 'graphAccount__id'
  | 'graphAccount__image'
  | 'graphAccount__isOrganization'
  | 'graphAccount__metadataHash'
  | 'graphAccount__stakingApproval'
  | 'graphAccount__subgraphQueryFees'
  | 'graphAccount__website'
  | 'id'
  | 'name'
  | 'nameSystem';

export type Network__GraphAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__GraphAccount_Filter>>>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Delegation?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Delegation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Delegation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Delegation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balanceReceivedFromL1Delegation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Delegation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Delegation_not?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Delegation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balanceReceivedFromL1Signalling?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Signalling_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Signalling_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Signalling_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balanceReceivedFromL1Signalling_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Signalling_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Signalling_not?: InputMaybe<Scalars['BigInt']['input']>;
  balanceReceivedFromL1Signalling_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bridgeDepositTransactions_?: InputMaybe<Network__BridgeDepositTransaction_Filter>;
  bridgeWithdrawalTransactions_?: InputMaybe<Network__BridgeWithdrawalTransaction_Filter>;
  codeRepository?: InputMaybe<Scalars['String']['input']>;
  codeRepository_contains?: InputMaybe<Scalars['String']['input']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_gt?: InputMaybe<Scalars['String']['input']>;
  codeRepository_gte?: InputMaybe<Scalars['String']['input']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codeRepository_lt?: InputMaybe<Scalars['String']['input']>;
  codeRepository_lte?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdDisputes_?: InputMaybe<Network__Dispute_Filter>;
  curationApproval?: InputMaybe<Scalars['BigInt']['input']>;
  curationApproval_gt?: InputMaybe<Scalars['BigInt']['input']>;
  curationApproval_gte?: InputMaybe<Scalars['BigInt']['input']>;
  curationApproval_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curationApproval_lt?: InputMaybe<Scalars['BigInt']['input']>;
  curationApproval_lte?: InputMaybe<Scalars['BigInt']['input']>;
  curationApproval_not?: InputMaybe<Scalars['BigInt']['input']>;
  curationApproval_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curator?: InputMaybe<Scalars['String']['input']>;
  curator_?: InputMaybe<Network__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']['input']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_ends_with?: InputMaybe<Scalars['String']['input']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_gt?: InputMaybe<Scalars['String']['input']>;
  curator_gte?: InputMaybe<Scalars['String']['input']>;
  curator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curator_lt?: InputMaybe<Scalars['String']['input']>;
  curator_lte?: InputMaybe<Scalars['String']['input']>;
  curator_not?: InputMaybe<Scalars['String']['input']>;
  curator_not_contains?: InputMaybe<Scalars['String']['input']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_starts_with?: InputMaybe<Scalars['String']['input']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultName?: InputMaybe<Scalars['String']['input']>;
  defaultName_?: InputMaybe<Network__GraphAccountName_Filter>;
  defaultName_contains?: InputMaybe<Scalars['String']['input']>;
  defaultName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultName_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultName_gt?: InputMaybe<Scalars['String']['input']>;
  defaultName_gte?: InputMaybe<Scalars['String']['input']>;
  defaultName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultName_lt?: InputMaybe<Scalars['String']['input']>;
  defaultName_lte?: InputMaybe<Scalars['String']['input']>;
  defaultName_not?: InputMaybe<Scalars['String']['input']>;
  defaultName_not_contains?: InputMaybe<Scalars['String']['input']>;
  defaultName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultName_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Network__Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  developerCreatedAt?: InputMaybe<Scalars['Int']['input']>;
  developerCreatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  developerCreatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  developerCreatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  developerCreatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  developerCreatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  developerCreatedAt_not?: InputMaybe<Scalars['Int']['input']>;
  developerCreatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayName_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_gt?: InputMaybe<Scalars['String']['input']>;
  displayName_gte?: InputMaybe<Scalars['String']['input']>;
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_lt?: InputMaybe<Scalars['String']['input']>;
  displayName_lte?: InputMaybe<Scalars['String']['input']>;
  displayName_not?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  disputesAgainst_?: InputMaybe<Network__Dispute_Filter>;
  gnsApproval?: InputMaybe<Scalars['BigInt']['input']>;
  gnsApproval_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gnsApproval_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gnsApproval_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gnsApproval_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gnsApproval_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gnsApproval_not?: InputMaybe<Scalars['BigInt']['input']>;
  gnsApproval_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer?: InputMaybe<Scalars['String']['input']>;
  indexer_?: InputMaybe<Network__Indexer_Filter>;
  indexer_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_gt?: InputMaybe<Scalars['String']['input']>;
  indexer_gte?: InputMaybe<Scalars['String']['input']>;
  indexer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_lt?: InputMaybe<Scalars['String']['input']>;
  indexer_lte?: InputMaybe<Scalars['String']['input']>;
  indexer_not?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains?: InputMaybe<Scalars['String']['input']>;
  indexer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  indexer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with?: InputMaybe<Scalars['String']['input']>;
  indexer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  isOrganization?: InputMaybe<Scalars['Boolean']['input']>;
  isOrganization_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isOrganization_not?: InputMaybe<Scalars['Boolean']['input']>;
  isOrganization_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  nameSignalTransactions_?: InputMaybe<Network__NameSignalTransaction_Filter>;
  names_?: InputMaybe<Network__GraphAccountName_Filter>;
  operatorOf_?: InputMaybe<Network__GraphAccount_Filter>;
  operators?: InputMaybe<Array<Scalars['String']['input']>>;
  operators_?: InputMaybe<Network__GraphAccount_Filter>;
  operators_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  operators_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  operators_not?: InputMaybe<Array<Scalars['String']['input']>>;
  operators_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__GraphAccount_Filter>>>;
  stakingApproval?: InputMaybe<Scalars['BigInt']['input']>;
  stakingApproval_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakingApproval_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakingApproval_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakingApproval_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakingApproval_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakingApproval_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakingApproval_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphs_?: InputMaybe<Network__Subgraph_Filter>;
  tokenLockWallets?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenLockWallets_?: InputMaybe<Network__TokenLockWallet_Filter>;
  tokenLockWallets_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenLockWallets_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenLockWallets_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenLockWallets_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenLockWallets_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_gt?: InputMaybe<Scalars['String']['input']>;
  website_gte?: InputMaybe<Scalars['String']['input']>;
  website_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_lt?: InputMaybe<Scalars['String']['input']>;
  website_lte?: InputMaybe<Scalars['String']['input']>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Network__GraphAccount_OrderBy =
  | 'balance'
  | 'balanceReceivedFromL1Delegation'
  | 'balanceReceivedFromL1Signalling'
  | 'bridgeDepositTransactions'
  | 'bridgeWithdrawalTransactions'
  | 'codeRepository'
  | 'createdAt'
  | 'createdDisputes'
  | 'curationApproval'
  | 'curator'
  | 'curator__activeCombinedSignalCount'
  | 'curator__activeNameSignalCount'
  | 'curator__activeSignalCount'
  | 'curator__annualizedReturn'
  | 'curator__combinedSignalCount'
  | 'curator__createdAt'
  | 'curator__defaultDisplayName'
  | 'curator__id'
  | 'curator__nameSignalCount'
  | 'curator__realizedRewards'
  | 'curator__signalCount'
  | 'curator__signalingEfficiency'
  | 'curator__totalAverageCostBasisPerNameSignal'
  | 'curator__totalAverageCostBasisPerSignal'
  | 'curator__totalNameSignal'
  | 'curator__totalNameSignalAverageCostBasis'
  | 'curator__totalNameSignalledTokens'
  | 'curator__totalNameUnsignalledTokens'
  | 'curator__totalReturn'
  | 'curator__totalSignal'
  | 'curator__totalSignalAverageCostBasis'
  | 'curator__totalSignalledTokens'
  | 'curator__totalUnsignalledTokens'
  | 'curator__totalWithdrawnTokens'
  | 'defaultDisplayName'
  | 'defaultName'
  | 'defaultName__id'
  | 'defaultName__name'
  | 'defaultName__nameSystem'
  | 'delegator'
  | 'delegator__activeStakesCount'
  | 'delegator__createdAt'
  | 'delegator__defaultDisplayName'
  | 'delegator__id'
  | 'delegator__stakesCount'
  | 'delegator__totalRealizedRewards'
  | 'delegator__totalStakedTokens'
  | 'delegator__totalUnstakedTokens'
  | 'description'
  | 'developerCreatedAt'
  | 'displayName'
  | 'disputesAgainst'
  | 'gnsApproval'
  | 'id'
  | 'image'
  | 'indexer'
  | 'indexer__allocatedTokens'
  | 'indexer__allocationCount'
  | 'indexer__annualizedReturn'
  | 'indexer__availableStake'
  | 'indexer__createdAt'
  | 'indexer__defaultDisplayName'
  | 'indexer__delegatedCapacity'
  | 'indexer__delegatedStakeRatio'
  | 'indexer__delegatedTokens'
  | 'indexer__delegationExchangeRate'
  | 'indexer__delegatorIndexingRewards'
  | 'indexer__delegatorParameterCooldown'
  | 'indexer__delegatorQueryFees'
  | 'indexer__delegatorShares'
  | 'indexer__firstTransferredToL2At'
  | 'indexer__firstTransferredToL2AtBlockNumber'
  | 'indexer__firstTransferredToL2AtTx'
  | 'indexer__forcedClosures'
  | 'indexer__geoHash'
  | 'indexer__id'
  | 'indexer__idOnL1'
  | 'indexer__idOnL2'
  | 'indexer__indexerIndexingRewards'
  | 'indexer__indexerRewardsOwnGenerationRatio'
  | 'indexer__indexingRewardCut'
  | 'indexer__indexingRewardEffectiveCut'
  | 'indexer__lastDelegationParameterUpdate'
  | 'indexer__lastTransferredToL2At'
  | 'indexer__lastTransferredToL2AtBlockNumber'
  | 'indexer__lastTransferredToL2AtTx'
  | 'indexer__lockedTokens'
  | 'indexer__overDelegationDilution'
  | 'indexer__ownStakeRatio'
  | 'indexer__queryFeeCut'
  | 'indexer__queryFeeEffectiveCut'
  | 'indexer__queryFeeRebates'
  | 'indexer__queryFeesCollected'
  | 'indexer__rewardsEarned'
  | 'indexer__stakedTokens'
  | 'indexer__stakedTokensTransferredToL2'
  | 'indexer__stakingEfficiency'
  | 'indexer__tokenCapacity'
  | 'indexer__tokensLockedUntil'
  | 'indexer__totalAllocationCount'
  | 'indexer__totalReturn'
  | 'indexer__transferredToL2'
  | 'indexer__unstakedTokens'
  | 'indexer__url'
  | 'isOrganization'
  | 'metadataHash'
  | 'nameSignalTransactions'
  | 'names'
  | 'operatorOf'
  | 'operators'
  | 'stakingApproval'
  | 'subgraphQueryFees'
  | 'subgraphs'
  | 'tokenLockWallets'
  | 'website';

/** Graph Network global parameters and contract addresses */
export type Network__GraphNetwork = {
  __typename?: 'NETWORK__GraphNetwork';
  /** NOT IMPLEMENTED - Price of one GRT in ETH */
  GRTinETH?: Maybe<Scalars['NETWORK__BigDecimal']['output']>;
  /** NOT IMPLEMENTED - Price of one GRT in USD */
  GRTinUSD: Scalars['NETWORK__BigDecimal']['output'];
  /** Total amount of curators historically */
  activeCuratorCount: Scalars['Int']['output'];
  /** Total active delegations. Those delegations that still have GRT staked towards an indexer */
  activeDelegationCount: Scalars['Int']['output'];
  /** Total active delegators. Those that still have at least one active delegation. */
  activeDelegatorCount: Scalars['Int']['output'];
  /** Amount of active Subgraph entities */
  activeSubgraphCount: Scalars['Int']['output'];
  /** Dispute arbitrator */
  arbitrator: Scalars['NETWORK__Bytes']['output'];
  /** Asset holder for the protocol */
  assetHolders?: Maybe<Array<Scalars['NETWORK__Bytes']['output']>>;
  /** Epochs to wait before fees can be claimed in rebate pool */
  channelDisputeEpochs: Scalars['Int']['output'];
  /** Controller address */
  controller: Scalars['NETWORK__Bytes']['output'];
  /** Curation address */
  curation: Scalars['NETWORK__Bytes']['output'];
  /** Curation implementations. Last in the array is current */
  curationImplementations: Array<Scalars['NETWORK__Bytes']['output']>;
  /** Percentage of fees going to curators. In parts per million */
  curationPercentage: Scalars['Int']['output'];
  /** The fee charged when a curator withdraws signal. In parts per million */
  curationTaxPercentage: Scalars['Int']['output'];
  /** Total amount of curators historically */
  curatorCount: Scalars['Int']['output'];
  /** Current epoch the protocol is in */
  currentEpoch: Scalars['Int']['output'];
  /** Block number for L1. Only implemented for L2 deployments to properly reflect the L1 block used for timings */
  currentL1BlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Default reserve ratio for all subgraphs. In parts per million */
  defaultReserveRatio: Scalars['Int']['output'];
  /** Total amount of delegations historically */
  delegationCount: Scalars['Int']['output'];
  /** Minimum time an Indexer must use for resetting their Delegation parameters */
  delegationParametersCooldown: Scalars['Int']['output'];
  /** Ratio of max staked delegation tokens to indexers stake that earns rewards */
  delegationRatio: Scalars['Int']['output'];
  /** Tax that delegators pay to deposit. In Parts per million */
  delegationTaxPercentage: Scalars['Int']['output'];
  /** Time in epochs a delegator needs to wait to withdraw delegated stake */
  delegationUnbondingPeriod: Scalars['Int']['output'];
  /** Total amount of delegators historically */
  delegatorCount: Scalars['Int']['output'];
  /** Dispute manager address */
  disputeManager: Scalars['NETWORK__Bytes']['output'];
  /** Total epochs */
  epochCount: Scalars['Int']['output'];
  /** Epoch Length in blocks */
  epochLength: Scalars['Int']['output'];
  /** Epoch manager address */
  epochManager: Scalars['NETWORK__Bytes']['output'];
  /** Epoch Manager implementations. Last in the array is current */
  epochManagerImplementations: Array<Scalars['NETWORK__Bytes']['output']>;
  /** Reward to Fisherman on successful disputes. In parts per million */
  fishermanRewardPercentage: Scalars['Int']['output'];
  /** GNS address */
  gns: Scalars['NETWORK__Bytes']['output'];
  /** Governor of the controller (i.e. the whole protocol) */
  governor: Scalars['NETWORK__Bytes']['output'];
  /** Graph token address */
  graphToken: Scalars['NETWORK__Bytes']['output'];
  /** ID is set to 1 */
  id: Scalars['ID']['output'];
  /** Total indexers */
  indexerCount: Scalars['Int']['output'];
  /** Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  indexingSlashingPercentage: Scalars['Int']['output'];
  /** True if the protocol is partially paused */
  isPartialPaused: Scalars['Boolean']['output'];
  /** True if the protocol is paused */
  isPaused: Scalars['Boolean']['output'];
  /** Block when epoch length was last updated */
  lastLengthUpdateBlock: Scalars['Int']['output'];
  /** Epoch when epoch length was last updated */
  lastLengthUpdateEpoch: Scalars['Int']['output'];
  /** Epoch that was last run */
  lastRunEpoch: Scalars['Int']['output'];
  /** Epochs to wait before delegators can settle */
  maxAllocationEpochs: Scalars['Int']['output'];
  /** Minimum amount of tokens needed to start curating */
  minimumCurationDeposit: Scalars['BigInt']['output'];
  /** Minimum deposit to create a dispute */
  minimumDisputeDeposit: Scalars['BigInt']['output'];
  /** Minimum GRT an indexer must stake */
  minimumIndexerStake: Scalars['BigInt']['output'];
  /** (Deprecated) The issuance rate of GRT per block before GIP-0037. To get annual rate do (networkGRTIssuance * 10^-18)^(blocksPerYear) */
  networkGRTIssuance: Scalars['BigInt']['output'];
  /** The issuance rate of GRT per block after GIP-0037. To get annual rate do (networkGRTIssuancePerBlock * blocksPerYear) */
  networkGRTIssuancePerBlock: Scalars['BigInt']['output'];
  /** Percentage of the GNS migration tax payed by the subgraph owner */
  ownerTaxPercentage: Scalars['Int']['output'];
  /** Pause guardian address */
  pauseGuardian: Scalars['NETWORK__Bytes']['output'];
  /** Percentage of fees burn as protocol fee. In parts per million */
  protocolFeePercentage: Scalars['Int']['output'];
  /** Penalty to Indexer on successful disputes for query disputes. In parts per million */
  querySlashingPercentage: Scalars['Int']['output'];
  /** Alpha in the cobbs douglas formula */
  rebateRatio: Scalars['NETWORK__BigDecimal']['output'];
  /** Rewards manager address */
  rewardsManager: Scalars['NETWORK__Bytes']['output'];
  /** Rewards Manager implementations. Last in the array is current */
  rewardsManagerImplementations: Array<Scalars['NETWORK__Bytes']['output']>;
  /** Service registry address */
  serviceRegistry: Scalars['NETWORK__Bytes']['output'];
  /** Contracts that have been approved to be a slasher */
  slashers?: Maybe<Array<Scalars['NETWORK__Bytes']['output']>>;
  /** [DEPRECATED] Penalty to Indexer on successful disputes for indexing disputes. In parts per million */
  slashingPercentage: Scalars['Int']['output'];
  /** Number of indexers that currently have some stake in the protocol */
  stakedIndexersCount: Scalars['Int']['output'];
  /** Staking address */
  staking: Scalars['NETWORK__Bytes']['output'];
  /** Graph token implementations. Last in the array is current */
  stakingImplementations: Array<Scalars['NETWORK__Bytes']['output']>;
  /** Address of the availability oracle */
  subgraphAvailabilityOracle: Scalars['NETWORK__Bytes']['output'];
  /** Total amount of Subgraph entities */
  subgraphCount: Scalars['Int']['output'];
  /** Total amount of SubgraphDeployment entities */
  subgraphDeploymentCount: Scalars['Int']['output'];
  /** Time in blocks needed to wait to unstake */
  thawingPeriod: Scalars['Int']['output'];
  /** Total query fees payed to curators */
  totalCuratorQueryFees: Scalars['BigInt']['output'];
  /** Total delegated tokens in the protocol */
  totalDelegatedTokens: Scalars['BigInt']['output'];
  /** Total query fees rebates claimed by delegators */
  totalDelegatorQueryFeeRebates: Scalars['BigInt']['output'];
  /** Total amount of GRT burned */
  totalGRTBurned: Scalars['BigInt']['output'];
  /** Total amount of GRT deposited to the L1 gateway. Note that the actual amount claimed in L2 might be lower due to tickets not redeemed. */
  totalGRTDeposited: Scalars['BigInt']['output'];
  /** Total amount of GRT deposited to the L1 gateway and redeemed in L2. */
  totalGRTDepositedConfirmed: Scalars['BigInt']['output'];
  /** Total amount of GRT minted */
  totalGRTMinted: Scalars['BigInt']['output'];
  /** Total amount of GRT minted by L1 bridge */
  totalGRTMintedFromL2: Scalars['BigInt']['output'];
  /** Total amount of GRT withdrawn from the L2 gateway. Note that the actual amount claimed in L1 might be lower due to outbound transactions not finalized. */
  totalGRTWithdrawn: Scalars['BigInt']['output'];
  /** Total amount of GRT withdrawn from the L2 gateway and claimed in L1. */
  totalGRTWithdrawnConfirmed: Scalars['BigInt']['output'];
  /** Total query fees rebates claimed by indexers */
  totalIndexerQueryFeeRebates: Scalars['BigInt']['output'];
  /** Total query fees collected by indexers */
  totalIndexerQueryFeesCollected: Scalars['BigInt']['output'];
  /** Total indexing rewards minted to Delegators */
  totalIndexingDelegatorRewards: Scalars['BigInt']['output'];
  /** Total indexing rewards minted to Indexers */
  totalIndexingIndexerRewards: Scalars['BigInt']['output'];
  /** Total indexing rewards minted */
  totalIndexingRewards: Scalars['BigInt']['output'];
  /** Total query fees generated in the network */
  totalQueryFees: Scalars['BigInt']['output'];
  /** Graph Token supply */
  totalSupply: Scalars['BigInt']['output'];
  /** Total protocol taxes applied to the query fees */
  totalTaxedQueryFees: Scalars['BigInt']['output'];
  /** Total GRT currently in allocation */
  totalTokensAllocated: Scalars['BigInt']['output'];
  /** NOT IMPLEMENTED - Total tokens that are settled and waiting to be claimed */
  totalTokensClaimable: Scalars['BigInt']['output'];
  /** The total amount of GRT signalled in the Curation contract */
  totalTokensSignalled: Scalars['BigInt']['output'];
  /** Total GRT currently curating via the Auto-Migrate function */
  totalTokensSignalledAutoMigrate: Scalars['NETWORK__BigDecimal']['output'];
  /** Total GRT currently curating to a specific version */
  totalTokensSignalledDirectly: Scalars['NETWORK__BigDecimal']['output'];
  /** The total amount of GRT staked in the staking contract */
  totalTokensStaked: Scalars['BigInt']['output'];
  /** Total unclaimed rebates. Includes unclaimed rebates, and rebates lost in cobbs douglas  */
  totalUnclaimedQueryFeeRebates: Scalars['BigInt']['output'];
  /** Total tokens that are currently locked or withdrawable in the network from unstaking */
  totalUnstakedTokensLocked: Scalars['BigInt']['output'];
};

export type Network__GraphNetwork_Filter = {
  GRTinETH?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinETH_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinETH_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinETH_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  GRTinETH_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinETH_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinETH_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinETH_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  GRTinUSD?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinUSD_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinUSD_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinUSD_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  GRTinUSD_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinUSD_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinUSD_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  GRTinUSD_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  activeCuratorCount?: InputMaybe<Scalars['Int']['input']>;
  activeCuratorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeCuratorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeCuratorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeCuratorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeCuratorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeCuratorCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeCuratorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeDelegationCount?: InputMaybe<Scalars['Int']['input']>;
  activeDelegationCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeDelegationCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeDelegationCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeDelegationCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeDelegationCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeDelegationCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeDelegationCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeDelegatorCount?: InputMaybe<Scalars['Int']['input']>;
  activeDelegatorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeDelegatorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeDelegatorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeDelegatorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeDelegatorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeDelegatorCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeDelegatorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__GraphNetwork_Filter>>>;
  arbitrator?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  arbitrator_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  assetHolders?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  assetHolders_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  assetHolders_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  assetHolders_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  assetHolders_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  assetHolders_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  channelDisputeEpochs?: InputMaybe<Scalars['Int']['input']>;
  channelDisputeEpochs_gt?: InputMaybe<Scalars['Int']['input']>;
  channelDisputeEpochs_gte?: InputMaybe<Scalars['Int']['input']>;
  channelDisputeEpochs_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  channelDisputeEpochs_lt?: InputMaybe<Scalars['Int']['input']>;
  channelDisputeEpochs_lte?: InputMaybe<Scalars['Int']['input']>;
  channelDisputeEpochs_not?: InputMaybe<Scalars['Int']['input']>;
  channelDisputeEpochs_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  controller?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  controller_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  controller_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curation?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curationImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curationImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curationImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curationImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curationImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curationImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curationPercentage?: InputMaybe<Scalars['Int']['input']>;
  curationPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  curationPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  curationPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  curationPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  curationPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  curationPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  curationPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  curationTaxPercentage?: InputMaybe<Scalars['Int']['input']>;
  curationTaxPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  curationTaxPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  curationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  curationTaxPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  curationTaxPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  curationTaxPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  curationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  curation_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curation_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curation_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curation_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curation_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curation_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curation_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curation_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  curation_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  curatorCount?: InputMaybe<Scalars['Int']['input']>;
  curatorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  curatorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  curatorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  curatorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  curatorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  curatorCount_not?: InputMaybe<Scalars['Int']['input']>;
  curatorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentEpoch?: InputMaybe<Scalars['Int']['input']>;
  currentEpoch_gt?: InputMaybe<Scalars['Int']['input']>;
  currentEpoch_gte?: InputMaybe<Scalars['Int']['input']>;
  currentEpoch_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentEpoch_lt?: InputMaybe<Scalars['Int']['input']>;
  currentEpoch_lte?: InputMaybe<Scalars['Int']['input']>;
  currentEpoch_not?: InputMaybe<Scalars['Int']['input']>;
  currentEpoch_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  currentL1BlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  currentL1BlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentL1BlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentL1BlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentL1BlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentL1BlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentL1BlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentL1BlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  defaultReserveRatio?: InputMaybe<Scalars['Int']['input']>;
  defaultReserveRatio_gt?: InputMaybe<Scalars['Int']['input']>;
  defaultReserveRatio_gte?: InputMaybe<Scalars['Int']['input']>;
  defaultReserveRatio_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  defaultReserveRatio_lt?: InputMaybe<Scalars['Int']['input']>;
  defaultReserveRatio_lte?: InputMaybe<Scalars['Int']['input']>;
  defaultReserveRatio_not?: InputMaybe<Scalars['Int']['input']>;
  defaultReserveRatio_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationCount?: InputMaybe<Scalars['Int']['input']>;
  delegationCount_gt?: InputMaybe<Scalars['Int']['input']>;
  delegationCount_gte?: InputMaybe<Scalars['Int']['input']>;
  delegationCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationCount_lt?: InputMaybe<Scalars['Int']['input']>;
  delegationCount_lte?: InputMaybe<Scalars['Int']['input']>;
  delegationCount_not?: InputMaybe<Scalars['Int']['input']>;
  delegationCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationParametersCooldown?: InputMaybe<Scalars['Int']['input']>;
  delegationParametersCooldown_gt?: InputMaybe<Scalars['Int']['input']>;
  delegationParametersCooldown_gte?: InputMaybe<Scalars['Int']['input']>;
  delegationParametersCooldown_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationParametersCooldown_lt?: InputMaybe<Scalars['Int']['input']>;
  delegationParametersCooldown_lte?: InputMaybe<Scalars['Int']['input']>;
  delegationParametersCooldown_not?: InputMaybe<Scalars['Int']['input']>;
  delegationParametersCooldown_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationRatio?: InputMaybe<Scalars['Int']['input']>;
  delegationRatio_gt?: InputMaybe<Scalars['Int']['input']>;
  delegationRatio_gte?: InputMaybe<Scalars['Int']['input']>;
  delegationRatio_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationRatio_lt?: InputMaybe<Scalars['Int']['input']>;
  delegationRatio_lte?: InputMaybe<Scalars['Int']['input']>;
  delegationRatio_not?: InputMaybe<Scalars['Int']['input']>;
  delegationRatio_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationTaxPercentage?: InputMaybe<Scalars['Int']['input']>;
  delegationTaxPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  delegationTaxPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  delegationTaxPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationTaxPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  delegationTaxPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  delegationTaxPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  delegationTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationUnbondingPeriod?: InputMaybe<Scalars['Int']['input']>;
  delegationUnbondingPeriod_gt?: InputMaybe<Scalars['Int']['input']>;
  delegationUnbondingPeriod_gte?: InputMaybe<Scalars['Int']['input']>;
  delegationUnbondingPeriod_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegationUnbondingPeriod_lt?: InputMaybe<Scalars['Int']['input']>;
  delegationUnbondingPeriod_lte?: InputMaybe<Scalars['Int']['input']>;
  delegationUnbondingPeriod_not?: InputMaybe<Scalars['Int']['input']>;
  delegationUnbondingPeriod_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorCount?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  disputeManager?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  disputeManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  disputeManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochCount?: InputMaybe<Scalars['Int']['input']>;
  epochCount_gt?: InputMaybe<Scalars['Int']['input']>;
  epochCount_gte?: InputMaybe<Scalars['Int']['input']>;
  epochCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  epochCount_lt?: InputMaybe<Scalars['Int']['input']>;
  epochCount_lte?: InputMaybe<Scalars['Int']['input']>;
  epochCount_not?: InputMaybe<Scalars['Int']['input']>;
  epochCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  epochLength?: InputMaybe<Scalars['Int']['input']>;
  epochLength_gt?: InputMaybe<Scalars['Int']['input']>;
  epochLength_gte?: InputMaybe<Scalars['Int']['input']>;
  epochLength_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  epochLength_lt?: InputMaybe<Scalars['Int']['input']>;
  epochLength_lte?: InputMaybe<Scalars['Int']['input']>;
  epochLength_not?: InputMaybe<Scalars['Int']['input']>;
  epochLength_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  epochManager?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManagerImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochManagerImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochManagerImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochManagerImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  epochManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManager_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  epochManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  fishermanRewardPercentage?: InputMaybe<Scalars['Int']['input']>;
  fishermanRewardPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  fishermanRewardPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  fishermanRewardPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fishermanRewardPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  fishermanRewardPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  fishermanRewardPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  fishermanRewardPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  gns?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  gns_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  gns_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  governor?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  governor_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  governor_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  graphToken?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  graphToken_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  graphToken_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexerCount?: InputMaybe<Scalars['Int']['input']>;
  indexerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  indexerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  indexerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  indexerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  indexerCount_not?: InputMaybe<Scalars['Int']['input']>;
  indexerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingSlashingPercentage?: InputMaybe<Scalars['Int']['input']>;
  indexingSlashingPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  indexingSlashingPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  indexingSlashingPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingSlashingPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  indexingSlashingPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  indexingSlashingPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  indexingSlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isPartialPaused?: InputMaybe<Scalars['Boolean']['input']>;
  isPartialPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPartialPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPartialPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lastLengthUpdateBlock?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastLengthUpdateBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateBlock_not?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastLengthUpdateEpoch?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateEpoch_gt?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateEpoch_gte?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateEpoch_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastLengthUpdateEpoch_lt?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateEpoch_lte?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateEpoch_not?: InputMaybe<Scalars['Int']['input']>;
  lastLengthUpdateEpoch_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastRunEpoch?: InputMaybe<Scalars['Int']['input']>;
  lastRunEpoch_gt?: InputMaybe<Scalars['Int']['input']>;
  lastRunEpoch_gte?: InputMaybe<Scalars['Int']['input']>;
  lastRunEpoch_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastRunEpoch_lt?: InputMaybe<Scalars['Int']['input']>;
  lastRunEpoch_lte?: InputMaybe<Scalars['Int']['input']>;
  lastRunEpoch_not?: InputMaybe<Scalars['Int']['input']>;
  lastRunEpoch_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxAllocationEpochs?: InputMaybe<Scalars['Int']['input']>;
  maxAllocationEpochs_gt?: InputMaybe<Scalars['Int']['input']>;
  maxAllocationEpochs_gte?: InputMaybe<Scalars['Int']['input']>;
  maxAllocationEpochs_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxAllocationEpochs_lt?: InputMaybe<Scalars['Int']['input']>;
  maxAllocationEpochs_lte?: InputMaybe<Scalars['Int']['input']>;
  maxAllocationEpochs_not?: InputMaybe<Scalars['Int']['input']>;
  maxAllocationEpochs_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minimumCurationDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  minimumCurationDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumCurationDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumCurationDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumCurationDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumCurationDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumCurationDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumCurationDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDisputeDeposit?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDisputeDeposit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDisputeDeposit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDisputeDeposit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumDisputeDeposit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDisputeDeposit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDisputeDeposit_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumDisputeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumIndexerStake?: InputMaybe<Scalars['BigInt']['input']>;
  minimumIndexerStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumIndexerStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumIndexerStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumIndexerStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumIndexerStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumIndexerStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumIndexerStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkGRTIssuance?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuancePerBlock?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuancePerBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuancePerBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuancePerBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkGRTIssuancePerBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuancePerBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuancePerBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuancePerBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkGRTIssuance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkGRTIssuance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuance_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkGRTIssuance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__GraphNetwork_Filter>>>;
  ownerTaxPercentage?: InputMaybe<Scalars['Int']['input']>;
  ownerTaxPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  ownerTaxPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  ownerTaxPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  ownerTaxPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  ownerTaxPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  ownerTaxPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  ownerTaxPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pauseGuardian?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  pauseGuardian_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  pauseGuardian_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  protocolFeePercentage?: InputMaybe<Scalars['Int']['input']>;
  protocolFeePercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  protocolFeePercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  protocolFeePercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolFeePercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  protocolFeePercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  protocolFeePercentage_not?: InputMaybe<Scalars['Int']['input']>;
  protocolFeePercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  querySlashingPercentage?: InputMaybe<Scalars['Int']['input']>;
  querySlashingPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  querySlashingPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  querySlashingPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  querySlashingPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  querySlashingPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  querySlashingPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  querySlashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rebateRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  rebateRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  rebateRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  rebateRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  rebateRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  rebateRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  rebateRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  rebateRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  rewardsManager?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManagerImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  rewardsManagerImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  rewardsManagerImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  rewardsManagerImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  rewardsManagerImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  rewardsManagerImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  rewardsManager_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManager_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManager_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  rewardsManager_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManager_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManager_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  rewardsManager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  serviceRegistry?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  serviceRegistry_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  serviceRegistry_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  slashers?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  slashers_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  slashers_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  slashers_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  slashers_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  slashers_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  slashingPercentage?: InputMaybe<Scalars['Int']['input']>;
  slashingPercentage_gt?: InputMaybe<Scalars['Int']['input']>;
  slashingPercentage_gte?: InputMaybe<Scalars['Int']['input']>;
  slashingPercentage_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  slashingPercentage_lt?: InputMaybe<Scalars['Int']['input']>;
  slashingPercentage_lte?: InputMaybe<Scalars['Int']['input']>;
  slashingPercentage_not?: InputMaybe<Scalars['Int']['input']>;
  slashingPercentage_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakedIndexersCount?: InputMaybe<Scalars['Int']['input']>;
  stakedIndexersCount_gt?: InputMaybe<Scalars['Int']['input']>;
  stakedIndexersCount_gte?: InputMaybe<Scalars['Int']['input']>;
  stakedIndexersCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakedIndexersCount_lt?: InputMaybe<Scalars['Int']['input']>;
  stakedIndexersCount_lte?: InputMaybe<Scalars['Int']['input']>;
  stakedIndexersCount_not?: InputMaybe<Scalars['Int']['input']>;
  stakedIndexersCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  staking?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  stakingImplementations?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  stakingImplementations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  stakingImplementations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  stakingImplementations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  stakingImplementations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  stakingImplementations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  staking_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  staking_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  staking_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  staking_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  staking_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  staking_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  staking_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  staking_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  staking_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  subgraphAvailabilityOracle?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  subgraphAvailabilityOracle_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  subgraphAvailabilityOracle_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  subgraphCount?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  subgraphDeploymentCount?: InputMaybe<Scalars['Int']['input']>;
  subgraphDeploymentCount_gt?: InputMaybe<Scalars['Int']['input']>;
  subgraphDeploymentCount_gte?: InputMaybe<Scalars['Int']['input']>;
  subgraphDeploymentCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  subgraphDeploymentCount_lt?: InputMaybe<Scalars['Int']['input']>;
  subgraphDeploymentCount_lte?: InputMaybe<Scalars['Int']['input']>;
  subgraphDeploymentCount_not?: InputMaybe<Scalars['Int']['input']>;
  subgraphDeploymentCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  thawingPeriod?: InputMaybe<Scalars['Int']['input']>;
  thawingPeriod_gt?: InputMaybe<Scalars['Int']['input']>;
  thawingPeriod_gte?: InputMaybe<Scalars['Int']['input']>;
  thawingPeriod_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  thawingPeriod_lt?: InputMaybe<Scalars['Int']['input']>;
  thawingPeriod_lte?: InputMaybe<Scalars['Int']['input']>;
  thawingPeriod_not?: InputMaybe<Scalars['Int']['input']>;
  thawingPeriod_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalCuratorQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalCuratorQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCuratorQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCuratorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCuratorQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCuratorQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCuratorQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCuratorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatorQueryFeeRebates?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatorQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatorQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTBurned?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTBurned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTBurned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTBurned_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTBurned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTBurned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTBurned_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTBurned_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTDeposited?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDepositedConfirmed?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDepositedConfirmed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDepositedConfirmed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDepositedConfirmed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTDepositedConfirmed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDepositedConfirmed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDepositedConfirmed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDepositedConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTDeposited_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDeposited_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDeposited_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTDeposited_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDeposited_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDeposited_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTMinted?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMintedFromL2?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMintedFromL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMintedFromL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMintedFromL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTMintedFromL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMintedFromL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMintedFromL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMintedFromL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTMinted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMinted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMinted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTMinted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMinted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMinted_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTMinted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTWithdrawn?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawnConfirmed?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawnConfirmed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawnConfirmed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawnConfirmed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTWithdrawnConfirmed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawnConfirmed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawnConfirmed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawnConfirmed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTWithdrawn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalGRTWithdrawn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawn_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalGRTWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexerQueryFeeRebates?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexerQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexerQueryFeesCollected?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeesCollected_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeesCollected_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexerQueryFeesCollected_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeesCollected_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeesCollected_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexerQueryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexingDelegatorRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingDelegatorRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingDelegatorRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingDelegatorRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexingDelegatorRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingDelegatorRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingDelegatorRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingDelegatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexingIndexerRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingIndexerRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingIndexerRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingIndexerRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexingIndexerRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingIndexerRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingIndexerRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingIndexerRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexingRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalIndexingRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTaxedQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalTaxedQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTaxedQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTaxedQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTaxedQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTaxedQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTaxedQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTaxedQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensAllocated?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensAllocated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensAllocated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensAllocated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensAllocated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensAllocated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensAllocated_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensAllocated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensClaimable?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensClaimable_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensClaimable_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensClaimable_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensClaimable_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensClaimable_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensClaimable_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensClaimable_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensSignalled?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensSignalledAutoMigrate?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledAutoMigrate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledAutoMigrate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledAutoMigrate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalTokensSignalledAutoMigrate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledAutoMigrate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledAutoMigrate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledAutoMigrate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalTokensSignalledDirectly?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledDirectly_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledDirectly_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledDirectly_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalTokensSignalledDirectly_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledDirectly_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledDirectly_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalTokensSignalledDirectly_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalTokensSignalled_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensSignalled_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensSignalled_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensSignalled_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensSignalled_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensSignalled_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensSignalled_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensStaked?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensStaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensStaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensStaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensStaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensStaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensStaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensStaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnclaimedQueryFeeRebates?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnclaimedQueryFeeRebates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnclaimedQueryFeeRebates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnclaimedQueryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnclaimedQueryFeeRebates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnclaimedQueryFeeRebates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnclaimedQueryFeeRebates_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnclaimedQueryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnstakedTokensLocked?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokensLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokensLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokensLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalUnstakedTokensLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokensLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokensLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalUnstakedTokensLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__GraphNetwork_OrderBy =
  | 'GRTinETH'
  | 'GRTinUSD'
  | 'activeCuratorCount'
  | 'activeDelegationCount'
  | 'activeDelegatorCount'
  | 'activeSubgraphCount'
  | 'arbitrator'
  | 'assetHolders'
  | 'channelDisputeEpochs'
  | 'controller'
  | 'curation'
  | 'curationImplementations'
  | 'curationPercentage'
  | 'curationTaxPercentage'
  | 'curatorCount'
  | 'currentEpoch'
  | 'currentL1BlockNumber'
  | 'defaultReserveRatio'
  | 'delegationCount'
  | 'delegationParametersCooldown'
  | 'delegationRatio'
  | 'delegationTaxPercentage'
  | 'delegationUnbondingPeriod'
  | 'delegatorCount'
  | 'disputeManager'
  | 'epochCount'
  | 'epochLength'
  | 'epochManager'
  | 'epochManagerImplementations'
  | 'fishermanRewardPercentage'
  | 'gns'
  | 'governor'
  | 'graphToken'
  | 'id'
  | 'indexerCount'
  | 'indexingSlashingPercentage'
  | 'isPartialPaused'
  | 'isPaused'
  | 'lastLengthUpdateBlock'
  | 'lastLengthUpdateEpoch'
  | 'lastRunEpoch'
  | 'maxAllocationEpochs'
  | 'minimumCurationDeposit'
  | 'minimumDisputeDeposit'
  | 'minimumIndexerStake'
  | 'networkGRTIssuance'
  | 'networkGRTIssuancePerBlock'
  | 'ownerTaxPercentage'
  | 'pauseGuardian'
  | 'protocolFeePercentage'
  | 'querySlashingPercentage'
  | 'rebateRatio'
  | 'rewardsManager'
  | 'rewardsManagerImplementations'
  | 'serviceRegistry'
  | 'slashers'
  | 'slashingPercentage'
  | 'stakedIndexersCount'
  | 'staking'
  | 'stakingImplementations'
  | 'subgraphAvailabilityOracle'
  | 'subgraphCount'
  | 'subgraphDeploymentCount'
  | 'thawingPeriod'
  | 'totalCuratorQueryFees'
  | 'totalDelegatedTokens'
  | 'totalDelegatorQueryFeeRebates'
  | 'totalGRTBurned'
  | 'totalGRTDeposited'
  | 'totalGRTDepositedConfirmed'
  | 'totalGRTMinted'
  | 'totalGRTMintedFromL2'
  | 'totalGRTWithdrawn'
  | 'totalGRTWithdrawnConfirmed'
  | 'totalIndexerQueryFeeRebates'
  | 'totalIndexerQueryFeesCollected'
  | 'totalIndexingDelegatorRewards'
  | 'totalIndexingIndexerRewards'
  | 'totalIndexingRewards'
  | 'totalQueryFees'
  | 'totalSupply'
  | 'totalTaxedQueryFees'
  | 'totalTokensAllocated'
  | 'totalTokensClaimable'
  | 'totalTokensSignalled'
  | 'totalTokensSignalledAutoMigrate'
  | 'totalTokensSignalledDirectly'
  | 'totalTokensStaked'
  | 'totalUnclaimedQueryFeeRebates'
  | 'totalUnstakedTokensLocked';

/** Metadata for the Indexer along with parameters and staking data */
export type Network__Indexer = {
  __typename?: 'NETWORK__Indexer';
  /** Graph account of this indexer */
  account: Network__GraphAccount;
  /** CURRENT  tokens allocated on all subgraphs */
  allocatedTokens: Scalars['BigInt']['output'];
  /** Number of active allocations of stake for this Indexer */
  allocationCount: Scalars['Int']['output'];
  /** Active allocations of stake for this Indexer */
  allocations: Array<Network__Allocation>;
  /** NOT IMPLEMENTED - Annualized rate of return for the indexer */
  annualizedReturn: Scalars['NETWORK__BigDecimal']['output'];
  /** Stake available to earn rewards. tokenCapacity - allocationTokens - lockedTokens */
  availableStake: Scalars['BigInt']['output'];
  /** Time this indexer was created */
  createdAt: Scalars['Int']['output'];
  /** Default display name is the current default name. Used for filtered queries */
  defaultDisplayName?: Maybe<Scalars['String']['output']>;
  /** Amount of delegated tokens that can be eligible for rewards */
  delegatedCapacity: Scalars['BigInt']['output'];
  /** Ratio between the amount of delegated stake over the total usable stake. */
  delegatedStakeRatio: Scalars['NETWORK__BigDecimal']['output'];
  /** CURRENT tokens delegated to the indexer */
  delegatedTokens: Scalars['BigInt']['output'];
  /** Exchange rate of of tokens received for each share */
  delegationExchangeRate: Scalars['NETWORK__BigDecimal']['output'];
  /** The total amount of indexing rewards given to delegators */
  delegatorIndexingRewards: Scalars['BigInt']['output'];
  /** Amount of blocks a delegator chooses for the waiting period for changing their params */
  delegatorParameterCooldown: Scalars['Int']['output'];
  /** The total amount of query fees given to delegators */
  delegatorQueryFees: Scalars['BigInt']['output'];
  /** Total shares of the delegator pool */
  delegatorShares: Scalars['BigInt']['output'];
  /** Delegators to this Indexer */
  delegators: Array<Network__DelegatedStake>;
  /** Timestamp for the FIRST L1 -> L2 Transfer */
  firstTransferredToL2At?: Maybe<Scalars['BigInt']['output']>;
  /** Block number for the FIRST L1 -> L2 Transfer */
  firstTransferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Transaction hash for the FIRST L1 -> L2 Transfer */
  firstTransferredToL2AtTx?: Maybe<Scalars['String']['output']>;
  /** Count of how many times this indexer has been forced to close an allocation */
  forcedClosures: Scalars['Int']['output'];
  /** Geohash of the indexer. Shows where their indexer is located in the world */
  geoHash?: Maybe<Scalars['String']['output']>;
  /** Eth address of Indexer */
  id: Scalars['ID']['output'];
  /** ID of the indexer on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']['output']>;
  /** ID of the indexer on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']['output']>;
  /** The total amount of indexing rewards the indexer kept */
  indexerIndexingRewards: Scalars['BigInt']['output'];
  /** Percentage of indexers' own rewards received in relation to its own stake. 1 (100%) means that the indexer is receiving the exact amount that is generated by his own stake */
  indexerRewardsOwnGenerationRatio: Scalars['NETWORK__BigDecimal']['output'];
  /** The percent of indexing rewards generated by the total stake that the Indexer keeps for itself. In parts per million */
  indexingRewardCut: Scalars['Int']['output'];
  /** The percent of indexing rewards generated by the delegated stake that the Indexer keeps for itself */
  indexingRewardEffectiveCut: Scalars['NETWORK__BigDecimal']['output'];
  /** Block number for the last time the delegator updated their parameters */
  lastDelegationParameterUpdate: Scalars['Int']['output'];
  /** Timestamp for the latest L1 -> L2 Transfer */
  lastTransferredToL2At?: Maybe<Scalars['BigInt']['output']>;
  /** Block number for the latest L1 -> L2 Transfer */
  lastTransferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Transaction hash for the latest L1 -> L2 Transfer */
  lastTransferredToL2AtTx?: Maybe<Scalars['String']['output']>;
  /** CURRENT tokens locked */
  lockedTokens: Scalars['BigInt']['output'];
  /** The percent of reward dilution delegators experience because of overdelegation. Overdelegated stake can't be used to generate rewards but still gets accounted while distributing the generated rewards. This causes dilution of the rewards for the rest of the pool. */
  overDelegationDilution: Scalars['NETWORK__BigDecimal']['output'];
  /** Ratio between the amount of the indexers own stake over the total usable stake. */
  ownStakeRatio: Scalars['NETWORK__BigDecimal']['output'];
  /** The percent of query rebate rewards the Indexer keeps for itself. In parts per million */
  queryFeeCut: Scalars['Int']['output'];
  /** The percent of query rebate rewards generated by the delegated stake that the Indexer keeps for itself */
  queryFeeEffectiveCut: Scalars['NETWORK__BigDecimal']['output'];
  /** Query fee rebate amount claimed from the protocol through cobbs douglas. Does not include portion given to delegators */
  queryFeeRebates: Scalars['BigInt']['output'];
  /** Total query fees collected. Includes the portion given to delegators */
  queryFeesCollected: Scalars['BigInt']['output'];
  /** Total indexing rewards earned by this indexer from inflation. Including delegation rewards */
  rewardsEarned: Scalars['BigInt']['output'];
  /** CURRENT tokens staked in the protocol. Decreases on withdraw, not on lock */
  stakedTokens: Scalars['BigInt']['output'];
  /** Amount of GRT transferred to L2. Only visible from L1, as there's no events for it on L2 */
  stakedTokensTransferredToL2: Scalars['BigInt']['output'];
  /** NOT IMPLEMENTED - Staking efficiency of the indexer */
  stakingEfficiency: Scalars['NETWORK__BigDecimal']['output'];
  /** Total token capacity = delegatedCapacity + stakedTokens */
  tokenCapacity: Scalars['BigInt']['output'];
  /** The block when the Indexers tokens unlock */
  tokensLockedUntil: Scalars['Int']['output'];
  /** All allocations for this Indexer (i.e. closed and active) */
  totalAllocationCount: Scalars['BigInt']['output'];
  /** All allocations of stake for this Indexer (i.e. closed and active) */
  totalAllocations: Array<Network__Allocation>;
  /** NOT IMPLEMENTED - Total return this indexer has earned */
  totalReturn: Scalars['NETWORK__BigDecimal']['output'];
  /** Whether the indexer has been transferred from L1 to L2 partially or fully */
  transferredToL2: Scalars['Boolean']['output'];
  /** NOT IMPLEMENTED - Tokens that have been unstaked and withdrawn */
  unstakedTokens: Scalars['BigInt']['output'];
  /** Service registry URL for the indexer */
  url?: Maybe<Scalars['String']['output']>;
};

/** Metadata for the Indexer along with parameters and staking data */
export type Network__IndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};

/** Metadata for the Indexer along with parameters and staking data */
export type Network__IndexerDelegatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};

/** Metadata for the Indexer along with parameters and staking data */
export type Network__IndexerTotalAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};

export type Network__Indexer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Network__GraphAccount_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocatedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  allocatedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  allocatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  allocationCount?: InputMaybe<Scalars['Int']['input']>;
  allocationCount_gt?: InputMaybe<Scalars['Int']['input']>;
  allocationCount_gte?: InputMaybe<Scalars['Int']['input']>;
  allocationCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  allocationCount_lt?: InputMaybe<Scalars['Int']['input']>;
  allocationCount_lte?: InputMaybe<Scalars['Int']['input']>;
  allocationCount_not?: InputMaybe<Scalars['Int']['input']>;
  allocationCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  allocations_?: InputMaybe<Network__Allocation_Filter>;
  and?: InputMaybe<Array<InputMaybe<Network__Indexer_Filter>>>;
  annualizedReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  annualizedReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  annualizedReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  availableStake?: InputMaybe<Scalars['BigInt']['input']>;
  availableStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  availableStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  availableStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  availableStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  availableStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  availableStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  availableStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  defaultDisplayName?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_gte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_lt?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_lte?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  defaultDisplayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  defaultDisplayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatedCapacity?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedCapacity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedCapacity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedCapacity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedCapacity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedCapacity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedCapacity_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedStakeRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegatedStakeRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegatedStakeRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegatedStakeRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  delegatedStakeRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegatedStakeRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegatedStakeRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegatedStakeRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  delegatedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegationExchangeRate?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegationExchangeRate_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegationExchangeRate_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegationExchangeRate_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  delegationExchangeRate_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegationExchangeRate_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegationExchangeRate_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  delegationExchangeRate_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  delegatorIndexingRewards?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorIndexingRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorIndexingRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorIndexingRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorIndexingRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorIndexingRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorParameterCooldown?: InputMaybe<Scalars['Int']['input']>;
  delegatorParameterCooldown_gt?: InputMaybe<Scalars['Int']['input']>;
  delegatorParameterCooldown_gte?: InputMaybe<Scalars['Int']['input']>;
  delegatorParameterCooldown_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorParameterCooldown_lt?: InputMaybe<Scalars['Int']['input']>;
  delegatorParameterCooldown_lte?: InputMaybe<Scalars['Int']['input']>;
  delegatorParameterCooldown_not?: InputMaybe<Scalars['Int']['input']>;
  delegatorParameterCooldown_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorShares?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorShares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorShares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorShares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatorShares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorShares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorShares_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatorShares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegators_?: InputMaybe<Network__DelegatedStake_Filter>;
  firstTransferredToL2At?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  firstTransferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  firstTransferredToL2AtTx?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_contains?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_gt?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_gte?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  firstTransferredToL2AtTx_lt?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_lte?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_not?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  firstTransferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  firstTransferredToL2At_gt?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2At_gte?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  firstTransferredToL2At_lt?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2At_lte?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2At_not?: InputMaybe<Scalars['BigInt']['input']>;
  firstTransferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forcedClosures?: InputMaybe<Scalars['Int']['input']>;
  forcedClosures_gt?: InputMaybe<Scalars['Int']['input']>;
  forcedClosures_gte?: InputMaybe<Scalars['Int']['input']>;
  forcedClosures_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  forcedClosures_lt?: InputMaybe<Scalars['Int']['input']>;
  forcedClosures_lte?: InputMaybe<Scalars['Int']['input']>;
  forcedClosures_not?: InputMaybe<Scalars['Int']['input']>;
  forcedClosures_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  geoHash?: InputMaybe<Scalars['String']['input']>;
  geoHash_contains?: InputMaybe<Scalars['String']['input']>;
  geoHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geoHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  geoHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geoHash_gt?: InputMaybe<Scalars['String']['input']>;
  geoHash_gte?: InputMaybe<Scalars['String']['input']>;
  geoHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geoHash_lt?: InputMaybe<Scalars['String']['input']>;
  geoHash_lte?: InputMaybe<Scalars['String']['input']>;
  geoHash_not?: InputMaybe<Scalars['String']['input']>;
  geoHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  geoHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  geoHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  geoHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geoHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  geoHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  geoHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  geoHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  geoHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  idOnL1?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexerIndexingRewards?: InputMaybe<Scalars['BigInt']['input']>;
  indexerIndexingRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexerIndexingRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexerIndexingRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexerIndexingRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexerIndexingRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexerIndexingRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexerIndexingRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexerRewardsOwnGenerationRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexerRewardsOwnGenerationRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexerRewardsOwnGenerationRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexerRewardsOwnGenerationRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  indexerRewardsOwnGenerationRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexerRewardsOwnGenerationRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexerRewardsOwnGenerationRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexerRewardsOwnGenerationRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  indexingRewardCut?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCut_gt?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCut_gte?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCut_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingRewardCut_lt?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCut_lte?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCut_not?: InputMaybe<Scalars['Int']['input']>;
  indexingRewardCut_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  indexingRewardEffectiveCut?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCut_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCut_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCut_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  indexingRewardEffectiveCut_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCut_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCut_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  indexingRewardEffectiveCut_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  lastDelegationParameterUpdate?: InputMaybe<Scalars['Int']['input']>;
  lastDelegationParameterUpdate_gt?: InputMaybe<Scalars['Int']['input']>;
  lastDelegationParameterUpdate_gte?: InputMaybe<Scalars['Int']['input']>;
  lastDelegationParameterUpdate_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastDelegationParameterUpdate_lt?: InputMaybe<Scalars['Int']['input']>;
  lastDelegationParameterUpdate_lte?: InputMaybe<Scalars['Int']['input']>;
  lastDelegationParameterUpdate_not?: InputMaybe<Scalars['Int']['input']>;
  lastDelegationParameterUpdate_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastTransferredToL2At?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastTransferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastTransferredToL2AtTx?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_contains?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_gt?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_gte?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastTransferredToL2AtTx_lt?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_lte?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_not?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastTransferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastTransferredToL2At_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2At_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastTransferredToL2At_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2At_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2At_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastTransferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Indexer_Filter>>>;
  overDelegationDilution?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  overDelegationDilution_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  overDelegationDilution_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  overDelegationDilution_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  overDelegationDilution_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  overDelegationDilution_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  overDelegationDilution_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  overDelegationDilution_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  ownStakeRatio?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  ownStakeRatio_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  ownStakeRatio_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  ownStakeRatio_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  ownStakeRatio_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  ownStakeRatio_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  ownStakeRatio_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  ownStakeRatio_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeCut?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCut_gt?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCut_gte?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCut_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  queryFeeCut_lt?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCut_lte?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCut_not?: InputMaybe<Scalars['Int']['input']>;
  queryFeeCut_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  queryFeeEffectiveCut?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCut_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCut_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCut_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeEffectiveCut_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCut_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCut_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  queryFeeEffectiveCut_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesCollected?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesCollected_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesCollected_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardsEarned?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsEarned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsEarned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsEarned_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardsEarned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsEarned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsEarned_not?: InputMaybe<Scalars['BigInt']['input']>;
  rewardsEarned_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokensTransferredToL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokensTransferredToL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakingEfficiency?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  stakingEfficiency_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  stakingEfficiency_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  stakingEfficiency_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  stakingEfficiency_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  stakingEfficiency_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  stakingEfficiency_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  stakingEfficiency_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  tokenCapacity?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCapacity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCapacity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCapacity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenCapacity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCapacity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCapacity_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCapacity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensLockedUntil?: InputMaybe<Scalars['Int']['input']>;
  tokensLockedUntil_gt?: InputMaybe<Scalars['Int']['input']>;
  tokensLockedUntil_gte?: InputMaybe<Scalars['Int']['input']>;
  tokensLockedUntil_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokensLockedUntil_lt?: InputMaybe<Scalars['Int']['input']>;
  tokensLockedUntil_lte?: InputMaybe<Scalars['Int']['input']>;
  tokensLockedUntil_not?: InputMaybe<Scalars['Int']['input']>;
  tokensLockedUntil_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalAllocationCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalAllocationCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAllocationCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAllocationCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAllocationCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAllocationCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAllocationCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAllocationCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAllocations_?: InputMaybe<Network__Allocation_Filter>;
  totalReturn?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  totalReturn_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  totalReturn_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  unstakedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  unstakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_gt?: InputMaybe<Scalars['String']['input']>;
  url_gte?: InputMaybe<Scalars['String']['input']>;
  url_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_lt?: InputMaybe<Scalars['String']['input']>;
  url_lte?: InputMaybe<Scalars['String']['input']>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  url_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  url_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Network__Indexer_OrderBy =
  | 'account'
  | 'account__balance'
  | 'account__balanceReceivedFromL1Delegation'
  | 'account__balanceReceivedFromL1Signalling'
  | 'account__codeRepository'
  | 'account__createdAt'
  | 'account__curationApproval'
  | 'account__defaultDisplayName'
  | 'account__description'
  | 'account__developerCreatedAt'
  | 'account__displayName'
  | 'account__gnsApproval'
  | 'account__id'
  | 'account__image'
  | 'account__isOrganization'
  | 'account__metadataHash'
  | 'account__stakingApproval'
  | 'account__subgraphQueryFees'
  | 'account__website'
  | 'allocatedTokens'
  | 'allocationCount'
  | 'allocations'
  | 'annualizedReturn'
  | 'availableStake'
  | 'createdAt'
  | 'defaultDisplayName'
  | 'delegatedCapacity'
  | 'delegatedStakeRatio'
  | 'delegatedTokens'
  | 'delegationExchangeRate'
  | 'delegatorIndexingRewards'
  | 'delegatorParameterCooldown'
  | 'delegatorQueryFees'
  | 'delegatorShares'
  | 'delegators'
  | 'firstTransferredToL2At'
  | 'firstTransferredToL2AtBlockNumber'
  | 'firstTransferredToL2AtTx'
  | 'forcedClosures'
  | 'geoHash'
  | 'id'
  | 'idOnL1'
  | 'idOnL2'
  | 'indexerIndexingRewards'
  | 'indexerRewardsOwnGenerationRatio'
  | 'indexingRewardCut'
  | 'indexingRewardEffectiveCut'
  | 'lastDelegationParameterUpdate'
  | 'lastTransferredToL2At'
  | 'lastTransferredToL2AtBlockNumber'
  | 'lastTransferredToL2AtTx'
  | 'lockedTokens'
  | 'overDelegationDilution'
  | 'ownStakeRatio'
  | 'queryFeeCut'
  | 'queryFeeEffectiveCut'
  | 'queryFeeRebates'
  | 'queryFeesCollected'
  | 'rewardsEarned'
  | 'stakedTokens'
  | 'stakedTokensTransferredToL2'
  | 'stakingEfficiency'
  | 'tokenCapacity'
  | 'tokensLockedUntil'
  | 'totalAllocationCount'
  | 'totalAllocations'
  | 'totalReturn'
  | 'transferredToL2'
  | 'unstakedTokens'
  | 'url';

/** Curator Name Signal for a single Subgraph */
export type Network__NameSignal = {
  __typename?: 'NETWORK__NameSignal';
  /** [DEPRECATED] Curator average cost basis for this name signal on this subgraph. New field for further versions will be nameSignalAverageCostBasis */
  averageCostBasis: Scalars['NETWORK__BigDecimal']['output'];
  /** [DEPRECATED] nameSignalAverageCostBasis / nameSignal. New field for further versions will be nameSignalAverageCostBasisPerSignal */
  averageCostBasisPerSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** Eth address of the curator */
  curator: Network__Curator;
  entityVersion: Scalars['Int']['output'];
  /** Eth address + subgraph ID */
  id: Scalars['ID']['output'];
  /** ID of the NameSignal entity on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']['output']>;
  /** ID of the NameSignal entity on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']['output']>;
  /** Block for which the curator last entered or exited the curve */
  lastNameSignalChange: Scalars['Int']['output'];
  linkedEntity?: Maybe<Network__NameSignal>;
  /** Shares of the name pool (GNS) that the curator has from signaling their GRT */
  nameSignal: Scalars['BigInt']['output'];
  /** Curator average cost basis for this name signal on this subgraph */
  nameSignalAverageCostBasis: Scalars['NETWORK__BigDecimal']['output'];
  /** nameSignalAverageCostBasis / nameSignal */
  nameSignalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt']['output'];
  /** Actual signal shares that the name pool minted with the GRT provided by the curator */
  signal: Scalars['NETWORK__BigDecimal']['output'];
  /** Curator average cost basis for the version signal on this subgraph name pool */
  signalAverageCostBasis: Scalars['NETWORK__BigDecimal']['output'];
  /** signalAverageCostBasis / signal */
  signalAverageCostBasisPerSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt']['output'];
  /** Amount of GRT received on L2 */
  signalledTokensReceivedOnL2: Scalars['BigInt']['output'];
  /** Amount of GRT transferred to L2 */
  signalledTokensSentToL2: Scalars['BigInt']['output'];
  /** Subgraph being signalled */
  subgraph: Network__Subgraph;
  /** Whether the name signal has been transferred from L1 to L2. Only applies to NameSignals that have been transferred, native L2 NameSignal entities will return false */
  transferredToL2: Scalars['Boolean']['output'];
  /** Timestamp for the L1 -> L2 Transfer. */
  transferredToL2At?: Maybe<Scalars['BigInt']['output']>;
  /** Block number for the L1 -> L2 Transfer. */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Transaction hash for the L1 -> L2 Transfer. */
  transferredToL2AtTx?: Maybe<Scalars['String']['output']>;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt']['output'];
  /** Tokens the curator has withdrawn from a deprecated name curve */
  withdrawnTokens: Scalars['BigInt']['output'];
};

/** Auxiliary entity to be able to batch update NameSignal entities */
export type Network__NameSignalSubgraphRelation = {
  __typename?: 'NETWORK__NameSignalSubgraphRelation';
  /** Subgraph ID + index */
  id: Scalars['ID']['output'];
  nameSignal: Network__NameSignal;
  subgraph: Network__Subgraph;
};

export type Network__NameSignalSubgraphRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__NameSignalSubgraphRelation_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nameSignal?: InputMaybe<Scalars['String']['input']>;
  nameSignal_?: InputMaybe<Network__NameSignal_Filter>;
  nameSignal_contains?: InputMaybe<Scalars['String']['input']>;
  nameSignal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nameSignal_ends_with?: InputMaybe<Scalars['String']['input']>;
  nameSignal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameSignal_gt?: InputMaybe<Scalars['String']['input']>;
  nameSignal_gte?: InputMaybe<Scalars['String']['input']>;
  nameSignal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nameSignal_lt?: InputMaybe<Scalars['String']['input']>;
  nameSignal_lte?: InputMaybe<Scalars['String']['input']>;
  nameSignal_not?: InputMaybe<Scalars['String']['input']>;
  nameSignal_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameSignal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nameSignal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nameSignal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nameSignal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nameSignal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameSignal_starts_with?: InputMaybe<Scalars['String']['input']>;
  nameSignal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Network__NameSignalSubgraphRelation_Filter>>>;
  subgraph?: InputMaybe<Scalars['String']['input']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_gt?: InputMaybe<Scalars['String']['input']>;
  subgraph_gte?: InputMaybe<Scalars['String']['input']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_lt?: InputMaybe<Scalars['String']['input']>;
  subgraph_lte?: InputMaybe<Scalars['String']['input']>;
  subgraph_not?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Network__NameSignalSubgraphRelation_OrderBy =
  | 'id'
  | 'nameSignal'
  | 'nameSignal__averageCostBasis'
  | 'nameSignal__averageCostBasisPerSignal'
  | 'nameSignal__entityVersion'
  | 'nameSignal__id'
  | 'nameSignal__idOnL1'
  | 'nameSignal__idOnL2'
  | 'nameSignal__lastNameSignalChange'
  | 'nameSignal__nameSignal'
  | 'nameSignal__nameSignalAverageCostBasis'
  | 'nameSignal__nameSignalAverageCostBasisPerSignal'
  | 'nameSignal__realizedRewards'
  | 'nameSignal__signal'
  | 'nameSignal__signalAverageCostBasis'
  | 'nameSignal__signalAverageCostBasisPerSignal'
  | 'nameSignal__signalledTokens'
  | 'nameSignal__signalledTokensReceivedOnL2'
  | 'nameSignal__signalledTokensSentToL2'
  | 'nameSignal__transferredToL2'
  | 'nameSignal__transferredToL2At'
  | 'nameSignal__transferredToL2AtBlockNumber'
  | 'nameSignal__transferredToL2AtTx'
  | 'nameSignal__unsignalledTokens'
  | 'nameSignal__withdrawnTokens'
  | 'subgraph'
  | 'subgraph__active'
  | 'subgraph__codeRepository'
  | 'subgraph__createdAt'
  | 'subgraph__creatorAddress'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__description'
  | 'subgraph__displayName'
  | 'subgraph__entityVersion'
  | 'subgraph__id'
  | 'subgraph__idOnL1'
  | 'subgraph__idOnL2'
  | 'subgraph__image'
  | 'subgraph__initializing'
  | 'subgraph__ipfsMetadataHash'
  | 'subgraph__metadataHash'
  | 'subgraph__migrated'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__nameSignalCount'
  | 'subgraph__nftID'
  | 'subgraph__nftImage'
  | 'subgraph__oldID'
  | 'subgraph__reserveRatio'
  | 'subgraph__signalAmount'
  | 'subgraph__signalledTokens'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__subgraphNumber'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__updatedAt'
  | 'subgraph__versionCount'
  | 'subgraph__website'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens';

/** All relevant data for a Name Signal Transaction in The Graph Network */
export type Network__NameSignalTransaction = Network__Transaction & {
  __typename?: 'NETWORK__NameSignalTransaction';
  blockNumber: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Amount of name signal updated */
  nameSignal: Scalars['BigInt']['output'];
  signer: Network__GraphAccount;
  /** Subgraph where name signal was updated */
  subgraph: Network__Subgraph;
  timestamp: Scalars['Int']['output'];
  /** Tokens used */
  tokens: Scalars['BigInt']['output'];
  type: Network__TransactionType;
  /** Amount of version signal updated */
  versionSignal: Scalars['BigInt']['output'];
};

export type Network__NameSignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__NameSignalTransaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nameSignal?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__NameSignalTransaction_Filter>>>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph?: InputMaybe<Scalars['String']['input']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_gt?: InputMaybe<Scalars['String']['input']>;
  subgraph_gte?: InputMaybe<Scalars['String']['input']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_lt?: InputMaybe<Scalars['String']['input']>;
  subgraph_lte?: InputMaybe<Scalars['String']['input']>;
  subgraph_not?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
  versionSignal?: InputMaybe<Scalars['BigInt']['input']>;
  versionSignal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  versionSignal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  versionSignal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  versionSignal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  versionSignal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  versionSignal_not?: InputMaybe<Scalars['BigInt']['input']>;
  versionSignal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__NameSignalTransaction_OrderBy =
  | 'blockNumber'
  | 'id'
  | 'nameSignal'
  | 'signer'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__codeRepository'
  | 'signer__createdAt'
  | 'signer__curationApproval'
  | 'signer__defaultDisplayName'
  | 'signer__description'
  | 'signer__developerCreatedAt'
  | 'signer__displayName'
  | 'signer__gnsApproval'
  | 'signer__id'
  | 'signer__image'
  | 'signer__isOrganization'
  | 'signer__metadataHash'
  | 'signer__stakingApproval'
  | 'signer__subgraphQueryFees'
  | 'signer__website'
  | 'subgraph'
  | 'subgraph__active'
  | 'subgraph__codeRepository'
  | 'subgraph__createdAt'
  | 'subgraph__creatorAddress'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__description'
  | 'subgraph__displayName'
  | 'subgraph__entityVersion'
  | 'subgraph__id'
  | 'subgraph__idOnL1'
  | 'subgraph__idOnL2'
  | 'subgraph__image'
  | 'subgraph__initializing'
  | 'subgraph__ipfsMetadataHash'
  | 'subgraph__metadataHash'
  | 'subgraph__migrated'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__nameSignalCount'
  | 'subgraph__nftID'
  | 'subgraph__nftImage'
  | 'subgraph__oldID'
  | 'subgraph__reserveRatio'
  | 'subgraph__signalAmount'
  | 'subgraph__signalledTokens'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__subgraphNumber'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__updatedAt'
  | 'subgraph__versionCount'
  | 'subgraph__website'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'timestamp'
  | 'tokens'
  | 'type'
  | 'versionSignal';

export type Network__NameSignal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__NameSignal_Filter>>>;
  averageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  averageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  averageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  curator?: InputMaybe<Scalars['String']['input']>;
  curator_?: InputMaybe<Network__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']['input']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_ends_with?: InputMaybe<Scalars['String']['input']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_gt?: InputMaybe<Scalars['String']['input']>;
  curator_gte?: InputMaybe<Scalars['String']['input']>;
  curator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curator_lt?: InputMaybe<Scalars['String']['input']>;
  curator_lte?: InputMaybe<Scalars['String']['input']>;
  curator_not?: InputMaybe<Scalars['String']['input']>;
  curator_not_contains?: InputMaybe<Scalars['String']['input']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_starts_with?: InputMaybe<Scalars['String']['input']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  entityVersion?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_not?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  idOnL1?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastNameSignalChange?: InputMaybe<Scalars['Int']['input']>;
  lastNameSignalChange_gt?: InputMaybe<Scalars['Int']['input']>;
  lastNameSignalChange_gte?: InputMaybe<Scalars['Int']['input']>;
  lastNameSignalChange_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastNameSignalChange_lt?: InputMaybe<Scalars['Int']['input']>;
  lastNameSignalChange_lte?: InputMaybe<Scalars['Int']['input']>;
  lastNameSignalChange_not?: InputMaybe<Scalars['Int']['input']>;
  lastNameSignalChange_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  linkedEntity?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_?: InputMaybe<Network__NameSignal_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameSignal?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  nameSignalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  nameSignalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  nameSignalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  nameSignalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  nameSignal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nameSignal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_not?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__NameSignal_Filter>>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signalAverageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signalAverageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signalAverageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signalAverageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  signal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensReceivedOnL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensSentToL2?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensSentToL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraph?: InputMaybe<Scalars['String']['input']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_gt?: InputMaybe<Scalars['String']['input']>;
  subgraph_gte?: InputMaybe<Scalars['String']['input']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_lt?: InputMaybe<Scalars['String']['input']>;
  subgraph_lte?: InputMaybe<Scalars['String']['input']>;
  subgraph_not?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__NameSignal_OrderBy =
  | 'averageCostBasis'
  | 'averageCostBasisPerSignal'
  | 'curator'
  | 'curator__activeCombinedSignalCount'
  | 'curator__activeNameSignalCount'
  | 'curator__activeSignalCount'
  | 'curator__annualizedReturn'
  | 'curator__combinedSignalCount'
  | 'curator__createdAt'
  | 'curator__defaultDisplayName'
  | 'curator__id'
  | 'curator__nameSignalCount'
  | 'curator__realizedRewards'
  | 'curator__signalCount'
  | 'curator__signalingEfficiency'
  | 'curator__totalAverageCostBasisPerNameSignal'
  | 'curator__totalAverageCostBasisPerSignal'
  | 'curator__totalNameSignal'
  | 'curator__totalNameSignalAverageCostBasis'
  | 'curator__totalNameSignalledTokens'
  | 'curator__totalNameUnsignalledTokens'
  | 'curator__totalReturn'
  | 'curator__totalSignal'
  | 'curator__totalSignalAverageCostBasis'
  | 'curator__totalSignalledTokens'
  | 'curator__totalUnsignalledTokens'
  | 'curator__totalWithdrawnTokens'
  | 'entityVersion'
  | 'id'
  | 'idOnL1'
  | 'idOnL2'
  | 'lastNameSignalChange'
  | 'linkedEntity'
  | 'linkedEntity__averageCostBasis'
  | 'linkedEntity__averageCostBasisPerSignal'
  | 'linkedEntity__entityVersion'
  | 'linkedEntity__id'
  | 'linkedEntity__idOnL1'
  | 'linkedEntity__idOnL2'
  | 'linkedEntity__lastNameSignalChange'
  | 'linkedEntity__nameSignal'
  | 'linkedEntity__nameSignalAverageCostBasis'
  | 'linkedEntity__nameSignalAverageCostBasisPerSignal'
  | 'linkedEntity__realizedRewards'
  | 'linkedEntity__signal'
  | 'linkedEntity__signalAverageCostBasis'
  | 'linkedEntity__signalAverageCostBasisPerSignal'
  | 'linkedEntity__signalledTokens'
  | 'linkedEntity__signalledTokensReceivedOnL2'
  | 'linkedEntity__signalledTokensSentToL2'
  | 'linkedEntity__transferredToL2'
  | 'linkedEntity__transferredToL2At'
  | 'linkedEntity__transferredToL2AtBlockNumber'
  | 'linkedEntity__transferredToL2AtTx'
  | 'linkedEntity__unsignalledTokens'
  | 'linkedEntity__withdrawnTokens'
  | 'nameSignal'
  | 'nameSignalAverageCostBasis'
  | 'nameSignalAverageCostBasisPerSignal'
  | 'realizedRewards'
  | 'signal'
  | 'signalAverageCostBasis'
  | 'signalAverageCostBasisPerSignal'
  | 'signalledTokens'
  | 'signalledTokensReceivedOnL2'
  | 'signalledTokensSentToL2'
  | 'subgraph'
  | 'subgraph__active'
  | 'subgraph__codeRepository'
  | 'subgraph__createdAt'
  | 'subgraph__creatorAddress'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__description'
  | 'subgraph__displayName'
  | 'subgraph__entityVersion'
  | 'subgraph__id'
  | 'subgraph__idOnL1'
  | 'subgraph__idOnL2'
  | 'subgraph__image'
  | 'subgraph__initializing'
  | 'subgraph__ipfsMetadataHash'
  | 'subgraph__metadataHash'
  | 'subgraph__migrated'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__nameSignalCount'
  | 'subgraph__nftID'
  | 'subgraph__nftImage'
  | 'subgraph__oldID'
  | 'subgraph__reserveRatio'
  | 'subgraph__signalAmount'
  | 'subgraph__signalledTokens'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__subgraphNumber'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__updatedAt'
  | 'subgraph__versionCount'
  | 'subgraph__website'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'unsignalledTokens'
  | 'withdrawnTokens';

export type Network__NameSystem = 'ENS';

export type Network__Network = {
  __typename?: 'NETWORK__Network';
  deployments: Array<Network__SubgraphDeployment>;
  id: Scalars['ID']['output'];
};

export type Network__NetworkDeploymentsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__SubgraphDeployment_Filter>;
};

export type Network__Network_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__Network_Filter>>>;
  deployments_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Network_Filter>>>;
};

export type Network__Network_OrderBy = 'deployments' | 'id';

/** Defines the order direction, either ascending or descending */
export type Network__OrderDirection = 'asc' | 'desc';

/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 */
export type Network__Pool = {
  __typename?: 'NETWORK__Pool';
  /** Total effective allocation tokens from all allocations closed in this epoch */
  allocation: Scalars['BigInt']['output'];
  /** Total query fees claimed in this epoch. Can be smaller than totalFees because of cobbs douglas function  */
  claimedFees: Scalars['BigInt']['output'];
  /** Allocations that were closed during this epoch */
  closedAllocations: Array<Network__Allocation>;
  /** Total rewards from query fees deposited to all curator bonding curves during the epoch */
  curatorRewards: Scalars['BigInt']['output'];
  /** Epoch number of the pool */
  id: Scalars['ID']['output'];
  /** Total query fees collected in this epoch */
  totalQueryFees: Scalars['BigInt']['output'];
};

/**
 * Global pool of query fees for closed state channels. Each Epoch has a single pool,
 * hence why they share the same IDs.
 */
export type Network__PoolClosedAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};

export type Network__Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  allocation?: InputMaybe<Scalars['BigInt']['input']>;
  allocation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  allocation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  allocation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  allocation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  allocation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  allocation_not?: InputMaybe<Scalars['BigInt']['input']>;
  allocation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__Pool_Filter>>>;
  claimedFees?: InputMaybe<Scalars['BigInt']['input']>;
  claimedFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closedAllocations_?: InputMaybe<Network__Allocation_Filter>;
  curatorRewards?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  curatorRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Pool_Filter>>>;
  totalQueryFees?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQueryFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQueryFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__Pool_OrderBy =
  | 'allocation'
  | 'claimedFees'
  | 'closedAllocations'
  | 'curatorRewards'
  | 'id'
  | 'totalQueryFees';

/** All relevant data for arbitrum retryable tickets */
export type Network__RetryableTicket = {
  __typename?: 'NETWORK__RetryableTicket';
  id: Scalars['ID']['output'];
  redeemAttempts: Array<Network__RetryableTicketRedeemAttempt>;
  /** The amount of times the ticket has been scheduled for redeeming */
  redeemCount?: Maybe<Scalars['Int']['output']>;
  /** hash of the retryable ticket creation transaction */
  txHash?: Maybe<Scalars['NETWORK__Bytes']['output']>;
};

/** All relevant data for arbitrum retryable tickets */
export type Network__RetryableTicketRedeemAttemptsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__RetryableTicketRedeemAttempt_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__RetryableTicketRedeemAttempt_Filter>;
};

export type Network__RetryableTicketRedeemAttempt = {
  __typename?: 'NETWORK__RetryableTicketRedeemAttempt';
  id: Scalars['ID']['output'];
  sequenceNumber?: Maybe<Scalars['Int']['output']>;
  ticketId: Network__RetryableTicket;
  txHash?: Maybe<Scalars['NETWORK__Bytes']['output']>;
};

export type Network__RetryableTicketRedeemAttempt_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__RetryableTicketRedeemAttempt_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__RetryableTicketRedeemAttempt_Filter>>>;
  sequenceNumber?: InputMaybe<Scalars['Int']['input']>;
  sequenceNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  sequenceNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  sequenceNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  sequenceNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  sequenceNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  sequenceNumber_not?: InputMaybe<Scalars['Int']['input']>;
  sequenceNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  ticketId?: InputMaybe<Scalars['String']['input']>;
  ticketId_?: InputMaybe<Network__RetryableTicket_Filter>;
  ticketId_contains?: InputMaybe<Scalars['String']['input']>;
  ticketId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ticketId_ends_with?: InputMaybe<Scalars['String']['input']>;
  ticketId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ticketId_gt?: InputMaybe<Scalars['String']['input']>;
  ticketId_gte?: InputMaybe<Scalars['String']['input']>;
  ticketId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ticketId_lt?: InputMaybe<Scalars['String']['input']>;
  ticketId_lte?: InputMaybe<Scalars['String']['input']>;
  ticketId_not?: InputMaybe<Scalars['String']['input']>;
  ticketId_not_contains?: InputMaybe<Scalars['String']['input']>;
  ticketId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ticketId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ticketId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ticketId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ticketId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ticketId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ticketId_starts_with?: InputMaybe<Scalars['String']['input']>;
  ticketId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
};

export type Network__RetryableTicketRedeemAttempt_OrderBy =
  | 'id'
  | 'sequenceNumber'
  | 'ticketId'
  | 'ticketId__id'
  | 'ticketId__redeemCount'
  | 'ticketId__txHash'
  | 'txHash';

export type Network__RetryableTicket_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__RetryableTicket_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__RetryableTicket_Filter>>>;
  redeemAttempts_?: InputMaybe<Network__RetryableTicketRedeemAttempt_Filter>;
  redeemCount?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_gte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  redeemCount_lt?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_lte?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not?: InputMaybe<Scalars['Int']['input']>;
  redeemCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
};

export type Network__RetryableTicket_OrderBy = 'id' | 'redeemAttempts' | 'redeemCount' | 'txHash';

/** TokenLockWallet Revocability Enum */
export type Network__Revocability = 'Disabled' | 'Enabled' | 'NotSet';

/** Curator Signal for a single SubgraphDeployment */
export type Network__Signal = {
  __typename?: 'NETWORK__Signal';
  /** Curator average cost basis for this signal on this subgraph */
  averageCostBasis: Scalars['NETWORK__BigDecimal']['output'];
  /** averageCostBasis / signal */
  averageCostBasisPerSignal: Scalars['NETWORK__BigDecimal']['output'];
  /** Timetamp when this entity was created */
  createdAt: Scalars['Int']['output'];
  /** Block number where this entity was created */
  createdAtBlock: Scalars['Int']['output'];
  /** Eth address of the curator */
  curator: Network__Curator;
  /** Eth address + subgraph deployment ID */
  id: Scalars['ID']['output'];
  /** Block for which the curator last entered or exited the curve */
  lastSignalChange: Scalars['Int']['output'];
  /** Timetamp when this entity was last updated */
  lastUpdatedAt: Scalars['Int']['output'];
  /** Block number where this entity was last updated */
  lastUpdatedAtBlock: Scalars['Int']['output'];
  /** Summation of realized rewards from before the last time the curator entered the curation curve */
  realizedRewards: Scalars['BigInt']['output'];
  /** Signal that the curator has from signaling their GRT */
  signal: Scalars['BigInt']['output'];
  /** CUMULATIVE number of tokens the curator has signalled */
  signalledTokens: Scalars['BigInt']['output'];
  /** Subgraph being signalled */
  subgraphDeployment: Network__SubgraphDeployment;
  /** CUMULATIVE number of tokens the curator has unsignalled */
  unsignalledTokens: Scalars['BigInt']['output'];
};

/** All relevant data for a Signal Transaction in The Graph Network */
export type Network__SignalTransaction = Network__Transaction & {
  __typename?: 'NETWORK__SignalTransaction';
  blockNumber: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** Amount of signal updated */
  signal: Scalars['BigInt']['output'];
  signer: Network__GraphAccount;
  /** Subgraph where signal was updated */
  subgraphDeployment: Network__SubgraphDeployment;
  timestamp: Scalars['Int']['output'];
  /** Tokens used */
  tokens: Scalars['BigInt']['output'];
  type: Network__TransactionType;
  /** Withdrawal fees. On minting only */
  withdrawalFees: Scalars['BigInt']['output'];
};

export type Network__SignalTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__SignalTransaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__SignalTransaction_Filter>>>;
  signal?: InputMaybe<Scalars['BigInt']['input']>;
  signal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signal_not?: InputMaybe<Scalars['BigInt']['input']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokens?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
  withdrawalFees?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalFees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalFees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalFees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawalFees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalFees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalFees_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalFees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__SignalTransaction_OrderBy =
  | 'blockNumber'
  | 'id'
  | 'signal'
  | 'signer'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__codeRepository'
  | 'signer__createdAt'
  | 'signer__curationApproval'
  | 'signer__defaultDisplayName'
  | 'signer__description'
  | 'signer__developerCreatedAt'
  | 'signer__displayName'
  | 'signer__gnsApproval'
  | 'signer__id'
  | 'signer__image'
  | 'signer__isOrganization'
  | 'signer__metadataHash'
  | 'signer__stakingApproval'
  | 'signer__subgraphQueryFees'
  | 'signer__website'
  | 'subgraphDeployment'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__manifest'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__poweredBySubstreams'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__schema'
  | 'subgraphDeployment__schemaIpfsHash'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__unsignalledTokens'
  | 'timestamp'
  | 'tokens'
  | 'type'
  | 'withdrawalFees';

export type Network__Signal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__Signal_Filter>>>;
  averageCostBasis?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  averageCostBasisPerSignal_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasisPerSignal_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  averageCostBasis_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  averageCostBasis_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  averageCostBasis_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAtBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock_not?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  curator?: InputMaybe<Scalars['String']['input']>;
  curator_?: InputMaybe<Network__Curator_Filter>;
  curator_contains?: InputMaybe<Scalars['String']['input']>;
  curator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_ends_with?: InputMaybe<Scalars['String']['input']>;
  curator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_gt?: InputMaybe<Scalars['String']['input']>;
  curator_gte?: InputMaybe<Scalars['String']['input']>;
  curator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curator_lt?: InputMaybe<Scalars['String']['input']>;
  curator_lte?: InputMaybe<Scalars['String']['input']>;
  curator_not?: InputMaybe<Scalars['String']['input']>;
  curator_not_contains?: InputMaybe<Scalars['String']['input']>;
  curator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  curator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  curator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  curator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  curator_starts_with?: InputMaybe<Scalars['String']['input']>;
  curator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastSignalChange?: InputMaybe<Scalars['Int']['input']>;
  lastSignalChange_gt?: InputMaybe<Scalars['Int']['input']>;
  lastSignalChange_gte?: InputMaybe<Scalars['Int']['input']>;
  lastSignalChange_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSignalChange_lt?: InputMaybe<Scalars['Int']['input']>;
  lastSignalChange_lte?: InputMaybe<Scalars['Int']['input']>;
  lastSignalChange_not?: InputMaybe<Scalars['Int']['input']>;
  lastSignalChange_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUpdatedAt?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAtBlock?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAtBlock_gt?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAtBlock_gte?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAtBlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUpdatedAtBlock_lt?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAtBlock_lte?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAtBlock_not?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAtBlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAt_not?: InputMaybe<Scalars['Int']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Signal_Filter>>>;
  realizedRewards?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signal?: InputMaybe<Scalars['BigInt']['input']>;
  signal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signal_not?: InputMaybe<Scalars['BigInt']['input']>;
  signal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphDeployment?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__Signal_OrderBy =
  | 'averageCostBasis'
  | 'averageCostBasisPerSignal'
  | 'createdAt'
  | 'createdAtBlock'
  | 'curator'
  | 'curator__activeCombinedSignalCount'
  | 'curator__activeNameSignalCount'
  | 'curator__activeSignalCount'
  | 'curator__annualizedReturn'
  | 'curator__combinedSignalCount'
  | 'curator__createdAt'
  | 'curator__defaultDisplayName'
  | 'curator__id'
  | 'curator__nameSignalCount'
  | 'curator__realizedRewards'
  | 'curator__signalCount'
  | 'curator__signalingEfficiency'
  | 'curator__totalAverageCostBasisPerNameSignal'
  | 'curator__totalAverageCostBasisPerSignal'
  | 'curator__totalNameSignal'
  | 'curator__totalNameSignalAverageCostBasis'
  | 'curator__totalNameSignalledTokens'
  | 'curator__totalNameUnsignalledTokens'
  | 'curator__totalReturn'
  | 'curator__totalSignal'
  | 'curator__totalSignalAverageCostBasis'
  | 'curator__totalSignalledTokens'
  | 'curator__totalUnsignalledTokens'
  | 'curator__totalWithdrawnTokens'
  | 'id'
  | 'lastSignalChange'
  | 'lastUpdatedAt'
  | 'lastUpdatedAtBlock'
  | 'realizedRewards'
  | 'signal'
  | 'signalledTokens'
  | 'subgraphDeployment'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__manifest'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__poweredBySubstreams'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__schema'
  | 'subgraphDeployment__schemaIpfsHash'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__unsignalledTokens'
  | 'unsignalledTokens';

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__Subgraph = {
  __typename?: 'NETWORK__Subgraph';
  /** Whether the subgraph is active or deprecated */
  active: Scalars['Boolean']['output'];
  /** Categories that the subgraph belongs to. Modelled with a relation to allow for many-to-many relationship querying */
  categories: Array<Network__SubgraphCategoryRelation>;
  /** Location of the code for this project */
  codeRepository?: Maybe<Scalars['String']['output']>;
  /** Creation timestamp */
  createdAt: Scalars['Int']['output'];
  /** Address used to create the ID. Only available for Subgraphs created pre-migration */
  creatorAddress?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** CURRENT amount of tokens signalled on this subgraph latest version. Mirrors the total amount signalled towards the current deployment. */
  currentSignalledTokens: Scalars['BigInt']['output'];
  /** Current version. Null if the subgraph is deprecated */
  currentVersion?: Maybe<Network__SubgraphVersion>;
  currentVersionRelationEntity?: Maybe<Network__CurrentSubgraphDeploymentRelation>;
  /** Short description of the subgraph */
  description?: Maybe<Scalars['String']['output']>;
  /** Display name */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Version of the entity. Subgraph entities are changing the way their ID is generated when the new GNS v2 rolls out so we need to differnetiate them */
  entityVersion: Scalars['Int']['output'];
  /** Subgraph ID - which is derived from the Organization/Individual graph accountID */
  id: Scalars['ID']['output'];
  /** ID of the subgraph on L1. Null if it's not transferred */
  idOnL1?: Maybe<Scalars['String']['output']>;
  /** ID of the subgraph on L2. Null if it's not transferred */
  idOnL2?: Maybe<Scalars['String']['output']>;
  /** Image in string format */
  image?: Maybe<Scalars['String']['output']>;
  /** Auxiliary field to denote whether the subgraph is handling the initialization order on V2 events. Doesn't matter for V1 events. */
  initializing: Scalars['Boolean']['output'];
  /** Subgraph metadata ipfs hash */
  ipfsMetadataHash?: Maybe<Scalars['String']['output']>;
  /** Subgraph entities might have 'duplicate' entities so that old IDs can be persisted and still queried properly. If that happens we have to link both duplicate entities to be able to update them properly. */
  linkedEntity?: Maybe<Network__Subgraph>;
  /** Subgraph metadata */
  metadataHash: Scalars['NETWORK__Bytes']['output'];
  /** Whether the subgraph has been claimed/migrated. Can only be false for subgraphs created with V1 contracts that have not been claimed/migrated */
  migrated: Scalars['Boolean']['output'];
  /** The CURRENT name signal amount for this subgraph */
  nameSignalAmount: Scalars['BigInt']['output'];
  /** Total amount of NameSignal entities */
  nameSignalCount: Scalars['Int']['output'];
  /** Curators of this subgraph deployment */
  nameSignals: Array<Network__NameSignal>;
  /** The actual ID of the subgraph on the contracts subgraph NFT implementation. BigInt represented as a String. It's only actually valid once the subgraph is migrated (migrated == true) */
  nftID?: Maybe<Scalars['String']['output']>;
  /** NFT Image representation */
  nftImage?: Maybe<Scalars['String']['output']>;
  /** ID of the subgraph that was used on the old version of this The Graph Network Subgraph. Null for Subgraphs created with the new GNS implementation or for version 1 entities (since they use the old id) */
  oldID?: Maybe<Scalars['String']['output']>;
  /** Graph account that owns this subgraph */
  owner: Network__GraphAccount;
  /** [DEPRECATED] Past versions. Has the same data as 'versions' but keeps the old naming for backwards compatibility */
  pastVersions: Array<Network__SubgraphVersion>;
  /** Reserve ratio of the name curation curve. In parts per million */
  reserveRatio: Scalars['Int']['output'];
  /** Current amount of version signal managed by the name pool */
  signalAmount: Scalars['BigInt']['output'];
  /** CUMULATIVE signaled tokens on this subgraph all time */
  signalledTokens: Scalars['BigInt']['output'];
  /** Amount of GRT received on L2 */
  signalledTokensReceivedOnL2: Scalars['BigInt']['output'];
  /** Amount of GRT transferred to L2 */
  signalledTokensSentToL2: Scalars['BigInt']['output'];
  /** Whether the subgraph has been transferred from L1 to L2. Subgraphs published on L2 will have this as false unless they were published through a transfer */
  startedTransferToL2: Scalars['Boolean']['output'];
  /** Timestamp for the L1 -> L2 Transfer. Null if the transfer hasn't started yet */
  startedTransferToL2At?: Maybe<Scalars['BigInt']['output']>;
  /** Block number for the L1 -> L2 Transfer. Null if the transfer hasn't started yet */
  startedTransferToL2AtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Transaction hash for the L1 -> L2 Transfer. Null if the transfer hasn't started yet */
  startedTransferToL2AtTx?: Maybe<Scalars['String']['output']>;
  /** Subgraph number used to create the ID. Only available for Subgraphs created pre-migration */
  subgraphNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Whether the subgraph has been fully transferred from L1 to L2. Subgraphs published on L2 will have this as false unless they were published through a transfer */
  transferredToL2: Scalars['Boolean']['output'];
  /** Timestamp for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2At?: Maybe<Scalars['BigInt']['output']>;
  /** Block number for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Transaction hash for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtTx?: Maybe<Scalars['String']['output']>;
  /** CUMULATIVE unsignalled tokens on this subgraph all time */
  unsignalledTokens: Scalars['BigInt']['output'];
  /** Updated timestamp */
  updatedAt: Scalars['Int']['output'];
  /** Version counter */
  versionCount: Scalars['BigInt']['output'];
  /** List of all the subgraph versions included the current one */
  versions: Array<Network__SubgraphVersion>;
  /** Projects website */
  website?: Maybe<Scalars['String']['output']>;
  /** Tokens that can be withdrawn once the Subgraph is deprecated */
  withdrawableTokens: Scalars['BigInt']['output'];
  /** Tokens the curators have withdrawn from the deprecated Subgraph */
  withdrawnTokens: Scalars['BigInt']['output'];
};

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphNameSignalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__NameSignal_Filter>;
};

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphPastVersionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};

/**
 * The Subgraph entity represents a permanent, unique endpoint. This unique endpoint can resolve to
 * many different SubgraphVersions over it's lifetime. The Subgraph can also have a name attributed
 * to it. The owner of the Subgraph can only use a name once, thus making the owner account and the
 * name chosen a unique combination. When a Curator singals on a Subgraph, they receive "Name Signal".
 * "Name Signal" resolves into the underlying "Signal" of the SubgraphDeployment. The metadata of the
 * subgraph is stored on IPFS.
 */
export type Network__SubgraphVersionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export type Network__SubgraphCategory = {
  __typename?: 'NETWORK__SubgraphCategory';
  id: Scalars['ID']['output'];
  subgraphs: Array<Network__SubgraphCategoryRelation>;
};

export type Network__SubgraphCategorySubgraphsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};

export type Network__SubgraphCategoryRelation = {
  __typename?: 'NETWORK__SubgraphCategoryRelation';
  category: Network__SubgraphCategory;
  id: Scalars['ID']['output'];
  subgraph: Network__Subgraph;
};

export type Network__SubgraphCategoryRelation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__SubgraphCategoryRelation_Filter>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_?: InputMaybe<Network__SubgraphCategory_Filter>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__SubgraphCategoryRelation_Filter>>>;
  subgraph?: InputMaybe<Scalars['String']['input']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_gt?: InputMaybe<Scalars['String']['input']>;
  subgraph_gte?: InputMaybe<Scalars['String']['input']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_lt?: InputMaybe<Scalars['String']['input']>;
  subgraph_lte?: InputMaybe<Scalars['String']['input']>;
  subgraph_not?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export type Network__SubgraphCategoryRelation_OrderBy =
  | 'category'
  | 'category__id'
  | 'id'
  | 'subgraph'
  | 'subgraph__active'
  | 'subgraph__codeRepository'
  | 'subgraph__createdAt'
  | 'subgraph__creatorAddress'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__description'
  | 'subgraph__displayName'
  | 'subgraph__entityVersion'
  | 'subgraph__id'
  | 'subgraph__idOnL1'
  | 'subgraph__idOnL2'
  | 'subgraph__image'
  | 'subgraph__initializing'
  | 'subgraph__ipfsMetadataHash'
  | 'subgraph__metadataHash'
  | 'subgraph__migrated'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__nameSignalCount'
  | 'subgraph__nftID'
  | 'subgraph__nftImage'
  | 'subgraph__oldID'
  | 'subgraph__reserveRatio'
  | 'subgraph__signalAmount'
  | 'subgraph__signalledTokens'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__subgraphNumber'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__updatedAt'
  | 'subgraph__versionCount'
  | 'subgraph__website'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens';

export type Network__SubgraphCategory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__SubgraphCategory_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__SubgraphCategory_Filter>>>;
  subgraphs_?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};

export type Network__SubgraphCategory_OrderBy = 'id' | 'subgraphs';

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeployment = {
  __typename?: 'NETWORK__SubgraphDeployment';
  /** Amount of active Subgraph entities that are currently using this deployment. Deprecated subgraph entities are not counted */
  activeSubgraphCount: Scalars['Int']['output'];
  /** Creation timestamp */
  createdAt: Scalars['Int']['output'];
  /** Total curator rewards from fees */
  curatorFeeRewards: Scalars['BigInt']['output'];
  /** Curators of this subgraph deployment */
  curatorSignals: Array<Network__Signal>;
  /** The block at which this deployment was denied for rewards. Null if not denied */
  deniedAt: Scalars['Int']['output'];
  /** Amount of Subgraph entities that were currently using this deployment when they got deprecated */
  deprecatedSubgraphCount: Scalars['Int']['output'];
  /** Subgraph Deployment ID. The IPFS hash with Qm removed to fit into 32 bytes */
  id: Scalars['ID']['output'];
  /** Allocations created by indexers for this Subgraph */
  indexerAllocations: Array<Network__Allocation>;
  /** Total rewards accrued all time by delegators */
  indexingDelegatorRewardAmount: Scalars['BigInt']['output'];
  /** Total rewards accrued all time by indexers */
  indexingIndexerRewardAmount: Scalars['BigInt']['output'];
  /** Total rewards accrued all time by this Subgraph Deployment. Includes delegator and indexer rewards */
  indexingRewardAmount: Scalars['BigInt']['output'];
  /** IPFS hash of the subgraph manifest */
  ipfsHash: Scalars['String']['output'];
  /** Manifest file for this subgraph deployment */
  manifest?: Maybe<Scalars['String']['output']>;
  /** Network where the contracts that the subgraph indexes are located */
  network?: Maybe<Network__Network>;
  /** [DEPRECATED] The original Subgraph that was deployed through GNS. Can be null if never created through GNS. Used for filtering in the Explorer. Always null now */
  originalName?: Maybe<Scalars['String']['output']>;
  /** Whether the subgraph is a SpS/SbS. Null if we can't parse it */
  poweredBySubstreams?: Maybe<Scalars['Boolean']['output']>;
  /** signalledTokens / signalAmount */
  pricePerShare: Scalars['NETWORK__BigDecimal']['output'];
  /** Total query fee rebates earned from the protocol, through the cobbs douglas formula. Does not include delegation fees */
  queryFeeRebates: Scalars['BigInt']['output'];
  /** Total query fees earned by this Subgraph Deployment, without curator query fees */
  queryFeesAmount: Scalars['BigInt']['output'];
  /** Bonding curve reserve ratio. In parts per million */
  reserveRatio: Scalars['Int']['output'];
  /** Schema file for this subgraph deployment */
  schema?: Maybe<Scalars['String']['output']>;
  /** IPFS hash of the schema file */
  schemaIpfsHash?: Maybe<Scalars['String']['output']>;
  /** CURRENT curation signal for this subgraph deployment */
  signalAmount: Scalars['BigInt']['output'];
  /** CURRENT signalled tokens in the bonding curve */
  signalledTokens: Scalars['BigInt']['output'];
  /** Amount of GRT received on L2 */
  signalledTokensReceivedOnL2: Scalars['BigInt']['output'];
  /** Amount of GRT transferred to L2 */
  signalledTokensSentToL2: Scalars['BigInt']['output'];
  /** CURRENT total stake of all indexers on this Subgraph Deployment */
  stakedTokens: Scalars['BigInt']['output'];
  /** Total amount of Subgraph entities that used this deployment at some point. subgraphCount >= activeSubgraphCount + deprecatedSubgraphCount */
  subgraphCount: Scalars['Int']['output'];
  /** Whether the deployment has been transferred from L1 to L2. Subgraphs published on L2 will have this as false unless they were published through a transfer */
  transferredToL2: Scalars['Boolean']['output'];
  /** Timestamp for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2At?: Maybe<Scalars['BigInt']['output']>;
  /** Block number for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Transaction hash for the L1 -> L2 Transfer. Null if it's not fully transferred or if it's an L1 deployment */
  transferredToL2AtTx?: Maybe<Scalars['String']['output']>;
  /** NOT IMPLEMENTED - CURRENT signalled tokens in the bonding curve */
  unsignalledTokens: Scalars['BigInt']['output'];
  /** The versions this subgraph deployment relates to */
  versions: Array<Network__SubgraphVersion>;
};

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeploymentCuratorSignalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Signal_Filter>;
};

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeploymentIndexerAllocationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__Allocation_Filter>;
};

/**
 * The SubgraphDeployment is represented by the immutable subgraph code that is uploaded, and posted
 * to IPFS. A SubgraphDeployment has a manifest which gives the instructions to the Graph Network on
 * what to index. The entity stores relevant data for the SubgraphDeployment on how much it is being
 * staked on and signaled on in the contracts, as well as how it is performing in query fees. It is
 * related to a SubgraphVersion.
 */
export type Network__SubgraphDeploymentVersionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export type Network__SubgraphDeployment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  activeSubgraphCount?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_gt?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_gte?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  activeSubgraphCount_lt?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_lte?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_not?: InputMaybe<Scalars['Int']['input']>;
  activeSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__SubgraphDeployment_Filter>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  curatorFeeRewards?: InputMaybe<Scalars['BigInt']['input']>;
  curatorFeeRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorFeeRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorFeeRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorFeeRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  curatorFeeRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  curatorFeeRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  curatorFeeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  curatorSignals_?: InputMaybe<Network__Signal_Filter>;
  deniedAt?: InputMaybe<Scalars['Int']['input']>;
  deniedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  deniedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  deniedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deniedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  deniedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  deniedAt_not?: InputMaybe<Scalars['Int']['input']>;
  deniedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deprecatedSubgraphCount?: InputMaybe<Scalars['Int']['input']>;
  deprecatedSubgraphCount_gt?: InputMaybe<Scalars['Int']['input']>;
  deprecatedSubgraphCount_gte?: InputMaybe<Scalars['Int']['input']>;
  deprecatedSubgraphCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deprecatedSubgraphCount_lt?: InputMaybe<Scalars['Int']['input']>;
  deprecatedSubgraphCount_lte?: InputMaybe<Scalars['Int']['input']>;
  deprecatedSubgraphCount_not?: InputMaybe<Scalars['Int']['input']>;
  deprecatedSubgraphCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  indexerAllocations_?: InputMaybe<Network__Allocation_Filter>;
  indexingDelegatorRewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingDelegatorRewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexingDelegatorRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingIndexerRewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingIndexerRewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexingIndexerRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingRewardAmount?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewardAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewardAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexingRewardAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewardAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewardAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexingRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ipfsHash?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifest?: InputMaybe<Scalars['String']['input']>;
  manifest_contains?: InputMaybe<Scalars['String']['input']>;
  manifest_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manifest_ends_with?: InputMaybe<Scalars['String']['input']>;
  manifest_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifest_gt?: InputMaybe<Scalars['String']['input']>;
  manifest_gte?: InputMaybe<Scalars['String']['input']>;
  manifest_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manifest_lt?: InputMaybe<Scalars['String']['input']>;
  manifest_lte?: InputMaybe<Scalars['String']['input']>;
  manifest_not?: InputMaybe<Scalars['String']['input']>;
  manifest_not_contains?: InputMaybe<Scalars['String']['input']>;
  manifest_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  manifest_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  manifest_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifest_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  manifest_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  manifest_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  manifest_starts_with?: InputMaybe<Scalars['String']['input']>;
  manifest_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  network_?: InputMaybe<Network__Network_Filter>;
  network_contains?: InputMaybe<Scalars['String']['input']>;
  network_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  network_ends_with?: InputMaybe<Scalars['String']['input']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network_gt?: InputMaybe<Scalars['String']['input']>;
  network_gte?: InputMaybe<Scalars['String']['input']>;
  network_in?: InputMaybe<Array<Scalars['String']['input']>>;
  network_lt?: InputMaybe<Scalars['String']['input']>;
  network_lte?: InputMaybe<Scalars['String']['input']>;
  network_not?: InputMaybe<Scalars['String']['input']>;
  network_not_contains?: InputMaybe<Scalars['String']['input']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  network_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  network_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network_starts_with?: InputMaybe<Scalars['String']['input']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Network__SubgraphDeployment_Filter>>>;
  originalName?: InputMaybe<Scalars['String']['input']>;
  originalName_contains?: InputMaybe<Scalars['String']['input']>;
  originalName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  originalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  originalName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalName_gt?: InputMaybe<Scalars['String']['input']>;
  originalName_gte?: InputMaybe<Scalars['String']['input']>;
  originalName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  originalName_lt?: InputMaybe<Scalars['String']['input']>;
  originalName_lte?: InputMaybe<Scalars['String']['input']>;
  originalName_not?: InputMaybe<Scalars['String']['input']>;
  originalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  originalName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  originalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  originalName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  originalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  originalName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  originalName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poweredBySubstreams?: InputMaybe<Scalars['Boolean']['input']>;
  poweredBySubstreams_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  poweredBySubstreams_not?: InputMaybe<Scalars['Boolean']['input']>;
  poweredBySubstreams_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  pricePerShare?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  pricePerShare_gt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  pricePerShare_gte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  pricePerShare_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  pricePerShare_lt?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  pricePerShare_lte?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  pricePerShare_not?: InputMaybe<Scalars['NETWORK__BigDecimal']['input']>;
  pricePerShare_not_in?: InputMaybe<Array<Scalars['NETWORK__BigDecimal']['input']>>;
  queryFeeRebates?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeeRebates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeeRebates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesAmount?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queryFeesAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  queryFeesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveRatio?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  schema?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_contains?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_gt?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_gte?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schemaIpfsHash_lt?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_lte?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_not?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schemaIpfsHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  schemaIpfsHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_contains?: InputMaybe<Scalars['String']['input']>;
  schema_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_ends_with?: InputMaybe<Scalars['String']['input']>;
  schema_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_gt?: InputMaybe<Scalars['String']['input']>;
  schema_gte?: InputMaybe<Scalars['String']['input']>;
  schema_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schema_lt?: InputMaybe<Scalars['String']['input']>;
  schema_lte?: InputMaybe<Scalars['String']['input']>;
  schema_not?: InputMaybe<Scalars['String']['input']>;
  schema_not_contains?: InputMaybe<Scalars['String']['input']>;
  schema_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  schema_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schema_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  schema_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schema_starts_with?: InputMaybe<Scalars['String']['input']>;
  schema_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensReceivedOnL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensSentToL2?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensSentToL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphCount?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_gt?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_gte?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  subgraphCount_lt?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_lte?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_not?: InputMaybe<Scalars['Int']['input']>;
  subgraphCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  versions_?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export type Network__SubgraphDeployment_OrderBy =
  | 'activeSubgraphCount'
  | 'createdAt'
  | 'curatorFeeRewards'
  | 'curatorSignals'
  | 'deniedAt'
  | 'deprecatedSubgraphCount'
  | 'id'
  | 'indexerAllocations'
  | 'indexingDelegatorRewardAmount'
  | 'indexingIndexerRewardAmount'
  | 'indexingRewardAmount'
  | 'ipfsHash'
  | 'manifest'
  | 'network'
  | 'network__id'
  | 'originalName'
  | 'poweredBySubstreams'
  | 'pricePerShare'
  | 'queryFeeRebates'
  | 'queryFeesAmount'
  | 'reserveRatio'
  | 'schema'
  | 'schemaIpfsHash'
  | 'signalAmount'
  | 'signalledTokens'
  | 'signalledTokensReceivedOnL2'
  | 'signalledTokensSentToL2'
  | 'stakedTokens'
  | 'subgraphCount'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'unsignalledTokens'
  | 'versions';

/**
 * The SubgraphVersion entity represents a version of the Subgraph. A new SubgraphVersion is created
 * whenever there is an update to the Subgraph triggered by the owner. The new SubgraphVersion can
 * then point to a new SubgraphDeployment, thus allowing the Subgraph to resolve to a different
 * deployment, while keeping the same endpoint. The metadata and label are stored on IPFS. The label
 * is for the developer to provide a semantic version. This is different from the version, which is
 * just a counter than increases each time a new SubgraphVersion is created for a Subgraph.
 */
export type Network__SubgraphVersion = {
  __typename?: 'NETWORK__SubgraphVersion';
  /** Creation timestamp */
  createdAt: Scalars['Int']['output'];
  /** Short description of the version */
  description?: Maybe<Scalars['String']['output']>;
  entityVersion: Scalars['Int']['output'];
  /** Concatenation of subgraph, subgraph deployment, and version ID */
  id: Scalars['ID']['output'];
  /** Semantic versioning label */
  label?: Maybe<Scalars['String']['output']>;
  linkedEntity?: Maybe<Network__SubgraphVersion>;
  /** Subgraph version metadata content address */
  metadataHash?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** Subgraph of this version */
  subgraph: Network__Subgraph;
  /** Subgraph deployment of this version */
  subgraphDeployment: Network__SubgraphDeployment;
  /** Version number */
  version: Scalars['Int']['output'];
};

export type Network__SubgraphVersion_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__SubgraphVersion_Filter>>>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  entityVersion?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_not?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_gt?: InputMaybe<Scalars['String']['input']>;
  label_gte?: InputMaybe<Scalars['String']['input']>;
  label_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_lt?: InputMaybe<Scalars['String']['input']>;
  label_lte?: InputMaybe<Scalars['String']['input']>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  label_starts_with?: InputMaybe<Scalars['String']['input']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_?: InputMaybe<Network__SubgraphVersion_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__SubgraphVersion_Filter>>>;
  subgraph?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_?: InputMaybe<Network__SubgraphDeployment_Filter>;
  subgraphDeployment_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphDeployment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphDeployment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_?: InputMaybe<Network__Subgraph_Filter>;
  subgraph_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_gt?: InputMaybe<Scalars['String']['input']>;
  subgraph_gte?: InputMaybe<Scalars['String']['input']>;
  subgraph_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_lt?: InputMaybe<Scalars['String']['input']>;
  subgraph_lte?: InputMaybe<Scalars['String']['input']>;
  subgraph_not?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraph_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraph_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Network__SubgraphVersion_OrderBy =
  | 'createdAt'
  | 'description'
  | 'entityVersion'
  | 'id'
  | 'label'
  | 'linkedEntity'
  | 'linkedEntity__createdAt'
  | 'linkedEntity__description'
  | 'linkedEntity__entityVersion'
  | 'linkedEntity__id'
  | 'linkedEntity__label'
  | 'linkedEntity__metadataHash'
  | 'linkedEntity__version'
  | 'metadataHash'
  | 'subgraph'
  | 'subgraphDeployment'
  | 'subgraphDeployment__activeSubgraphCount'
  | 'subgraphDeployment__createdAt'
  | 'subgraphDeployment__curatorFeeRewards'
  | 'subgraphDeployment__deniedAt'
  | 'subgraphDeployment__deprecatedSubgraphCount'
  | 'subgraphDeployment__id'
  | 'subgraphDeployment__indexingDelegatorRewardAmount'
  | 'subgraphDeployment__indexingIndexerRewardAmount'
  | 'subgraphDeployment__indexingRewardAmount'
  | 'subgraphDeployment__ipfsHash'
  | 'subgraphDeployment__manifest'
  | 'subgraphDeployment__originalName'
  | 'subgraphDeployment__poweredBySubstreams'
  | 'subgraphDeployment__pricePerShare'
  | 'subgraphDeployment__queryFeeRebates'
  | 'subgraphDeployment__queryFeesAmount'
  | 'subgraphDeployment__reserveRatio'
  | 'subgraphDeployment__schema'
  | 'subgraphDeployment__schemaIpfsHash'
  | 'subgraphDeployment__signalAmount'
  | 'subgraphDeployment__signalledTokens'
  | 'subgraphDeployment__signalledTokensReceivedOnL2'
  | 'subgraphDeployment__signalledTokensSentToL2'
  | 'subgraphDeployment__stakedTokens'
  | 'subgraphDeployment__subgraphCount'
  | 'subgraphDeployment__transferredToL2'
  | 'subgraphDeployment__transferredToL2At'
  | 'subgraphDeployment__transferredToL2AtBlockNumber'
  | 'subgraphDeployment__transferredToL2AtTx'
  | 'subgraphDeployment__unsignalledTokens'
  | 'subgraph__active'
  | 'subgraph__codeRepository'
  | 'subgraph__createdAt'
  | 'subgraph__creatorAddress'
  | 'subgraph__currentSignalledTokens'
  | 'subgraph__description'
  | 'subgraph__displayName'
  | 'subgraph__entityVersion'
  | 'subgraph__id'
  | 'subgraph__idOnL1'
  | 'subgraph__idOnL2'
  | 'subgraph__image'
  | 'subgraph__initializing'
  | 'subgraph__ipfsMetadataHash'
  | 'subgraph__metadataHash'
  | 'subgraph__migrated'
  | 'subgraph__nameSignalAmount'
  | 'subgraph__nameSignalCount'
  | 'subgraph__nftID'
  | 'subgraph__nftImage'
  | 'subgraph__oldID'
  | 'subgraph__reserveRatio'
  | 'subgraph__signalAmount'
  | 'subgraph__signalledTokens'
  | 'subgraph__signalledTokensReceivedOnL2'
  | 'subgraph__signalledTokensSentToL2'
  | 'subgraph__startedTransferToL2'
  | 'subgraph__startedTransferToL2At'
  | 'subgraph__startedTransferToL2AtBlockNumber'
  | 'subgraph__startedTransferToL2AtTx'
  | 'subgraph__subgraphNumber'
  | 'subgraph__transferredToL2'
  | 'subgraph__transferredToL2At'
  | 'subgraph__transferredToL2AtBlockNumber'
  | 'subgraph__transferredToL2AtTx'
  | 'subgraph__unsignalledTokens'
  | 'subgraph__updatedAt'
  | 'subgraph__versionCount'
  | 'subgraph__website'
  | 'subgraph__withdrawableTokens'
  | 'subgraph__withdrawnTokens'
  | 'version';

export type Network__Subgraph_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Network__Subgraph_Filter>>>;
  categories_?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
  codeRepository?: InputMaybe<Scalars['String']['input']>;
  codeRepository_contains?: InputMaybe<Scalars['String']['input']>;
  codeRepository_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_ends_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_gt?: InputMaybe<Scalars['String']['input']>;
  codeRepository_gte?: InputMaybe<Scalars['String']['input']>;
  codeRepository_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codeRepository_lt?: InputMaybe<Scalars['String']['input']>;
  codeRepository_lte?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_contains?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  codeRepository_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  codeRepository_starts_with?: InputMaybe<Scalars['String']['input']>;
  codeRepository_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_gte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lte?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not?: InputMaybe<Scalars['Int']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  creatorAddress?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  creatorAddress_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  creatorAddress_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  currentSignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  currentSignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentSignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentSignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentSignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentSignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentVersion?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>;
  currentVersionRelationEntity_contains?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_gt?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_gte?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentVersionRelationEntity_lt?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_lte?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_not?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentVersionRelationEntity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentVersionRelationEntity_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersion_?: InputMaybe<Network__SubgraphVersion_Filter>;
  currentVersion_contains?: InputMaybe<Scalars['String']['input']>;
  currentVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersion_gt?: InputMaybe<Scalars['String']['input']>;
  currentVersion_gte?: InputMaybe<Scalars['String']['input']>;
  currentVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentVersion_lt?: InputMaybe<Scalars['String']['input']>;
  currentVersion_lte?: InputMaybe<Scalars['String']['input']>;
  currentVersion_not?: InputMaybe<Scalars['String']['input']>;
  currentVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currentVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currentVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayName_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_gt?: InputMaybe<Scalars['String']['input']>;
  displayName_gte?: InputMaybe<Scalars['String']['input']>;
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_lt?: InputMaybe<Scalars['String']['input']>;
  displayName_lte?: InputMaybe<Scalars['String']['input']>;
  displayName_not?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  entityVersion?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_gt?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_gte?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  entityVersion_lt?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_lte?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_not?: InputMaybe<Scalars['Int']['input']>;
  entityVersion_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  idOnL1?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL1_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_gte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_lt?: InputMaybe<Scalars['String']['input']>;
  idOnL2_lte?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  idOnL2_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with?: InputMaybe<Scalars['String']['input']>;
  idOnL2_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_gt?: InputMaybe<Scalars['String']['input']>;
  image_gte?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_lt?: InputMaybe<Scalars['String']['input']>;
  image_lte?: InputMaybe<Scalars['String']['input']>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  initializing?: InputMaybe<Scalars['Boolean']['input']>;
  initializing_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  initializing_not?: InputMaybe<Scalars['Boolean']['input']>;
  initializing_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  ipfsMetadataHash?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsMetadataHash_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_not?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsMetadataHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMetadataHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_?: InputMaybe<Network__Subgraph_Filter>;
  linkedEntity_contains?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_gt?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_gte?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedEntity_lt?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_lte?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  linkedEntity_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_starts_with?: InputMaybe<Scalars['String']['input']>;
  linkedEntity_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  metadataHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  metadataHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  migrated?: InputMaybe<Scalars['Boolean']['input']>;
  migrated_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  migrated_not?: InputMaybe<Scalars['Boolean']['input']>;
  migrated_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  nameSignalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nameSignalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  nameSignalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nameSignalCount?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_gt?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_gte?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nameSignalCount_lt?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_lte?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_not?: InputMaybe<Scalars['Int']['input']>;
  nameSignalCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nameSignals_?: InputMaybe<Network__NameSignal_Filter>;
  nftID?: InputMaybe<Scalars['String']['input']>;
  nftID_contains?: InputMaybe<Scalars['String']['input']>;
  nftID_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftID_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftID_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftID_gt?: InputMaybe<Scalars['String']['input']>;
  nftID_gte?: InputMaybe<Scalars['String']['input']>;
  nftID_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftID_lt?: InputMaybe<Scalars['String']['input']>;
  nftID_lte?: InputMaybe<Scalars['String']['input']>;
  nftID_not?: InputMaybe<Scalars['String']['input']>;
  nftID_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftID_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftID_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftID_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftID_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftID_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftID_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftImage?: InputMaybe<Scalars['String']['input']>;
  nftImage_contains?: InputMaybe<Scalars['String']['input']>;
  nftImage_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftImage_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftImage_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftImage_gt?: InputMaybe<Scalars['String']['input']>;
  nftImage_gte?: InputMaybe<Scalars['String']['input']>;
  nftImage_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftImage_lt?: InputMaybe<Scalars['String']['input']>;
  nftImage_lte?: InputMaybe<Scalars['String']['input']>;
  nftImage_not?: InputMaybe<Scalars['String']['input']>;
  nftImage_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftImage_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftImage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftImage_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftImage_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftImage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftImage_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftImage_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftImage_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldID?: InputMaybe<Scalars['String']['input']>;
  oldID_contains?: InputMaybe<Scalars['String']['input']>;
  oldID_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldID_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldID_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldID_gt?: InputMaybe<Scalars['String']['input']>;
  oldID_gte?: InputMaybe<Scalars['String']['input']>;
  oldID_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldID_lt?: InputMaybe<Scalars['String']['input']>;
  oldID_lte?: InputMaybe<Scalars['String']['input']>;
  oldID_not?: InputMaybe<Scalars['String']['input']>;
  oldID_not_contains?: InputMaybe<Scalars['String']['input']>;
  oldID_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldID_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldID_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldID_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldID_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldID_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Network__Subgraph_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Network__GraphAccount_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastVersions_?: InputMaybe<Network__SubgraphVersion_Filter>;
  reserveRatio?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_gt?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_gte?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  reserveRatio_lt?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_lte?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_not?: InputMaybe<Scalars['Int']['input']>;
  reserveRatio_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  signalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensReceivedOnL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensReceivedOnL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensSentToL2?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokensSentToL2_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokensSentToL2_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  signalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedTransferToL2?: InputMaybe<Scalars['Boolean']['input']>;
  startedTransferToL2At?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedTransferToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedTransferToL2AtTx?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_contains?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_gt?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_gte?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  startedTransferToL2AtTx_lt?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_lte?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_not?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  startedTransferToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_starts_with?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  startedTransferToL2At_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2At_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2At_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedTransferToL2At_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2At_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2At_not?: InputMaybe<Scalars['BigInt']['input']>;
  startedTransferToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startedTransferToL2_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  startedTransferToL2_not?: InputMaybe<Scalars['Boolean']['input']>;
  startedTransferToL2_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  subgraphNumber?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  subgraphNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  subgraphNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2At?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2AtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2AtTx?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_gte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_lt?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_lte?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferredToL2AtTx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferredToL2AtTx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferredToL2At_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2At_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferredToL2At_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferredToL2_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transferredToL2_not?: InputMaybe<Scalars['Boolean']['input']>;
  transferredToL2_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  unsignalledTokens?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unsignalledTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  unsignalledTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not?: InputMaybe<Scalars['Int']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  versionCount?: InputMaybe<Scalars['BigInt']['input']>;
  versionCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  versionCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  versionCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  versionCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  versionCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  versionCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  versionCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  versions_?: InputMaybe<Network__SubgraphVersion_Filter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_gt?: InputMaybe<Scalars['String']['input']>;
  website_gte?: InputMaybe<Scalars['String']['input']>;
  website_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_lt?: InputMaybe<Scalars['String']['input']>;
  website_lte?: InputMaybe<Scalars['String']['input']>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  website_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  website_starts_with?: InputMaybe<Scalars['String']['input']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawableTokens?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawableTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawableTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawableTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawableTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawableTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawableTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawableTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawnTokens?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawnTokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawnTokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__Subgraph_OrderBy =
  | 'active'
  | 'categories'
  | 'codeRepository'
  | 'createdAt'
  | 'creatorAddress'
  | 'currentSignalledTokens'
  | 'currentVersion'
  | 'currentVersionRelationEntity'
  | 'currentVersionRelationEntity__active'
  | 'currentVersionRelationEntity__id'
  | 'currentVersion__createdAt'
  | 'currentVersion__description'
  | 'currentVersion__entityVersion'
  | 'currentVersion__id'
  | 'currentVersion__label'
  | 'currentVersion__metadataHash'
  | 'currentVersion__version'
  | 'description'
  | 'displayName'
  | 'entityVersion'
  | 'id'
  | 'idOnL1'
  | 'idOnL2'
  | 'image'
  | 'initializing'
  | 'ipfsMetadataHash'
  | 'linkedEntity'
  | 'linkedEntity__active'
  | 'linkedEntity__codeRepository'
  | 'linkedEntity__createdAt'
  | 'linkedEntity__creatorAddress'
  | 'linkedEntity__currentSignalledTokens'
  | 'linkedEntity__description'
  | 'linkedEntity__displayName'
  | 'linkedEntity__entityVersion'
  | 'linkedEntity__id'
  | 'linkedEntity__idOnL1'
  | 'linkedEntity__idOnL2'
  | 'linkedEntity__image'
  | 'linkedEntity__initializing'
  | 'linkedEntity__ipfsMetadataHash'
  | 'linkedEntity__metadataHash'
  | 'linkedEntity__migrated'
  | 'linkedEntity__nameSignalAmount'
  | 'linkedEntity__nameSignalCount'
  | 'linkedEntity__nftID'
  | 'linkedEntity__nftImage'
  | 'linkedEntity__oldID'
  | 'linkedEntity__reserveRatio'
  | 'linkedEntity__signalAmount'
  | 'linkedEntity__signalledTokens'
  | 'linkedEntity__signalledTokensReceivedOnL2'
  | 'linkedEntity__signalledTokensSentToL2'
  | 'linkedEntity__startedTransferToL2'
  | 'linkedEntity__startedTransferToL2At'
  | 'linkedEntity__startedTransferToL2AtBlockNumber'
  | 'linkedEntity__startedTransferToL2AtTx'
  | 'linkedEntity__subgraphNumber'
  | 'linkedEntity__transferredToL2'
  | 'linkedEntity__transferredToL2At'
  | 'linkedEntity__transferredToL2AtBlockNumber'
  | 'linkedEntity__transferredToL2AtTx'
  | 'linkedEntity__unsignalledTokens'
  | 'linkedEntity__updatedAt'
  | 'linkedEntity__versionCount'
  | 'linkedEntity__website'
  | 'linkedEntity__withdrawableTokens'
  | 'linkedEntity__withdrawnTokens'
  | 'metadataHash'
  | 'migrated'
  | 'nameSignalAmount'
  | 'nameSignalCount'
  | 'nameSignals'
  | 'nftID'
  | 'nftImage'
  | 'oldID'
  | 'owner'
  | 'owner__balance'
  | 'owner__balanceReceivedFromL1Delegation'
  | 'owner__balanceReceivedFromL1Signalling'
  | 'owner__codeRepository'
  | 'owner__createdAt'
  | 'owner__curationApproval'
  | 'owner__defaultDisplayName'
  | 'owner__description'
  | 'owner__developerCreatedAt'
  | 'owner__displayName'
  | 'owner__gnsApproval'
  | 'owner__id'
  | 'owner__image'
  | 'owner__isOrganization'
  | 'owner__metadataHash'
  | 'owner__stakingApproval'
  | 'owner__subgraphQueryFees'
  | 'owner__website'
  | 'pastVersions'
  | 'reserveRatio'
  | 'signalAmount'
  | 'signalledTokens'
  | 'signalledTokensReceivedOnL2'
  | 'signalledTokensSentToL2'
  | 'startedTransferToL2'
  | 'startedTransferToL2At'
  | 'startedTransferToL2AtBlockNumber'
  | 'startedTransferToL2AtTx'
  | 'subgraphNumber'
  | 'transferredToL2'
  | 'transferredToL2At'
  | 'transferredToL2AtBlockNumber'
  | 'transferredToL2AtTx'
  | 'unsignalledTokens'
  | 'updatedAt'
  | 'versionCount'
  | 'versions'
  | 'website'
  | 'withdrawableTokens'
  | 'withdrawnTokens';

/** Token Lock Wallets which hold locked GRT */
export type Network__TokenLockWallet = {
  __typename?: 'NETWORK__TokenLockWallet';
  /** Address of the beneficiary of locked tokens */
  beneficiary: Scalars['NETWORK__Bytes']['output'];
  /** The block this wlalet was created */
  blockNumberCreated: Scalars['BigInt']['output'];
  /** End time of the release schedule */
  endTime: Scalars['BigInt']['output'];
  /** The address of the token lock wallet */
  id: Scalars['ID']['output'];
  /** The hash of the initializer */
  initHash: Scalars['NETWORK__Bytes']['output'];
  /** Amount of tokens to be managed by the lock contract */
  managedAmount: Scalars['BigInt']['output'];
  /** The Manager address */
  manager: Scalars['NETWORK__Bytes']['output'];
  /** Number of periods between start time and end time */
  periods: Scalars['BigInt']['output'];
  /** Time when the releases start */
  releaseStartTime: Scalars['BigInt']['output'];
  /** Whether or not the contract is revocable */
  revocable?: Maybe<Network__Revocability>;
  /** Start time of the release schedule */
  startTime: Scalars['BigInt']['output'];
  /** The token being used (GRT) */
  token: Scalars['NETWORK__Bytes']['output'];
  /** True if the beneficiary has approved addresses that the manager has approved */
  tokenDestinationsApproved: Scalars['Boolean']['output'];
  /** The amount of tokens that have been resleased */
  tokensReleased: Scalars['BigInt']['output'];
  /** The amount of tokens that have been revoked */
  tokensRevoked: Scalars['BigInt']['output'];
  /** The amount of tokens that have been withdrawn */
  tokensWithdrawn: Scalars['BigInt']['output'];
  /** The creation tx hash of the wallet */
  txHash: Scalars['NETWORK__Bytes']['output'];
  /** Time the cliff vests, 0 if no cliff */
  vestingCliffTime: Scalars['BigInt']['output'];
};

export type Network__TokenLockWallet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__TokenLockWallet_Filter>>>;
  beneficiary?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  blockNumberCreated?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberCreated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberCreated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberCreated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumberCreated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberCreated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberCreated_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberCreated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  initHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  initHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  initHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  managedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  managedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  managedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  managedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  managedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  managedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  managedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  managedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  manager?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  manager_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  manager_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__TokenLockWallet_Filter>>>;
  periods?: InputMaybe<Scalars['BigInt']['input']>;
  periods_gt?: InputMaybe<Scalars['BigInt']['input']>;
  periods_gte?: InputMaybe<Scalars['BigInt']['input']>;
  periods_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  periods_lt?: InputMaybe<Scalars['BigInt']['input']>;
  periods_lte?: InputMaybe<Scalars['BigInt']['input']>;
  periods_not?: InputMaybe<Scalars['BigInt']['input']>;
  periods_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  releaseStartTime?: InputMaybe<Scalars['BigInt']['input']>;
  releaseStartTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  releaseStartTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  releaseStartTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  releaseStartTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  releaseStartTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  releaseStartTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  releaseStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revocable?: InputMaybe<Network__Revocability>;
  revocable_in?: InputMaybe<Array<Network__Revocability>>;
  revocable_not?: InputMaybe<Network__Revocability>;
  revocable_not_in?: InputMaybe<Array<Network__Revocability>>;
  startTime?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  tokenDestinationsApproved?: InputMaybe<Scalars['Boolean']['input']>;
  tokenDestinationsApproved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  tokenDestinationsApproved_not?: InputMaybe<Scalars['Boolean']['input']>;
  tokenDestinationsApproved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  token_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  token_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  tokensReleased?: InputMaybe<Scalars['BigInt']['input']>;
  tokensReleased_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensReleased_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensReleased_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensReleased_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensReleased_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensReleased_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokensReleased_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensRevoked?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRevoked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRevoked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRevoked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensRevoked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRevoked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRevoked_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokensRevoked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensWithdrawn?: InputMaybe<Scalars['BigInt']['input']>;
  tokensWithdrawn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensWithdrawn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensWithdrawn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokensWithdrawn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokensWithdrawn_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokensWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  vestingCliffTime?: InputMaybe<Scalars['BigInt']['input']>;
  vestingCliffTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vestingCliffTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vestingCliffTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vestingCliffTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vestingCliffTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vestingCliffTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  vestingCliffTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__TokenLockWallet_OrderBy =
  | 'beneficiary'
  | 'blockNumberCreated'
  | 'endTime'
  | 'id'
  | 'initHash'
  | 'managedAmount'
  | 'manager'
  | 'periods'
  | 'releaseStartTime'
  | 'revocable'
  | 'startTime'
  | 'token'
  | 'tokenDestinationsApproved'
  | 'tokensReleased'
  | 'tokensRevoked'
  | 'tokensWithdrawn'
  | 'txHash'
  | 'vestingCliffTime';

/** The Token manager data */
export type Network__TokenManager = {
  __typename?: 'NETWORK__TokenManager';
  /** List of function call authorizations */
  authorizedFunctions?: Maybe<Array<Network__AuthorizedFunction>>;
  /** Token manager address */
  id: Scalars['ID']['output'];
  /** Master copy address */
  masterCopy: Scalars['NETWORK__Bytes']['output'];
  /** List of addresses that are allowed to pull funds */
  tokenDestinations?: Maybe<Array<Scalars['NETWORK__Bytes']['output']>>;
  /** Token lock count of contracts created */
  tokenLockCount: Scalars['BigInt']['output'];
  /** Tokens stored in manger through deposit or withdraw */
  tokens: Scalars['BigInt']['output'];
};

/** The Token manager data */
export type Network__TokenManagerAuthorizedFunctionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Network__AuthorizedFunction_Filter>;
};

export type Network__TokenManager_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__TokenManager_Filter>>>;
  authorizedFunctions_?: InputMaybe<Network__AuthorizedFunction_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  masterCopy?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_gt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_gte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  masterCopy_lt?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_lte?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_not?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_not_contains?: InputMaybe<Scalars['NETWORK__Bytes']['input']>;
  masterCopy_not_in?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__TokenManager_Filter>>>;
  tokenDestinations?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  tokenDestinations_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  tokenDestinations_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  tokenDestinations_not?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  tokenDestinations_not_contains?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  tokenDestinations_not_contains_nocase?: InputMaybe<Array<Scalars['NETWORK__Bytes']['input']>>;
  tokenLockCount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenLockCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenLockCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenLockCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenLockCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenLockCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenLockCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenLockCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Network__TokenManager_OrderBy =
  | 'authorizedFunctions'
  | 'id'
  | 'masterCopy'
  | 'tokenDestinations'
  | 'tokenLockCount'
  | 'tokens';

/** A generic transaction in The Graph Network */
export type Network__Transaction = {
  /** Block number for the transaction */
  blockNumber: Scalars['Int']['output'];
  /** Transaction hash concatenated with event log index */
  id: Scalars['ID']['output'];
  /** Signer of the transaction */
  signer: Network__GraphAccount;
  /** Timestamp for the transaction */
  timestamp: Scalars['Int']['output'];
  /** Type of Graph Network transaction */
  type: Network__TransactionType;
};

export type Network__TransactionType =
  | 'BridgeDeposit'
  | 'BridgeWithdrawal'
  | 'BurnNSignal'
  | 'BurnSignal'
  | 'MintNSignal'
  | 'MintSignal'
  | 'Stake'
  | 'Unstake';

export type Network__Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Network__BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network__Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Network__Transaction_Filter>>>;
  signer?: InputMaybe<Scalars['String']['input']>;
  signer_?: InputMaybe<Network__GraphAccount_Filter>;
  signer_contains?: InputMaybe<Scalars['String']['input']>;
  signer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_gt?: InputMaybe<Scalars['String']['input']>;
  signer_gte?: InputMaybe<Scalars['String']['input']>;
  signer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_lt?: InputMaybe<Scalars['String']['input']>;
  signer_lte?: InputMaybe<Scalars['String']['input']>;
  signer_not?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains?: InputMaybe<Scalars['String']['input']>;
  signer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with?: InputMaybe<Scalars['String']['input']>;
  signer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<Network__TransactionType>;
  type_in?: InputMaybe<Array<Network__TransactionType>>;
  type_not?: InputMaybe<Network__TransactionType>;
  type_not_in?: InputMaybe<Array<Network__TransactionType>>;
};

export type Network__Transaction_OrderBy =
  | 'blockNumber'
  | 'id'
  | 'signer'
  | 'signer__balance'
  | 'signer__balanceReceivedFromL1Delegation'
  | 'signer__balanceReceivedFromL1Signalling'
  | 'signer__codeRepository'
  | 'signer__createdAt'
  | 'signer__curationApproval'
  | 'signer__defaultDisplayName'
  | 'signer__description'
  | 'signer__developerCreatedAt'
  | 'signer__displayName'
  | 'signer__gnsApproval'
  | 'signer__id'
  | 'signer__image'
  | 'signer__isOrganization'
  | 'signer__metadataHash'
  | 'signer__stakingApproval'
  | 'signer__subgraphQueryFees'
  | 'signer__website'
  | 'timestamp'
  | 'type';

export type Network___Block_ = {
  __typename?: 'NETWORK___Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['NETWORK__Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type Network___Meta_ = {
  __typename?: 'NETWORK___Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Network___Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Network___SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  LIVEPEER___meta?: Maybe<Livepeer___Meta_>;
  LIVEPEER__bondEvent?: Maybe<Livepeer__BondEvent>;
  LIVEPEER__bondEvents: Array<Livepeer__BondEvent>;
  LIVEPEER__broadcaster?: Maybe<Livepeer__Broadcaster>;
  LIVEPEER__broadcasters: Array<Livepeer__Broadcaster>;
  LIVEPEER__burnEvent?: Maybe<Livepeer__BurnEvent>;
  LIVEPEER__burnEvents: Array<Livepeer__BurnEvent>;
  LIVEPEER__day?: Maybe<Livepeer__Day>;
  LIVEPEER__days: Array<Livepeer__Day>;
  LIVEPEER__delegator?: Maybe<Livepeer__Delegator>;
  LIVEPEER__delegators: Array<Livepeer__Delegator>;
  LIVEPEER__depositFundedEvent?: Maybe<Livepeer__DepositFundedEvent>;
  LIVEPEER__depositFundedEvents: Array<Livepeer__DepositFundedEvent>;
  LIVEPEER__earningsClaimedEvent?: Maybe<Livepeer__EarningsClaimedEvent>;
  LIVEPEER__earningsClaimedEvents: Array<Livepeer__EarningsClaimedEvent>;
  LIVEPEER__event?: Maybe<Livepeer__Event>;
  LIVEPEER__events: Array<Livepeer__Event>;
  LIVEPEER__mintEvent?: Maybe<Livepeer__MintEvent>;
  LIVEPEER__mintEvents: Array<Livepeer__MintEvent>;
  LIVEPEER__newRoundEvent?: Maybe<Livepeer__NewRoundEvent>;
  LIVEPEER__newRoundEvents: Array<Livepeer__NewRoundEvent>;
  LIVEPEER__parameterUpdateEvent?: Maybe<Livepeer__ParameterUpdateEvent>;
  LIVEPEER__parameterUpdateEvents: Array<Livepeer__ParameterUpdateEvent>;
  LIVEPEER__pauseEvent?: Maybe<Livepeer__PauseEvent>;
  LIVEPEER__pauseEvents: Array<Livepeer__PauseEvent>;
  LIVEPEER__poll?: Maybe<Livepeer__Poll>;
  LIVEPEER__pollCreatedEvent?: Maybe<Livepeer__PollCreatedEvent>;
  LIVEPEER__pollCreatedEvents: Array<Livepeer__PollCreatedEvent>;
  LIVEPEER__pollTallies: Array<Livepeer__PollTally>;
  LIVEPEER__pollTally?: Maybe<Livepeer__PollTally>;
  LIVEPEER__polls: Array<Livepeer__Poll>;
  LIVEPEER__pool?: Maybe<Livepeer__Pool>;
  LIVEPEER__pools: Array<Livepeer__Pool>;
  LIVEPEER__protocol?: Maybe<Livepeer__Protocol>;
  LIVEPEER__protocols: Array<Livepeer__Protocol>;
  LIVEPEER__rebondEvent?: Maybe<Livepeer__RebondEvent>;
  LIVEPEER__rebondEvents: Array<Livepeer__RebondEvent>;
  LIVEPEER__reserveClaimedEvent?: Maybe<Livepeer__ReserveClaimedEvent>;
  LIVEPEER__reserveClaimedEvents: Array<Livepeer__ReserveClaimedEvent>;
  LIVEPEER__reserveFundedEvent?: Maybe<Livepeer__ReserveFundedEvent>;
  LIVEPEER__reserveFundedEvents: Array<Livepeer__ReserveFundedEvent>;
  LIVEPEER__rewardEvent?: Maybe<Livepeer__RewardEvent>;
  LIVEPEER__rewardEvents: Array<Livepeer__RewardEvent>;
  LIVEPEER__round?: Maybe<Livepeer__Round>;
  LIVEPEER__rounds: Array<Livepeer__Round>;
  LIVEPEER__serviceURIUpdateEvent?: Maybe<Livepeer__ServiceUriUpdateEvent>;
  LIVEPEER__serviceURIUpdateEvents: Array<Livepeer__ServiceUriUpdateEvent>;
  LIVEPEER__setCurrentRewardTokensEvent?: Maybe<Livepeer__SetCurrentRewardTokensEvent>;
  LIVEPEER__setCurrentRewardTokensEvents: Array<Livepeer__SetCurrentRewardTokensEvent>;
  LIVEPEER__transaction?: Maybe<Livepeer__Transaction>;
  LIVEPEER__transactions: Array<Livepeer__Transaction>;
  LIVEPEER__transcoder?: Maybe<Livepeer__Transcoder>;
  LIVEPEER__transcoderActivatedEvent?: Maybe<Livepeer__TranscoderActivatedEvent>;
  LIVEPEER__transcoderActivatedEvents: Array<Livepeer__TranscoderActivatedEvent>;
  LIVEPEER__transcoderDay?: Maybe<Livepeer__TranscoderDay>;
  LIVEPEER__transcoderDays: Array<Livepeer__TranscoderDay>;
  LIVEPEER__transcoderDeactivatedEvent?: Maybe<Livepeer__TranscoderDeactivatedEvent>;
  LIVEPEER__transcoderDeactivatedEvents: Array<Livepeer__TranscoderDeactivatedEvent>;
  LIVEPEER__transcoderEvictedEvent?: Maybe<Livepeer__TranscoderEvictedEvent>;
  LIVEPEER__transcoderEvictedEvents: Array<Livepeer__TranscoderEvictedEvent>;
  LIVEPEER__transcoderResignedEvent?: Maybe<Livepeer__TranscoderResignedEvent>;
  LIVEPEER__transcoderResignedEvents: Array<Livepeer__TranscoderResignedEvent>;
  LIVEPEER__transcoderSlashedEvent?: Maybe<Livepeer__TranscoderSlashedEvent>;
  LIVEPEER__transcoderSlashedEvents: Array<Livepeer__TranscoderSlashedEvent>;
  LIVEPEER__transcoderUpdateEvent?: Maybe<Livepeer__TranscoderUpdateEvent>;
  LIVEPEER__transcoderUpdateEvents: Array<Livepeer__TranscoderUpdateEvent>;
  LIVEPEER__transcoders: Array<Livepeer__Transcoder>;
  LIVEPEER__unbondEvent?: Maybe<Livepeer__UnbondEvent>;
  LIVEPEER__unbondEvents: Array<Livepeer__UnbondEvent>;
  LIVEPEER__unbondingLock?: Maybe<Livepeer__UnbondingLock>;
  LIVEPEER__unbondingLocks: Array<Livepeer__UnbondingLock>;
  LIVEPEER__unpauseEvent?: Maybe<Livepeer__UnpauseEvent>;
  LIVEPEER__unpauseEvents: Array<Livepeer__UnpauseEvent>;
  LIVEPEER__vote?: Maybe<Livepeer__Vote>;
  LIVEPEER__voteEvent?: Maybe<Livepeer__VoteEvent>;
  LIVEPEER__voteEvents: Array<Livepeer__VoteEvent>;
  LIVEPEER__votes: Array<Livepeer__Vote>;
  LIVEPEER__winningTicketRedeemedEvent?: Maybe<Livepeer__WinningTicketRedeemedEvent>;
  LIVEPEER__winningTicketRedeemedEvents: Array<Livepeer__WinningTicketRedeemedEvent>;
  LIVEPEER__withdrawFeesEvent?: Maybe<Livepeer__WithdrawFeesEvent>;
  LIVEPEER__withdrawFeesEvents: Array<Livepeer__WithdrawFeesEvent>;
  LIVEPEER__withdrawStakeEvent?: Maybe<Livepeer__WithdrawStakeEvent>;
  LIVEPEER__withdrawStakeEvents: Array<Livepeer__WithdrawStakeEvent>;
  LIVEPEER__withdrawalEvent?: Maybe<Livepeer__WithdrawalEvent>;
  LIVEPEER__withdrawalEvents: Array<Livepeer__WithdrawalEvent>;
  /** Access to subgraph metadata */
  NETWORK___meta?: Maybe<Network___Meta_>;
  NETWORK__allocation?: Maybe<Network__Allocation>;
  NETWORK__allocations: Array<Network__Allocation>;
  NETWORK__attestation?: Maybe<Network__Attestation>;
  NETWORK__attestations: Array<Network__Attestation>;
  NETWORK__authorizedFunction?: Maybe<Network__AuthorizedFunction>;
  NETWORK__authorizedFunctions: Array<Network__AuthorizedFunction>;
  NETWORK__bridgeDepositTransaction?: Maybe<Network__BridgeDepositTransaction>;
  NETWORK__bridgeDepositTransactions: Array<Network__BridgeDepositTransaction>;
  NETWORK__bridgeWithdrawalTransaction?: Maybe<Network__BridgeWithdrawalTransaction>;
  NETWORK__bridgeWithdrawalTransactions: Array<Network__BridgeWithdrawalTransaction>;
  NETWORK__curator?: Maybe<Network__Curator>;
  NETWORK__curatorSearch: Array<Network__Curator>;
  NETWORK__curators: Array<Network__Curator>;
  NETWORK__currentSubgraphDeploymentRelation?: Maybe<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__currentSubgraphDeploymentRelations: Array<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__delegatedStake?: Maybe<Network__DelegatedStake>;
  NETWORK__delegatedStakes: Array<Network__DelegatedStake>;
  NETWORK__delegator?: Maybe<Network__Delegator>;
  NETWORK__delegatorSearch: Array<Network__Delegator>;
  NETWORK__delegators: Array<Network__Delegator>;
  NETWORK__dispute?: Maybe<Network__Dispute>;
  NETWORK__disputes: Array<Network__Dispute>;
  NETWORK__epoch?: Maybe<Network__Epoch>;
  NETWORK__epoches: Array<Network__Epoch>;
  NETWORK__graphAccount?: Maybe<Network__GraphAccount>;
  NETWORK__graphAccountName?: Maybe<Network__GraphAccountName>;
  NETWORK__graphAccountNames: Array<Network__GraphAccountName>;
  NETWORK__graphAccounts: Array<Network__GraphAccount>;
  NETWORK__graphNetwork?: Maybe<Network__GraphNetwork>;
  NETWORK__graphNetworks: Array<Network__GraphNetwork>;
  NETWORK__indexer?: Maybe<Network__Indexer>;
  NETWORK__indexers: Array<Network__Indexer>;
  NETWORK__nameSignal?: Maybe<Network__NameSignal>;
  NETWORK__nameSignalSubgraphRelation?: Maybe<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalSubgraphRelations: Array<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalTransaction?: Maybe<Network__NameSignalTransaction>;
  NETWORK__nameSignalTransactions: Array<Network__NameSignalTransaction>;
  NETWORK__nameSignals: Array<Network__NameSignal>;
  NETWORK__network?: Maybe<Network__Network>;
  NETWORK__networks: Array<Network__Network>;
  NETWORK__pool?: Maybe<Network__Pool>;
  NETWORK__pools: Array<Network__Pool>;
  NETWORK__retryableTicket?: Maybe<Network__RetryableTicket>;
  NETWORK__retryableTicketRedeemAttempt?: Maybe<Network__RetryableTicketRedeemAttempt>;
  NETWORK__retryableTicketRedeemAttempts: Array<Network__RetryableTicketRedeemAttempt>;
  NETWORK__retryableTickets: Array<Network__RetryableTicket>;
  NETWORK__signal?: Maybe<Network__Signal>;
  NETWORK__signalTransaction?: Maybe<Network__SignalTransaction>;
  NETWORK__signalTransactions: Array<Network__SignalTransaction>;
  NETWORK__signals: Array<Network__Signal>;
  NETWORK__subgraph?: Maybe<Network__Subgraph>;
  NETWORK__subgraphCategories: Array<Network__SubgraphCategory>;
  NETWORK__subgraphCategory?: Maybe<Network__SubgraphCategory>;
  NETWORK__subgraphCategoryRelation?: Maybe<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphCategoryRelations: Array<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphDeployment?: Maybe<Network__SubgraphDeployment>;
  NETWORK__subgraphDeployments: Array<Network__SubgraphDeployment>;
  NETWORK__subgraphSearch: Array<Network__Subgraph>;
  NETWORK__subgraphVersion?: Maybe<Network__SubgraphVersion>;
  NETWORK__subgraphVersions: Array<Network__SubgraphVersion>;
  NETWORK__subgraphs: Array<Network__Subgraph>;
  NETWORK__tokenLockWallet?: Maybe<Network__TokenLockWallet>;
  NETWORK__tokenLockWallets: Array<Network__TokenLockWallet>;
  NETWORK__tokenManager?: Maybe<Network__TokenManager>;
  NETWORK__tokenManagers: Array<Network__TokenManager>;
  NETWORK__transaction?: Maybe<Network__Transaction>;
  NETWORK__transactions: Array<Network__Transaction>;
};

export type QueryLivepeer___MetaArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
};

export type QueryLivepeer__BondEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__BondEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__BondEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__BondEvent_Filter>;
};

export type QueryLivepeer__BroadcasterArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__BroadcastersArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Broadcaster_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Broadcaster_Filter>;
};

export type QueryLivepeer__BurnEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__BurnEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__BurnEvent_Filter>;
};

export type QueryLivepeer__DayArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__DaysArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Day_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Day_Filter>;
};

export type QueryLivepeer__DelegatorArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__DelegatorsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Delegator_Filter>;
};

export type QueryLivepeer__DepositFundedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__DepositFundedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__DepositFundedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__DepositFundedEvent_Filter>;
};

export type QueryLivepeer__EarningsClaimedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__EarningsClaimedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__EarningsClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__EarningsClaimedEvent_Filter>;
};

export type QueryLivepeer__EventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__EventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Event_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Event_Filter>;
};

export type QueryLivepeer__MintEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__MintEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__MintEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__MintEvent_Filter>;
};

export type QueryLivepeer__NewRoundEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__NewRoundEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__NewRoundEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__NewRoundEvent_Filter>;
};

export type QueryLivepeer__ParameterUpdateEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__ParameterUpdateEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ParameterUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ParameterUpdateEvent_Filter>;
};

export type QueryLivepeer__PauseEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__PauseEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__PauseEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__PauseEvent_Filter>;
};

export type QueryLivepeer__PollArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__PollCreatedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__PollCreatedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__PollCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__PollCreatedEvent_Filter>;
};

export type QueryLivepeer__PollTalliesArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__PollTally_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__PollTally_Filter>;
};

export type QueryLivepeer__PollTallyArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__PollsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Poll_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Poll_Filter>;
};

export type QueryLivepeer__PoolArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__PoolsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Pool_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Pool_Filter>;
};

export type QueryLivepeer__ProtocolArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__ProtocolsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Protocol_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Protocol_Filter>;
};

export type QueryLivepeer__RebondEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__RebondEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__RebondEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__RebondEvent_Filter>;
};

export type QueryLivepeer__ReserveClaimedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__ReserveClaimedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ReserveClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ReserveClaimedEvent_Filter>;
};

export type QueryLivepeer__ReserveFundedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__ReserveFundedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ReserveFundedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ReserveFundedEvent_Filter>;
};

export type QueryLivepeer__RewardEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__RewardEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__RewardEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__RewardEvent_Filter>;
};

export type QueryLivepeer__RoundArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__RoundsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Round_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Round_Filter>;
};

export type QueryLivepeer__ServiceUriUpdateEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__ServiceUriUpdateEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ServiceUriUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ServiceUriUpdateEvent_Filter>;
};

export type QueryLivepeer__SetCurrentRewardTokensEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__SetCurrentRewardTokensEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__SetCurrentRewardTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__SetCurrentRewardTokensEvent_Filter>;
};

export type QueryLivepeer__TransactionArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TransactionsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Transaction_Filter>;
};

export type QueryLivepeer__TranscoderArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderActivatedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderActivatedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderActivatedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderActivatedEvent_Filter>;
};

export type QueryLivepeer__TranscoderDayArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderDaysArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderDay_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderDay_Filter>;
};

export type QueryLivepeer__TranscoderDeactivatedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderDeactivatedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderDeactivatedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderDeactivatedEvent_Filter>;
};

export type QueryLivepeer__TranscoderEvictedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderEvictedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderEvictedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderEvictedEvent_Filter>;
};

export type QueryLivepeer__TranscoderResignedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderResignedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderResignedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderResignedEvent_Filter>;
};

export type QueryLivepeer__TranscoderSlashedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderSlashedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderSlashedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderSlashedEvent_Filter>;
};

export type QueryLivepeer__TranscoderUpdateEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__TranscoderUpdateEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderUpdateEvent_Filter>;
};

export type QueryLivepeer__TranscodersArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Transcoder_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Transcoder_Filter>;
};

export type QueryLivepeer__UnbondEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__UnbondEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__UnbondEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__UnbondEvent_Filter>;
};

export type QueryLivepeer__UnbondingLockArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__UnbondingLocksArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__UnbondingLock_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__UnbondingLock_Filter>;
};

export type QueryLivepeer__UnpauseEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__UnpauseEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__UnpauseEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__UnpauseEvent_Filter>;
};

export type QueryLivepeer__VoteArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__VoteEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__VoteEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__VoteEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__VoteEvent_Filter>;
};

export type QueryLivepeer__VotesArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Vote_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Vote_Filter>;
};

export type QueryLivepeer__WinningTicketRedeemedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__WinningTicketRedeemedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WinningTicketRedeemedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WinningTicketRedeemedEvent_Filter>;
};

export type QueryLivepeer__WithdrawFeesEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__WithdrawFeesEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WithdrawFeesEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WithdrawFeesEvent_Filter>;
};

export type QueryLivepeer__WithdrawStakeEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__WithdrawStakeEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WithdrawStakeEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WithdrawStakeEvent_Filter>;
};

export type QueryLivepeer__WithdrawalEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type QueryLivepeer__WithdrawalEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WithdrawalEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WithdrawalEvent_Filter>;
};

export type QueryNetwork___MetaArgs = {
  block?: InputMaybe<Network__Block_Height>;
};

export type QueryNetwork__AllocationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__AllocationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Allocation_Filter>;
};

export type QueryNetwork__AttestationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__AttestationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Attestation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Attestation_Filter>;
};

export type QueryNetwork__AuthorizedFunctionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__AuthorizedFunctionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__AuthorizedFunction_Filter>;
};

export type QueryNetwork__BridgeDepositTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__BridgeDepositTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__BridgeDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__BridgeDepositTransaction_Filter>;
};

export type QueryNetwork__BridgeWithdrawalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__BridgeWithdrawalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__BridgeWithdrawalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__BridgeWithdrawalTransaction_Filter>;
};

export type QueryNetwork__CuratorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__CuratorSearchArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  text: Scalars['String']['input'];
  where?: InputMaybe<Network__Curator_Filter>;
};

export type QueryNetwork__CuratorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Curator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Curator_Filter>;
};

export type QueryNetwork__CurrentSubgraphDeploymentRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__CurrentSubgraphDeploymentRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>;
};

export type QueryNetwork__DelegatedStakeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__DelegatedStakesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};

export type QueryNetwork__DelegatorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__DelegatorSearchArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  text: Scalars['String']['input'];
  where?: InputMaybe<Network__Delegator_Filter>;
};

export type QueryNetwork__DelegatorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Delegator_Filter>;
};

export type QueryNetwork__DisputeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__DisputesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Dispute_Filter>;
};

export type QueryNetwork__EpochArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__EpochesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Epoch_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Epoch_Filter>;
};

export type QueryNetwork__GraphAccountArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__GraphAccountNameArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__GraphAccountNamesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccountName_Filter>;
};

export type QueryNetwork__GraphAccountsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};

export type QueryNetwork__GraphNetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__GraphNetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphNetwork_Filter>;
};

export type QueryNetwork__IndexerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__IndexersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Indexer_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Indexer_Filter>;
};

export type QueryNetwork__NameSignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__NameSignalSubgraphRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__NameSignalSubgraphRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignalSubgraphRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalSubgraphRelation_Filter>;
};

export type QueryNetwork__NameSignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__NameSignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalTransaction_Filter>;
};

export type QueryNetwork__NameSignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignal_Filter>;
};

export type QueryNetwork__NetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__NetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Network_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Network_Filter>;
};

export type QueryNetwork__PoolArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__PoolsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Pool_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Pool_Filter>;
};

export type QueryNetwork__RetryableTicketArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__RetryableTicketRedeemAttemptArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__RetryableTicketRedeemAttemptsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__RetryableTicketRedeemAttempt_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__RetryableTicketRedeemAttempt_Filter>;
};

export type QueryNetwork__RetryableTicketsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__RetryableTicket_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__RetryableTicket_Filter>;
};

export type QueryNetwork__SignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__SignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__SignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SignalTransaction_Filter>;
};

export type QueryNetwork__SignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Signal_Filter>;
};

export type QueryNetwork__SubgraphArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__SubgraphCategoriesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphCategory_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategory_Filter>;
};

export type QueryNetwork__SubgraphCategoryArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__SubgraphCategoryRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__SubgraphCategoryRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};

export type QueryNetwork__SubgraphDeploymentArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__SubgraphDeploymentsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphDeployment_Filter>;
};

export type QueryNetwork__SubgraphSearchArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  text: Scalars['String']['input'];
  where?: InputMaybe<Network__Subgraph_Filter>;
};

export type QueryNetwork__SubgraphVersionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__SubgraphVersionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export type QueryNetwork__SubgraphsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Subgraph_Filter>;
};

export type QueryNetwork__TokenLockWalletArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__TokenLockWalletsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenLockWallet_Filter>;
};

export type QueryNetwork__TokenManagerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__TokenManagersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__TokenManager_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenManager_Filter>;
};

export type QueryNetwork__TransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type QueryNetwork__TransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Transaction_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  LIVEPEER___meta?: Maybe<Livepeer___Meta_>;
  LIVEPEER__bondEvent?: Maybe<Livepeer__BondEvent>;
  LIVEPEER__bondEvents: Array<Livepeer__BondEvent>;
  LIVEPEER__broadcaster?: Maybe<Livepeer__Broadcaster>;
  LIVEPEER__broadcasters: Array<Livepeer__Broadcaster>;
  LIVEPEER__burnEvent?: Maybe<Livepeer__BurnEvent>;
  LIVEPEER__burnEvents: Array<Livepeer__BurnEvent>;
  LIVEPEER__day?: Maybe<Livepeer__Day>;
  LIVEPEER__days: Array<Livepeer__Day>;
  LIVEPEER__delegator?: Maybe<Livepeer__Delegator>;
  LIVEPEER__delegators: Array<Livepeer__Delegator>;
  LIVEPEER__depositFundedEvent?: Maybe<Livepeer__DepositFundedEvent>;
  LIVEPEER__depositFundedEvents: Array<Livepeer__DepositFundedEvent>;
  LIVEPEER__earningsClaimedEvent?: Maybe<Livepeer__EarningsClaimedEvent>;
  LIVEPEER__earningsClaimedEvents: Array<Livepeer__EarningsClaimedEvent>;
  LIVEPEER__event?: Maybe<Livepeer__Event>;
  LIVEPEER__events: Array<Livepeer__Event>;
  LIVEPEER__mintEvent?: Maybe<Livepeer__MintEvent>;
  LIVEPEER__mintEvents: Array<Livepeer__MintEvent>;
  LIVEPEER__newRoundEvent?: Maybe<Livepeer__NewRoundEvent>;
  LIVEPEER__newRoundEvents: Array<Livepeer__NewRoundEvent>;
  LIVEPEER__parameterUpdateEvent?: Maybe<Livepeer__ParameterUpdateEvent>;
  LIVEPEER__parameterUpdateEvents: Array<Livepeer__ParameterUpdateEvent>;
  LIVEPEER__pauseEvent?: Maybe<Livepeer__PauseEvent>;
  LIVEPEER__pauseEvents: Array<Livepeer__PauseEvent>;
  LIVEPEER__poll?: Maybe<Livepeer__Poll>;
  LIVEPEER__pollCreatedEvent?: Maybe<Livepeer__PollCreatedEvent>;
  LIVEPEER__pollCreatedEvents: Array<Livepeer__PollCreatedEvent>;
  LIVEPEER__pollTallies: Array<Livepeer__PollTally>;
  LIVEPEER__pollTally?: Maybe<Livepeer__PollTally>;
  LIVEPEER__polls: Array<Livepeer__Poll>;
  LIVEPEER__pool?: Maybe<Livepeer__Pool>;
  LIVEPEER__pools: Array<Livepeer__Pool>;
  LIVEPEER__protocol?: Maybe<Livepeer__Protocol>;
  LIVEPEER__protocols: Array<Livepeer__Protocol>;
  LIVEPEER__rebondEvent?: Maybe<Livepeer__RebondEvent>;
  LIVEPEER__rebondEvents: Array<Livepeer__RebondEvent>;
  LIVEPEER__reserveClaimedEvent?: Maybe<Livepeer__ReserveClaimedEvent>;
  LIVEPEER__reserveClaimedEvents: Array<Livepeer__ReserveClaimedEvent>;
  LIVEPEER__reserveFundedEvent?: Maybe<Livepeer__ReserveFundedEvent>;
  LIVEPEER__reserveFundedEvents: Array<Livepeer__ReserveFundedEvent>;
  LIVEPEER__rewardEvent?: Maybe<Livepeer__RewardEvent>;
  LIVEPEER__rewardEvents: Array<Livepeer__RewardEvent>;
  LIVEPEER__round?: Maybe<Livepeer__Round>;
  LIVEPEER__rounds: Array<Livepeer__Round>;
  LIVEPEER__serviceURIUpdateEvent?: Maybe<Livepeer__ServiceUriUpdateEvent>;
  LIVEPEER__serviceURIUpdateEvents: Array<Livepeer__ServiceUriUpdateEvent>;
  LIVEPEER__setCurrentRewardTokensEvent?: Maybe<Livepeer__SetCurrentRewardTokensEvent>;
  LIVEPEER__setCurrentRewardTokensEvents: Array<Livepeer__SetCurrentRewardTokensEvent>;
  LIVEPEER__transaction?: Maybe<Livepeer__Transaction>;
  LIVEPEER__transactions: Array<Livepeer__Transaction>;
  LIVEPEER__transcoder?: Maybe<Livepeer__Transcoder>;
  LIVEPEER__transcoderActivatedEvent?: Maybe<Livepeer__TranscoderActivatedEvent>;
  LIVEPEER__transcoderActivatedEvents: Array<Livepeer__TranscoderActivatedEvent>;
  LIVEPEER__transcoderDay?: Maybe<Livepeer__TranscoderDay>;
  LIVEPEER__transcoderDays: Array<Livepeer__TranscoderDay>;
  LIVEPEER__transcoderDeactivatedEvent?: Maybe<Livepeer__TranscoderDeactivatedEvent>;
  LIVEPEER__transcoderDeactivatedEvents: Array<Livepeer__TranscoderDeactivatedEvent>;
  LIVEPEER__transcoderEvictedEvent?: Maybe<Livepeer__TranscoderEvictedEvent>;
  LIVEPEER__transcoderEvictedEvents: Array<Livepeer__TranscoderEvictedEvent>;
  LIVEPEER__transcoderResignedEvent?: Maybe<Livepeer__TranscoderResignedEvent>;
  LIVEPEER__transcoderResignedEvents: Array<Livepeer__TranscoderResignedEvent>;
  LIVEPEER__transcoderSlashedEvent?: Maybe<Livepeer__TranscoderSlashedEvent>;
  LIVEPEER__transcoderSlashedEvents: Array<Livepeer__TranscoderSlashedEvent>;
  LIVEPEER__transcoderUpdateEvent?: Maybe<Livepeer__TranscoderUpdateEvent>;
  LIVEPEER__transcoderUpdateEvents: Array<Livepeer__TranscoderUpdateEvent>;
  LIVEPEER__transcoders: Array<Livepeer__Transcoder>;
  LIVEPEER__unbondEvent?: Maybe<Livepeer__UnbondEvent>;
  LIVEPEER__unbondEvents: Array<Livepeer__UnbondEvent>;
  LIVEPEER__unbondingLock?: Maybe<Livepeer__UnbondingLock>;
  LIVEPEER__unbondingLocks: Array<Livepeer__UnbondingLock>;
  LIVEPEER__unpauseEvent?: Maybe<Livepeer__UnpauseEvent>;
  LIVEPEER__unpauseEvents: Array<Livepeer__UnpauseEvent>;
  LIVEPEER__vote?: Maybe<Livepeer__Vote>;
  LIVEPEER__voteEvent?: Maybe<Livepeer__VoteEvent>;
  LIVEPEER__voteEvents: Array<Livepeer__VoteEvent>;
  LIVEPEER__votes: Array<Livepeer__Vote>;
  LIVEPEER__winningTicketRedeemedEvent?: Maybe<Livepeer__WinningTicketRedeemedEvent>;
  LIVEPEER__winningTicketRedeemedEvents: Array<Livepeer__WinningTicketRedeemedEvent>;
  LIVEPEER__withdrawFeesEvent?: Maybe<Livepeer__WithdrawFeesEvent>;
  LIVEPEER__withdrawFeesEvents: Array<Livepeer__WithdrawFeesEvent>;
  LIVEPEER__withdrawStakeEvent?: Maybe<Livepeer__WithdrawStakeEvent>;
  LIVEPEER__withdrawStakeEvents: Array<Livepeer__WithdrawStakeEvent>;
  LIVEPEER__withdrawalEvent?: Maybe<Livepeer__WithdrawalEvent>;
  LIVEPEER__withdrawalEvents: Array<Livepeer__WithdrawalEvent>;
  /** Access to subgraph metadata */
  NETWORK___meta?: Maybe<Network___Meta_>;
  NETWORK__allocation?: Maybe<Network__Allocation>;
  NETWORK__allocations: Array<Network__Allocation>;
  NETWORK__attestation?: Maybe<Network__Attestation>;
  NETWORK__attestations: Array<Network__Attestation>;
  NETWORK__authorizedFunction?: Maybe<Network__AuthorizedFunction>;
  NETWORK__authorizedFunctions: Array<Network__AuthorizedFunction>;
  NETWORK__bridgeDepositTransaction?: Maybe<Network__BridgeDepositTransaction>;
  NETWORK__bridgeDepositTransactions: Array<Network__BridgeDepositTransaction>;
  NETWORK__bridgeWithdrawalTransaction?: Maybe<Network__BridgeWithdrawalTransaction>;
  NETWORK__bridgeWithdrawalTransactions: Array<Network__BridgeWithdrawalTransaction>;
  NETWORK__curator?: Maybe<Network__Curator>;
  NETWORK__curators: Array<Network__Curator>;
  NETWORK__currentSubgraphDeploymentRelation?: Maybe<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__currentSubgraphDeploymentRelations: Array<Network__CurrentSubgraphDeploymentRelation>;
  NETWORK__delegatedStake?: Maybe<Network__DelegatedStake>;
  NETWORK__delegatedStakes: Array<Network__DelegatedStake>;
  NETWORK__delegator?: Maybe<Network__Delegator>;
  NETWORK__delegators: Array<Network__Delegator>;
  NETWORK__dispute?: Maybe<Network__Dispute>;
  NETWORK__disputes: Array<Network__Dispute>;
  NETWORK__epoch?: Maybe<Network__Epoch>;
  NETWORK__epoches: Array<Network__Epoch>;
  NETWORK__graphAccount?: Maybe<Network__GraphAccount>;
  NETWORK__graphAccountName?: Maybe<Network__GraphAccountName>;
  NETWORK__graphAccountNames: Array<Network__GraphAccountName>;
  NETWORK__graphAccounts: Array<Network__GraphAccount>;
  NETWORK__graphNetwork?: Maybe<Network__GraphNetwork>;
  NETWORK__graphNetworks: Array<Network__GraphNetwork>;
  NETWORK__indexer?: Maybe<Network__Indexer>;
  NETWORK__indexers: Array<Network__Indexer>;
  NETWORK__nameSignal?: Maybe<Network__NameSignal>;
  NETWORK__nameSignalSubgraphRelation?: Maybe<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalSubgraphRelations: Array<Network__NameSignalSubgraphRelation>;
  NETWORK__nameSignalTransaction?: Maybe<Network__NameSignalTransaction>;
  NETWORK__nameSignalTransactions: Array<Network__NameSignalTransaction>;
  NETWORK__nameSignals: Array<Network__NameSignal>;
  NETWORK__network?: Maybe<Network__Network>;
  NETWORK__networks: Array<Network__Network>;
  NETWORK__pool?: Maybe<Network__Pool>;
  NETWORK__pools: Array<Network__Pool>;
  NETWORK__retryableTicket?: Maybe<Network__RetryableTicket>;
  NETWORK__retryableTicketRedeemAttempt?: Maybe<Network__RetryableTicketRedeemAttempt>;
  NETWORK__retryableTicketRedeemAttempts: Array<Network__RetryableTicketRedeemAttempt>;
  NETWORK__retryableTickets: Array<Network__RetryableTicket>;
  NETWORK__signal?: Maybe<Network__Signal>;
  NETWORK__signalTransaction?: Maybe<Network__SignalTransaction>;
  NETWORK__signalTransactions: Array<Network__SignalTransaction>;
  NETWORK__signals: Array<Network__Signal>;
  NETWORK__subgraph?: Maybe<Network__Subgraph>;
  NETWORK__subgraphCategories: Array<Network__SubgraphCategory>;
  NETWORK__subgraphCategory?: Maybe<Network__SubgraphCategory>;
  NETWORK__subgraphCategoryRelation?: Maybe<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphCategoryRelations: Array<Network__SubgraphCategoryRelation>;
  NETWORK__subgraphDeployment?: Maybe<Network__SubgraphDeployment>;
  NETWORK__subgraphDeployments: Array<Network__SubgraphDeployment>;
  NETWORK__subgraphVersion?: Maybe<Network__SubgraphVersion>;
  NETWORK__subgraphVersions: Array<Network__SubgraphVersion>;
  NETWORK__subgraphs: Array<Network__Subgraph>;
  NETWORK__tokenLockWallet?: Maybe<Network__TokenLockWallet>;
  NETWORK__tokenLockWallets: Array<Network__TokenLockWallet>;
  NETWORK__tokenManager?: Maybe<Network__TokenManager>;
  NETWORK__tokenManagers: Array<Network__TokenManager>;
  NETWORK__transaction?: Maybe<Network__Transaction>;
  NETWORK__transactions: Array<Network__Transaction>;
};

export type SubscriptionLivepeer___MetaArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
};

export type SubscriptionLivepeer__BondEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__BondEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__BondEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__BondEvent_Filter>;
};

export type SubscriptionLivepeer__BroadcasterArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__BroadcastersArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Broadcaster_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Broadcaster_Filter>;
};

export type SubscriptionLivepeer__BurnEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__BurnEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__BurnEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__BurnEvent_Filter>;
};

export type SubscriptionLivepeer__DayArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__DaysArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Day_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Day_Filter>;
};

export type SubscriptionLivepeer__DelegatorArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__DelegatorsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Delegator_Filter>;
};

export type SubscriptionLivepeer__DepositFundedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__DepositFundedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__DepositFundedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__DepositFundedEvent_Filter>;
};

export type SubscriptionLivepeer__EarningsClaimedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__EarningsClaimedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__EarningsClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__EarningsClaimedEvent_Filter>;
};

export type SubscriptionLivepeer__EventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__EventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Event_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Event_Filter>;
};

export type SubscriptionLivepeer__MintEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__MintEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__MintEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__MintEvent_Filter>;
};

export type SubscriptionLivepeer__NewRoundEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__NewRoundEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__NewRoundEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__NewRoundEvent_Filter>;
};

export type SubscriptionLivepeer__ParameterUpdateEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__ParameterUpdateEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ParameterUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ParameterUpdateEvent_Filter>;
};

export type SubscriptionLivepeer__PauseEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__PauseEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__PauseEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__PauseEvent_Filter>;
};

export type SubscriptionLivepeer__PollArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__PollCreatedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__PollCreatedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__PollCreatedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__PollCreatedEvent_Filter>;
};

export type SubscriptionLivepeer__PollTalliesArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__PollTally_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__PollTally_Filter>;
};

export type SubscriptionLivepeer__PollTallyArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__PollsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Poll_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Poll_Filter>;
};

export type SubscriptionLivepeer__PoolArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__PoolsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Pool_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Pool_Filter>;
};

export type SubscriptionLivepeer__ProtocolArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__ProtocolsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Protocol_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Protocol_Filter>;
};

export type SubscriptionLivepeer__RebondEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__RebondEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__RebondEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__RebondEvent_Filter>;
};

export type SubscriptionLivepeer__ReserveClaimedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__ReserveClaimedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ReserveClaimedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ReserveClaimedEvent_Filter>;
};

export type SubscriptionLivepeer__ReserveFundedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__ReserveFundedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ReserveFundedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ReserveFundedEvent_Filter>;
};

export type SubscriptionLivepeer__RewardEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__RewardEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__RewardEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__RewardEvent_Filter>;
};

export type SubscriptionLivepeer__RoundArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__RoundsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Round_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Round_Filter>;
};

export type SubscriptionLivepeer__ServiceUriUpdateEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__ServiceUriUpdateEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__ServiceUriUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__ServiceUriUpdateEvent_Filter>;
};

export type SubscriptionLivepeer__SetCurrentRewardTokensEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__SetCurrentRewardTokensEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__SetCurrentRewardTokensEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__SetCurrentRewardTokensEvent_Filter>;
};

export type SubscriptionLivepeer__TransactionArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TransactionsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Transaction_Filter>;
};

export type SubscriptionLivepeer__TranscoderArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderActivatedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderActivatedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderActivatedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderActivatedEvent_Filter>;
};

export type SubscriptionLivepeer__TranscoderDayArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderDaysArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderDay_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderDay_Filter>;
};

export type SubscriptionLivepeer__TranscoderDeactivatedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderDeactivatedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderDeactivatedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderDeactivatedEvent_Filter>;
};

export type SubscriptionLivepeer__TranscoderEvictedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderEvictedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderEvictedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderEvictedEvent_Filter>;
};

export type SubscriptionLivepeer__TranscoderResignedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderResignedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderResignedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderResignedEvent_Filter>;
};

export type SubscriptionLivepeer__TranscoderSlashedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderSlashedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderSlashedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderSlashedEvent_Filter>;
};

export type SubscriptionLivepeer__TranscoderUpdateEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__TranscoderUpdateEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__TranscoderUpdateEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__TranscoderUpdateEvent_Filter>;
};

export type SubscriptionLivepeer__TranscodersArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Transcoder_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Transcoder_Filter>;
};

export type SubscriptionLivepeer__UnbondEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__UnbondEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__UnbondEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__UnbondEvent_Filter>;
};

export type SubscriptionLivepeer__UnbondingLockArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__UnbondingLocksArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__UnbondingLock_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__UnbondingLock_Filter>;
};

export type SubscriptionLivepeer__UnpauseEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__UnpauseEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__UnpauseEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__UnpauseEvent_Filter>;
};

export type SubscriptionLivepeer__VoteArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__VoteEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__VoteEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__VoteEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__VoteEvent_Filter>;
};

export type SubscriptionLivepeer__VotesArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__Vote_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__Vote_Filter>;
};

export type SubscriptionLivepeer__WinningTicketRedeemedEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__WinningTicketRedeemedEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WinningTicketRedeemedEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WinningTicketRedeemedEvent_Filter>;
};

export type SubscriptionLivepeer__WithdrawFeesEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__WithdrawFeesEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WithdrawFeesEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WithdrawFeesEvent_Filter>;
};

export type SubscriptionLivepeer__WithdrawStakeEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__WithdrawStakeEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WithdrawStakeEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WithdrawStakeEvent_Filter>;
};

export type SubscriptionLivepeer__WithdrawalEventArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
};

export type SubscriptionLivepeer__WithdrawalEventsArgs = {
  block?: InputMaybe<Livepeer__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Livepeer__WithdrawalEvent_OrderBy>;
  orderDirection?: InputMaybe<Livepeer__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Livepeer___SubgraphErrorPolicy_;
  where?: InputMaybe<Livepeer__WithdrawalEvent_Filter>;
};

export type SubscriptionNetwork___MetaArgs = {
  block?: InputMaybe<Network__Block_Height>;
};

export type SubscriptionNetwork__AllocationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__AllocationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Allocation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Allocation_Filter>;
};

export type SubscriptionNetwork__AttestationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__AttestationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Attestation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Attestation_Filter>;
};

export type SubscriptionNetwork__AuthorizedFunctionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__AuthorizedFunctionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__AuthorizedFunction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__AuthorizedFunction_Filter>;
};

export type SubscriptionNetwork__BridgeDepositTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__BridgeDepositTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__BridgeDepositTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__BridgeDepositTransaction_Filter>;
};

export type SubscriptionNetwork__BridgeWithdrawalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__BridgeWithdrawalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__BridgeWithdrawalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__BridgeWithdrawalTransaction_Filter>;
};

export type SubscriptionNetwork__CuratorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__CuratorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Curator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Curator_Filter>;
};

export type SubscriptionNetwork__CurrentSubgraphDeploymentRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__CurrentSubgraphDeploymentRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__CurrentSubgraphDeploymentRelation_Filter>;
};

export type SubscriptionNetwork__DelegatedStakeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__DelegatedStakesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__DelegatedStake_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__DelegatedStake_Filter>;
};

export type SubscriptionNetwork__DelegatorArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__DelegatorsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Delegator_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Delegator_Filter>;
};

export type SubscriptionNetwork__DisputeArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__DisputesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Dispute_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Dispute_Filter>;
};

export type SubscriptionNetwork__EpochArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__EpochesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Epoch_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Epoch_Filter>;
};

export type SubscriptionNetwork__GraphAccountArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__GraphAccountNameArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__GraphAccountNamesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphAccountName_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccountName_Filter>;
};

export type SubscriptionNetwork__GraphAccountsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphAccount_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphAccount_Filter>;
};

export type SubscriptionNetwork__GraphNetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__GraphNetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__GraphNetwork_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__GraphNetwork_Filter>;
};

export type SubscriptionNetwork__IndexerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__IndexersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Indexer_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Indexer_Filter>;
};

export type SubscriptionNetwork__NameSignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__NameSignalSubgraphRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__NameSignalSubgraphRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignalSubgraphRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalSubgraphRelation_Filter>;
};

export type SubscriptionNetwork__NameSignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__NameSignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignalTransaction_Filter>;
};

export type SubscriptionNetwork__NameSignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__NameSignal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__NameSignal_Filter>;
};

export type SubscriptionNetwork__NetworkArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__NetworksArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Network_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Network_Filter>;
};

export type SubscriptionNetwork__PoolArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__PoolsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Pool_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Pool_Filter>;
};

export type SubscriptionNetwork__RetryableTicketArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__RetryableTicketRedeemAttemptArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__RetryableTicketRedeemAttemptsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__RetryableTicketRedeemAttempt_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__RetryableTicketRedeemAttempt_Filter>;
};

export type SubscriptionNetwork__RetryableTicketsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__RetryableTicket_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__RetryableTicket_Filter>;
};

export type SubscriptionNetwork__SignalArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__SignalTransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__SignalTransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SignalTransaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SignalTransaction_Filter>;
};

export type SubscriptionNetwork__SignalsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Signal_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Signal_Filter>;
};

export type SubscriptionNetwork__SubgraphArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__SubgraphCategoriesArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphCategory_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategory_Filter>;
};

export type SubscriptionNetwork__SubgraphCategoryArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__SubgraphCategoryRelationArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__SubgraphCategoryRelationsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphCategoryRelation_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphCategoryRelation_Filter>;
};

export type SubscriptionNetwork__SubgraphDeploymentArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__SubgraphDeploymentsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphDeployment_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphDeployment_Filter>;
};

export type SubscriptionNetwork__SubgraphVersionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__SubgraphVersionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__SubgraphVersion_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__SubgraphVersion_Filter>;
};

export type SubscriptionNetwork__SubgraphsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Subgraph_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Subgraph_Filter>;
};

export type SubscriptionNetwork__TokenLockWalletArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__TokenLockWalletsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__TokenLockWallet_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenLockWallet_Filter>;
};

export type SubscriptionNetwork__TokenManagerArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__TokenManagersArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__TokenManager_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__TokenManager_Filter>;
};

export type SubscriptionNetwork__TransactionArgs = {
  block?: InputMaybe<Network__Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: Network___SubgraphErrorPolicy_;
};

export type SubscriptionNetwork__TransactionsArgs = {
  block?: InputMaybe<Network__Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network__Transaction_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: Network___SubgraphErrorPolicy_;
  where?: InputMaybe<Network__Transaction_Filter>;
};

export type EpochesQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  where?: InputMaybe<Network__Epoch_Filter>;
  orderBy?: InputMaybe<Network__Epoch_OrderBy>;
  orderDirection?: InputMaybe<Network__OrderDirection>;
}>;

export type EpochesQuery = {
  __typename?: 'Query';
  epoches: Array<{
    __typename?: 'NETWORK__Epoch';
    id: string;
    startBlock: number;
    endBlock: number;
    signalledTokens: string;
    totalQueryFees: string;
    totalIndexerRewards: string;
  }>;
};

export type TranscodersQueryVariables = Exact<{ [key: string]: never }>;

export type TranscodersQuery = {
  __typename?: 'Query';
  subgraphs: Array<{
    __typename?: 'NETWORK__Subgraph';
    id: string;
    displayName?: string | null;
    owner: { __typename?: 'NETWORK__GraphAccount'; id: string; defaultDisplayName?: string | null };
  }>;
  transcoders: Array<{
    __typename?: 'LIVEPEER__Transcoder';
    id: string;
    totalStake: any;
    rewardCut: string;
    feeShare: string;
    serviceURI?: string | null;
  }>;
};

export const EpochesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Epoches' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'NETWORK__Epoch_filter' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'NETWORK__Epoch_orderBy' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'NETWORK__OrderDirection' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'epoches' },
            name: { kind: 'Name', value: 'NETWORK__epoches' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'first' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'where' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderBy' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'orderDirection' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'startBlock' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endBlock' } },
                { kind: 'Field', name: { kind: 'Name', value: 'signalledTokens' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalQueryFees' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalIndexerRewards' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EpochesQuery, EpochesQueryVariables>;
export const TranscodersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Transcoders' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'subgraphs' },
            name: { kind: 'Name', value: 'NETWORK__subgraphs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'createdAt' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: { kind: 'EnumValue', value: 'desc' },
              },
              { kind: 'Argument', name: { kind: 'Name', value: 'first' }, value: { kind: 'IntValue', value: '10' } },
              { kind: 'Argument', name: { kind: 'Name', value: 'skip' }, value: { kind: 'IntValue', value: '0' } },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'active' },
                      value: { kind: 'BooleanValue', value: true },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'owner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'defaultDisplayName' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'transcoders' },
            name: { kind: 'Name', value: 'LIVEPEER__transcoders' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalStake' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rewardCut' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feeShare' } },
                { kind: 'Field', name: { kind: 'Name', value: 'serviceURI' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TranscodersQuery, TranscodersQueryVariables>;
