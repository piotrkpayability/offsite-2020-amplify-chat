/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateMessagesInput = {
  id?: string | null;
  userName?: string | null;
  text?: string | null;
  _version?: number | null;
};

export type ModelMessagesConditionInput = {
  userName?: ModelStringInput | null;
  text?: ModelStringInput | null;
  and?: Array<ModelMessagesConditionInput | null> | null;
  or?: Array<ModelMessagesConditionInput | null> | null;
  not?: ModelMessagesConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateMessagesInput = {
  id: string;
  userName?: string | null;
  text?: string | null;
  _version?: number | null;
};

export type DeleteMessagesInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelMessagesFilterInput = {
  id?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  text?: ModelStringInput | null;
  and?: Array<ModelMessagesFilterInput | null> | null;
  or?: Array<ModelMessagesFilterInput | null> | null;
  not?: ModelMessagesFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateMessagesMutation = {
  __typename: "Messages";
  id: string;
  userName: string | null;
  text: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessagesMutation = {
  __typename: "Messages";
  id: string;
  userName: string | null;
  text: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMessagesMutation = {
  __typename: "Messages";
  id: string;
  userName: string | null;
  text: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncMessagesQuery = {
  __typename: "ModelMessagesConnection";
  items: Array<{
    __typename: "Messages";
    id: string;
    userName: string | null;
    text: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetMessagesQuery = {
  __typename: "Messages";
  id: string;
  userName: string | null;
  text: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListMessagessQuery = {
  __typename: "ModelMessagesConnection";
  items: Array<{
    __typename: "Messages";
    id: string;
    userName: string | null;
    text: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateMessagesSubscription = {
  __typename: "Messages";
  id: string;
  userName: string | null;
  text: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMessagesSubscription = {
  __typename: "Messages";
  id: string;
  userName: string | null;
  text: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMessagesSubscription = {
  __typename: "Messages";
  id: string;
  userName: string | null;
  text: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateMessages(
    input: CreateMessagesInput,
    condition?: ModelMessagesConditionInput
  ): Promise<CreateMessagesMutation> {
    const statement = `mutation CreateMessages($input: CreateMessagesInput!, $condition: ModelMessagesConditionInput) {
        createMessages(input: $input, condition: $condition) {
          __typename
          id
          userName
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessagesMutation>response.data.createMessages;
  }
  async UpdateMessages(
    input: UpdateMessagesInput,
    condition?: ModelMessagesConditionInput
  ): Promise<UpdateMessagesMutation> {
    const statement = `mutation UpdateMessages($input: UpdateMessagesInput!, $condition: ModelMessagesConditionInput) {
        updateMessages(input: $input, condition: $condition) {
          __typename
          id
          userName
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessagesMutation>response.data.updateMessages;
  }
  async DeleteMessages(
    input: DeleteMessagesInput,
    condition?: ModelMessagesConditionInput
  ): Promise<DeleteMessagesMutation> {
    const statement = `mutation DeleteMessages($input: DeleteMessagesInput!, $condition: ModelMessagesConditionInput) {
        deleteMessages(input: $input, condition: $condition) {
          __typename
          id
          userName
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessagesMutation>response.data.deleteMessages;
  }
  async SyncMessages(
    filter?: ModelMessagesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncMessagesQuery> {
    const statement = `query SyncMessages($filter: ModelMessagesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncMessages(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            userName
            text
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncMessagesQuery>response.data.syncMessages;
  }
  async GetMessages(id: string): Promise<GetMessagesQuery> {
    const statement = `query GetMessages($id: ID!) {
        getMessages(id: $id) {
          __typename
          id
          userName
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessagesQuery>response.data.getMessages;
  }
  async ListMessagess(
    filter?: ModelMessagesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagessQuery> {
    const statement = `query ListMessagess($filter: ModelMessagesFilterInput, $limit: Int, $nextToken: String) {
        listMessagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userName
            text
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagessQuery>response.data.listMessagess;
  }
  OnCreateMessagesListener: Observable<
    OnCreateMessagesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessages {
        onCreateMessages {
          __typename
          id
          userName
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateMessagesSubscription>;

  OnUpdateMessagesListener: Observable<
    OnUpdateMessagesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessages {
        onUpdateMessages {
          __typename
          id
          userName
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateMessagesSubscription>;

  OnDeleteMessagesListener: Observable<
    OnDeleteMessagesSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessages {
        onDeleteMessages {
          __typename
          id
          userName
          text
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteMessagesSubscription>;
}
