import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Personality {
  CALM = "CALM",
  CURIOUS = "CURIOUS",
  HECTIC = "HECTIC"
}

export enum Size {
  SMALL = "SMALL",
  BIG = "BIG",
  TINY = "TINY",
  MEDIUM = "MEDIUM"
}

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

export enum Species {
  DOG = "DOG",
  CAT = "CAT",
  BIRD = "BIRD",
  EQUINE = "EQUINE",
  BOVINE = "BOVINE",
  WILD_ANIMAL = "WILD_ANIMAL"
}



type AnimalsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Animals {
  readonly id: string;
  readonly name: string;
  readonly species: Species | keyof typeof Species;
  readonly breed: string;
  readonly sex: Sex | keyof typeof Sex;
  readonly size: Size | keyof typeof Size;
  readonly personality: Personality | keyof typeof Personality;
  readonly is_castrated: boolean;
  readonly has_chip: boolean;
  readonly description: string;
  readonly fiv: boolean;
  readonly felv: boolean;
  readonly photoKey: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Animals, AnimalsMetaData>);
  static copyOf(source: Animals, mutator: (draft: MutableModel<Animals, AnimalsMetaData>) => MutableModel<Animals, AnimalsMetaData> | void): Animals;
}