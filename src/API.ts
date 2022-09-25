/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAnimalsModelInput = {
  id?: string | null,
  name: string,
  species: Species,
  breed: string,
  sex: Sex,
  size: Size,
  personality: Personality,
  is_castrated: boolean,
  has_chip: boolean,
  description: string,
  fiv: boolean,
  felv: boolean,
  photoKey: string,
};

export enum Species {
  DOG = "DOG",
  CAT = "CAT",
  BIRD = "BIRD",
  EQUINE = "EQUINE",
  BOVINE = "BOVINE",
  WILD_ANIMAL = "WILD_ANIMAL",
}


export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}


export enum Size {
  SMALL = "SMALL",
  BIG = "BIG",
  TINY = "TINY",
  MEDIUM = "MEDIUM",
}


export enum Personality {
  CALM = "CALM",
  CURIOUS = "CURIOUS",
  HECTIC = "HECTIC",
}


export type ModelAnimalsModelConditionInput = {
  name?: ModelStringInput | null,
  species?: ModelSpeciesInput | null,
  breed?: ModelStringInput | null,
  sex?: ModelSexInput | null,
  size?: ModelSizeInput | null,
  personality?: ModelPersonalityInput | null,
  is_castrated?: ModelBooleanInput | null,
  has_chip?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  fiv?: ModelBooleanInput | null,
  felv?: ModelBooleanInput | null,
  photoKey?: ModelStringInput | null,
  and?: Array< ModelAnimalsModelConditionInput | null > | null,
  or?: Array< ModelAnimalsModelConditionInput | null > | null,
  not?: ModelAnimalsModelConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelSpeciesInput = {
  eq?: Species | null,
  ne?: Species | null,
};

export type ModelSexInput = {
  eq?: Sex | null,
  ne?: Sex | null,
};

export type ModelPersonalityInput = {
  eq?: Personality | null,
  ne?: Personality | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type AnimalsModel = {
  __typename: "AnimalsModel",
  id: string,
  name: string,
  species: Species,
  breed: string,
  sex: Sex,
  size: Size,
  personality: Personality,
  is_castrated: boolean,
  has_chip: boolean,
  description: string,
  fiv: boolean,
  felv: boolean,
  photoKey: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAnimalsModelInput = {
  id: string,
  name?: string | null,
  species?: Species | null,
  breed?: string | null,
  sex?: Sex | null,
  size?: Size | null,
  personality?: Personality | null,
  is_castrated?: boolean | null,
  has_chip?: boolean | null,
  description?: string | null,
  fiv?: boolean | null,
  felv?: boolean | null,
  photoKey?: string | null,
};

export type DeleteAnimalsModelInput = {
  id: string,
};

export type ModelAnimalsModelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  species?: ModelSpeciesInput | null,
  breed?: ModelStringInput | null,
  sex?: ModelSexInput | null,
  size?: ModelSizeInput | null,
  personality?: ModelPersonalityInput | null,
  is_castrated?: ModelBooleanInput | null,
  has_chip?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  fiv?: ModelBooleanInput | null,
  felv?: ModelBooleanInput | null,
  photoKey?: ModelStringInput | null,
  and?: Array< ModelAnimalsModelFilterInput | null > | null,
  or?: Array< ModelAnimalsModelFilterInput | null > | null,
  not?: ModelAnimalsModelFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelAnimalsModelConnection = {
  __typename: "ModelAnimalsModelConnection",
  items:  Array<AnimalsModel | null >,
  nextToken?: string | null,
};

export type CreateAnimalsModelMutationVariables = {
  input: CreateAnimalsModelInput,
  condition?: ModelAnimalsModelConditionInput | null,
};

export type CreateAnimalsModelMutation = {
  createAnimalsModel?:  {
    __typename: "AnimalsModel",
    id: string,
    name: string,
    species: Species,
    breed: string,
    sex: Sex,
    size: Size,
    personality: Personality,
    is_castrated: boolean,
    has_chip: boolean,
    description: string,
    fiv: boolean,
    felv: boolean,
    photoKey: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAnimalsModelMutationVariables = {
  input: UpdateAnimalsModelInput,
  condition?: ModelAnimalsModelConditionInput | null,
};

export type UpdateAnimalsModelMutation = {
  updateAnimalsModel?:  {
    __typename: "AnimalsModel",
    id: string,
    name: string,
    species: Species,
    breed: string,
    sex: Sex,
    size: Size,
    personality: Personality,
    is_castrated: boolean,
    has_chip: boolean,
    description: string,
    fiv: boolean,
    felv: boolean,
    photoKey: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAnimalsModelMutationVariables = {
  input: DeleteAnimalsModelInput,
  condition?: ModelAnimalsModelConditionInput | null,
};

export type DeleteAnimalsModelMutation = {
  deleteAnimalsModel?:  {
    __typename: "AnimalsModel",
    id: string,
    name: string,
    species: Species,
    breed: string,
    sex: Sex,
    size: Size,
    personality: Personality,
    is_castrated: boolean,
    has_chip: boolean,
    description: string,
    fiv: boolean,
    felv: boolean,
    photoKey: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAnimalsModelQueryVariables = {
  id: string,
};

export type GetAnimalsModelQuery = {
  getAnimalsModel?:  {
    __typename: "AnimalsModel",
    id: string,
    name: string,
    species: Species,
    breed: string,
    sex: Sex,
    size: Size,
    personality: Personality,
    is_castrated: boolean,
    has_chip: boolean,
    description: string,
    fiv: boolean,
    felv: boolean,
    photoKey: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAnimalsModelsQueryVariables = {
  filter?: ModelAnimalsModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnimalsModelsQuery = {
  listAnimalsModels?:  {
    __typename: "ModelAnimalsModelConnection",
    items:  Array< {
      __typename: "AnimalsModel",
      id: string,
      name: string,
      species: Species,
      breed: string,
      sex: Sex,
      size: Size,
      personality: Personality,
      is_castrated: boolean,
      has_chip: boolean,
      description: string,
      fiv: boolean,
      felv: boolean,
      photoKey: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAnimalsModelSubscription = {
  onCreateAnimalsModel?:  {
    __typename: "AnimalsModel",
    id: string,
    name: string,
    species: Species,
    breed: string,
    sex: Sex,
    size: Size,
    personality: Personality,
    is_castrated: boolean,
    has_chip: boolean,
    description: string,
    fiv: boolean,
    felv: boolean,
    photoKey: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnimalsModelSubscription = {
  onUpdateAnimalsModel?:  {
    __typename: "AnimalsModel",
    id: string,
    name: string,
    species: Species,
    breed: string,
    sex: Sex,
    size: Size,
    personality: Personality,
    is_castrated: boolean,
    has_chip: boolean,
    description: string,
    fiv: boolean,
    felv: boolean,
    photoKey: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnimalsModelSubscription = {
  onDeleteAnimalsModel?:  {
    __typename: "AnimalsModel",
    id: string,
    name: string,
    species: Species,
    breed: string,
    sex: Sex,
    size: Size,
    personality: Personality,
    is_castrated: boolean,
    has_chip: boolean,
    description: string,
    fiv: boolean,
    felv: boolean,
    photoKey: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
