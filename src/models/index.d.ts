import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Personality {
  CALM = "CALM",
  CURIOUS = "CURIOUS"
}

export enum Size {
  SMALL = "SMALL",
  BIG = "BIG"
}

export enum Sex {
  MALE = "MALE",
  FAMALE = "FAMALE"
}

export enum Species {
  DOG = "DOG",
  CAT = "CAT"
}



type AnimalModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AnimalModel {
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
  constructor(init: ModelInit<AnimalModel, AnimalModelMetaData>);
  static copyOf(source: AnimalModel, mutator: (draft: MutableModel<AnimalModel, AnimalModelMetaData>) => MutableModel<AnimalModel, AnimalModelMetaData> | void): AnimalModel;
}