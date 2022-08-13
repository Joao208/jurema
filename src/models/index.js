// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Personality = {
  "CALM": "CALM",
  "CURIOUS": "CURIOUS",
  "HECTIC": "HECTIC"
};

const Size = {
  "SMALL": "SMALL",
  "BIG": "BIG",
  "TINY": "TINY",
  "MEDIUM": "MEDIUM"
};

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const Species = {
  "DOG": "DOG",
  "CAT": "CAT",
  "BIRD": "BIRD",
  "EQUINE": "EQUINE",
  "BOVINE": "BOVINE",
  "WILD_ANIMAL": "WILD_ANIMAL"
};

const { AnimalsModel } = initSchema(schema);

export {
  AnimalsModel,
  Personality,
  Size,
  Sex,
  Species
};