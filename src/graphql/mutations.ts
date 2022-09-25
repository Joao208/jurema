/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnimalsModel = /* GraphQL */ `
  mutation CreateAnimalsModel(
    $input: CreateAnimalsModelInput!
    $condition: ModelAnimalsModelConditionInput
  ) {
    createAnimalsModel(input: $input, condition: $condition) {
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
export const updateAnimalsModel = /* GraphQL */ `
  mutation UpdateAnimalsModel(
    $input: UpdateAnimalsModelInput!
    $condition: ModelAnimalsModelConditionInput
  ) {
    updateAnimalsModel(input: $input, condition: $condition) {
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
export const deleteAnimalsModel = /* GraphQL */ `
  mutation DeleteAnimalsModel(
    $input: DeleteAnimalsModelInput!
    $condition: ModelAnimalsModelConditionInput
  ) {
    deleteAnimalsModel(input: $input, condition: $condition) {
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
