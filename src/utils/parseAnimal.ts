export const parseAnimal = (animal: any = {}) => {
  return JSON.parse(JSON.stringify(animal))
}
