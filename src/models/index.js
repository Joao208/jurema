// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Personality = {
  "CALM": "CALM",
  "CURIOUS": "CURIOUS"
};

const Size = {
  "SMALL": "SMALL",
  "BIG": "BIG"
};

const Sex = {
  "MALE": "MALE",
  "FAMALE": "FAMALE"
};

const Species = {
  "DOG": "DOG",
  "CAT": "CAT"
};

const { AnimalModel } = initSchema(schema);

export {
  AnimalModel,
  Personality,
  Size,
  Sex,
  Species
};