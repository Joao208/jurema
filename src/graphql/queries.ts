/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnimalsModel = /* GraphQL */ `
  query GetAnimalsModel($id: ID!) {
    getAnimalsModel(id: $id) {
      id
      name
      species
      breed
      sex
      size
      personality
      is_castrated
      has_chip
      description
      fiv
      felv
      photoKey
      createdAt
      updatedAt
    }
  }
`;
export const listAnimalsModels = /* GraphQL */ `
  query ListAnimalsModels(
    $filter: ModelAnimalsModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnimalsModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        species
        breed
        sex
        size
        personality
        is_castrated
        has_chip
        description
        fiv
        felv
        photoKey
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
