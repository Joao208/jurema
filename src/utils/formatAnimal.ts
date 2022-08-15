import { Storage } from 'aws-amplify'

export const formatAnimal = async <T extends { [key: string]: string }>(
  animal: T
): Promise<T | void> => {
  if (!animal) return animal

  const personality = {
    CALM: 'Calmo',
    CURIOUS: 'Curioso',
    HECTIC: 'Agitado',
  } as { [key: string]: string }

  const size = {
    SMALL: 'Pequeno',
    MEDIUM: 'Médio',
    BIG: 'Grande',
    TINY: 'Muito pequeno',
  } as { [key: string]: string }

  const sex = {
    MALE: 'Macho',
    FEMALE: 'Fêmea',
  } as { [key: string]: string }

  const species = {
    DOG: 'Cachorro',
    CAT: 'Gato',
    BIRD: 'Pássaro',
    EQUINE: 'Equino',
    BOVINE: 'Bovino',
    WILD_ANIMAL: 'Animal Silvestre',
  } as { [key: string]: string }

  const file = await Storage.get(animal.photoKey, {
    level: 'public',
  })

  return {
    ...animal,
    personality: personality[animal.personality],
    size: size[animal.size],
    sex: sex[animal.sex],
    species: species[animal.species],
    photo: file,
  }
}
