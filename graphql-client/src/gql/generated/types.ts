export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  usersByFirstName?: Maybe<Array<Maybe<User>>>;
  usersByLastName?: Maybe<Array<Maybe<User>>>;
};


export type RootQueryTypeUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryTypeUsersByFirstNameArgs = {
  first_name?: InputMaybe<Scalars['String']>;
};


export type RootQueryTypeUsersByLastNameArgs = {
  last_name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ip_address?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
};

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetUserByIdQuery = { __typename?: 'RootQueryType', user?: { __typename?: 'User', id?: number | null, first_name: string, last_name: string, email?: string | null, gender?: string | null, ip_address?: string | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'RootQueryType', users?: Array<{ __typename?: 'User', id?: number | null, first_name: string, last_name: string, email?: string | null, gender?: string | null, ip_address?: string | null } | null> | null };
